# Dokumentasi Kegiatan Workshop Day 1

## 1. Informasi Kegiatan

-   **Nama peserta:** Umair Saddad Rafif
-   **Nama kegiatan:** Day 1 Proyek Workshop
-   **Tema workshop:** Building with AI, Managing Change with GitHub
-   **Materi utama:** Prompt Engineering, Git, GitHub, dan pengembangan
    aplikasi sederhana.

## 2. Rangkuman Materi Workshop

### A. Prompt Engineering

Prompt engineering adalah cara merancang instruksi agar AI memberikan
jawaban atau hasil yang tepat, relevan, dan sesuai kebutuhan. Prompt
merupakan masukan yang diberikan kepada model AI. Bentuknya dapat berupa
pertanyaan sederhana, kata kunci, instruksi terperinci, maupun potongan
kode.

Workshop menjelaskan bahwa konteks sangat penting dalam membuat prompt.
Struktur prompt yang baik dapat mencakup: - **Role:** peran yang harus
dijalankan AI. - **Task:** tugas yang diminta. - **Context:** latar
belakang dan kebutuhan proyek. - **Format:** bentuk keluaran yang
diharapkan.

Contoh penerapannya adalah meminta AI membuat Student Task Planner untuk
mahasiswa tahun pertama, dengan daftar tugas, tanggal tenggat, status
penyelesaian, dan fitur penyaringan tugas. Prompt juga dapat menyertakan
batasan teknologi dan permintaan penjelasan cara menjalankan aplikasi.

### B. Pengertian Git dan GitHub

Git adalah sistem version control yang digunakan untuk melacak perubahan
file, termasuk siapa yang melakukan perubahan, kapan perubahan
dilakukan, dan apa yang diubah. Git membantu pengembang menyimpan
riwayat perkembangan proyek.

GitHub adalah platform berbasis web untuk menyimpan repository Git
secara online dan mendukung kolaborasi. Dengan demikian, Git bekerja
sebagai alat pengelola versi, sedangkan GitHub menjadi tempat
penyimpanan dan kolaborasi repository secara daring.

### C. Alur Kerja Git

Materi workshop memperkenalkan tiga bagian penting dalam alur kerja
Git: 1. **Working directory/tree:** tempat file proyek dikerjakan dan
diubah. 2. **Staging area:** tempat menyiapkan perubahan yang akan
dimasukkan ke commit berikutnya. 3. **Git directory/repository:** tempat
Git menyimpan metadata dan database objek serta riwayat proyek.

Alur sederhananya adalah melakukan perubahan pada file di working
directory, memilih perubahan yang akan disimpan ke staging area,
kemudian membuat commit agar perubahan tercatat dalam repository.

### D. Perintah Dasar Git

Beberapa perintah yang dibahas dalam workshop antara lain:

  -----------------------------------------------------------------------
  Perintah                            Kegunaan
  ----------------------------------- -----------------------------------
  `git init`                          Membuat repository Git baru pada
                                      folder proyek.

  `git add .`                         Menambahkan perubahan file ke
                                      staging area.

  `git add --all`                     Menambahkan seluruh perubahan ke
                                      staging area.

  `git commit -m "pesan"`             Menyimpan perubahan ke riwayat
                                      repository dengan pesan commit.

  `git remote add origin <url>`       Menghubungkan repository lokal
                                      dengan repository remote.

  `git push origin main`              Mengirim commit dari branch main ke
                                      repository remote.

  `git pull origin main`              Mengambil dan menggabungkan
                                      perubahan dari branch main pada
                                      remote.

  `git clone <url>`                   Menyalin repository remote ke
                                      komputer lokal.
  -----------------------------------------------------------------------

### E. Persiapan Git, VS Code, dan SSH

Workshop juga membahas persiapan perangkat sebelum mengelola proyek.
Peserta diperkenalkan pada instalasi Git, pemeriksaan versi melalui
`git --version`, serta pengaturan identitas pengguna menggunakan
`git config --global user.name` dan `git config --global user.email`.

Selain itu, materi mencakup penggunaan Visual Studio Code dan
pemeriksaan perintah `code --version`. Bagian lanjutan menjelaskan
pembuatan SSH key dengan algoritma Ed25519, penambahan public key ke
pengaturan SSH GitHub, dan pemeriksaan koneksi menggunakan
`ssh -T git@github.com`. Langkah konfigurasi tertentu pada materi
ditujukan untuk macOS, sehingga instruksinya perlu disesuaikan apabila
menggunakan sistem operasi lain.

## 3. Poin Penting dan Pengetahuan Baru

Berikut beberapa hal penting yang dipelajari selama workshop: - Prompt
yang menyertakan peran, tugas, konteks, dan format akan membantu AI
memahami kebutuhan dengan lebih jelas. - Git dan GitHub memiliki fungsi
yang berbeda, tetapi dapat digunakan bersama dalam pengembangan
proyek. - Perubahan file sebaiknya melalui staging area sebelum dicatat
sebagai commit. - Pesan commit perlu dibuat jelas agar riwayat perubahan
mudah dipahami. - Repository lokal dapat dihubungkan dengan repository
GitHub menggunakan remote. - Perintah `push` digunakan untuk mengirim
perubahan ke repository online, sedangkan `pull` digunakan untuk
mengambil dan menggabungkan perubahan dari remote. - Pengaturan
identitas Git dan autentikasi SSH membantu menyiapkan lingkungan kerja
untuk menggunakan GitHub. - Dokumentasi dan struktur repository yang
rapi memudahkan proyek diperiksa serta dikembangkan kembali.

## 4. Praktik Proyek: Student Task Planner

Pada bagian praktik, peserta diarahkan untuk membuat aplikasi sederhana
bernama **Student Task Planner**. Aplikasi ini ditujukan untuk membantu
mahasiswa tahun pertama mengelola tugas dan tenggat waktu.

Berdasarkan contoh kebutuhan yang dibahas, aplikasi dirancang agar
dapat: - Menampilkan daftar contoh tugas. - Menampilkan judul tugas,
tanggal tenggat, dan status penyelesaian. - Memungkinkan pengguna
menandai tugas sebagai selesai. - Menyediakan filter untuk melihat
seluruh tugas, tugas yang belum selesai, dan tugas yang sudah selesai. -
Memiliki tampilan yang bersih, mudah dibaca, dan responsif.

Panduan alur pengerjaan workshop adalah memasang platform berbantuan AI,
menulis prompt untuk membuat aplikasi, menginisialisasi Git dengan
`git init`, melakukan commit dan push ke GitHub, membuat perubahan,
kemudian kembali melakukan commit dan push untuk menyimpan perkembangan
terbaru.

## 5. Pendapat Pribadi tentang Day 1 Proyek Workshop

Menurut saya, kegiatan Day 1 Proyek Workshop sangat bermanfaat karena
memberikan pemahaman awal tentang penggunaan AI dalam proses pembuatan
aplikasi sekaligus cara mengelola hasil pekerjaan menggunakan Git dan
GitHub. Materi prompt engineering membuat saya memahami bahwa hasil dari
AI tidak hanya bergantung pada pertanyaan, tetapi juga pada kejelasan
instruksi dan konteks yang diberikan.

Saya juga mendapatkan pengetahuan baru mengenai pentingnya version
control. Dengan Git, perubahan pada proyek dapat dicatat secara bertahap
sehingga proses pengerjaan lebih teratur dan kesalahan lebih mudah
ditelusuri. Sementara itu, GitHub membantu menyimpan proyek secara
online agar dapat diakses dan dikembangkan kembali.

Bagian praktik Student Task Planner membuat materi terasa lebih nyata
karena konsep yang dijelaskan dapat diterapkan pada sebuah proyek
sederhana. Secara keseluruhan, workshop ini menambah wawasan dan menjadi
bekal awal untuk mengembangkan proyek digital dengan bantuan AI serta
pengelolaan kode yang lebih terstruktur.

## 6. Kesimpulan

Workshop Day 1 memberikan pengenalan mengenai penyusunan prompt AI,
penggunaan Git dan GitHub, serta penerapan version control dalam proyek
sederhana. Pengetahuan tersebut dapat digunakan sebagai dasar untuk
membuat, menyimpan, memperbarui, dan mendokumentasikan proyek secara
lebih sistematis.
