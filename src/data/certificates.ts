export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  longDescription?: string;
  category: "Bootcamp" | "Course" | "Award" | "Other" | "Certification" | "Committee / Volunteer" | "Seminar / Workshop";
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
    image: "/certificate/sertifikat7.png",
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
  {
  id: 10,
  title: "Sertifikat Pembimbing Tim STIKOM BALI UX UMDARA - GEMASTIK XVIII",
  issuer: "Kementerian Pendidikan Tinggi, Sains, dan Teknologi RI & Universitas Telkom",
  date: "Oktober 2025",
  description: "Berpartisipasi sebagai pengembang web dalam Tim UX UMDARA yang mewakili STIKOM Bali pada ajang tingkat nasional GEMASTIK XVIII.",
  longDescription: "Berperan langsung dalam pengembangan antarmuka dan sistem web untuk proyek UMDARA (UMKM Daerah Rural) yang diikutsertakan pada Pagelaran Mahasiswa Tingkat Nasional Bidang Teknologi Informasi dan Komunikasi (GEMASTIK) XVIII Tahun 2025. Sertifikat ini merupakan dokumen resmi keikutsertaan tim di bawah bimbingan I Made Pradipta, a.Md., S.Kom., M.Kom yang diselenggarakan di Universitas Telkom pada 27-30 Oktober 2025.",
  category: "Certification",
  skills: [
    "Team Leadership",
    "UI/UX Design",
    "Project Management",
    "Frontend Development",
    "UX/UI Research",
    "Web Development",
    "Team Collaboration",
    "Problem Solving",
  ],
  image: "/certificate/sertifikat9.jpeg", 
  credentialUrl: "#"
},
{
  id: 11,
  title: "Certificate of Appreciation - Coinfest Asia 2024: Game Day",
  issuer: "W3GG & Coinfest Asia",
  date: "Agustus 2024",
  description: "Penghargaan atas kontribusi aktif sebagai anggota komunitas dalam menyukseskan acara Coinfest Asia 2024: Game Day.",
  longDescription: "Sertifikat penghargaan ini diberikan kepada I Komang Ary Wiguna atas kontribusinya sebagai anggota komunitas dalam acara Coinfest Asia 2024: Game Day yang diselenggarakan oleh W3GG pada 23 Agustus 2024. Penghargaan ini merupakan bentuk apresiasi atas dedikasi waktu, bakat, dan semangat belajar dalam menciptakan acara yang sukses dan berkesan.",
  category: "Certification",
  skills: [
    "Community Engagement",
    "Networking",
    "Event Participation",
    "Adaptability",
    "Communication"
  ],
  image: "/certificate/sertifikat10.jpeg", 
  credentialUrl: "#"
},
{
  id: 12,
  title: "Peserta Sosialisasi Apple Academy Developer",
  issuer: "ITB STIKOM Bali Kampus Jimbaran",
  date: "Oktober 2024",
  description: "Sertifikat atas partisipasi sebagai peserta dalam kegiatan sosialisasi Apple Academy Developer yang diselenggarakan oleh ITB STIKOM Bali Kampus Jimbaran.",
  longDescription: "Diberikan kepada I Komang Ary Wiguna atas partisipasinya sebagai peserta dalam kegiatan sosialisasi Apple Academy Developer. Acara ini diselenggarakan di Institut Teknologi dan Bisnis STIKOM Bali Kampus Jimbaran pada hari Selasa, 1 Oktober 2024. Nomor Sertifikat: 225/DIRKJ/WRII/ITBSTIKOM/X/24.",
  category: "Seminar / Workshop",
  skills: [
    "Apple Developer Ecosystem",
    "Continuous Learning",
    "Seminar Participation",
    "Networking"
  ],
  image: "/certificate/sertifikat11.png",
  credentialUrl: "#"
},
{
  id: 13,
  title: "Peserta Seminar Nasional FASTTEKNO 2025",
  issuer: "ITB STIKOM Bali",
  date: "Mei 2025",
  description: "Sertifikat atas partisipasi sebagai peserta dalam Seminar Nasional FASTTEKNO (Festival Teknologi) 2025.",
  longDescription: "Diberikan kepada I Komang Ary Wiguna sebagai Peserta Seminar dalam Seminar Nasional FASTTEKNO (Festival Teknologi) 2025 dengan tema \"Exploring Beyond the Future World of Technology\" yang diselenggarakan oleh ITB STIKOM Bali pada tanggal 7 Mei 2025. Nomor Sertifikat: 5393/SRTF/KMHS/V/2025.",
  category: "Seminar / Workshop",
  skills: [
    "Technology Trends",
    "Continuous Learning",
    "Seminar Participation",
    "Networking"
  ],
  image: "/certificate/sertifikat12.png",
  credentialUrl: "#"
},
{
  id: 14,
  title: "Juara 2 Turnamen Tekken 8 - FANTASI 2026",
  issuer: "HIMAPRODI TI - ITB STIKOM Bali",
  date: "Februari 2026",
  description: "Penghargaan Juara 2 pada ajang kompetisi E-Sport Tekken 8 dalam perhelatan FANTASI HIMAPRODISI ITB STIKOM Bali.",
  longDescription: "Meraih Juara 2 dalam turnamen E-Sport Tekken 8 pada ajang FANTASI 2026 yang diselenggarakan oleh Himpunan Mahasiswa Program Studi Teknologi Informasi (HIMAPRODI TI) ITB STIKOM Bali. Kompetisi ini menguji ketangkasan strategi, refleks, pemahaman frame data, dan sportivitas dalam ranah gaming kompetitif.",
  category: "Award",
  skills: ["E-Sport", "Competitive Gaming", "Strategic Thinking", "Tekken 8", "Sportsmanship"],
  image: "/certificate/sertifikat-tekken8.jpeg",
  credentialUrl: "#"
},
{
  id: 15,
  title: "Seminar Kripto Sebagai Aset Masa Depan",
  issuer: "INDODAX & ITB STIKOM Bali",
  date: "Juni 2025",
  description: "Sertifikat partisipasi seminar nasional mengenai teknologi blockchain, ekosistem kripto, dan aset digital masa depan bersama INDODAX.",
  longDescription: "Diberikan kepada I Komang Ary Wiguna sebagai peserta seminar bertema \"Kripto Sebagai Aset Masa Depan\" yang diselenggarakan oleh INDODAX bekerja sama dengan Institut Teknologi dan Bisnis (ITB) STIKOM Bali Kampus Jimbaran pada 26 Juni 2025. Acara ini ditandatangani secara resmi oleh Oscar Darmawan (Co-Founder INDODAX) dan Ir. I Putu Gede Abdi Sudiatmika, S.Pd., M.Kom (Direktur ITB STIKOM Bali Kampus Jimbaran).",
  category: "Seminar / Workshop",
  skills: ["Cryptocurrency", "Blockchain Basics", "Digital Assets", "Financial Technology", "Web3"],
  image: "/certificate/sertifikat-indodax.png",
  credentialUrl: "#"
},
{
  id: 16,
  title: "Peserta Lomba Mobile Legends FESTIKA VI",
  issuer: "HIMAS Jimbaran - ITB STIKOM Bali",
  date: "Desember 2023",
  description: "Sertifikat kepesertaan dalam kompetisi E-Sport Mobile Legends: Bang - Bang pada perhelatan festival FESTIKA VI.",
  longDescription: "Diberikan kepada I Komang Ary Wiguna (JA234) sebagai peserta lomba kategori Mobile Legends: Bang - Bang pada acara FESTIKA VI yang diselenggarakan oleh HIMAS Jimbaran bertempat di ITB STIKOM Bali Kampus Jimbaran dan Lapangan Rangdu Kriya Mandala Kutuh pada tanggal 31 Oktober - 02 Desember 2023. Nomor Sertifikat: 52598/Srtf/KMHS/XII/2023.",
  category: "Other",
  skills: ["Mobile Legends", "Team Coordination", "E-Sport Tournament", "Communication", "Strategic Planning"],
  image: "/certificate/sertifikat-mlbb-festika.png",
  credentialUrl: "#"
},
{
  id: 17,
  title: "Sosialisasi Thailand Cross Culture Program",
  issuer: "ITB STIKOM Bali Kampus Jimbaran",
  date: "September 2023",
  description: "Sertifikat atas partisipasi aktif dalam kegiatan sosialisasi program pertukaran budaya lintas negara Thailand Cross Culture Program.",
  longDescription: "Diberikan kepada I Komang Ary Wiguna atas partisipasinya sebagai Peserta dalam kegiatan Sosialisasi Thailand Cross Culture Program yang diselenggarakan oleh ITB STIKOM Bali Direktorat Kampus Jimbaran pada tanggal 11 September 2023. Nomor Sertifikat: 162/DIRKJ/WRII/ITBSTIKOM/IX/2023.",
  category: "Seminar / Workshop",
  skills: ["Cross-Cultural Communication", "Global Networking", "International Programs", "Cultural Exchange"],
  image: "/certificate/sertifikat-tccp.png",
  credentialUrl: "#"
},
{
  id: 18,
  title: "Panitia Event Kuliah Industri 2025",
  issuer: "ITB STIKOM Bali Kampus Jimbaran",
  date: "Mei 2025",
  description: "Sertifikat penghargaan atas kontribusi dan dedikasi sebagai panitia dalam menyukseskan event Kuliah Industri 2025 di Kampus Jimbaran.",
  longDescription: "Diberikan kepada I Komang Ary Wiguna (NIM: 230040185) atas partisipasi dan kontribusi aktif sebagai Panitia pada event Kuliah Industri 2025 di ITB STIKOM Bali Kampus Jimbaran pada hari Jumat, 16 Mei 2025. Nomor Sertifikat: 129/DIRKJ/WRII/ITBSTIKOM/VI/25.",
  category: "Committee / Volunteer",
  skills: ["Event Management", "Organizing", "Team Collaboration", "Industry Networking", "Event Logistics"],
  image: "/certificate/sertifikat-kulindus.jpeg",
  credentialUrl: "#"
},
{
  id: 19,
  title: "Peserta Seminar Nasional GETEKSI 2024",
  issuer: "HIMAPRODI TI - ITB STIKOM Bali",
  date: "Mei 2024",
  description: "Sertifikat partisipasi dalam Seminar Nasional GETEKSI 2024 bertema Exploring Future Frontiers: Embracing Technology in Our Daily Lives.",
  longDescription: "Diberikan kepada I Komang Ary Wiguna sebagai Peserta dalam kegiatan Seminar Nasional GETEKSI 2024 dengan tema \"Exploring Future Frontiers: Embracing Technology in Our Daily Lives\" yang diselenggarakan oleh ITB STIKOM Bali dan HIMAPRODI TI pada tanggal 11 Mei 2024. Nomor Sertifikat: 8164/SRTF/KMHS/VI/2024.",
  category: "Seminar / Workshop",
  skills: ["Technology Frontiers", "Emerging Tech", "Digital Transformation", "Seminar Participation"],
  image: "/certificate/sertifikat-geteksi.jpeg",
  credentialUrl: "#"
},
{
  id: 20,
  title: "Peserta Lomba Mobile Legends INFINITY 2023",
  issuer: "UKM PROGRESS - ITB STIKOM Bali",
  date: "Oktober 2023",
  description: "Sertifikat atas keikutsertaan sebagai peserta turnamen Mobile Legends dalam rangkaian kegiatan INFINITY 2023.",
  longDescription: "Diberikan kepada I Komang Ary Wiguna sebagai Peserta Lomba Mobile Legends pada turnamen Mobile Legends dalam kegiatan INFINITY 2023 (Deep Dive Into The Technology) yang diselenggarakan pada 15 Oktober 2023. Nomor Sertifikat: 21591/Srtf/KMHS/X/2023.",
  category: "Other",
  skills: ["Mobile Legends", "Competitive Gaming", "Teamwork", "E-Sport Tournament"],
  image: "/certificate/sertifikat-mlbb-infinity.png",
  credentialUrl: "#"
},
{
  id: 21,
  title: "Seminar Indodax Goes to Campus 2024",
  issuer: "INDODAX & ITB STIKOM Bali Kampus Jimbaran",
  date: "Juni 2024",
  description: "Sertifikat partisipasi seminar edukasi aset digital dan teknologi blockchain pada program Indodax Goes to Campus.",
  longDescription: "Diberikan kepada I Komang Ary Wiguna atas partisipasinya sebagai peserta pada hari Rabu, 19 Juni 2024 dalam kegiatan Seminar Indodax Goes to Campus yang diselenggarakan di ITB STIKOM Bali Kampus Jimbaran. Nomor Sertifikat: 129/DIRKJ/WRII/ITBSTIKOM/VI/24.",
  category: "Seminar / Workshop",
  skills: ["Blockchain", "Cryptocurrency", "Digital Assets", "Financial Literacy"],
  image: "/certificate/sertifikat-indodax-2024.jpeg",
  credentialUrl: "#"
}
];

export const certCategories = ["All", "Bootcamp", "Course", "Award", "Other", "Certification","Committee / Volunteer", "Seminar / Workshop"] as const;
