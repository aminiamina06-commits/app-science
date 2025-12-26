import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
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
          
          {/* Article 1 : Article de blog */}
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

          {/* Article 2 : Téléchargement du cours PDF */}
          <div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all">
            <span className="text-emerald-600 font-bold uppercase text-xs tracking-wider">Cours</span>
            <h2 className="text-2xl font-bold mt-2 group-hover:text-emerald-600 transition-colors">
              Bio-informatique : Le Guide
            </h2>
            <p className="mt-4 text-slate-500">
              Téléchargez le cours complet sur l'analyse des séquences ADN au format PDF.
            </p>
            
            {/* Bouton de téléchargement */}
            <a 
              href="/cours.pdf" 
              download="cours_science.pdf" 
              className="mt-6 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Télécharger (PDF)
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}