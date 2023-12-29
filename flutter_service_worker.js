'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2fa85bb4586167cacbf88456c5c8dca1",
"index.html": "cb8d513aa963c2bde882c84a84328249",
"/": "cb8d513aa963c2bde882c84a84328249",
"main.dart.js": "7aebcfe1f1c4ea6b0bb06db172a39492",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a3e7c274622fef9513fd98281679dd29",
"assets/AssetManifest.json": "024dd33be46263c2f9c35d4aa9271e6f",
"assets/NOTICES": "9cdbc25b504420f7f4ae898688487454",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "0a0b97904ac5b3a88586143b73ac10bc",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/action_checkmate.png": "b9b279cb12aca593c1cab441353d8654",
"assets/assets/images/action_background.png": "982bdaa0714b1dc1a0b933994ee03ff3",
"assets/assets/images/splash.png": "0f566f2a959ee874cb619b0d0570e578",
"assets/assets/images/action_eat.png": "c39bc252c5728962f518be4ded795314",
"assets/assets/images/logo.png": "70c9458afa38a0a1efea5063759da564",
"assets/assets/skins/woods/bk.png": "b225dfa3c3c2f579d667fb2e1d928eca",
"assets/assets/skins/woods/chess_up.png": "c451f81e80be725eb7d7bf64e32fbb1f",
"assets/assets/skins/woods/bn.png": "0d706b07bdaea614ea31ed6da2e66ebb",
"assets/assets/skins/woods/config.json": "65b24e5797cc06a1dd4bbbada0d9ea2e",
"assets/assets/skins/woods/rr.png": "35832873e44e8c10d58ba1803b16d53f",
"assets/assets/skins/woods/rp.png": "aeb47df09a213463063be0c217f68f38",
"assets/assets/skins/woods/rb.png": "486be2bae26f30be74e29b0c22adcd59",
"assets/assets/skins/woods/rc.png": "0773aa0c85d4f21c4017492c3c25f138",
"assets/assets/skins/woods/ra.png": "aac946277b62e7e73bb10a68f2031efe",
"assets/assets/skins/woods/rn.png": "65b56fba874ba22248af94d13ebb1ca6",
"assets/assets/skins/woods/rk.png": "8de176a77a9084452b0d847d3d6a61d3",
"assets/assets/skins/woods/board.jpg": "b1595747af3930e1af765b79ce18399c",
"assets/assets/skins/woods/bc.png": "4a461be9e08bca878fab5cee4f5834eb",
"assets/assets/skins/woods/bb.png": "5b2c63c5e0a7e24e0b8a6bb52caa8986",
"assets/assets/skins/woods/ba.png": "03f103a0e8dc4e91a59a1731be7938cc",
"assets/assets/skins/woods/br.png": "3d1fe005cf89bc55004d09151e714a85",
"assets/assets/skins/woods/bp.png": "b23798f6a0907d62ade949aeee25adc7",
"assets/assets/sounds/win.wav": "3b90f04f72bd7c2d4bb6395e6112bf07",
"assets/assets/sounds/move.wav": "768025ca7aa144cda6a6cd8994d46583",
"assets/assets/sounds/loss.wav": "26490b3bed5a5f1e546cae80f12e6452",
"assets/assets/sounds/capture2.wav": "fbc9b12fea0e6d90173258d7d3e10b4e",
"assets/assets/sounds/draw.wav": "5c9018c1e5b865c4c3c01a55499ee837",
"assets/assets/sounds/check.wav": "05f05405965e23cb2ea1afd7141114d7",
"assets/assets/sounds/move2.wav": "ada48a396489567f0c035ecac9b0f6a6",
"assets/assets/sounds/illegal.wav": "aec0cefc838d5bfd93886a3a606f394d",
"assets/assets/sounds/capture.wav": "319a78d924d433b52fabe14982d32fb2",
"assets/assets/sounds/click.wav": "6f952bd1f1ebbcf2ae7e4afd5b688eb4",
"assets/assets/sounds/check2.wav": "7258680523dbb6e4a01ed1e37a0f4d92",
"assets/assets/sounds/newgame.wav": "ba9a4c1abd561a5158ec5b0fd4c8a7a4",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
