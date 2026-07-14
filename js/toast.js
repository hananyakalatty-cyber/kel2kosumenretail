/* ==========================================================
   TOAST.JS
   Notifikasi kecil di pojok kanan bawah. Dipanggil dari
   products.js, cart.js, wishlist.js, dan account.js.
   ========================================================== */

function toast(msg) {
  const c = document.getElementById('toasts');
  const t = document.createElement('div');
  t.className = 't';
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}
