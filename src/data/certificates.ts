export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  longDescription?: string;
  category: "Bootcamp" | "Course" | "Award" | "Other" | "Certification" | "Committee / Volunteer";
  skills: string[];
  image: string;
  images?: string[];
  credentialUrl: string;
};

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "November 2025",
    description:
      "Sertifikat kompetensi kelulusan untuk kelas Belajar Dasar AI dari Dicoding Academy.",
    longDescription:
      "Telah menyelesaikan dan memenuhi standar kelulusan pada kelas Belajar Dasar AI yang diselenggarakan oleh Dicoding Academy. Sertifikat ini terverifikasi secara resmi dan berlaku selama 3 tahun hingga 20 November 2028.",
    category: "Course",
    skills: ["Artificial Intelligence", "AI Fundamentals"],
    image: "/certificate/sertifikat1.png", 
    credentialUrl: "https://dicoding.com/certificates/KEXL2NV70ZG2",
  },
  {
    id: 2,
    title: "Memulai Pemrograman dengan Dart",
    issuer: "Dicoding Indonesia",
    date: "Desember 2025",
    description:
      "Sertifikat kompetensi kelulusan untuk kelas Memulai Pemrograman dengan Dart dari Dicoding Academy.",
    longDescription:
      "Telah menyelesaikan dan memenuhi standar kelulusan pada kelas Memulai Pemrograman dengan Dart yang diselenggarakan oleh Dicoding Academy. Sertifikat ini terverifikasi secara resmi dan berlaku selama 3 tahun hingga 14 Desember 2028.",
    category: "Course",
    skills: ["Dart", "Programming Fundamentals", "Object-Oriented Programming"],
    image: "/certificate/sertifikat2.png", 
    credentialUrl: "https://dicoding.com/certificates/MEPJ2G4RLP3V",
  },
  {
    id: 3,
    title: "Belajar Membuat Aplikasi Flutter untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Desember 2025",
    description:
      "Sertifikat kompetensi kelulusan untuk kelas Belajar Membuat Aplikasi Flutter untuk Pemula dari Dicoding Academy.",
    longDescription:
      "Telah menyelesaikan dan memenuhi standar kelulusan pada kelas Belajar Membuat Aplikasi Flutter untuk Pemula yang diselenggarakan oleh Dicoding Academy. Sertifikat ini terverifikasi secara resmi dan berlaku selama 3 tahun hingga 29 Desember 2028.",
    category: "Course",
    skills: ["Flutter", "Dart", "Mobile Development", "Cross-Platform"],
    image: "/certificate/sertifikat3.png", 
    credentialUrl: "https://dicoding.com/certificates/72ZDKW5DLPYW",
  },
  {
    id: 4,
    title: "Belajar Fundamental Aplikasi Flutter",
    issuer: "Dicoding Indonesia",
    date: "Maret 2026",
    description:
      "Sertifikat kompetensi kelulusan untuk kelas Belajar Fundamental Aplikasi Flutter dari Dicoding Academy.",
    longDescription:
      "Telah menyelesaikan dan memenuhi standar kelulusan pada kelas Belajar Fundamental Aplikasi Flutter yang diselenggarakan oleh Dicoding Academy. Sertifikat ini terverifikasi secara resmi dan berlaku selama 3 tahun hingga 03 Maret 2029.",
    category: "Course",
    skills: ["Flutter", "Dart", "Mobile Development", "API Integration"],
    image: "/certificate/sertifikat4.png", 
    credentialUrl: "https://dicoding.com/certificates/L4PQ96402P01",
  },
  {
    id: 5,
    title: "Anggota Sie IT Support - Kuliah Umum & Makrab",
    issuer: "ITB STIKOM Bali",
    date: "September 2024",
    description:
      "Sertifikat penghargaan atas partisipasi sebagai kepanitiaan bagian IT Support pada acara Kuliah Umum dan Ramah Tamah Mahasiswa Baru 2024.",
    longDescription:
      "Berpartisipasi aktif sebagai Anggota Sie IT Support dalam penyelenggaraan acara 'KULIAH UMUM DAN RAMAH TAMAH MAHASISWA BARU 2024' yang diselenggarakan oleh Himpunan Mahasiswa STIKOM Jimbaran pada tanggal 19 September 2024. Tanggung jawab mencakup dukungan teknis operasional dan penanganan masalah IT (troubleshooting) selama acara berlangsung.",
    category: "Committee / Volunteer",
    skills: ["IT Support", "Technical Troubleshooting", "Hardware Setup", "Event Management"],
    image: "/certificate/sertifikat5.jpeg", 
    credentialUrl: "#",
  },
  {
    id: 6,
  title: "Certified Network Administrator (CNA)",
  issuer: "BNSP - LSP Informatika",
  date: "Mei 2026",
  description:
    "Sertifikat kompetensi nasional resmi dari BNSP untuk bidang Jaringan Komputer dengan kualifikasi Administrator Jaringan.",
  longDescription:
    "Telah dinyatakan kompeten oleh Badan Nasional Sertifikasi Profesi (BNSP) melalui Lembaga Sertifikasi Profesi (LSP) Informatika dan berhak menyandang gelar Certified Network Administrator (CNA). Unit kompetensi yang dikuasai mencakup perancangan topologi dan keamanan jaringan, konfigurasi routing, penanganan serangan, hingga troubleshooting dan optimalisasi kinerja sistem jaringan. Sertifikat ini berlaku selama 3 tahun hingga 18 Mei 2029.",
  category: "Certification",
  skills: ["Network Administration", "Network Security", "Routing", "Network Troubleshooting", "Topology Design"],
  image: "/certificate/sertifikat6.jpeg", 
  credentialUrl: "#",
  },
  {
  id: 8,
    title: "Android Development Associate",
    issuer: "Logical Operations",
    date: "Mei 2026",
    description:
      "Sertifikasi internasional dari Logical Operations yang membuktikan kompetensi dasar dalam pengembangan aplikasi Android.",
    longDescription:
      "Telah berhasil menyelesaikan seluruh persyaratan dan diakui secara resmi sebagai Android Development Associate oleh Logical Operations. Sertifikasi ini divalidasi pada tanggal 20 Mei 2026 dan menjadi bukti penguasaan standar industri dalam pengembangan aplikasi seluler untuk ekosistem Android.",
    category: "Certification",
    skills: ["Android Development", "Mobile App Development", "UI/UX Mobile"],
    image: "/certificate/sertifikat7.png", // Sesuaikan nama file gambarnya
    credentialUrl: "#", // Anda bisa mengubahnya menjadi link verifikasi jika ada, atau menaruh Credential ID: 184967898 di UI website Anda
  },
  {
  id: 9,
  title: "Certificate in Python Programming Associate",
  issuer: "Logical Operations",
  date: "March 2025",
  description: "Sertifikasi dari Logical Operations yang membuktikan kompetensi dasar dalam pemrograman Python dan pengembangan aplikasi menggunakan Python.",
  longDescription: "Telah berhasil menyelesaikan persyaratan untuk memperoleh gelar Certificate in Python Programming Associate dari Logical Operations. Sertifikasi ini diberikan pada tanggal 4 Maret 2025 dan menunjukkan pemahaman mengenai dasar-dasar pemrograman Python, struktur data, kontrol alur program, fungsi, serta penerapan konsep pemrograman untuk membangun solusi perangkat lunak sederhana.",
  category: "Certification",
  skills: [
    "Python Programming",
    "Problem Solving",
    "Data Structures",
    "Control Flow",
    "Functions",
    "Software Development Fundamentals"
  ],
  image: "/certificate/sertifikat8.png",
  credentialUrl: "#"
  },
];

export const certCategories = ["All", "Bootcamp", "Course", "Award", "Other", "Certification","Committee / Volunteer"] as const;
