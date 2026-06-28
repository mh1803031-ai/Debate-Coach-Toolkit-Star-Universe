<div align="center">
  <h1>🌌 Debate Coach Toolkit — Star Universe</h1>
  <p><strong>A 3D Interactive Debate Knowledge Universe for SMANDASH Debate Club × ROJAAKS</strong></p>
</div>

<br />

## 📖 Tentang Proyek Ini
**Debate Coach Toolkit — Star Universe** adalah sebuah platform edukasi debat revolusioner yang memvisualisasikan kurikulum dan materi debat ke dalam bentuk **peta rasi bintang 3D interaktif** (*3D Star Map*). Alih-alih membaca dokumen linier biasa, debaters dapat menjelajahi materi seolah-olah sedang menjelajahi alam semesta!

Platform ini mencakup berbagai komponen debat, meliputi:
- **Matter** (Materi/Substansi Debat)
- **Motion Bank** (Kumpulan Mosi Debat)
- **Roles** (Peran Pembicara)
- **Kamus Debat** (Glosarium Istilah)

Setiap materi direpresentasikan sebagai titik (bintang) yang saling terhubung dalam sebuah *Knowledge Graph* 3 dimensi yang interaktif.

---

## ✨ Fitur Utama
- **Interaksi 3D Penuh**: Navigasi menggunakan mouse untuk memutar, memperbesar (*zoom*), dan menjelajah gugusan rasi bintang.
- **Audio Ambien (*Ambient Audio*)**: Dilengkapi latar belakang audio yang imersif saat belajar.
- **Sidebar & Side Panel Adaptif**: Penjelasan rinci setiap bintang/materi muncul dengan panel animasi yang modern.
- **Pencarian Cepat (*Search Overlay*)**: Menemukan mosi atau teori debat dalam sekejap.
- **Asisten AI**: Panel asisten terintegrasi untuk membantu para debaters memahami materi secara personal.
- **Desain Modern (Glassmorphism & Aurora UI)**: Tampilan visual premium, gelap, dan memanjakan mata yang di-support oleh Tailwind & Radix UI.

---

## 🛠️ Tech Stack
Proyek ini dibangun di atas ekosistem pengembangan web termodern untuk menjamin performa terbaik:
- **Framework & Routing:** [React 19](https://react.dev/), [Vite](https://vitejs.dev/), [TanStack Start & Router](https://tanstack.com/)
- **Visual 3D & Animasi:** [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/), [Framer Motion](https://www.framer.com/motion/)
- **Styling & Komponen UI:** [Tailwind CSS v4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), `tw-animate-css`
- **State Management:** [Zustand](https://github.com/pmndrs/zustand), [TanStack Query](https://tanstack.com/query)

---

## 🚀 Cara Menjalankan di Lokal (Localhost)

Pastikan Anda telah menginstal **Node.js** (rekomendasi: versi 20+).

1. **Install Dependensi**
   Gunakan `npm` atau `bun` (lebih disarankan)
   ```bash
   npm install
   # atau
   bun install
   ```

2. **Jalankan Server Development**
   ```bash
   npm run dev
   # atau
   bun run dev
   ```
3. Buka browser dan kunjungi `http://localhost:5173/` (atau port yang tertera pada terminal).

---

## 🌐 Panduan Deployment (Hosting)
Proyek ini sudah dikonfigurasi secara optimal untuk di-deploy pada **Vercel** maupun **Netlify**.

### 1. Deploy ke Netlify
Konfigurasi file `netlify.toml` sudah disesuaikan secara default. Netlify akan secara otomatis menggunakan preset Nitro dan membuat folder `.netlify/` sebagai output SSR. Cukup hubungkan repositori Anda ke Netlify dan proses *build* akan berjalan otomatis tanpa perlu mengubah perintah.

### 2. Deploy ke Vercel
Spesifikasi versi Node.js yang dibutuhkan (`>=20.0.0`) telah disuntikkan ke `package.json`. Vercel akan otomatis mengenali proyek ini sebagai aplikasi React/Vite.
- Cukup hubungkan GitHub Anda ke Vercel.
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Node.js Version: Secara otomatis menggunakan versi >=20 berkat `engines` di package.json.

*💡 **Catatan Penting**: Vercel & Netlify menggunakan server Linux yang bersifat **Case-Sensitive**. Pastikan penulisan huruf besar dan kecil pada proses `import` komponen selalu sesuai dengan nama file aslinya untuk menghindari pesan error `Module Not Found`.*

---

<div align="center">
  <p>Dibangun dengan ❤️ untuk mengembangkan komunitas debat yang lebih baik.<br>v0.8 · STAR UNIVERSE</p>
</div>
