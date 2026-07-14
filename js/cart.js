/* ==========================================================
   CART.JS
   Semua logika keranjang belanja: buka/tutup drawer, tambah
   produk, ubah jumlah, hapus item, dan checkout.
   Menggunakan variabel `cart` dari data.js dan fungsi `toast()`
   dari toast.js.
   ========================================================== */

function addCart(id) {
  const p = PRODS.find(x=>x.id===id);
  const ex = cart.find(x=>x.id===id);
  if(ex) ex.qty++; else cart.push({...p, qty:1});
  updDot(); renderDrawer();
  toast('✅ '+p.name+' masuk keranjang!');
}

function rmCart(id) { cart=cart.filter(x=>x.id!==id); updDot(); renderDrawer(); }

function chQty(id,d) {
  const i=cart.find(x=>x.id===id); if(!i) return;
  i.qty+=d; if(i.qty<=0) rmCart(id); else { updDot(); renderDrawer(); }
}

const PAY_METHODS = [
  { id:'qris',   name:'QRIS',    ico:'🔳' },
  { id:'gopay',  name:'GoPay',   ico:'💚' },
  { id:'ovo',    name:'OVO',     ico:'💜' },
  { id:'dana',   name:'DANA',    ico:'💙' },
  { id:'transfer', name:'Transfer Bank', ico:'🏦' },
  { id:'cod',    name:'COD',     ico:'💵' },
];
let selectedPay = '';

function renderPayMethods(){
  document.getElementById('payMethods').innerHTML = PAY_METHODS.map(m =>
    `<div class="pay-opt ${selectedPay===m.id?'sel':''}" onclick="selectPay('${m.id}')"><span class="ico">${m.ico}</span>${m.name}</div>`
  ).join('');
}

function selectPay(id){ selectedPay = id; renderPayMethods(); }

function updDot() {
  const t=cart.reduce((s,x)=>s+x.qty,0);
  document.getElementById('cartDot').className='dot'+(t>0?' show':'');
}

function renderDrawer() {
  const b=document.getElementById('dBody'), f=document.getElementById('dFoot');
  if(!cart.length) {
    b.innerHTML=`<div class="empty-state"><div>🛒</div>Keranjang masih kosong nih~<br>yuk tambahin produk dulu!</div>`;
    f.style.display='none'; return;
  }
  b.innerHTML=cart.map(i=>`<div class="cart-row">
    <div class="cart-emoji"><img src="${i.img}" alt="${i.name}" onerror="this.onerror=null;this.src='https://placehold.co/100x100?text=No+Image';"></div>
    <div class="cart-info">
      <div class="cart-name">${i.name}</div>
      <div class="cart-price">${fmt(i.price*i.qty)}</div>
      <div class="qty-row">
        <button class="q-btn" onclick="chQty(${i.id},-1)">−</button>
        <span class="q-num">${i.qty}</span>
        <button class="q-btn" onclick="chQty(${i.id},+1)">+</button>
      </div>
    </div>
    <button class="rm-btn" onclick="rmCart(${i.id})">✕</button>
  </div>`).join('');
  const sum=cart.reduce((s,x)=>s+x.price*x.qty,0);
  document.getElementById('dTotal').textContent=fmt(sum);
  renderPayMethods();
  f.style.display='block';
}

function openCart() { renderDrawer(); document.getElementById('ov').classList.add('open'); document.body.style.overflow='hidden'; }

function closeCart(e) {
  if(e&&e.target!==document.getElementById('ov')) return;
  document.getElementById('ov').classList.remove('open'); document.body.style.overflow='';
}

function checkout() {
  if(!selectedPay){ toast('⚠️ Pilih metode pembayaran dulu ya'); return; }
  const m = PAY_METHODS.find(x=>x.id===selectedPay);
  toast(`🎉 Pembayaran via ${m.name} berhasil! Pesanan lagi diproses ya~`);
  cart=[]; selectedPay=''; updDot(); renderDrawer(); closeCart();
}
