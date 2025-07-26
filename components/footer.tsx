import { Youtube, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border border-white rounded"></div>
              </div>
              <span className="text-xl font-bold text-white">Blender Brasil</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Canal educativo dedicado ao ensino de Blender, modelagem 3D e animação para a comunidade brasileira.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#videos" className="hover:text-white transition-colors">
                  Vídeos
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Modelagem 3D
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Texturização
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Iluminação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Animação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Simulações
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center">
          <p>&copy; 2025 Blender Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
