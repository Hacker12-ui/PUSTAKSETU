import { catalog } from "@/data/catalog";

export default function DashboardPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <header className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-2xl font-semibold text-sky-900">Student Dashboard</h1>
        <p className="mt-2 text-sm text-sky-800">
          Browse classes, subjects, chapters, and learning packs. Download queue persistence works in-browser via
          IndexedDB. Background sync and retry orchestration are still in progress.
        </p>
      </header>

      <section className="space-y-5" aria-label="Learning catalog">
        {catalog.map((schoolClass) => (
          <article key={schoolClass.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{schoolClass.name}</h2>
            <div className="mt-4 space-y-4">
              {schoolClass.subjects.map((subject) => (
                <section key={subject.id} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <h3 className="text-lg font-semibold text-slate-900">{subject.name}</h3>
                  <div className="mt-3 space-y-3">
                    {subject.chapters.map((chapter) => (
                      <article key={chapter.id} className="rounded-lg border border-slate-200 bg-white p-4">
                        <h4 className="font-semibold text-slate-900">
                          Chapter {chapter.sequence}: {chapter.title}
                        </h4>
                        <p className="mt-1 text-sm text-slate-600">{chapter.summary}</p>
                        <ul className="mt-3 space-y-2" aria-label={`${chapter.title} learning packs`}>
                          {chapter.learningPacks.map((pack) => (
                            <li
                              key={pack.id}
                              className="flex flex-col gap-2 rounded-md border border-slate-100 px-3 py-2 sm:flex-row sm:items-center sm:justify-between"
                            >
                              <div>
                                <p className="text-sm font-medium text-slate-900">{pack.title}</p>
                                <p className="text-xs text-slate-600">
                                  {pack.format} · {pack.estimatedMinutes} min · {pack.downloadSizeMb} MB
                                </p>
                              </div>
                              <span
                                className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                                  pack.isOfflineReady
                                    ? "bg-emerald-100 text-emerald-800"
                                    : "bg-amber-100 text-amber-800"
                                }`}
                              >
                                {pack.isOfflineReady ? "Offline-ready" : "Download setup pending"}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
