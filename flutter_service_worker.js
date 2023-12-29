'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2fa85bb4586167cacbf88456c5c8dca1",
"index.html": "2be27e7cc02ef471484b25ca73dc04c2",
"/": "2be27e7cc02ef471484b25ca73dc04c2",
"main.dart.js": "e471fc790c614aeecbacd66a100c82fe",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a3e7c274622fef9513fd98281679dd29",
".git/config": "e31bb85733b9ba1e9238dc628a3cfb80",
".git/objects/0d/40a6812c35db788875289e0ad575ad22e045a7": "2920b01821d23060b3ae2b7c2d62f441",
".git/objects/59/f1d0064adb1e9b696e5d98fc5aba840a22d544": "ec0dbb207b1a494a6808963920c92ed8",
".git/objects/92/a437ff92f72d7612b04f0a318a39c89034209a": "095e7e5502bb711458a4e74b1b6c5c53",
".git/objects/0c/53c118852a2870c845162ce2a17821b6dab4f3": "203453c1cc2195466a0a9c903212283a",
".git/objects/66/b299fcf76be7c7084d0e48a0c2fb9fb48fe286": "a503dac43b8b24aa2a457547ade80643",
".git/objects/3e/2607d7fef6196819b45436597731218ddf3004": "70d6d3099500b962ea0893e50840901c",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/c45e69557f642abf1eff9e84f758683b20a75a": "f2fb8c50667bda974da2a5adb1669f76",
".git/objects/94/c1e69a4266dd90040c1c8e497df373455b34a6": "4eaef70e34d0b79bf233ce286604e579",
".git/objects/5a/ce3db389ebce6f7d5aba7b262af1589cce41fd": "04c15eec7c9fa326481bb50e23754377",
".git/objects/05/f2043c62dfa4a0f1ce4b1fccdcb21a67001c94": "6923360c6a3bc3e88b2ea056e007c61c",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a4/2b8a4585584ddf9000afcca2b62ddaa6a4e834": "a0dc899157b49e87a16704b89561fcc5",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/447abbda4ffb5ca101e02c6c74c602976694e7": "caf56b8555ff46ca5a5c6cf24f392849",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/9daa40b70a0476ef0598ceb01b682d05ec925a": "c4c37f5a97f8308b0cf5ea956179b8eb",
".git/objects/eb/84cf0165a48a341c1afd56ded9b093b23dabfb": "9a6f127d1db1c9dc88d4f401e1468852",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/deeb56a740fcc25f7a127bac1afa0f1368ce87": "f2de7130f812adf2991730d9c0e5c2a8",
".git/objects/c0/470d4b3e5441c08405687e117466d693c8049c": "e4180d0d5e8f8758ba217f970449ecdb",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/20/f490a0c9dc3cad9bf5a61964c39b10a82c5596": "c3f38a6cb8c571c955c09301e3f82642",
".git/objects/27/1270d33a17b6fdf7cf57a5d18548c97074cdf0": "f8ace633bf5c64210c3223243ec2378d",
".git/objects/29/1712438c428fd7ed77c5a1c748b2d70b005bb0": "e0ec08050510a139c69fc0e52fcd54be",
".git/objects/7c/07ea7ca8f9a757b5f75fb6d1c98e01391e29b5": "2fdf8cc90a5353172d26eb455fbd9708",
".git/objects/7c/e6458b00fc404f1730558e444afaa9351b93cf": "9d50e18349f2d959a08922d8036e3c19",
".git/objects/16/3bee6494db9936e571d1f6ddeab98dce79894e": "55db18543f258a3f7f6341e8162dcd9b",
".git/objects/42/dafb614e159d5fb0680d208a35e0f2e67c348c": "9381df7d8f388b983ee9e8a76db5c19d",
".git/objects/28/59ab10fbc8ce3621effb3570ec56d3584cdcb2": "82ddfbfcb13b9edded8113526686a13c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/7e/87b6aa151f7e5b9e52b6b6ed3f3a0a659bc910": "a57ee33a564f28cd939fa0f8b960ab16",
".git/objects/19/09ccceee9e1846061acd402251ba9ff35012bf": "497ae09d97b502dbdc328915a94b196c",
".git/objects/75/5816bb3e7d53c8c1d2eac9d5066a5643a3109b": "e94c69550dea7f990cabbe8c6e48974d",
".git/objects/2a/d3af089a5ce45d0f786639ae0ad1e54f0d9631": "898e5611490929980414c6eaa4fe11eb",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/942a988c70290408af18480e4ccb35b1599ba7": "dd0120959d79692ade5be77e713dc2c8",
".git/objects/5c/bcf693c21d4b8167282ce76aa177010afeb4e2": "2454b593f343240b5356f03348ad6eec",
".git/objects/31/3815fb9c140df57e4c4e1cc123fc6d665ee6c4": "80a8b1b86f95892d300b60301ab1834b",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/37/d8583ae4d2c29d00cdab2e2a3c626dbfc429c5": "47724b2f8771028b90fa6a730158cdbf",
".git/objects/01/16112b9ac3ba2702724e2095a8e74c597a72e3": "4f5fb9ec7274b83ba98f796f935e70c7",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/99/d648b9c1c4ba350b6b62237e0db15e2b03a25c": "6de26e2f1cb685d4a3e7cd81f2a39b9b",
".git/objects/97/56b916125c8e4f91706c2a89f5b4bd92937154": "8b55f111fe1ab3d525448179402b7ba8",
".git/objects/64/a1f7ded74fc160d011b7f9c4e64800840821a1": "4589562c3ee0e0a4ecc1a87cb659d2d3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/4d895f8132784d4cb5acedf858f840a1d748a5": "6c3ebc9a214f4c676cececa0c38a781b",
".git/objects/a0/c31da0de33cecfe866fd326b50e2f7f5bc762a": "5f6efbcb1e733bc12dd3651a35ccf537",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d2/639033cae9ef098f50759f31b7334aa9d63282": "7413a324692f6e0ef717ca904708e1e2",
".git/objects/aa/eeb5f41835dd3ad43f791499c21c032e95cc74": "06ae1242fde4078e1da7def1000ead00",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/d9963f22d5116adc0844fc4a36fc738088da43": "c76719fd8adc1e38e77183bb36d4d6af",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/39a8bef0acdb54bb62a1bbaadfaef17d11dcdd": "cc8afc946c72f7671e14f55476655e68",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/ce/1a5133d2ef46bb73766b9499870706ea95f36e": "c363e0084662e5a66730b42cd24ee1d3",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/c60dd4f7a355e45df2fa0181840d23669086c2": "7eff044cfe48581a9c885fe813ca6712",
".git/objects/83/f9c00ca19a29178802fb194ea4c9ec7f7bfa06": "34c761e85b597d1292ac6d5e198ae3e0",
".git/objects/48/2bd268eea75f55da40feb80fd3d5fcd08484d1": "e956f6193735f8a824ba9021219dac0e",
".git/objects/23/ec4e2f6134fe4f1a06efac17e2df6e398795b2": "4d446a1b5760dafaad0a79bd5f061f95",
".git/objects/8c/3519ee5bb69c2acb700cd48f513c018b3cc2ba": "84dc666f1f66e90ee5f3350ece329337",
".git/objects/8c/5b8c4b45fd2250cea8c5c4ec1ba5813d42f181": "4ef0e4f5edac4d2b175828cf03ede86b",
".git/objects/7f/d265ba294c5bbc1e28a6458ea366e640ba0546": "2767b0e025760c47694e9d0dca81de30",
".git/objects/22/bb3732758f5b0ff2bd86cd0cdef550d29c89ba": "fd8d09aba9b60f735999738417eb5581",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1812746a96507a63373d04286f86e478",
".git/logs/refs/heads/main": "2c33eccda721506f66c947ec07d5b36f",
".git/logs/refs/remotes/origin/main": "116f2eedeb3485506bd8a4138dea351d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bc1932941b4518e7b574f88e84354316",
".git/refs/remotes/origin/main": "bc1932941b4518e7b574f88e84354316",
".git/index": "25c72502010b9056065c63764174b127",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "aba3ef2b1fb416e3222a623c42eee4d5",
"assets/NOTICES": "9cdbc25b504420f7f4ae898688487454",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2129c83a779332c51d74424d36bf7fdf",
"assets/fonts/MaterialIcons-Regular.otf": "09a8f4521027dab70290da33bf838b45",
"assets/assets/images/action_checkmate.png": "b9b279cb12aca593c1cab441353d8654",
"assets/assets/images/action_background.png": "982bdaa0714b1dc1a0b933994ee03ff3",
"assets/assets/images/hinh.jpg": "bdb37741f7fca134bd2fc5c14e3a3ee8",
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
