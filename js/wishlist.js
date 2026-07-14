/* ==========================================================
   WISHLIST.JS
   Semua logika favorit (like) produk: toggle favorit, badge
   titik merah di ikon hati navbar, dan render halaman "Favorit".
   Memakai fungsi prodCard() dari products.js supaya kartu
   favorit tampilannya sama persis dengan kartu produk biasa.
   ========================================================== */

function updFavDot(){
  document.getElementById('favDot').className = 'dot'+(wishlist.length?' show':'');
}

function toggleFav(id, btn) {
  const idx=wishlist.indexOf(id), p=PRODS.find(x=>x.id===id);
  if(idx>-1) { wishlist.splice(idx,1); toast('🤍 Dihapus dari favorit'); }
  else { wishlist.push(id); toast('❤️ '+p.name+' masuk favorit!'); }
  updFavDot();
  if(currentPage==='favorit') renderFavGrid();
  else { btn.innerHTML = wishlist.includes(id)?'❤️':'🤍'; btn.classList.toggle('on', wishlist.includes(id)); }
}

function renderFavGrid(){
  const g = document.getElementById('favGrid');
  const items = PRODS.filter(p=>wishlist.includes(p.id));
  g.innerHTML = items.length ? items.map(prodCard).join('') :
    `<div class="empty-state" style="grid-column:1/-1;"><div>💔</div>Belum ada favorit nih~<br><a href="#" onclick="goPage('belanja');return false;">yuk cari yang kamu suka →</a></div>`;
}
