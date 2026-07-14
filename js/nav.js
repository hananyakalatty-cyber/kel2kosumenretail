/* ==========================================================
   NAV.JS
   Mengatur perpindahan halaman (Beranda, Belanja, Kategori,
   Favorit, Akun, Tentang) dan ticker berjalan di atas.
   Ini "jembatan" utama: setiap kali pindah ke halaman lain
   (goPage), fungsi render dari file lain (products.js,
   wishlist.js, account.js) ikut dipanggil supaya kontennya
   selalu update — jadi meski beda file, tetap satu web utuh.
   ========================================================== */

function renderMenuBar(){
  document.getElementById('menuBar').innerHTML = PAGES.map(p =>
    `<button class="menu-tab ${p.id===currentPage?'active':''}" onclick="goPage('${p.id}')">${p.e} ${p.name}</button>`
  ).join('');
}

function goPage(id){
  currentPage = id;
  document.querySelectorAll('.page').forEach(el => el.classList.toggle('on', el.dataset.page===id));
  renderMenuBar();
  document.getElementById('acctNavBtn').classList.toggle('active', id==='akun');
  window.scrollTo({top:0, behavior:'smooth'});

  // Hubungkan ke file lain: tiap halaman punya renderer sendiri
  if(id==='favorit') renderFavGrid();   // dari wishlist.js
  if(id==='beranda') renderHomeGrids(); // dari products.js
  if(id==='akun')    renderAkun();      // dari account.js
}

function renderTicker(){
  const items = TICKER_MSG.map(m=>`<span>${m}</span>`).join('');
  document.getElementById('tickerEl').innerHTML = items + items; // duplikat biar looping mulus
}

/* ——— KATEGORI (grid kategori di beranda & halaman kategori) ——— */
function renderCatGrids(){
  const html = CATS.slice(1).map(c =>
    `<div class="cat-card" onclick="goToShopCat('${c.id}')"><span><i class="bi bi-${c.e}"></i></span><p>${c.name}</p></div>`
  ).join('');
  document.getElementById('catGridFull').innerHTML = html;
  document.getElementById('catGridHome').innerHTML = html;
}

function goToShopCat(id){ goPage('belanja'); filterCat(id); }
