import { getAllPosts, getAllVideos } from "@/lib/content"
import { PostCard } from "@/components/post-card"
import { VideoCard } from "@/components/video-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Youtube, Play, Calendar, Download, Book, Palette, MapIcon as Diagram } from "lucide-react"

export default async function HomePage() {
  const posts = await getAllPosts()
  const videos = await getAllVideos()
  const recentPosts = posts.slice(0, 3)
  const recentVideos = videos.slice(0, 3)
  // Simple flag to show/hide videos section
  const showVideos = false // Change to true when you have videos
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-800 py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Aprenda Blender e<br />
                Animação 3D
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Tutoriais em português, dicas profissionais e projetos práticos para dominar a arte da modelagem 3D e
                animação com Blender.
              </p>
              <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
                <Link href="https://youtube.com" target="_blank">
                  <Youtube className="w-5 h-5 mr-2" />
                  Inscreva-se no Canal
                </Link>
              </Button>
            </div>
            <div className="relative">
              <svg viewBox="0 0 500 300" className="w-full h-auto">
                <path d="M50,150 Q150,50 250,150 T450,150" stroke="#ef4444" strokeWidth="3" fill="none" opacity="0.6" />
                <circle cx="150" cy="120" r="20" fill="#ef4444" opacity="0.8" />
                <circle cx="350" cy="180" r="25" fill="#6366f1" opacity="0.8" />
                <polygon points="400,80 450,130 400,180" fill="#f8fafc" opacity="0.5" />
                <path d="M100,200 Q200,250 300,200" stroke="#6366f1" strokeWidth="2" fill="none" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Videos Section */}
      {showVideos && (
        <section id="videos" className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Últimos Vídeos</h2>
              <p className="text-xl text-slate-600">Tutoriais recentes para você aprender Blender</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentVideos.length > 0 ? (
                recentVideos.map((video) => <VideoCard key={video.slug} video={video} />)
              ) : (
                <>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-video bg-slate-200 flex items-center justify-center relative group">
                      <Play className="w-16 h-16 text-slate-400 group-hover:text-red-500 transition-colors" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Introdução ao Modeling no Blender 3.0</h3>
                      <div className="flex items-center text-sm text-slate-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        Publicado em: 15/07/2023
                      </div>
                      <p className="text-slate-600">Aprenda as técnicas básicas de modelagem 3D para iniciantes.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-video bg-slate-200 flex items-center justify-center relative group">
                      <Play className="w-16 h-16 text-slate-400 group-hover:text-red-500 transition-colors" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Animando Personagens com Rigging</h3>
                      <div className="flex items-center text-sm text-slate-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        Publicado em: 08/07/2023
                      </div>
                      <p className="text-slate-600">Crie rigs profissionais para animação de personagens.</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-video bg-slate-200 flex items-center justify-center relative group">
                      <Play className="w-16 h-16 text-slate-400 group-hover:text-red-500 transition-colors" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Iluminação Realista com Cycles</h3>
                      <div className="flex items-center text-sm text-slate-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        Publicado em: 01/07/2023
                      </div>
                      <p className="text-slate-600">Domine técnicas de iluminação para renders fotorealistas.</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}
      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Artigos do Blog</h2>
            <p className="text-xl text-slate-600">Dicas, tutoriais e insights sobre Blender e animação 3D</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.length > 0 ? (
              recentPosts.map((post) => <PostCard key={post.slug} post={post} />)
            ) : (
              <>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-white rounded"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <span>20 Jul, 2023</span>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Modelagem</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      5 Técnicas Essenciais de Modelagem Hard Surface
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Descubra como criar objetos mecânicos detalhados e realistas usando técnicas avançadas de
                      modelagem hard surface no Blender.
                    </p>
                    <Link href="#" className="text-red-600 hover:text-red-700 font-medium">
                      Leia mais →
                    </Link>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <span>12 Jul, 2023</span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Renderização</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Dominando a Iluminação com HDRI no Cycles
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Aprenda a utilizar mapas HDRI para criar iluminações realistas e como ajustar os parâmetros para
                      diferentes situações de render.
                    </p>
                    <Link href="#" className="text-red-600 hover:text-red-700 font-medium">
                      Leia mais →
                    </Link>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded"></div>
                      <div className="w-4 h-4 bg-white/60 rounded ml-2"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <span>5 Jul, 2023</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Animação</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Rigging Avançado para Personagens Humanos
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Guia completo para criar sistemas de rigging flexíveis e eficientes para personagens humanos com
                      expressões faciais realistas.
                    </p>
                    <Link href="#" className="text-red-600 hover:text-red-700 font-medium">
                      Leia mais →
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-red-500 text-red-600 hover:bg-red-50 bg-transparent"
            >
              <Link href="/posts">Ver Todos os Artigos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Sobre o Canal</h2>
            <p className="text-xl text-slate-600">Conheça nossa missão e conteúdo</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                Olá! Sou Vinicius Chagas, artista 3D e instrutor com mais de 5 anos de experiência em Blender, animação
                e efeitos visuais.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Criei este canal para compartilhar meu conhecimento em português e ajudar a comunidade brasileira a
                dominar essas ferramentas incríveis.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Nosso conteúdo abrange desde conceitos básicos para iniciantes até técnicas avançadas para
                profissionais, sempre com foco na aplicação prática.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Aqui você encontrará tutoriais, dicas de workflow, análises de projetos e muito mais para evoluir suas
                habilidades em 3D.
              </p>
              <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                <Link href="#contact">Entre em Contato</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-red-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Recursos Gratuitos</h2>
            <p className="text-xl text-slate-600">Materiais para ajudar em sua jornada 3D</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Modelos 3D</h3>
              <p className="text-slate-600">Coleção de modelos gratuitos para usar em seus projetos e estudos.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Book className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">E-books</h3>
              <p className="text-slate-600">Guias práticos sobre texturização, iluminação e animação no Blender.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Texturas e Materiais</h3>
              <p className="text-slate-600">Biblioteca de texturas PBR e setups de materiais prontos para uso.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Diagram className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Projetos Completos</h3>
              <p className="text-slate-600">Arquivos fonte de projetos completos para estudo e análise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Entre em Contato</h2>
            <p className="text-xl text-slate-600">Tem dúvidas ou sugestões? Fale conosco!</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-red-600 rounded"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Email</h3>
                  <p className="text-slate-600">contato@blenderbrasil.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Youtube className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">YouTube</h3>
                  <p className="text-slate-600">youtube.com/BlenderBrasil</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Comunidade</h3>
                  <p className="text-slate-600">Entre no nosso Discord para tirar dúvidas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
