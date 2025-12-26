import PremierArticle, { metadata } from "@/articles-data/PremierArticle";

export default async function PostPage() {
  // Pour l'instant, on affiche directement notre article pour valider que ça marche
  // ... (imports restants)
return (
  <article className="max-w-4xl mx-auto py-12 px-6">
    <header className="mb-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
        {metadata.title}
      </h1>
      <p className="text-slate-500 mt-4 font-medium uppercase text-sm tracking-widest">
        Publié le {metadata.date}
      </p>
      <div className="h-1 w-20 bg-blue-500 mt-6"></div> {/* Petite barre décorative */}
    </header>

    {/* La classe "prose" rend le texte scientifique élégant */}
    <div className="prose prose-slate lg:prose-xl max-w-none text-slate-800">
      <PremierArticle />
    </div>
  </article>
  );
}