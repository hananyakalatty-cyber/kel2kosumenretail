/* ==========================================================
   MAIN.JS
   Titik masuk (entry point) website. File ini dimuat PALING
   TERAKHIR di index.html, setelah semua file lain (data, toast,
   nav, products, cart, wishlist, account) siap. Tugasnya cuma
   memanggil fungsi render awal supaya tampilan pertama kali
   dibuka sudah lengkap dan semua bagian saling terhubung.
   ========================================================== */

document.getElementById('q').onkeydown = e => e.key==='Enter' && doSearch();

renderTicker();      // nav.js
renderMenuBar();      // nav.js
renderCatGrids();     // nav.js
renderPills();        // products.js
renderProds();        // products.js
renderHomeGrids();     // products.js
updAcctDot();          // account.js
goPage('beranda');    // nav.js -> menampilkan halaman awal
