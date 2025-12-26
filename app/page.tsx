import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Note : On a supprimé la balise <nav> ici 
          car elle est déjà gérée par layout.tsx 
      */}

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 mb-6 italic">
          Démocratiser le savoir <span className="text-blue-600 not-italic">Scientifique</span>
        </h1>
        <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
          Explorez nos articles de vulgarisation et nos cours approfondis pour comprendre le monde qui nous entoure.
        </p>
        
        {/* Grille d'articles */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          
          {/* Article 1 : Le vrai lien vers ton article */}
          <Link href="/blog/premier-article" className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all">
            <span className="text-blue-600 font-bold uppercase text-xs tracking-wider">Vulgarisation</span>
            <h2 className="text-2xl font-bold mt-2 group-hover:text-blue-600 transition-colors">
              L'IA et la Recherche Médicale
            </h2>
            <p className="mt-4 text-slate-500 line-clamp-2">
              Comment les nouveaux modèles de langage transforment notre quotidien et la recherche scientifique.
            </p>
            <div className="mt-6 font-semibold text-blue-700 flex items-center">
              Lire l'article <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </Link>

          {/* Article 2 : Démo */}
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 opacity-80">
            <span className="text-emerald-600 font-bold uppercase text-xs tracking-wider">Cours</span>
            <h2 className="text-2xl font-bold mt-2 text-slate-400">Bio-informatique (Bientôt)</h2>
            <p className="mt-4 text-slate-400">Un cours complet pour débutants sur l'analyse des séquences ADN.</p>
            <div className="mt-6 font-semibold text-slate-300">Prochainement</div>
          </div>

        </div>
      </main>
    </div>
  );
}