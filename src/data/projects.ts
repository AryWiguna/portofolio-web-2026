export type Project = {
  id: number;
  title: string;
  year: string;
  description: string;
  longDescription?: string;
  challenge?: string;
  solution?: string;
  category: "Front-End" | "UI/UX" | "Local AI" | "Fullstack Web" | "Mobile App Development" | "Digital Forensics" | "Computer Vision & AI" | "Network Administration";
  techStack: string[];
  image: string;
  images?: string[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "ML STORE - Sistem Layanan Game",
    year: "2025",
    description:
      "Platform otomatisasi layanan top-up game dan jasa joki profesional untuk mengatasi kendala antrean transaksi dan optimalisasi layanan pelanggan.",
    longDescription:
      "ML STORE adalah platform layanan gaming fungsional secara end-to-end yang dibangun sebagai Proyek Akhir Mata Kuliah Back-end Web Development. Di tengah pesatnya industri e-sports, platform ini hadir untuk mengubah manajemen transaksi manual yang tidak teratur menjadi sistem otomatis yang mampu menangani transaksi skala besar dengan tingkat keamanan data yang tinggi.",
    challenge:
      "Tantangan utama adalah mencegah terjadinya pesanan ganda (double order) pada sistem antrean yang sibuk, serta meminimalkan beban kerja admin dalam merespon pertanyaan berulang mengenai daftar harga dan estimasi layanan.",
    solution:
      "Mengembangkan logika pemrosesan transaksi berbasis PHP untuk memastikan setiap pesanan masuk ke dalam antrean secara berurutan dengan pelacakan status yang presisi (Pending, Processing, Success). Selain itu, mengintegrasikan API Chatbot AI menggunakan JavaScript untuk otomatisasi layanan pelanggan 24/7.",
    category: "Fullstack Web",
    techStack: ["PHP", "JavaScript", "AI Chatbot API", "MySQL"],
    image: "/projects/mlstoreweb.png",
    images: [
      "/projects/mlstoreweb.png",
      "/projects/mlstoreweb2.png",
      "/projects/mlstoreweb3.png",
      "/projects/mlstoreweb4.png",
      "/projects/mlstoreweb5.png"
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "Umdara (UMKM Daerah Rural)",
    year: "2025",
    description:
      "Platform hybrid commerce yang menggabungkan fitur e-commerce dan media sosial untuk memberdayakan UMKM di daerah pedesaan dan pedagang kaki lima.",
    longDescription:
      "Dikembangkan untuk kompetisi Gemastik, Umdara adalah purwarupa aplikasi web terpadu yang bertujuan menjembatani kesenjangan digital bagi UMKM pedesaan. Alih-alih hanya berfokus pada transaksi, Umdara membangun ekosistem komunitas digital inklusif yang memungkinkan para pemilik usaha untuk berjualan sekaligus berinteraksi langsung dengan pelanggan layaknya menggunakan media sosial.",
  challenge:
    "Merancang platform untuk pengguna yang sangat awam terhadap teknologi. Antarmuka aplikasi e-commerce pada umumnya sering kali terlalu rumit untuk diadaptasi oleh pedagang kaki lima dan UMKM pedesaan.",
  solution:
    "Melakukan riset lapangan dengan mewawancarai pedagang secara langsung untuk merancang UI yang sangat disederhanakan. Menggabungkan logika E-Commerce dengan Social Media dalam satu ekosistem agar alur interaksi terasa lebih akrab dan mudah dipahami.",
  category: "Fullstack Web",
  techStack: ["JavaScript", "Front-end", "Back-end", "UI/UX"],
  image: "/projects/umdaraweb1.png",
  images: [
    "/projects/umdaraweb1.png",
    "/projects/umdaraweb2.png",
    "/projects/umdaraweb3.png",
  ],
  github: "https://github.com",
  demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Cashy Apps - Money Management",
    year: "2026",
    description:
      "Aplikasi mobile pencatatan keuangan pribadi yang intuitif dengan fitur pelacakan transaksi, kategorisasi, dan visualisasi statistik interaktif.",
    longDescription:
      "Cashy Apps adalah aplikasi mobile manajemen keuangan yang dirancang untuk memudahkan pengguna melacak arus kas harian. Aplikasi ini dilengkapi dengan fitur CRUD transaksi yang lengkap, dashboard yang bersih, serta analisis keuangan menggunakan pie chart interaktif. Seluruh data disimpan secara lokal di perangkat (Penyimpanan Data Lokal) untuk memastikan privasi pengguna dan akses offline yang cepat.",
    challenge:
      "Banyak pengguna kesulitan konsisten mencatat pengeluaran karena antarmuka aplikasi keuangan yang terlalu rumit, serta adanya kekhawatiran terhadap privasi data pribadi jika disimpan di server cloud.",
    solution:
      "Mengembangkan aplikasi mobile dengan fokus pada UI/UX yang bersih dan proses input data yang cepat. Menyediakan kategorisasi transaksi yang jelas (Makanan, Gaji, Transportasi, dll), dan mengimplementasikan penyimpanan lokal (Local Storage). Untuk mempermudah evaluasi keuangan, ditambahkan fitur ringkasan metrik dan grafik visual yang mudah dibaca.",
    category: "Mobile App Development",
    techStack: ["Flutter", "Dart", "Local Storage", "UI/UX Design", "Mobile App Development", "Front-end"],
    image: "/projects/cashyapps6.png",
    images: [
      "/projects/cashyapps1.png",
      "/projects/cashyapps2.png",
      "/projects/cashyapps3.png",
      "/projects/cashyapps4.png",
      "/projects/cashyapps5.png",
      "/projects/cashyapps6.png",
    ],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 4,
    title: "Investigasi Forensik Citra: Deteksi Manipulasi Laporan",
    year: "2026",
    description:
      "Analisis forensik digital untuk mendeteksi manipulasi citra (copy-move forgery) pada foto inventaris gudang menggunakan teknik Passive Image Forensics.",
    longDescription:
      "Proyek investigasi forensik digital (Nomor Kasus: 2026/WH-INV/001) yang bertujuan untuk memverifikasi keaslian foto dokumentasi laporan stok gudang. Investigasi ini dilakukan untuk membuktikan kecurigaan audit terkait rekayasa digital yang dilakukan guna menutupi defisit barang. Proses mencakup pengamanan bukti (Chain of Custody & hashing) hingga pemeriksaan struktur file dan piksel tanpa memerlukan kamera asli.",
    challenge:
      "Membuktikan secara matematis dan objektif apakah file gambar bukti telah mengalami modifikasi (kloning objek kardus) pasca-pengambilan foto untuk memanipulasi hasil audit perusahaan.",
    solution:
      "Melakukan analisis menggunakan platform Forensically. Memanfaatkan fitur Clone Detection untuk menemukan kemiripan ekstrem (duplikasi piksel) antar tumpukan kardus, dan Error Level Analysis (ELA) untuk mengungkap inkonsistensi rasio kompresi (noise luminance) pada area yang direkayasa. Hasilnya berhasil membuktikan secara sah bahwa foto tersebut adalah hasil manipulasi.",
    category: "Digital Forensics",
    techStack: ["Forensically", "Clone Detection", "Error Level Analysis (ELA)", "Data Integrity"],
    image: "/projects/forensik1.jpg",
    images: [
      "/projects/forensik1.jpg",
      "/projects/forensik2.jpg",
    ],
    github: "", // Bisa dikosongkan atau diisi link laporan PDF jika ada
    demo: "https://youtu.be/kkxJxYWEQiA"
  },
  {
    id: 5,
    title: "Analisis Memori: Deteksi Backdoor Meterpreter",
    year: "2026",
    description:
      "Investigasi forensik memori untuk mendeteksi, mengekstrak, dan menganalisis malware backdoor Meterpreter yang beroperasi di dalam RAM menggunakan Volatility.",
    longDescription:
      "Proyek analisis malware dan forensik memori (Memory Forensics) untuk menginvestigasi indikasi kompromi sistem pada mesin Windows. Investigasi ini membedah memory dump untuk melacak proses anomali, mengidentifikasi koneksi jaringan ke server Command and Control (C2), serta mengekstrak payload berbahaya dari memori untuk analisis statis lanjutan.",
    challenge:
      "Ancaman siber modern sering kali beroperasi sepenuhnya di dalam memori volatil (RAM) atau melakukan injeksi kode berbahaya ke dalam proses sistem Windows yang sah, sehingga berhasil menghindari deteksi antivirus tradisional.",
    solution:
      "Memanfaatkan Volatility Framework untuk analisis memori dinamis. Menggunakan plugin 'connscan' untuk mengidentifikasi koneksi outbound anomali (C2) pada port 1337, dilanjutkan dengan 'procdump' untuk mengisolasi dan mengekstrak proses (PID 1776). File executable yang diekstrak kemudian diverifikasi melalui VirusTotal dan terbukti sebagai Trojan/Backdoor Meterpreter.",
    category: "Digital Forensics",
    techStack: ["Volatility Framework", "Memory Forensics", "Malware Analysis", "VirusTotal"],
    image: "/projects/forensik3.png",
    images: [
      "/projects/forensik3.png",
      "/projects/forensik4.png",
      "/projects/forensik5.png",
    ],
    github: "", 
    demo: ""
  },
  {
    id: 6,
    title: "Space Gesture Controller",
    year: "2026",
   description:
    "Aplikasi computer vision interaktif yang menerjemahkan gestur tangan secara real-time menjadi partikel visual dan bentuk dinamis menggunakan OpenCV dan MediaPipe.",
    longDescription:
    "Proyek ini mengeksplorasi interaksi manusia-komputer dengan memanfaatkan pelacakan tangan untuk mengontrol elemen visual di layar. Dibangun menggunakan Python, sistem ini menangkap tangkapan webcam melalui OpenCV, memproses landmark (titik referensi) tangan yang kompleks menggunakan MediaPipe, dan merender grafis berbasis partikel interaktif menggunakan Pygame. Sistem ini dapat beralih dengan mulus di antara berbagai mode visual—seperti bentuk Saturnus 3D, hati dari partikel, dan teks kustom—berdasarkan kombinasi jari tertentu (misalnya, 1 jari, 3 jari, atau kepalan tangan).",
    challenge:
    "Memastikan performa real-time tanpa lag sambil secara bersamaan menangkap frame video, menghitung koordinat landmark tangan, dan merender ratusan partikel dinamis dalam loop tampilan Pygame.",
    solution:
    "Mengimplementasikan logika pengenalan gestur yang efisien dengan menganalisis koordinat node dari MediaPipe untuk menghitung jari yang terangkat secara akurat. Mengoptimalkan loop rendering partikel Pygame untuk mempertahankan frame rate yang mulus di semua mode visual.",
    category: "Computer Vision & AI",
    techStack: ["Python", "OpenCV", "MediaPipe", "Pygame"],
    image: "/projects/projectpython1.png",
    images: [
      "/projects/projectpython1.png",
      "/projects/projectpython2.png",
      "/projects/projectpython3.png",
    ],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
  id: 7,
  title: "Enterprise Network Infrastructure Design",
  year: "2026",
  description:
    "Perancangan dan konfigurasi topologi jaringan komputer yang komprehensif, mencakup implementasi routing, switching, dan manajemen alamat IP (Subnetting).",
  longDescription:
    "Proyek ini didasarkan pada implementasi praktis administrasi jaringan, di mana saya merancang, mengonfigurasi, dan melakukan troubleshooting infrastruktur jaringan dari awal. Prosesnya meliputi pembuatan desain topologi, perhitungan dan alokasi IP Address (IPv4), konfigurasi VLAN pada switch untuk segmentasi keamanan jaringan, serta pengaturan routing statis/dinamis untuk menghubungkan berbagai subnet. Seluruh konfigurasi didokumentasikan dan diuji untuk memastikan sistem berjalan sesuai dengan standar operasional jaringan.",
  challenge:
    "Menghubungkan berbagai segmen jaringan (VLAN) yang berbeda agar dapat saling berkomunikasi dengan lancar, serta merancang skema pengalamatan IP yang efisien untuk menghindari pemborosan alokasi IP (IP exhaustion) dan bentrokan alamat (IP conflict).",
  solution:
    "Menerapkan metode perhitungan subnetting yang presisi untuk efisiensi ruang IP, dan mengonfigurasi Inter-VLAN Routing pada router agar perangkat di segmen yang berbeda dapat saling bertukar data. Pengujian konektivitas end-to-end dilakukan secara menyeluruh untuk memverifikasi bahwa seluruh topologi jaringan stabil dan aman.",
  category: "Network Administration",
  techStack: ["Cisco Packet Tracer", "Routing & Switching", "VLAN", "Subnetting", "Network Troubleshooting"],
  image: "/projects/Network Infrastructure Design.pdf",
  github: "https://github.com",
  demo: "https://demo.com"
  },
];

export const categories = ["All", "Front-End", "UI/UX", "Local AI", "Fullstack Web", "Mobile App Development", "Digital Forensics", "Computer Vision & AI"] as const;
