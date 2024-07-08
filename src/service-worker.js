self.addEventListener("install", event => {
  console.log("Service Worker installing.");
  // Put code here to add resources to the cache.
});

self.addEventListener("activate", event => {
  console.log("Service Worker activating.");
  // Put code here to clean up old caches.
});

self.addEventListener("fetch", event => {
  console.log("Fetching:", event.request.url);
  // Put code here to handle fetch events.
});
