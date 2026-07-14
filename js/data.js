/* ==========================================================
   DATA.JS
   Semua "sumber data" website: daftar halaman/menu, kategori,
   produk, dan pesan ticker. File lain (nav.js, products.js,
   cart.js, wishlist.js, account.js) memakai variabel di file ini.
   Karena semua file dimuat sebagai <script> biasa (bukan module),
   variabel di sini otomatis bisa diakses dari file JS lain.
   ========================================================== */

/* ——— MENU HALAMAN ——— */
const PAGES = [
  { id:'beranda',  name:'Beranda',  e:'🏠' },
  { id:'belanja',  name:'Belanja',  e:'🛍️' },
  { id:'kategori', name:'Kategori', e:'🗂️' },
  { id:'favorit',  name:'Favorit',  e:'❤️' },
  { id:'tentang',  name:'Tentang',  e:'ℹ️' },
];

const TICKER_MSG = ['🔥 DISKON GILA SAMPAI 70%','🚚 GRATIS ONGKIR MIN. 100RB','⚡ FLASH SALE TIAP HARI','🔒 BAYAR AMAN 100%','↩️ RETUR 7 HARI NO RIBET'];

const CATS = [
  { id:'semua',      name:'Semua',      e:'shop' },
  { id:'fashion',    name:'Fashion',    e:'handbag',   img:'img/kategori/fashion.jpeg' },
  { id:'elektronik', name:'Elektronik', e:'laptop',    img:'img/kategori/elektronik.jpeg' },
  { id:'makanan',    name:'Makanan',    e:'egg-fried', img:'img/kategori/makanan.jpeg' },
  { id:'kecantikan', name:'Kecantikan', e:'droplet',   img:'img/kategori/kecantikan.jpeg' },
  { id:'olahraga',   name:'Olahraga',   e:'trophy',    img:'img/kategori/olahraga.jpeg' },
  { id:'rumah',      name:'Rumah',      e:'house-door',img:'img/kategori/rumah.jpeg' },
  { id:'buku',       name:'Buku',       e:'book',      img:'img/kategori/buku.jpeg' },
];

const PRODS = [
  { id:1, name:'Kamera Mirrorless Sony A9', cat:'elektronik', price:28999000, was:31999000, r:4.9, rv:728, img:'img/elektronik/a9camera.jpeg', label:'disc' },
  { id:2, name:'Kamera Digital Compact', cat:'elektronik', price:799000, was:0, r:4.6, rv:241, img:'img/elektronik/camera.jpeg', label:'disc' },
  { id:3, name:'NOKIA', cat:'elektronik', price:26898000, was:0, r:4.2, rv:178, img:'img/elektronik/nokia.jpeg', label:'' },
  { id:4, name:'Samsung Galaxy S24 Ultra', cat:'elektronik', price:16999000, was:20999000, r:4.8, rv:289, img:'img/elektronik/samsung s24 ulltra.jpeg', label:'disc' },
  { id:5, name:'Samsung Galaxy S25', cat:'elektronik', price:13999000, was:0, r:4.7, rv:156, img:'img/elektronik/samsung s25.jpeg', label:'new' },
  { id:6, name:'Kamera Aksi (Action Cam)', cat:'elektronik', price:1799000, was:1200000, r:4.4, rv:267, img:'img/elektronik/sport camera.jpeg', label:'disc' },
  { id:7, name:'Teropong Binocular', cat:'elektronik', price:459000, was:0, r:4.3, rv:98, img:'img/elektronik/teropong.jpeg', label:'' },
  { id:8, name:'Tripod Mini', cat:'elektronik', price:699000, was:60000, r:4.3, rv:156, img:'img/elektronik/tripot2.jpeg', label:'disc' },
  { id:9, name:'Headphone Wireless', cat:'elektronik', price:199000, was:599000, r:4.6, rv:567, img:'img/elektronik/wireles.jpeg', label:'disc' },
  { id:10, name:'HP Xiaomi', cat:'elektronik', price:2799000, was:2899000, r:4.6, rv:456, img:'img/elektronik/xiami.jpeg', label:'disc' },
  { id:11, name:'Mie Instan', cat:'makanan', price:3500, was:0, r:4.5, rv:890, img:'img/makanan/mie.jpeg', label:'' },
  { id:12, name:'Mie Bubble Cup', cat:'makanan', price:7500, was:8500, r:4.3, rv:234, img:'img/makanan/mie2.jpeg', label:'disc' },
  { id:13, name:'Minuman Susu Kotak', cat:'makanan', price:6000, was:0, r:4.4, rv:234, img:'img/makanan/minum.jpeg', label:'' },
  { id:14, name:'Minyak Goreng', cat:'makanan', price:32000, was:0, r:4.6, rv:345, img:'img/makanan/minyak.jpeg', label:'' },
  { id:15, name:'Nugget Ayam Beku', cat:'makanan', price:28000, was:32000, r:4.6, rv:456, img:'img/makanan/naget.jpeg', label:'disc' },
  { id:16, name:'Oreo Biskuit', cat:'makanan', price:9000, was:0, r:4.7, rv:890, img:'img/makanan/oreo.jpeg', label:'' },
  { id:17, name:'Pasta / Spageti Kering', cat:'makanan', price:22000, was:0, r:4.5, rv:234, img:'img/makanan/pasta.jpeg', label:'' },
  { id:18, name:'Roti Tawar', cat:'makanan', price:15000, was:0, r:4.5, rv:345, img:'img/makanan/roti.jpeg', label:'' },
  { id:19, name:'Sosis Ayam/Sapi', cat:'makanan', price:24000, was:0, r:4.5, rv:345, img:'img/makanan/sosis.jpeg', label:'' },
  { id:20, name:'Tteokbokki Instan', cat:'makanan', price:19000, was:22000, r:4.6, rv:289, img:'img/makanan/topoki.jpeg', label:'disc' },
  { id:21, name:'Yopokki Rice Cake', cat:'makanan', price:17000, was:0, r:4.5, rv:234, img:'img/makanan/yopoki.jpeg', label:'new' },
  { id:22, name:'Eyeliner', cat:'kecantikan', price:35000, was:45000, r:4.5, rv:345, img:'img/makeup/ayeliner.jpeg', label:'disc' },
  { id:23, name:'Blush On Salsa', cat:'kecantikan', price:55000, was:0, r:4.6, rv:189, img:'img/makeup/blass salsa.jpeg', label:'new' },
  { id:24, name:'Blush On', cat:'kecantikan', price:45000, was:0, r:4.5, rv:234, img:'img/makeup/blass.jpeg', label:'' },
  { id:25, name:'Contour Palette', cat:'kecantikan', price:68000, was:78000, r:4.6, rv:234, img:'img/makeup/contur1.jpeg', label:'disc' },
  { id:26, name:'Foundation', cat:'kecantikan', price:75000, was:89000, r:4.5, rv:456, img:'img/makeup/foundetion.jpeg', label:'disc' },
  { id:27, name:'Lip Cream G2G', cat:'kecantikan', price:35000, was:0, r:4.7, rv:567, img:'img/makeup/g2g.jpeg', label:'' },
  { id:28, name:'Lip Cream', cat:'kecantikan', price:38000, was:45000, r:4.5, rv:345, img:'img/makeup/lip1.jpeg', label:'disc' },
  { id:29, name:'Paket Makeup', cat:'kecantikan', price:150000, was:0, r:4.5, rv:234, img:'img/makeup/makeup.jpeg', label:'' },
  { id:30, name:'Maskara', cat:'kecantikan', price:55000, was:0, r:4.5, rv:345, img:'img/makeup/maskara.jpeg', label:'' },
  { id:31, name:'Set Makeup Lengkap', cat:'kecantikan', price:250000, was:300000, r:4.6, rv:456, img:'img/makeup/set makeup.jpeg', label:'disc' },
  { id:32, name:'Buku Aimilo', cat:'buku', price:65000, was:0, r:4.4, rv:123, img:'img/buku/aimilo.jpeg', label:'' },
  { id:33, name:'Novel Fiksi', cat:'buku', price:89000, was:0, r:4.9, rv:789, img:'img/buku/book1.jpeg', label:'new' },
  { id:34, name:'Buku Pelajaran', cat:'buku', price:75000, was:0, r:4.5, rv:234, img:'img/buku/book2.jpeg', label:'' },
  { id:35, name:'Novel Terjemahan', cat:'buku', price:95000, was:110000, r:4.6, rv:345, img:'img/buku/book3.jpeg', label:'disc' },
  { id:36, name:'Buku Cerita Anak', cat:'buku', price:55000, was:0, r:4.5, rv:456, img:'img/buku/book4.jpeg', label:'' },
  { id:37, name:'Komik', cat:'buku', price:45000, was:0, r:4.7, rv:567, img:'img/buku/book5.jpeg', label:'' },
  { id:38, name:'Buku Motivasi', cat:'buku', price:85000, was:99000, r:4.6, rv:289, img:'img/buku/book6.jpeg', label:'disc' },
  { id:39, name:'Buku Resep', cat:'buku', price:68000, was:0, r:4.5, rv:178, img:'img/buku/book7.jpeg', label:'' },
  { id:40, name:'Buku Agama', cat:'buku', price:60000, was:0, r:4.6, rv:234, img:'img/buku/book8.jpeg', label:'' },
  { id:41, name:'Ensiklopedia', cat:'buku', price:150000, was:175000, r:4.7, rv:156, img:'img/buku/book9.jpeg', label:'disc' },
  { id:42, name:'Buku Gambar', cat:'buku', price:18000, was:0, r:4.4, rv:234, img:'img/buku/buku gambar.jpeg', label:'' },
  { id:43, name:'Buku Tulis', cat:'buku', price:12000, was:0, r:4.3, rv:345, img:'img/buku/buku tulis.jpeg', label:'' },
  { id:44, name:'Notebook / Buku Catatan', cat:'buku', price:25000, was:30000, r:4.5, rv:267, img:'img/buku/notebook.jpeg', label:'disc' },
  { id:45, name:'Notes A5', cat:'buku', price:22000, was:0, r:4.4, rv:189, img:'img/buku/notes A5.jpeg', label:'new' },
  { id:46, name:'Sketchbook', cat:'buku', price:35000, was:40000, r:4.6, rv:234, img:'img/buku/sketbook.jpeg', label:'disc' },
  { id:47, name:'Kemeja Casual Pria', cat:'fashion', price:129000, was:159000, r:4.5, rv:234, img:'img/fashion/baju.jpeg', label:'disc' },
  { id:48, name:'Kaos Polos Unisex', cat:'fashion', price:65000, was:0, r:4.4, rv:456, img:'img/fashion/baju1.jpeg', label:'' },
  { id:49, name:'Dress Wanita Casual', cat:'fashion', price:149000, was:179000, r:4.6, rv:289, img:'img/fashion/baju2.jpeg', label:'disc' },
  { id:50, name:'Blouse Wanita', cat:'fashion', price:89000, was:0, r:4.5, rv:345, img:'img/fashion/baju3.jpeg', label:'new' },
  { id:51, name:'Celana Jeans Pria', cat:'fashion', price:175000, was:199000, r:4.6, rv:267, img:'img/fashion/baju4.jpeg', label:'disc' },
  { id:52, name:'Rok Wanita', cat:'fashion', price:95000, was:0, r:4.4, rv:178, img:'img/fashion/baju5.jpeg', label:'' },
  { id:53, name:'Jaket Denim', cat:'fashion', price:210000, was:250000, r:4.7, rv:234, img:'img/fashion/baju6.jpeg', label:'disc' },
  { id:54, name:'Sweater Rajut', cat:'fashion', price:125000, was:0, r:4.5, rv:189, img:'img/fashion/baju7.jpeg', label:'new' },
  { id:55, name:'Kemeja Flanel', cat:'fashion', price:115000, was:135000, r:4.4, rv:156, img:'img/fashion/baju8.jpeg', label:'disc' },
  { id:56, name:'Outer Cardigan', cat:'fashion', price:139000, was:0, r:4.6, rv:145, img:'img/fashion/baju9.jpeg', label:'' },
  { id:57, name:'Kaos Olahraga Pria', cat:'olahraga', price:75000, was:0, r:4.5, rv:234, img:'img/olahraga/baju0.jpeg', label:'' },
  { id:58, name:'Setelan Olahraga Wanita', cat:'olahraga', price:165000, was:195000, r:4.6, rv:289, img:'img/olahraga/bajuolahraga.jpeg', label:'disc' },
  { id:59, name:'Jersey Training', cat:'olahraga', price:145000, was:0, r:4.5, rv:178, img:'img/olahraga/bajuolahraga2.jpeg', label:'new' },
  { id:60, name:'Dumbbell Set', cat:'olahraga', price:250000, was:299000, r:4.6, rv:345, img:'img/olahraga/beban.jpeg', label:'disc' },
  { id:61, name:'Jersey Bola Original', cat:'olahraga', price:249000, was:0, r:4.7, rv:456, img:'img/olahraga/jersey.jpeg', label:'' },
  { id:62, name:'Jersey Basket', cat:'olahraga', price:199000, was:229000, r:4.5, rv:234, img:'img/olahraga/jersey1.jpeg', label:'disc' },
  { id:63, name:'Sepatu Lari', cat:'olahraga', price:349000, was:399000, r:4.7, rv:567, img:'img/olahraga/sepatu.jpeg', label:'disc' },
  { id:64, name:'Sepatu Futsal', cat:'olahraga', price:299000, was:0, r:4.6, rv:345, img:'img/olahraga/sepatu1.jpeg', label:'new' },
  { id:65, name:'Sepatu Basket', cat:'olahraga', price:459000, was:499000, r:4.6, rv:289, img:'img/olahraga/sepatu2.jpeg', label:'disc' },
  { id:66, name:'Skipping Rope / Tali Lompat', cat:'olahraga', price:35000, was:0, r:4.4, rv:234, img:'img/olahraga/skiping.jpeg', label:'' },
  { id:67, name:'Skuter/Scooter Anak', cat:'olahraga', price:450000, was:520000, r:4.5, rv:178, img:'img/olahraga/skuter.jpeg', label:'disc' },
  { id:68, name:'Cup/Gelas Plastik Set', cat:'rumah', price:25000, was:0, r:4.4, rv:234, img:'img/rumah/cup.jpeg', label:'' },
  { id:69, name:'Cup Melamin Motif', cat:'rumah', price:30000, was:35000, r:4.3, rv:189, img:'img/rumah/cup1.jpeg', label:'disc' },
  { id:70, name:'Gelas Kaca Set', cat:'rumah', price:45000, was:0, r:4.5, rv:267, img:'img/rumah/cup2.jpeg', label:'new' },
  { id:71, name:'Gantungan Dinding Multifungsi', cat:'rumah', price:28000, was:0, r:4.4, rv:145, img:'img/rumah/gantungan.jpeg', label:'' },
  { id:72, name:'Gelas Keramik', cat:'rumah', price:22000, was:26000, r:4.5, rv:234, img:'img/rumah/gelas.jpeg', label:'disc' },
  { id:73, name:'Meja Rias Minimalis', cat:'rumah', price:750000, was:850000, r:4.6, rv:156, img:'img/rumah/mejarias.jpeg', label:'disc' },
  { id:74, name:'Set Piring Melamin', cat:'rumah', price:65000, was:0, r:4.5, rv:289, img:'img/rumah/piring.jpeg', label:'' },
  { id:75, name:'Piring Motif Lucu', cat:'rumah', price:35000, was:42000, r:4.6, rv:234, img:'img/rumah/piringlucu.jpeg', label:'disc' },
  { id:76, name:'Set Pisau Dapur', cat:'rumah', price:55000, was:0, r:4.4, rv:178, img:'img/rumah/pisau.jpeg', label:'new' },
  { id:77, name:'Dispenser/Tempat Air', cat:'rumah', price:120000, was:145000, r:4.5, rv:234, img:'img/rumah/tempatair.jpeg', label:'disc' },
];

/* ——— HELPER FORMAT (dipakai products.js & cart.js) ——— */
const fmt = n => 'Rp ' + n.toLocaleString('id-ID');
const disc = (w,p) => w ? Math.round((1-p/w)*100) : 0;

/* ——— STATE GLOBAL (dipakai hampir semua file) ——— */
let cart = [], wishlist = [], activeCat = 'semua', shown = 8, list = [...PRODS];
let currentUser = null, nextProdId = 78;
let currentPage = 'beranda';
const ADMIN_PASS = 'admin123';
