'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c9a48c4e8b7b85b533ea2b671d05e5d8",
".git/config": "e4ed30b1570822b8270d52a6567f42e7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "69de13133f801c5a4d2a226d75d28d8b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6ff932444a3619d05f1aa2acfdf0d803",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f343f2155b3df4765dd2d1b36a2fb0bf",
".git/logs/refs/heads/main": "8adce9a2707e8d80bd1f18e3f8f75f74",
".git/logs/refs/remotes/origin/main": "7b3b155cf02adb95ed4dc19e8002e0b3",
".git/objects/02/3e1ab388e1e0d81d95d405f7ca20d1ceeacd05": "df30b6e4d69ee0b63829e1be8e27954e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/ae03d1a12f5f870c29abe4a900f346143985eb": "62363e35535020240e0ef2b3d92865a4",
".git/objects/0b/348edc45b7a0199e065ed7de1e8756fb5b42b3": "41af5566d971a9da8aab9be25eb707f3",
".git/objects/0e/6bca46c6932f279395b342e7cf75d2d4a3116f": "bdb8f7272e8c25c84c93db21b1eb2ac4",
".git/objects/0e/b6ee511b7c28885f706aac204da540076c6edc": "eb7d4b21039ebe9699da870319bef28d",
".git/objects/0f/64dde1e86ecaea9df7c867bc8a22e3808d3a9d": "d02fbc3d4b4d3b24cb632c55afc4887f",
".git/objects/13/317f4e8802d5c07a09a20fa14abe57d3b45c99": "5ca364a88f0fe8a1b3b0a428cad18c8b",
".git/objects/16/78b67d3bc177302e5a95596297ee2e2b241168": "ab4add93f03c1a51d6aa37834e670d38",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/45f014e9bb525c04c4c895d4c7662afdba09ec": "207b6e675d25bfa18ba275eda623c29e",
".git/objects/24/5c4ed75c733e141a0543b231dc0c593898adf0": "4445a824ae58a02f36e8a239a0ac7d44",
".git/objects/2b/d5407495a753b89f4b1dfcfd6035a17451d264": "fd97c5e11872f7177578882761cf1b90",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/7aca63b790c34f24129169a51a2c214f63f046": "ca908eee6f32667f28bf2bb57acd4d20",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/1ebfea064224218da1272d2e476e48fdd2f88d": "c8f6180ff97a98a07bfae92c0b7a018b",
".git/objects/4a/e1a9d2f87b4ece595ea174b331dc59b8d8e4e9": "ea6a7650192a561f18e8c4d4aa5816af",
".git/objects/4b/e34d4576f95309b5216d5fd4fe7d0f6a4048af": "251f96d3c04a1ba1689f9ff6ccab8836",
".git/objects/4c/99b32f651b19878630d79c03db1b14e643ba74": "1bd8f62d6cfa03c8263742b172ec1606",
".git/objects/51/90d004b06d92bf065b25192372656ba17e124e": "8a9894b029cc05062c80d248fc57b86e",
".git/objects/53/c357d19ea0d62534ba398c7d3146af6f88a127": "52a2ebd131b69570259502485550939c",
".git/objects/56/64dddc0949f4667c962da235ab2e006b9f5228": "0d6c193e4845f3a214aee6417f5e5a67",
".git/objects/56/6db562974bd794539e4d49b24e39d0ad491961": "6412dd47996d5dfc002d2f1b9db98459",
".git/objects/59/aabf7e652e8d2fdfb5a69636217265ba803223": "7969019a67389d6edcb21ffc2349f219",
".git/objects/5a/1d48c1c8b421b050e00fecdfae7b58712dd29e": "641869528b84b88fdb8caa8c4c7c7ee4",
".git/objects/63/094166cf2d5b48060ae8557d7d83d69269141f": "6961bd57e9e45e96e831eab7084909a7",
".git/objects/65/8ebc3393952c1ff8292189cbd07076e5f705d9": "59e30572efc126cb234a3a7564c1bf9f",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/b7a15606a89aefb3ba46b6c576c09fa679d7be": "94b1a7f62d0117e72813141cf396d4ae",
".git/objects/6d/fc2d87bcb7d67ebb6d577d581b632d3deb2ccd": "90b86d329fba7a25e47ecf6d79f67409",
".git/objects/78/0e9246aba6502c2ea5a33336967f874c68cbf0": "5b9566c64eeb333d82972c51efcbd6b4",
".git/objects/78/83b2a7a048124971fe3a4ae58413870a65a925": "b1a5a2452355591e15eef9b9af142ea1",
".git/objects/78/b78522cb89e4b3cce2d5104aa6273e9a027bf6": "78bcb727d71e0e32ff5ce66fbb74c971",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/1bd06e9464779b64469a2359ed3e1f17571390": "ba3d68ec883956203374c3b2ccce8424",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/a19250712f1bdb5481fbd953925a6ecfc506f1": "f971e803d3d8a5a80faf0c2cbafd88eb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/0518c27522db8516bb49164de62cec983f96ac": "255f673dac698e70df9830fe9a5269d1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/2720a631cd4754bc6d712cfa5c4a35b47987df": "eabdf95a436694d50de3956a329b94bf",
".git/objects/8d/de0b45c0d0a3c905231c6a58acbe28e3d6a7f0": "93d4ac052b78f6ddf79aed7bf9091f0e",
".git/objects/8e/f9c53966f95119761590149c5bdb8e47282ef5": "d9f0ce6928b03a542087100c16933064",
".git/objects/90/70e8e88da73a58d142b4b96e406c99b2458be5": "e114ba57488f405086721fc45ff5fc3e",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/f5173b7abb4ff11750a526d52214d359464609": "65993f7cd7e738538e0c7b5ee6400142",
".git/objects/94/bf333377f511d966976ead9ae1e5218bbc1d7d": "cee33fee75422cc2d57b862f3cd11b3d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/10e962549ed3b55c153fec4f41c56424522bbe": "77397bd291c8a3f5ae48051522538a0a",
".git/objects/a3/4a383c897c5c939099d594eff89d60b95cd7ec": "3ed3afdd360451fc6271b8dce9e5a63f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/0c93638ead40705ec66df5e712eb899ccd6273": "cde465319346f4ac695684e814ee0942",
".git/objects/b3/d1d672fe49cad4f30e2955819daa63fbaebc59": "2a69e7c1979c680c0bef763fdbb32528",
".git/objects/b4/727262338c2a9bf2ff168897a264220d869ec5": "0eacdc7f169c81212129ae1514ac79f9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/85431368c5355e38dc6b48f7d4ebc10f127e5d": "a9be0e4a30248e99897fb4b9bfabacc7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/4d73d89fc8b7bb8dac1e742dd332a00b7f2dff": "debcf9b5bd342b2ab7b7450d868d7922",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/af988881dac936426d2c66cb65eaa76e4644e4": "84d8dfc1648fe37b1bd599a09b6d4da4",
".git/objects/c5/5e94e1ae08e8acb84f3a03637ff80ef4173f40": "35afe13e7f5b3b2972cefae7d22f486d",
".git/objects/c6/7ad59694b2d139547d9b741848dd0a9b144430": "85b8c23375cf7c2af2d6a68b5c027de3",
".git/objects/c9/57b6dfaef4d10c6fb74e7d2d65ed55f5828420": "accb62b6bc9ebde31b768871bde1bb25",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/9a723f26521966c4c96315d1ebde61e2eb1ffa": "fe519478b96641fc79b94eadc4b2f18c",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/af0b4da6fb7f4f2d9b1f8ecb80eba4138ecdf1": "a827ab1cabed5e65c0009321dbcf41a1",
".git/objects/df/e89e38fd6dc3d1107433a6e382a7d99a2d8250": "64ad985cc7d842b3015593829b63a7b4",
".git/objects/e1/be0bc33325d0b30c8a94dd7cfb8f9c7a86e270": "83ca5913c5cd8a1597d34315d36a115e",
".git/objects/e2/4a8add85648fbb690f6c568022af6d0a375093": "ecf587eba14f23d0f6c227bdb0b84035",
".git/objects/e4/a6ec38dc7cbc8c345b721926890a675ee247ea": "95c8c312a15598fe84c896352926cb79",
".git/objects/e4/c9658c06c0ae00e1f82e89a06375282f66d6bb": "596e2babdbc90292b458cd9b71754bf9",
".git/objects/e6/2f28283ab0915551d2bf39b17ffd07f8c1a061": "98fa680285aa8b850d7ad5cbf19a1bf6",
".git/objects/e8/771b16fb83a3e8d1519e190b9c6133339d2902": "7ef30e6053b2724c03035cc5bd3d04c5",
".git/objects/e8/8bace9f1269393cb78a293ed687daed0b94808": "49412ede99c852da07b55e2420d60354",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/e9fe8cc81e73af04064c7e7961fb2a1a36c20b": "7bc02078bf0abd92fc03a865a240a652",
".git/objects/ff/4259ec3f2c2e386514aa4e58beac6c7912bd8a": "b342b202bbea65e2bd73061b92e9761e",
".git/ORIG_HEAD": "ea6b0927177573c16a709f61f27e316e",
".git/refs/heads/main": "a1d92368c261bf7e38a903bd740b5800",
".git/refs/remotes/origin/main": "a1d92368c261bf7e38a903bd740b5800",
"assets/AssetManifest.bin": "1f3ee4165eb29775e336fd13b7ad8b3c",
"assets/AssetManifest.bin.json": "aa5f6dd09820a835d071885d9f5e6e0e",
"assets/AssetManifest.json": "7fd268e35d303f9164c5fec8294a58d5",
"assets/assets/images/background.png": "94742b7b492b4678ae088f0eb5862aa7",
"assets/assets/images/background1.png": "9576c38c073c05eea734d316bb1180a4",
"assets/assets/images/background2.png": "83aeca993b60d4f2748cbb74ba59bef8",
"assets/assets/images/certificate.png": "71809e39b0d74ff1e0edd67defdde470",
"assets/assets/images/logo_dana.png": "0a9c432026f6ed8772a4a72f8f9de950",
"assets/assets/images/logo_google.png": "54658207384300cf3389de4fc876e2e5",
"assets/assets/images/regform.png": "df78cefce7d5d610a468168afd556713",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8c7a41087046618375d3fc08e059948f",
"assets/NOTICES": "7bddea435794ca402ef0e41b02549fd0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "455665410a2ca378a6fab455b2593067",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "359c3f345438c140fd5f45637eb2e454",
"/": "359c3f345438c140fd5f45637eb2e454",
"main.dart.js": "b62522090416d68d6c215c61e3ca60f9",
"manifest.json": "c015bd726f97a2996b266402fa6c32ee",
"README.md": "8da1aed766db41c6e203e55d094dd886",
"version.json": "c6b4ed9e76a4f148ac44163475c718bd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
