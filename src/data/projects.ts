export type Project = {
  id: number;
  title: string;
  year: string;
  description: string;
  longDescription?: string;
  challenge?: string;
  solution?: string;
  category: "Front-End" | "UI/UX" | "Local AI" | "Fullstack Web" | "Mobile App Development" | "Digital Forensics";
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
    techStack: ["Flutter", "Dart", "Local Storage", "UI/UX Design", "Mobile App Development"],
    image: "/projects/cashyapps1.png",
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
    title: "E-Health Mobile App",
    year: "2024",
    description:
      "A mobile health appointment booking experience redesigned from scratch, improving task completion rate by 60% through simplified user flows.",
    longDescription:
      "A complete mobile UX redesign for a local health clinic's appointment booking system. The project involved contextual user interviews, journey mapping, and iterative prototyping across 4 design sprints. The final design reduced the booking flow from 8 screens to 3 while maintaining all functionality.",
    challenge:
      "The existing booking app had a 40% drop-off rate at the doctor selection step, with users reporting confusion about availability, specializations, and the overall booking flow.",
    solution:
      "Redesigned the flow with smart defaults, inline calendar availability, doctor cards with reviews, and a progress indicator. Usability testing showed 60% improvement in task completion rate.",
    category: "UI/UX",
    techStack: ["Figma", "Wireframing", "Usability Testing"],
    image: "/projects/ehealth.webp",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 7,
    title: "E-Health Mobile App",
    year: "2024",
    description:
      "A mobile health appointment booking experience redesigned from scratch, improving task completion rate by 60% through simplified user flows.",
    longDescription:
      "A complete mobile UX redesign for a local health clinic's appointment booking system. The project involved contextual user interviews, journey mapping, and iterative prototyping across 4 design sprints. The final design reduced the booking flow from 8 screens to 3 while maintaining all functionality.",
    challenge:
      "The existing booking app had a 40% drop-off rate at the doctor selection step, with users reporting confusion about availability, specializations, and the overall booking flow.",
    solution:
      "Redesigned the flow with smart defaults, inline calendar availability, doctor cards with reviews, and a progress indicator. Usability testing showed 60% improvement in task completion rate.",
    category: "UI/UX",
    techStack: ["Figma", "Wireframing", "Usability Testing"],
    image: "/projects/ehealth.webp",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export const categories = ["All", "Front-End", "UI/UX", "Local AI", "Fullstack Web", "Mobile App Development", "Digital Forensics"] as const;
