/* ============================================================
   DATA
============================================================ */
// Data Mapel disesuaikan dengan PDF (Kode Mapel & Guru Pengampu)
const dataMapel = [
  { nama: "Bahasa Mandarin", guru: "Dina Azmita, S.S,GR", ruang: "R-MDR" },
  { nama: "PJOK", guru: "Yuliansyah Sadikin, S.Sos.I", ruang: "Lapangan" },
  { nama: "Bahasa Indonesia", guru: "Sarah Setiawati, M.Si.", ruang: "R-IND" },
  { nama: "Produktif PPLG", guru: "Suseno Khaidir, S.Kom.", ruang: "Lab-PPLG" },
  { nama: "MPL (Mapel Pilihan)", guru: "Aldiansyah, S.M", ruang: "Lab-MPL" },
  { nama: "PKN", guru: "Tiar Rizaldi, S.Pd", ruang: "R-PKN" },
  { nama: "Sejarah", guru: "Rini Prastiwyati, S.Pd.", ruang: "R-SJR" },
  { nama: "PAIBP", guru: "Yuliansyah Sadikin, S.Sos.I", ruang: "R-PAI" },
  { nama: "Bahasa Inggris", guru: "Yuli Listiani, S.Pd.", ruang: "R-ING" },
  { nama: "KIK", guru: "Nurhayati, S.ST. Ars.", ruang: "R-KIK" },
  { nama: "Matematika", guru: "Maiyani Hartono, S.Si., M.Si.", ruang: "R-MTK" },
  { nama: "Bahasa Jepang", guru: "Irma Rizky, S.S", ruang: "R-JPN" },
];

// Data Guru disesuaikan dengan daftar guru di PDF (Halaman 3)
const dataGuru = [
  { nama: "Sri Apriyanti Hendyarini, S.Kom.", mapel: "Koordinator BK" },
  { nama: "Mochamad Ridwan, S.Kom.", mapel: "Informatika" },
  { nama: "Suci Sundari, S.Pd.", mapel: "PAIBP" },
  { nama: "Wahyu Kusuma Ningrum, SE.MM.", mapel: "Produktif PM" },
  { nama: "Drs. Budiyono, M.Si", mapel: "Produktif MPLB" },
  { nama: "M. Imam Anshori, S.Sos", mapel: "Produktif PPLG" },
  { nama: "Bowo Dwi Darmawan, S.Pd.", mapel: "KIK" },
  { nama: "Asep Suryadi, M.Pd.", mapel: "Produktif MPLB & PM" },
  { nama: "Eros Rohati, S.Pd.", mapel: "Produktif MPLB" },
  { nama: "Rini Prastiwyati, S.Pd.", mapel: "PKN & Sejarah" },
  { nama: "Kustiyana, S.Pd.I.", mapel: "PAIBP" },
  { nama: "Yuli Listiani, S.Pd.", mapel: "Bahasa Inggris" },
  { nama: "Dany Benuardi, S.Kom.", mapel: "Produktif TJKT" },
  { nama: "Aldiansyah, S.M", mapel: "Produktif PPLG & KKA" },
  { nama: "Rian Anugrah, S.Kom.", mapel: "Produktif TJKT" },
  { nama: "Nur Hidayah, SE.", mapel: "Produktif PM" },
  { nama: "Sarah Setiawati, M.Si.", mapel: "B. Indonesia & Produktif MPLB" },
  { nama: "Dinda Farila, S.Ds.", mapel: "Produktif DKV" },
  { nama: "Suseno Khaidir, S.Kom.", mapel: "Produktif PPLG & KKA" },
  { nama: "Tiar Rizaldi, S.Pd", mapel: "PKN & Sejarah" },
  { nama: "Irma Rizky, S.S", mapel: "Bahasa Jepang" },
  { nama: "Detty Yuniarti, S.Pd.", mapel: "Bahasa Indonesia" },
  { nama: "Januar Rachmat Setia Aji, S.Pd.", mapel: "Bahasa Inggris" },
  { nama: "Yuliansyah Sadikin, S.Sos.I", mapel: "PAIBP & PJOK" },
  { nama: "Putri Navisa Awaliah, S.Pd.", mapel: "PJOK" },
  { nama: "Pandu Rachmawan, S.Kom", mapel: "Produktif TJKT" },
  { nama: "Angga Surya", mapel: "Produktif DKV" },
  { nama: "Raden Susan Hoerunisa, S.Pd", mapel: "BK" },
  { nama: "Murni Hariyani, S.Pd.", mapel: "Matematika" },
  { nama: "Annisa Tayari Zahra, S.Pd.", mapel: "Projek IPAS" },
  { nama: "Alisti Agatha, S.Pd.Gr", mapel: "Seni Budaya & Bahasa Sunda" },
  { nama: "Yosina Hitus, S.Th., S.Pd.", mapel: "PAK" },
  { nama: "Nurhayati, S.ST. Ars.", mapel: "Produktif MPLB & KIK" },
  { nama: "Rani Azahra, SE", mapel: "Produktif PM" },
  { nama: "Murfid Isra, S.Tr.Kom", mapel: "Produktif PPLG" },
  { nama: "Muhammad Rafnil Safar, S.Ds", mapel: "Produktif DKV" },
  { nama: "Dina Azmita, S.S,GR", mapel: "Bahasa Mandarin" },
  { nama: "Maiyani Hartono, S.Si., M.Si.", mapel: "Matematika" },
];

/* ===== JADWAL SENIN - JUMAT (Kelas XI PPLG) ===== */
// Diambil dari PDF Halaman 1 & 2, disesuaikan dengan nama guru asli
const dataJadwal = {
  Senin: [
    { jam: "07:00 - 07:30", mapel: "Kokurikuler + GDS + START", guru: "-", ruang: "Lapangan" },
    { jam: "07:30 - 08:10", mapel: "Upacara Bendera", guru: "-", ruang: "Lapangan" },
    { jam: "08:10 - 08:50", mapel: "Bahasa Mandarin", guru: "Dina Azmita, S.S,GR", ruang: "R-MDR" },
    { jam: "08:50 - 09:30", mapel: "Bahasa Mandarin", guru: "Dina Azmita, S.S,GR", ruang: "R-MDR" },
    { jam: "09:30 - 10:10", mapel: "PKN", guru: "Tiar Rizaldi, S.Pd", ruang: "R-PKN" },
    { jam: "10:10 - 10:40", mapel: "ISTIRAHAT", istirahat: true },
    { jam: "10:40 - 11:20", mapel: "PKN", guru: "Tiar Rizaldi, S.Pd", ruang: "R-PKN" },
    { jam: "11:20 - 12:00", mapel: "Bahasa Indonesia", guru: "Sarah Setiawati, M.Si.", ruang: "R-IND" },
    { jam: "12:00 - 13:00", mapel: "ISHOMA", istirahat: true },
    { jam: "13:00 - 13:35", mapel: "Bahasa Indonesia", guru: "Sarah Setiawati, M.Si.", ruang: "R-IND" },
    { jam: "13:35 - 14:10", mapel: "PAIBP", guru: "Yuliansyah Sadikin, S.Sos.I", ruang: "R-PAI" },
    { jam: "14:10 - 14:45", mapel: "PAIBP", guru: "Yuliansyah Sadikin, S.Sos.I", ruang: "R-PAI" },
    { jam: "14:45 - 15:20", mapel: "PAIBP", guru: "Yuliansyah Sadikin, S.Sos.I", ruang: "R-PAI" },
  ],
  Selasa: [
    { jam: "07:00 - 07:30", mapel: "Kokurikuler + GDS + START", guru: "-", ruang: "Lapangan" },
    { jam: "07:30 - 08:10", mapel: "Bahasa Inggris", guru: "Yuli Listiani, S.Pd.", ruang: "R-ING" },
    { jam: "08:10 - 08:50", mapel: "Bahasa Inggris", guru: "Yuli Listiani, S.Pd.", ruang: "R-ING" },
    { jam: "08:50 - 09:30", mapel: "Bahasa Inggris", guru: "Yuli Listiani, S.Pd.", ruang: "R-ING" },
    { jam: "09:30 - 10:10", mapel: "Produktif PPLG", guru: "Suseno Khaidir, S.Kom.", ruang: "Lab-PPLG" },
    { jam: "10:10 - 10:40", mapel: "ISTIRAHAT", istirahat: true },
    { jam: "10:40 - 11:20", mapel: "Produktif PPLG", guru: "Suseno Khaidir, S.Kom.", ruang: "Lab-PPLG" },
    { jam: "11:20 - 12:00", mapel: "Produktif PPLG", guru: "Suseno Khaidir, S.Kom.", ruang: "Lab-PPLG" },
    { jam: "12:00 - 13:00", mapel: "ISHOMA", istirahat: true },
    { jam: "13:00 - 13:35", mapel: "Produktif PPLG", guru: "Suseno Khaidir, S.Kom.", ruang: "Lab-PPLG" },
    { jam: "13:35 - 14:10", mapel: "PJOK", guru: "Yuliansyah Sadikin, S.Sos.I", ruang: "Lapangan" },
    { jam: "14:10 - 14:45", mapel: "PJOK", guru: "Yuliansyah Sadikin, S.Sos.I", ruang: "Lapangan" },
  ],
  Rabu: [
    { jam: "07:00 - 07:30", mapel: "Kokurikuler + GDS + START", guru: "-", ruang: "Lapangan" },
    { jam: "07:30 - 08:10", mapel: "Sejarah", guru: "Rini Prastiwyati, S.Pd.", ruang: "R-SJR" },
    { jam: "08:10 - 08:50", mapel: "Sejarah", guru: "Rini Prastiwyati, S.Pd.", ruang: "R-SJR" },
    { jam: "08:50 - 09:30", mapel: "Bahasa Jepang", guru: "Irma Rizky, S.S", ruang: "R-JPN" },
    { jam: "09:30 - 10:10", mapel: "Bahasa Jepang", guru: "Irma Rizky, S.S", ruang: "R-JPN" },
    { jam: "10:10 - 10:40", mapel: "ISTIRAHAT", istirahat: true },
    { jam: "10:40 - 11:20", mapel: "Produktif PPLG", guru: "Murfid Isra, S.Tr.Kom", ruang: "Lab-PPLG" },
    { jam: "11:20 - 12:00", mapel: "Produktif PPLG", guru: "Murfid Isra, S.Tr.Kom", ruang: "Lab-PPLG" },
    { jam: "12:00 - 13:00", mapel: "ISHOMA", istirahat: true },
    { jam: "13:00 - 13:35", mapel: "Produktif PPLG", guru: "Murfid Isra, S.Tr.Kom", ruang: "Lab-PPLG" },
    { jam: "13:35 - 14:10", mapel: "Produktif PPLG", guru: "Murfid Isra, S.Tr.Kom", ruang: "Lab-PPLG" },
    { jam: "14:10 - 14:45", mapel: "KIK", guru: "Nurhayati, S.ST. Ars.", ruang: "R-KIK" },
    { jam: "14:45 - 15:20", mapel: "KIK", guru: "Nurhayati, S.ST. Ars.", ruang: "R-KIK" },
  ],
  Kamis: [
    { jam: "07:00 - 07:30", mapel: "Kokurikuler + GDS + START", guru: "-", ruang: "Lapangan" },
    { jam: "07:30 - 08:10", mapel: "Kelas (Numerasi - Literasi)", guru: "-", ruang: "R-Kelas" },
    { jam: "08:10 - 08:50", mapel: "Produktif PPLG", guru: "Suseno Khaidir, S.Kom.", ruang: "Lab-PPLG" },
    { jam: "08:50 - 09:30", mapel: "Produktif PPLG", guru: "Suseno Khaidir, S.Kom.", ruang: "Lab-PPLG" },
    { jam: "09:30 - 10:10", mapel: "Produktif PPLG", guru: "Suseno Khaidir, S.Kom.", ruang: "Lab-PPLG" },
    { jam: "10:10 - 10:40", mapel: "ISTIRAHAT", istirahat: true },
    { jam: "10:40 - 11:20", mapel: "Produktif PPLG", guru: "Suseno Khaidir, S.Kom.", ruang: "Lab-PPLG" },
    { jam: "11:20 - 12:00", mapel: "Matematika", guru: "Maiyani Hartono, S.Si., M.Si.", ruang: "R-MTK" },
    { jam: "12:00 - 13:00", mapel: "ISHOMA", istirahat: true },
    { jam: "13:00 - 13:35", mapel: "Matematika", guru: "Maiyani Hartono, S.Si., M.Si.", ruang: "R-MTK" },
    { jam: "13:35 - 14:10", mapel: "MPL (Mapel Pilihan)", guru: "Aldiansyah, S.M", ruang: "Lab-MPL" },
    { jam: "14:10 - 14:45", mapel: "MPL (Mapel Pilihan)", guru: "Aldiansyah, S.M", ruang: "Lab-MPL" },
    { jam: "14:45 - 15:20", mapel: "MPL (Mapel Pilihan)", guru: "Aldiansyah, S.M", ruang: "Lab-MPL" },
  ],
  Jumat: [
    { jam: "07:00 - 07:30", mapel: "Kokurikuler + GDS + START", guru: "-", ruang: "Lapangan" },
    { jam: "07:30 - 08:10", mapel: "Jum'at Berkah / Beribadah / Bersih / Sehat", guru: "-", ruang: "Lapangan" },
    { jam: "08:10 - 08:50", mapel: "Produktif PPLG", guru: "Suseno Khaidir, S.Kom.", ruang: "Lab-PPLG" },
    { jam: "08:50 - 09:30", mapel: "Produktif PPLG", guru: "Suseno Khaidir, S.Kom.", ruang: "Lab-PPLG" },
    { jam: "09:30 - 10:00", mapel: "ISTIRAHAT", istirahat: true },
    { jam: "10:00 - 10:10", mapel: "Wali Kelas", guru: "-", ruang: "R-Kelas" },
    { jam: "10:10 - 10:50", mapel: "Produktif PPLG", guru: "Suseno Khaidir, S.Kom.", ruang: "Lab-PPLG" },
    { jam: "10:50 - 11:30", mapel: "Produktif PPLG", guru: "Suseno Khaidir, S.Kom.", ruang: "Lab-PPLG" },
  ],
};

const dataPR = [
  { mapel: "Matematika", deskripsi: "Kerjakan halaman 45–47 no. 1–15", deadline: "Besok, 07:00" },
  { mapel: "Bahasa Inggris", deskripsi: "Buat karangan 150 kata tentang 'My Dream'", deadline: "Besok, 08:30" },
  { mapel: "Informatika", deskripsi: "Buat program kalkulator sederhana (Python/JS)", deadline: "2 hari lagi" },
  { mapel: "IPA (Fisika)", deskripsi: "Laporan praktikum hukum Ohm", deadline: "3 hari lagi" },
];

/* ===== KANTIN (DIPERBARUI) ===== */
const dataKantin = [
  { id: 1, nama: "Mie Ayam", harga: 10000, emoji: "🍜" },
  { id: 2, nama: "Somay", harga: 5000, emoji: "🥟" },
  { id: 3, nama: "Tom Yam", harga: 5000, emoji: "🍲" },
  { id: 4, nama: "Gorengan (Tergantung Pembeli)", harga: 1000, emoji: "🍢" },
  { id: 5, nama: "Baslok", harga: 5000, emoji: "🍡" },
  { id: 6, nama: "Ayam Geprek (Pakai Nasi)", harga: 13000, emoji: "🍗" },
  { id: 7, nama: "Ayam Geprek (Tanpa Nasi)", harga: 8000, emoji: "🍗" },
  { id: 8, nama: "Dimsum / Gorengan Cireng / Tahu Bulat (Bebas Pilih)", harga: 5000, emoji: "🧆" },
];

const dataKoperasi = [
  { id: 1, nama: "Penghapus", harga: 3000, emoji: "🧽" },
  { id: 2, nama: "Pulpen", harga: 2500, emoji: "🖊️" },
  { id: 3, nama: "Pensil", harga: 2000, emoji: "✏️" },
  { id: 4, nama: "Penggaris", harga: 4000, emoji: "📏" },
  { id: 5, nama: "Buku Tulis", harga: 6000, emoji: "📒" },
  { id: 6, nama: "Kertas Folio Bergaris", harga: 500, emoji: "📄" },
  { id: 7, nama: "Kertas HVS", harga: 500, emoji: "📃" },
  { id: 8, nama: "Topi Sekolah", harga: 15000, emoji: "🧢" },
  { id: 9, nama: "Dasi", harga: 8000, emoji: "👔" },
  { id: 10, nama: "Sabuk", harga: 10000, emoji: "🥋" },
];

/* ===== [TAMBAHAN BARU] TUGAS DARI GURU ===== */
const dataTugasGuru = [
  {
    id: 1,
    mapel: "Matematika",
    judul: "Latihan Soal Bab 3",
    deskripsi: "Kerjakan halaman 45 no. 1-10 di buku tulis, lalu foto hasilnya.",
    deadline: "Besok, 07:00",
    guru: "Maiyani Hartono, S.Si., M.Si."
  },
  {
    id: 2,
    mapel: "Bahasa Indonesia",
    judul: "Karangan 'My Dream'",
    deskripsi: "Buat karangan 150 kata tentang cita-citamu.",
    deadline: "Besok, 08:30",
    guru: "Sarah Setiawati, M.Si."
  },
  {
    id: 3,
    mapel: "Produktif PPLG",
    judul: "Program Kalkulator Sederhana",
    deskripsi: "Buat program kalkulator menggunakan Python atau JavaScript. Screenshot hasilnya.",
    deadline: "2 hari lagi",
    guru: "Suseno Khaidir, S.Kom."
  },
  {
    id: 4,
    mapel: "PAIBP",
    judul: "Laporan Praktikum Hukum Ohm",
    deskripsi: "Tulis laporan praktikum hukum Ohm lengkap dengan data pengamatan.",
    deadline: "3 hari lagi",
    guru: "Yuliansyah Sadikin, S.Sos.I"
  },
];

/* ============================================================
   STATE
============================================================ */
let tugasList = [];
let keranjangKantin = [];
let keranjangKoperasi = [];
let fotoDataURL = null;

/* ============================================================
   INIT
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderJadwal("Senin");
  setupJadwalTabs();
  renderMapel();
  renderGuru();
  renderPR();
  renderKantin();
  renderKoperasi();
  renderTugas();
  renderTugasGuru();        // [TAMBAHAN BARU]
  fillSelects();
  updateJam();
  setInterval(updateJam, 1000);
  setupNav();
  setupFotoPreview();
  setupModalFoto();
});

/* ============================================================
   NAVIGASI
============================================================ */
function setupNav() {
  const toggle = document.getElementById("menuToggle");
  const links = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => links.classList.toggle("open"));

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });

      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      links.classList.remove("open");
    });
  });

  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 150) current = sec.id;
    });
    document.querySelectorAll(".nav-link").forEach(l => {
      l.classList.toggle("active", l.getAttribute("href") === `#${current}`);
    });
  });
}

/* ============================================================
   JAM
============================================================ */
function updateJam() {
  const now = new Date();
  const jam = now.toLocaleTimeString("id-ID");
  const hari = now.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  document.getElementById("jamDigital").textContent = jam;
  document.getElementById("tanggalHari").textContent = hari;
}

/* ============================================================
   RENDER FUNGSI
============================================================ */
function renderJadwal(hari = "Senin") {
  const body = document.getElementById("jadwalBody");
  const data = dataJadwal[hari] || [];

  body.innerHTML = data.map((j, i) => {
    if (j.istirahat) {
      return `<tr>
        <td colspan="5" style="text-align:center;">
          <span class="badge-istirahat">☕ ${j.mapel} (${j.jam})</span>
        </td>
      </tr>`;
    }
    return `<tr>
      <td>${i + 1}</td>
      <td>${j.jam}</td>
      <td><strong>${j.mapel}</strong></td>
      <td>${j.guru}</td>
      <td>${j.ruang}</td>
    </tr>`;
  }).join("");
}

function setupJadwalTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderJadwal(btn.dataset.hari);
    });
  });
}

function renderMapel() {
  document.getElementById("mapelBody").innerHTML = dataMapel.map((m, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${m.nama}</td>
      <td>${m.guru}</td>
      <td>${m.ruang}</td>
    </tr>`).join("");
}

function renderGuru() {
  document.getElementById("guruGrid").innerHTML = dataGuru.map(g => `
    <div class="guru-card">
      <div class="guru-avatar">${g.nama.charAt(0)}</div>
      <h4>${g.nama}</h4>
      <p>${g.mapel}</p>
    </div>`).join("");
}

function renderPR() {
  document.getElementById("prGrid").innerHTML = dataPR.map(p => `
    <div class="pr-card">
      <h4>${p.mapel}</h4>
      <div class="deadline">⏰ ${p.deadline}</div>
      <p>${p.deskripsi}</p>
    </div>`).join("");
}

function renderKantin() {
  document.getElementById("kantinGrid").innerHTML = dataKantin.map(k => `
    <div class="produk-card">
      <div class="produk-img">${k.emoji}</div>
      <div class="produk-body">
        <h4>${k.nama}</h4>
        <div class="harga">Rp ${k.harga.toLocaleString("id-ID")}</div>
        <button class="btn btn-primary btn-sm" onclick="tambahKantin(${k.id})">+ Tambah</button>
      </div>
    </div>`).join("");
}

function renderKoperasi() {
  document.getElementById("koperasiGrid").innerHTML = dataKoperasi.map(k => `
    <div class="produk-card">
      <div class="produk-img">${k.emoji}</div>
      <div class="produk-body">
        <h4>${k.nama}</h4>
        <div class="harga">Rp ${k.harga.toLocaleString("id-ID")}</div>
        <button class="btn btn-primary btn-sm" onclick="tambahKoperasi(${k.id})">+ Tambah</button>
      </div>
    </div>`).join("");
}

function renderTugas() {
  const body = document.getElementById("tugasBody");
  if (tugasList.length === 0) {
    body.innerHTML = `<tr><td colspan="9" class="empty">Belum ada tugas masuk</td></tr>`;
    return;
  }
  body.innerHTML = tugasList.map((t, i) => {
    const tugasAsli = dataTugasGuru.find(x => x.id === t.tugasId);
    const judulTugas = tugasAsli ? tugasAsli.judul : "-";
    let statusBadge = `<span class="badge-status badge-belum">⏳ Menunggu dinilai</span>`;
    if (t.nilai !== null && t.nilai !== undefined) {
      statusBadge = `<span class="badge-status badge-dinilai">✅ Sudah dinilai</span>`;
    }
    return `
    <tr>
      <td>${i + 1}</td>
      <td>${t.nama}</td>
      <td>${t.mapel}</td>
      <td><strong>${judulTugas}</strong></td>
      <td>${t.foto ? `<img src="${t.foto}" class="thumb" onclick="openFoto('${t.foto}')">` : "-"}</td>
      <td>${t.keterangan || "-"}</td>
      <td>${statusBadge}</td>
      <td><strong>${t.nilai ?? "-"}</strong></td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="hapusTugas(${i})">Hapus</button>
      </td>
    </tr>`;
  }).join("");
}

/* ===== [TAMBAHAN BARU] render daftar tugas dari guru ===== */
function renderTugasGuru() {
  const grid = document.getElementById("tugasGuruGrid");
  if (!grid) return;
  if (dataTugasGuru.length === 0) {
    grid.innerHTML = `<p class="empty">Belum ada tugas dari guru</p>`;
    return;
  }
  grid.innerHTML = dataTugasGuru.map(t => {
    const sudahKirim = tugasList.some(x => x.tugasId === t.id);
    return `
      <div class="tugas-guru-card">
        <span class="mapel-badge">${t.mapel}</span>
        <h4>${t.judul}</h4>
        <p>${t.deskripsi}</p>
        <div class="deadline-tugas">⏰ ${t.deadline}</div>
        <p style="font-size:0.8rem;color:var(--muted);">👨‍🏫 ${t.guru}</p>
        ${sudahKirim
          ? `<span class="badge-status badge-sudah">✅ Sudah dikirim</span>`
          : `<span class="badge-status badge-belum">⏳ Belum dikirim</span>`}
      </div>`;
  }).join("");
}

/* ============================================================
   SELECTS
============================================================ */
function fillSelects() {
  const mapelSel = document.getElementById("mapelTugas");
  mapelSel.innerHTML = `<option value="">-- Pilih Mapel --</option>` +
    dataMapel.map(m => `<option>${m.nama}</option>`).join("");

  // [TAMBAHAN BARU] dropdown pilih tugas dari guru
  const tugasSel = document.getElementById("tugasGuruSelect");
  if (tugasSel) {
    tugasSel.innerHTML = `<option value="">-- Pilih Tugas --</option>` +
      dataTugasGuru.map(t => `<option value="${t.id}">[${t.mapel}] ${t.judul}</option>`).join("");
  }

  const guruSel = document.getElementById("guruSelect");
  guruSel.innerHTML = `<option value="">-- Pilih Guru --</option>` +
    dataGuru.map(g => `<option value="${g.nama}">${g.nama} (${g.mapel})</option>`).join("");
}

/* ============================================================
   FOTO PREVIEW
============================================================ */
function setupFotoPreview() {
  document.getElementById("fotoTugas").addEventListener("change", (e) => {
    const file = e.target.files[0];
    const preview = document.getElementById("previewFoto");
    if (!file) { fotoDataURL = null; preview.innerHTML = ""; return; }
    const reader = new FileReader();
    reader.onload = (ev) => {
      fotoDataURL = ev.target.result;
      preview.innerHTML = `<img src="${fotoDataURL}" alt="Preview">`;
    };
    reader.readAsDataURL(file);
  });
}

/* ============================================================
   KIRIM TUGAS
============================================================ */
function kirimTugas() {
  const nama = document.getElementById("namaSiswa").value.trim();
  const mapel = document.getElementById("mapelTugas").value;
  const ket = document.getElementById("keteranganTugas").value.trim();

  // [TAMBAHAN BARU] ambil tugas yang dipilih
  const tugasSel = document.getElementById("tugasGuruSelect");
  const tugasId = tugasSel ? Number(tugasSel.value) : 0;

  if (!nama) return showToast("⚠️ Nama siswa wajib diisi!", "#ef4444");
  if (!mapel) return showToast("⚠️ Pilih mata pelajaran!", "#ef4444");
  if (tugasSel && !tugasId) return showToast("⚠️ Pilih tugas yang mau dikirim!", "#ef4444");
  if (!fotoDataURL) return showToast("⚠️ Foto tugas wajib diupload!", "#ef4444");

  // [TAMBAHAN BARU] cek apakah sudah kirim tugas ini
  if (tugasId && tugasList.some(t => t.nama === nama && t.tugasId === tugasId)) {
    return showToast("⚠️ Kamu sudah mengirim tugas ini!", "#ef4444");
  }

  tugasList.push({
    nama, mapel, keterangan: ket, foto: fotoDataURL, nilai: null,
    tugasId: tugasId || null   // [TAMBAHAN BARU]
  });

  document.getElementById("namaSiswa").value = "";
  document.getElementById("mapelTugas").value = "";
  if (tugasSel) tugasSel.value = "";
  document.getElementById("keteranganTugas").value = "";
  document.getElementById("fotoTugas").value = "";
  document.getElementById("previewFoto").innerHTML = "";
  fotoDataURL = null;

  renderTugas();
  renderTugasGuru();   // [TAMBAHAN BARU]
  showToast("✅ Tugas berhasil dikirim!");
}

function beriNilai(index) {
  const nilai = document.getElementById(`nilai-${index}`).value;
  if (nilai === "" || nilai < 0 || nilai > 100) {
    return showToast("⚠️ Nilai harus antara 0–100!", "#ef4444");
  }
  tugasList[index].nilai = Number(nilai);
  renderTugas();
  showToast(`✅ Nilai ${nilai} berhasil disimpan!`);
}

function hapusTugas(index) {
  if (!Number.isInteger(index) || index < 0 || index >= tugasList.length) {
    return showToast("⚠️ Tugas tidak ditemukan.", "#ef4444");
  }

  tugasList.splice(index, 1);
  renderTugas();
  renderTugasGuru();
  showToast("🗑️ Tugas berhasil dihapus.");
}

function panggilGuru() {
  const guru = document.getElementById("guruSelect").value;
  const output = document.getElementById("alarmOutput");
  if (!guru) return showToast("⚠️ Pilih guru yang ingin dipanggil.", "#ef4444");

  output.textContent = `🔔 Panggilan untuk ${guru} hanya ditampilkan di halaman ini.`;
  output.style.display = "block";
  showToast("⚠️ Panggilan belum terhubung ke layanan sekolah.", "#ef4444");
}

function renderKeranjangKantin() {
  const body = document.getElementById("keranjangBody");
  if (keranjangKantin.length === 0) {
    body.innerHTML = `<tr><td colspan="5" class="empty">Keranjang kosong</td></tr>`;
  } else {
    body.innerHTML = keranjangKantin.map((item, index) => `
      <tr>
        <td>${item.nama}</td>
        <td>Rp ${item.harga.toLocaleString("id-ID")}</td>
        <td>${item.qty}</td>
        <td>Rp ${(item.harga * item.qty).toLocaleString("id-ID")}</td>
        <td><button class="btn btn-danger btn-sm" onclick="hapusDariKantin(${index})">Hapus</button></td>
      </tr>`).join("");
  }

  const total = keranjangKantin.reduce((sum, item) => sum + item.harga * item.qty, 0);
  document.getElementById("totalKantin").textContent = `Rp ${total.toLocaleString("id-ID")}`;
}

function tambahKantin(id) {
  const produk = dataKantin.find(item => item.id === id);
  if (!produk) return showToast("⚠️ Produk kantin tidak ditemukan.", "#ef4444");

  const item = keranjangKantin.find(entry => entry.id === id);
  if (item) item.qty += 1;
  else keranjangKantin.push({ ...produk, qty: 1 });

  renderKeranjangKantin();
  showToast(`${produk.nama} ditambahkan ke keranjang.`);
}

function hapusDariKantin(index) {
  if (!Number.isInteger(index) || index < 0 || index >= keranjangKantin.length) {
    return showToast("⚠️ Item keranjang tidak ditemukan.", "#ef4444");
  }
  keranjangKantin.splice(index, 1);
  renderKeranjangKantin();
}

function checkoutKantin() {
  if (keranjangKantin.length === 0) return showToast("⚠️ Keranjang kantin masih kosong.", "#ef4444");

  showToast("⚠️ Pemesanan kantin belum terhubung ke layanan sekolah.", "#ef4444");
}

function renderKeranjangKoperasi() {
  const body = document.getElementById("keranjangKopBody");
  if (keranjangKoperasi.length === 0) {
    body.innerHTML = `<tr><td colspan="5" class="empty">Keranjang kosong</td></tr>`;
  } else {
    body.innerHTML = keranjangKoperasi.map((item, index) => `
      <tr>
        <td>${item.nama}</td>
        <td>Rp ${item.harga.toLocaleString("id-ID")}</td>
        <td>${item.qty}</td>
        <td>Rp ${(item.harga * item.qty).toLocaleString("id-ID")}</td>
        <td><button class="btn btn-danger btn-sm" onclick="hapusDariKoperasi(${index})">Hapus</button></td>
      </tr>`).join("");
  }

  const total = keranjangKoperasi.reduce((sum, item) => sum + item.harga * item.qty, 0);
  document.getElementById("totalKoperasi").textContent = `Rp ${total.toLocaleString("id-ID")}`;
}

function tambahKoperasi(id) {
  const produk = dataKoperasi.find(item => item.id === id);
  if (!produk) return showToast("⚠️ Barang koperasi tidak ditemukan.", "#ef4444");

  const item = keranjangKoperasi.find(entry => entry.id === id);
  if (item) item.qty += 1;
  else keranjangKoperasi.push({ ...produk, qty: 1 });

  renderKeranjangKoperasi();
  showToast(`${produk.nama} ditambahkan ke keranjang.`);
}

function hapusDariKoperasi(index) {
  if (!Number.isInteger(index) || index < 0 || index >= keranjangKoperasi.length) {
    return showToast("⚠️ Item keranjang tidak ditemukan.", "#ef4444");
  }
  keranjangKoperasi.splice(index, 1);
  renderKeranjangKoperasi();
}

function checkoutKoperasi() {
  if (keranjangKoperasi.length === 0) return showToast("⚠️ Keranjang koperasi masih kosong.", "#ef4444");

  showToast("⚠️ Pemesanan koperasi belum terhubung ke layanan sekolah.", "#ef4444");
}

function setupModalFoto() {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "modalFoto";
  modal.innerHTML = `<img id="modalImg" src="" alt="Foto tugas">`;
  modal.addEventListener("click", () => modal.classList.remove("show"));
  document.body.appendChild(modal);
}

function openFoto(src) {
  const modal = document.getElementById("modalFoto");
  const image = document.getElementById("modalImg");
  if (!modal || !image) return showToast("⚠️ Foto tidak dapat dibuka.", "#ef4444");

  image.src = src;
  modal.classList.add("show");
}

let toastTimer;
function showToast(message, color = "#059669") {
  const toast = document.getElementById("toast");
  if (!toast) {
    console.error("Elemen notifikasi #toast tidak ditemukan.");
    return;
  }

  toast.textContent = message;
  toast.style.background = color;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}