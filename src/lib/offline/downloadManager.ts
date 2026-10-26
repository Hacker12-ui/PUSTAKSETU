export interface DownloadQueueItem {
  id: string;
  packId: string;
  title: string;
  requestedAt: string;
  status: "queued" | "downloading" | "completed" | "failed";
}

const DB_NAME = "pustaksetu-offline";
const STORE_NAME = "downloadQueue";
const DB_VERSION = 1;

function getDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("IndexedDB is only available in the browser."));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("Unable to open IndexedDB."));
  });
}

export async function enqueueDownload(item: DownloadQueueItem): Promise<void> {
  const db = await getDb();
  const transaction = db.transaction(STORE_NAME, "readwrite");
  transaction.objectStore(STORE_NAME).put(item);

  await new Promise<void>((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error ?? new Error("Failed to queue download."));
  });
}

export async function listQueuedDownloads(): Promise<DownloadQueueItem[]> {
  const db = await getDb();
  const transaction = db.transaction(STORE_NAME, "readonly");
  const request = transaction.objectStore(STORE_NAME).getAll();

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve((request.result as DownloadQueueItem[]) ?? []);
    request.onerror = () => reject(request.error ?? new Error("Failed to read download queue."));
  });
}
