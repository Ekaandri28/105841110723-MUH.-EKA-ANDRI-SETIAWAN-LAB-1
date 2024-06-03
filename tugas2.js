function ubahJudulAplikasi() {
    const judul = document.getElementById('judul');
    const deskripsi = document.getElementById('deskripsi');
    const button = document.getElementById('ubahJudul');
    const output = document.getElementById('output');
  
    button.addEventListener('click', () => {
      const nama = prompt('Masukkan nama Anda:');
      judul.innerHTML = `Selamat Datang, `;
      deskripsi.innerHTML = `siap mengerjakan tugas berikutnya `;
      output.innerHTML = `nama anda adalah selamat mengerjakan ${nama}.`;
    });
  }
  
  ubahJudulAplikasi();