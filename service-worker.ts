import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst, NetworkFirst } from "workbox-strategies";

precacheAndRoute([
    { url: "/index.html", revision: null },
    { url: "/index.css" },
    { url: "/index.js" },
]);

registerRoute(
    ({ request }) => { return request.destination === "image" },
    new CacheFirst({ cacheName: 'images-cache' })
);

registerRoute(
    ({url}) => {return url.hostname === "catfact.ninja"},
    new NetworkFirst({ cacheName: 'cat-facts' })
)