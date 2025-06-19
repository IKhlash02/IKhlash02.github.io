// particles.js

const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");

// Sesuaikan ukuran kanvas dengan ukuran section hero
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// --- Pengaturan yang Bisa Anda Ubah ---
const config = {
  particleCount: 100, // Jumlah partikel
  particleColor: "rgba(88, 166, 255, 0.7)", // Warna partikel (biru aksen)
  lineColor: "rgba(88, 166, 255, 0.15)", // Warna garis penghubung
  particleSpeed: 0.5, // Kecepatan gerak partikel
  connectionDistance: 120, // Jarak maksimal untuk membuat garis
};
// ------------------------------------

let particlesArray;

// Membuat objek Partikel
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }
  // Menggambar partikel individu
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  // Memperbarui posisi partikel
  update() {
    // Cek tabrakan dengan tepi kanvas
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }
    // Gerakkan partikel
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

// Membuat array partikel
function init() {
  particlesArray = [];
  let numberOfParticles = config.particleCount;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 2 + 1; // Ukuran random antara 1 dan 3
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let directionX = (Math.random() * 2 - 1) * config.particleSpeed;
    let directionY = (Math.random() * 2 - 1) * config.particleSpeed;
    let color = config.particleColor;
    particlesArray.push(
      new Particle(x, y, directionX, directionY, size, color)
    );
  }
}

// Menggambar garis antar partikel
function connect() {
  let opacityValue = 1;
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance =
        (particlesArray[a].x - particlesArray[b].x) *
          (particlesArray[a].x - particlesArray[b].x) +
        (particlesArray[a].y - particlesArray[b].y) *
          (particlesArray[a].y - particlesArray[b].y);
      if (distance < config.connectionDistance * config.connectionDistance) {
        opacityValue =
          1 -
          distance / (config.connectionDistance * config.connectionDistance);
        ctx.strokeStyle = config.lineColor.replace("0.15", opacityValue); // Buat garis lebih pudar saat jauh
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

// Loop animasi
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  connect();
}

// Menyesuaikan ukuran kanvas jika ukuran window berubah
window.addEventListener("resize", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  init(); // Buat ulang partikel agar sesuai dengan ukuran baru
});

// Jalankan semuanya
init();
animate();
