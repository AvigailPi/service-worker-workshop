//precaching
import { precacheAndRoute } from "workbox-precaching";
//live caching
import { registerRoute } from "workbox-routing";
import { CacheFirst, NetworkFirst, CacheOnly, NetworkOnly, StaleWhileRevalidate } from "workbox-strategies";