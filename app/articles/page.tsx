export default function ArticlesPage() {
  const articles = [
    { id: 1, title: "La fusion nucléaire : l'énergie de demain ?", cat: "Physique", date: "22 Déc 2025" },
    { id: 2, title: "Comprendre le microbiote intestinal", cat: "Biologie", date: "20 Déc 2025" },
    { id: 3, title: "L'exploration de Mars par les robots", cat: "Espace", date: "15 Déc 2025" },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <header className="max-w-4xl mx-auto mb-12">
        <a href="/" className="text-blue-600 hover:underline">← Retour à l'accueil</a>
        <h1 className="text-4xl font-bold mt-4 text-slate-900">Toutes les publications</h1>
        <p className="text-slate-500 mt-2">Explorez nos derniers articles et cours scientifiques.</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-6">
        {articles.map((art) => (
          <div key={art.id} className="p-6 border rounded-xl hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium">{art.cat}</span>
              <span className="text-slate-400">{art.date}</span>
            </div>
            <h2 className="text-xl font-bold text-slate-800">{art.title}</h2>
            <p className="text-blue-600 mt-3 font-medium">Lire l'article →</p>
          </div>
        ))}
      </main>
    </div>
  );
}