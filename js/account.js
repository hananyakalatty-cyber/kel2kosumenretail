/* ==========================================================
   ACCOUNT.JS
   Inilah "file lain" untuk halaman Akun yang ditanyakan:
   ketika tombol 👤 Akun di navbar / menu ditekan, nav.js
   memanggil renderAkun() yang didefinisikan di sini.
   Berisi: tampilan tamu vs admin, login admin (password),
   login sebagai tamu, tambah produk baru, dan hapus produk.
   ========================================================== */

function adminBoxHtml(){
  return `<div id="adminBox" style="display:none;max-width:300px;margin:-0.4rem auto 1rem;">
    <input type="password" id="adminPassInput" placeholder="Kata sandi admin" style="width:100%;padding:.65rem .9rem;border:2px solid var(--teks);border-radius:0;font-family:inherit;font-size:13px;margin-bottom:.5rem;" />
    <button class="acct-signout" style="background:var(--teks);margin-top:0;" onclick="attemptAdminLogin()">Konfirmasi masuk</button>
  </div>`;
}

function toggleAdminBox(){
  const box = document.getElementById('adminBox');
  box.style.display = box.style.display==='none' ? 'block' : 'none';
  if(box.style.display==='block') document.getElementById('adminPassInput').focus();
}

function renderAkun(){
  const el = document.getElementById('acctArea');

  if(!currentUser){
    el.innerHTML = `
      <div class="acct-shell">
        <div class="acct-shell-head"><h3>Akun</h3><span>belum masuk</span></div>
        <div class="acct-avatar-big">🙂</div>
        <div class="acct-name">Tamu</div>
        <div class="acct-sub">Pilih cara masuk kamu</div>
        <button class="acct-pill-btn" onclick="toggleAdminBox()">🔑 Masuk sebagai Admin</button>
        ${adminBoxHtml()}
        <div class="acct-row" style="cursor:pointer;" onclick="loginGuest()"><span>🙂 Lanjut sebagai Tamu</span><b>→</b></div>
        <p style="font-size:11px;color:var(--muted);text-align:center;margin-top:.85rem;">Buat coba-coba, kata sandi admin: <b style="color:var(--teks);">admin123</b></p>
      </div>`;
    return;
  }

  if(currentUser.type==='admin'){
    const avg = (PRODS.reduce((s,p)=>s+p.r,0)/PRODS.length).toFixed(1);
    el.innerHTML = `
      <div class="acct-shell">
        <div class="acct-shell-head"><h3>Akun</h3><span class="admin-badge">ADMIN</span></div>
        <div class="acct-avatar-big admin">🛠️</div>
        <div class="acct-name">${currentUser.name}</div>
        <div class="acct-sub">Masuk sejak hari ini</div>
        <button class="acct-pill-btn" onclick="document.getElementById('addProdBox').scrollIntoView({behavior:'smooth'})">+ Tambah produk baru</button>
        <div class="acct-row"><span>Produk aktif</span><b>${PRODS.length}</b></div>
        <div class="acct-row"><span>Kategori</span><b>${CATS.length-1}</b></div>
        <div class="acct-row"><span>Rating rata²</span><b>${avg}</b></div>
        <div id="addProdBox" style="margin-top:1.1rem;text-align:left;">
          <div class="add-form">
            <input id="npName" placeholder="Nama produk" />
            <input id="npPrice" type="number" placeholder="Harga (Rp)" />
            <select id="npCat">${CATS.slice(1).map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}</select>
            <input id="npEmoji" placeholder="Path/link gambar (contoh: img/elektronik/nama.jpeg)" />
            <button class="btn-add" style="background:var(--merah);color:#fff;grid-column:1/-1;" onclick="addProduct()">Tambahkan produk</button>
          </div>
          <p style="font-size:11px;color:var(--muted);margin-top:.6rem;">Kalau kosong, gambar produk akan pakai placeholder sampai kamu isi manual di data.js. Berlaku selama login admin.</p>
        </div>
        <button class="acct-signout" onclick="logout()">Keluar</button>
      </div>`;
    return;
  }

  // tamu / anonim
  const cartQty = cart.reduce((s,x)=>s+x.qty,0);
  el.innerHTML = `
    <div class="acct-shell">
      <div class="acct-shell-head"><h3>Akun</h3><span>tamu</span></div>
      <div class="acct-avatar-big">🙂</div>
      <div class="acct-name">${currentUser.name}</div>
      <div class="acct-sub">Belum daftar akun</div>
      <button class="acct-pill-btn" onclick="toggleAdminBox()">🔑 Upgrade jadi Admin</button>
      ${adminBoxHtml()}
      <div class="acct-row"><span>Favorit</span><b>${wishlist.length}</b></div>
      <div class="acct-row"><span>Di keranjang</span><b>${cartQty}</b></div>
      <div class="acct-row"><span>Riwayat pesanan</span><b>0</b></div>
      <button class="acct-signout" onclick="logout()">Keluar</button>
    </div>`;
}

function attemptAdminLogin(){
  const v = document.getElementById('adminPassInput').value;
  if(v===ADMIN_PASS){
    currentUser = {type:'admin', name:'Admin'};
    updAcctDot(); renderAkun(); renderProds(); renderHomeGrids();
    if(currentPage==='favorit') renderFavGrid();
    toast('🔑 Masuk sebagai Admin');
  } else {
    toast('❌ Kata sandi salah, coba lagi');
  }
}

function loginGuest(){
  const num = Math.floor(1000+Math.random()*9000);
  currentUser = {type:'guest', name:'Tamu'+num};
  updAcctDot(); renderAkun();
  toast('👋 Halo, '+currentUser.name+'!');
}

function logout(){
  currentUser = null;
  updAcctDot(); renderAkun(); renderProds(); renderHomeGrids();
  if(currentPage==='favorit') renderFavGrid();
  toast('👋 Berhasil keluar');
}

function updAcctDot(){
  document.getElementById('acctDot').className = 'dot'+(currentUser?' show':'');
}

function addProduct(){
  const name = document.getElementById('npName').value.trim();
  const price = parseInt(document.getElementById('npPrice').value);
  const cat = document.getElementById('npCat').value;
  const img = document.getElementById('npEmoji').value.trim() || 'https://placehold.co/300x300?text=No+Image';
  if(!name || !price){ toast('⚠️ Isi nama & harga dulu ya'); return; }
  PRODS.push({ id: nextProdId++, name, cat, price, was:0, r:4.5, rv:0, img, label:'new' });
  list = activeCat==='semua' ? [...PRODS] : PRODS.filter(p=>p.cat===activeCat);
  document.getElementById('npName').value=''; document.getElementById('npPrice').value=''; document.getElementById('npEmoji').value='';
  renderProds(); renderHomeGrids(); renderAkun();
  toast('✅ Produk "'+name+'" ditambahkan');
}

function deleteProduct(id){
  const idx = PRODS.findIndex(p=>p.id===id);
  if(idx>-1) PRODS.splice(idx,1);
  list = list.filter(p=>p.id!==id);
  wishlist = wishlist.filter(x=>x!==id);
  cart = cart.filter(x=>x.id!==id);
  updDot(); updFavDot(); renderProds(); renderHomeGrids();
  if(currentPage==='favorit') renderFavGrid();
  if(currentPage==='akun') renderAkun();
  toast('🗑️ Produk dihapus');
}
