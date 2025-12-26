import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-900 tracking-tighter">
          SCIENCE<span className="text-blue-500">APP</span>
        </Link>
        
        <div className="flex gap-8 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
          <Link href="/blog/premier-article" className="hover:text-blue-600 transition-colors">Articles</Link>
          <a href="#" className="hover:text-blue-600 transition-colors">À propos</a>
        </div>
      </div>
    </nav>
  );
}