import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded"></div>
            </div>
            <span className="text-xl font-bold text-white">Blender Brasil</span>
          </Link>
          <div className="flex items-center gap-8">
            <Button asChild variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-700">
              <Link href="#videos">Vídeos</Link>
            </Button>
            <Button asChild variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-700">
              <Link href="#blog">Blog</Link>
            </Button>
            <Button asChild variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-700">
              <Link href="#resources">Recursos</Link>
            </Button>
            <Button asChild variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-700">
              <Link href="#contact">Contato</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
