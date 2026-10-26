"use client";

import { useEffect } from "react";

export function OfflineBootstrap() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    void navigator.serviceWorker.register("/service-worker.js");
  }, []);

  return null;
}
