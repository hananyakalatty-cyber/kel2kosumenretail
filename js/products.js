/* ==========================================================
   PRODUCTS.JS
   Semua yang berhubungan dengan produk: render kartu produk,
   grid di beranda/belanja/favorit, filter kategori (pill),
   urutkan, cari, dan tombol "muat lebih banyak".
   Fungsi prodCard() dipakai ulang oleh wishlist.js untuk
   menampilkan kartu favorit — jadi walau beda file, tampilannya konsisten.
   ========================================================== */

/* ——— PILLS kategori (halaman belanja) ——— */
function renderPills() {
  document.getElementById('pillBar').innerHTML = CATS.map(c =>
    `<button class="menu-tab ${c.id===activeCat?'active':''}" onclick="filterCat('${c.id}')"><i class="bi bi-${c.e}"></i> ${c.name}</button>`
  ).join('');
}

/* ——— KARTU PRODUK (dipakai di semua grid produk) ——— */
function prodCard(p){
  const d = disc(p.was, p.price);
  const fav = wishlist.includes(p.id);
  const isAdmin = currentUser && currentUser.type==='admin';
  return `<div class="prod-card">
    <div class="prod-img">
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/300x300?text=No+Image';">
      ${p.label ? `<div class="prod-tag ${p.label}">${p.label==='new'?'BARU':'−'+d+'%'}</div>` : ''}
      <button class="prod-fav ${fav?'on':''}" onclick="toggleFav(${p.id},this)">${fav?'❤️':'🤍'}</button>
      ${isAdmin ? `<button class="prod-del" onclick="deleteProduct(${p.id})" title="Hapus produk">🗑️</button>` : ''}
    </div>
    <div class="prod-body">
      <div class="prod-name">${p.name}</div>
      <div class="prod-stars"><span class="s">${'★'.repeat(Math.round(p.r))}</span>${p.r} (${p.rv.toLocaleString('id-ID')})</div>
      <div class="prod-price-row">
        <span class="price-now">${fmt(p.price)}</span>
        ${d ? `<span class="price-off">−${d}%</span>` : ''}
        ${p.was ? `<span class="price-was">${fmt(p.was)}</span>` : ''}
      </div>
    </div>
    <div class="prod-foot">
      <button class="btn-add" onclick="addCart(${p.id})">+ Keranjang</button>
    </div>
  </div>`;
}

function renderProds() {
  const g = document.getElementById('prodGrid');
  const slice = list.slice(0, shown);
  g.innerHTML = slice.length ? slice.map(prodCard).join('') : `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--muted)">😔 Gak ada produk nih...</div>`;
  document.getElementById('loadBtn').style.display = list.length > shown ? 'block' : 'none';
}

function renderHomeGrids(){
  document.getElementById('prodGridHome').innerHTML = [...PRODS].sort((a,b)=>b.r-a.r).slice(0,4).map(prodCard).join('');
}

const CAT_BANNERS = {
  buku: {
    img: 'img/buku/book3.jpeg',
    lines: ['NEW BOOK', '&', 'PRELOVED']
  }
};

function renderCatBanner(id) {
  const el = document.getElementById('catBanner');
  const b = CAT_BANNERS[id];
  if (!b) { el.style.display = 'none'; return; }
  el.style.backgroundImage = `url('${b.img}')`;
  el.innerHTML = `<div class="cat-banner-txt">
    <span class="big">${b.lines[0]}</span>
    <span class="amp">${b.lines[1]}</span>
    <span class="big">${b.lines[2]}</span>
  </div>`;
  el.style.display = 'flex';
}

/* ——— FILTER & SORT ——— */
function filterCat(id) {
  activeCat = id; shown = 8;
  list = id==='semua' ? [...PRODS] : PRODS.filter(p=>p.cat===id);
  document.getElementById('sortSel').value = '';
  document.getElementById('prodTitle').textContent = id==='semua' ? '🔥 Semua produk' : CATS.find(c=>c.id===id).e+' '+CATS.find(c=>c.id===id).name;
  renderCatBanner(id);
  renderPills(); renderProds();
}

function doSort() {
  const v = document.getElementById('sortSel').value;
  if(v==='low')  list.sort((a,b)=>a.price-b.price);
  if(v==='high') list.sort((a,b)=>b.price-a.price);
  if(v==='top')  list.sort((a,b)=>b.r-a.r);
  if(!v)         list.sort((a,b)=>a.id-b.id);
  renderProds();
}

function loadMore() { shown += 8; renderProds(); }

function doSearch() {
  const v = document.getElementById('q').value.trim().toLowerCase();
  goPage('belanja');
  if(!v) { filterCat('semua'); return; }
  activeCat='semua'; shown=8;
  list = PRODS.filter(p=>p.name.toLowerCase().includes(v)||p.cat.includes(v));
  renderPills(); renderProds();
  document.getElementById('prodTitle').textContent = `🔍 Hasil untuk "${v}"`;
}
