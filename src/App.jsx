import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronRight, BookOpen, 
  History, FileText, Home, Sparkles, 
  ChevronDown, ArrowRight, Heart, Eye,
  Users, Scale, Star, Sun, Leaf
} from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSila, setSelectedSila] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [expandedBab, setExpandedBab] = useState([]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);

    // Scroll progress listener
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleBab = (index) => {
    setExpandedBab(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const silaData = [
    {
      id: 1,
      title: "Ketuhanan Yang Maha Esa",
      symbol: "⭐",
      description: "Nilai ketuhanan dalam kehidupan berbangsa",
      butirButir: [
        "Bangsa Indonesia menyatakan kepercayaannya terhadap Tuhan Yang Maha Esa",
        "Manusia Indonesia percaya dan takwa terhadap Tuhan Yang Maha Esa",
        "Mengembangkan sikap hormat menghormati dan bekerja sama antar pemeluk agama",
        "Membina kerukunan hidup di antara sesama umat beragama",
        "Agama dan kepercayaan terhadap Tuhan Yang Maha Esa adalah masalah yang menyangkut hubungan pribadi",
        "Mengembangkan sikap saling menghormati kebebasan menjalankan ibadah",
        "Tidak memaksakan suatu agama kepada orang lain"
      ]
    },
    {
      id: 2,
      title: "Kemanusiaan yang Adil dan Beradab",
      symbol: "⛓️",
      description: "Nilai kemanusiaan yang adil dan beradab",
      butirButir: [
        "Mengakui dan memperlakukan manusia sesuai harkat dan martabatnya",
        "Mengakui persamaan derajat, persamaan hak dan kewajiban asasi",
        "Mengembangkan sikap saling mencintai sesama manusia",
        "Tidak semena-mena terhadap orang lain",
        "Menjunjung tinggi nilai kemanusiaan",
        "Gemar melakukan kegiatan kemanusiaan",
        "Berani membela kebenaran dan keadilan"
      ]
    },
    {
      id: 3,
      title: "Persatuan Indonesia",
      symbol: "🌳",
      description: "Nilai persatuan dan kesatuan bangsa",
      butirButir: [
        "Mampu menempatkan persatuan, kesatuan, serta kepentingan bangsa",
        "Mengembangkan rasa cinta kepada tanah air dan bangsa",
        "Mengembangkan rasa bangga berkebangsaan dan bertanah air Indonesia",
        "Memelihara ketertiban dunia yang berdasarkan kemerdekaan",
        "Mengembangkan persatuan Indonesia atas dasar Bhinneka Tunggal Ika",
        "Memajukan pergaulan demi persatuan dan kesatuan bangsa"
      ]
    },
    {
      id: 4,
      title: "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan",
      symbol: "🐃",
      description: "Nilai musyawarah dan demokrasi",
      butirButir: [
        "Mengutamakan kepentingan negara dan masyarakat",
        "Tidak memaksakan kehendak kepada orang lain",
        "Mengutamakan musyawarah dalam mengambil keputusan",
        "Musyawarah untuk mencapai mufakat diliputi semangat kekeluargaan",
        "Menghormati dan menjunjung tinggi setiap keputusan",
        "Menerima dan melaksanakan hasil keputusan musyawarah",
        "Pertanggungjawaban kepada masyarakat"
      ]
    },
    {
      id: 5,
      title: "Keadilan Sosial bagi Seluruh Rakyat Indonesia",
      symbol: "🌾",
      description: "Nilai keadilan sosial",
      butirButir: [
        "Mengembangkan perbuatan yang luhur",
        "Bersikap adil terhadap sesama",
        "Menjaga keseimbangan hak dan kewajiban",
        "Menghormati hak orang lain",
        "Suka memberi pertolongan kepada orang lain",
        "Menjauhi sikap pemerasan terhadap orang lain",
        "Bekerja keras dan menghargai kerja keras orang lain"
      ]
    }
  ];

  const uudData = {
    pembukaan: [
      "Bahwa sesungguhnya kemerdekaan itu ialah hak segala bangsa dan oleh sebab itu, maka penjajahan di atas dunia harus dihapuskan, karena tidak sesuai dengan peri-kemanusiaan dan peri-keadilan.",
      "Dan perjuangan pergerakan kemerdekaan Indonesia telah sampailah kepada saat yang berbahagia dengan selamat sentausa mengantarkan rakyat Indonesia ke depan pintu gerbang kemerdekaan negara Indonesia, yang merdeka, bersatu, berdaulat, adil dan makmur.",
      "Atas berkat rakhmat Allah Yang Maha Kuasa dan dengan didorongkan oleh keinginan luhur, supaya berkehidupan kebangsaan yang bebas, maka rakyat Indonesia menyatakan dengan ini kemerdekaannya.",
      "Kemudian daripada itu untuk membentuk suatu Pemerintah negara Indonesia yang melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dan untuk memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, dan ikut melaksanakan ketertiban dunia yang berdasarkan kemerdekaan, perdamaian abadi dan keadilan sosial, maka disusunlah Kemerdekaan Kebangsaan Indonesia itu dalam suatu Undang-Undang Dasar negara Indonesia, yang terbentuk dalam suatu susunan negara Republik Indonesia yang berkedaulatan rakyat dengan berdasar kepada: Ketuhanan Yang Maha Esa, Kemanusiaan yang adil dan beradab, Persatuan Indonesia, dan Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan, serta dengan mewujudkan suatu Keadilan sosial bagi seluruh rakyat Indonesia."
    ],
    bab: [
      {
        no: "I",
        title: "Bentuk dan Kedaulatan",
        pasal: [
          { no: "1", content: "Negara Indonesia ialah Negara Kesatuan yang berbentuk Republik", ayat: 1 },
          { no: "1", content: "Kedaulatan berada di tangan rakyat dan dilaksanakan menurut Undang-Undang Dasar", ayat: 2 },
          { no: "1", content: "Negara Indonesia adalah negara hukum", ayat: 3 }
        ]
      },
      {
        no: "II",
        title: "Majelis Permusyawaratan Rakyat",
        pasal: [
          { no: "2", content: "Majelis Permusyawaratan Rakyat terdiri atas anggota Dewan Perwakilan Rakyat dan anggota Dewan Perwakilan Daerah", ayat: 1 },
          { no: "2", content: "Majelis Permusyawaratan Rakyat bersidang sedikitnya sekali dalam lima tahun", ayat: 2 },
          { no: "3", content: "Majelis Permusyawaratan Rakyat berwenang mengubah dan menetapkan Undang-Undang Dasar", ayat: 1 }
        ]
      },
      {
        no: "III",
        title: "Kekuasaan Pemerintahan Negara",
        pasal: [
          { no: "4", content: "Presiden Republik Indonesia memegang kekuasaan pemerintahan menurut Undang-Undang Dasar", ayat: 1 },
          { no: "4", content: "Dalam melakukan kewajibannya Presiden dibantu oleh satu orang Wakil Presiden", ayat: 2 },
          { no: "5", content: "Presiden berhak mengajukan rancangan undang-undang kepada Dewan Perwakilan Rakyat", ayat: 1 }
        ]
      },
      {
        no: "IV",
        title: "Dewan Pertimbangan Agung",
        pasal: [
          { no: "16", content: "Susunan Dewan Pertimbangan Agung ditetapkan dengan undang-undang", ayat: 1 }
        ]
      },
      {
        no: "V",
        title: "Kementerian Negara",
        pasal: [
          { no: "17", content: "Presiden dibantu oleh menteri-menteri negara", ayat: 1 },
          { no: "17", content: "Menteri-menteri itu diangkat dan diberhentikan oleh Presiden", ayat: 2 }
        ]
      },
      {
        no: "VI",
        title: "Pemerintah Daerah",
        pasal: [
          { no: "18", content: "Negara Kesatuan Republik Indonesia dibagi atas daerah-daerah provinsi", ayat: 1 },
          { no: "18", content: "Pemerintahan daerah provinsi, kabupaten, dan kota mengatur dan mengurus sendiri urusan pemerintahan", ayat: 2 }
        ]
      },
      {
        no: "VII",
        title: "Dewan Perwakilan Rakyat",
        pasal: [
          { no: "19", content: "Anggota Dewan Perwakilan Rakyat dipilih melalui pemilihan umum", ayat: 1 },
          { no: "20", content: "Dewan Perwakilan Rakyat memegang kekuasaan membentuk undang-undang", ayat: 1 }
        ]
      },
      {
        no: "VIII",
        title: "Hal Keuangan",
        pasal: [
          { no: "23", content: "Anggaran pendapatan dan belanja negara ditetapkan setiap tahun dengan undang-undang", ayat: 1 }
        ]
      },
      {
        no: "IX",
        title: "Kekuasaan Kehakiman",
        pasal: [
          { no: "24", content: "Kekuasaan kehakiman merupakan kekuasaan yang merdeka", ayat: 1 },
          { no: "24", content: "Mahkamah Agung dan badan peradilan di bawahnya", ayat: 2 }
        ]
      },
      {
        no: "X",
        title: "Warga Negara",
        pasal: [
          { no: "26", content: "Yang menjadi warga negara ialah orang-orang bangsa Indonesia asli", ayat: 1 },
          { no: "27", content: "Segala warga negara bersamaan kedudukannya di dalam hukum", ayat: 1 }
        ]
      },
      {
        no: "XI",
        title: "Agama",
        pasal: [
          { no: "29", content: "Negara berdasar atas Ketuhanan Yang Maha Esa", ayat: 1 },
          { no: "29", content: "Negara menjamin kemerdekaan tiap-tiap penduduk untuk memeluk agamanya", ayat: 2 }
        ]
      },
      {
        no: "XII",
        title: "Pertahanan Negara",
        pasal: [
          { no: "30", content: "Tiap-tiap warga negara berhak dan wajib ikut serta dalam usaha pertahanan negara", ayat: 1 }
        ]
      },
      {
        no: "XIII",
        title: "Pendidikan",
        pasal: [
          { no: "31", content: "Setiap warga negara berhak mendapat pendidikan", ayat: 1 },
          { no: "31", content: "Pemerintah mengusahakan dan menyelenggarakan satu sistem pendidikan nasional", ayat: 2 }
        ]
      },
      {
        no: "XIV",
        title: "Perekonomian Nasional",
        pasal: [
          { no: "33", content: "Perekonomian disusun sebagai usaha bersama berdasar atas asas kekeluargaan", ayat: 1 }
        ]
      },
      {
        no: "XV",
        title: "Bendera, Bahasa, dan Lambang Negara",
        pasal: [
          { no: "35", content: "Bendera Negara Indonesia ialah Sang Merah Putih", ayat: 1 },
          { no: "36", content: "Bahasa Negara ialah Bahasa Indonesia", ayat: 1 }
        ]
      },
      {
        no: "XVI",
        title: "Perubahan Undang-Undang Dasar",
        pasal: [
          { no: "37", content: "Usul perubahan pasal-pasal Undang-Undang Dasar dapat diagendakan", ayat: 1 }
        ]
      }
    ]
  };

  const timelineData = [
    { date: "1 Juni 1945", event: "Lahirnya Pancasila - Pidato Soekarno tentang Pancasila", description: "Soekarno memperkenalkan 5 sila sebagai dasar negara" },
    { date: "22 Juni 1945", event: "Piagam Jakarta", description: "Rumusan awal Pancasila dalam Piagam Jakarta" },
    { date: "18 Agustus 1945", event: "Pengesahan Pancasila", description: "Pancasila resmi disahkan sebagai dasar negara" }
  ];

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div 
          className="loader"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="spinner"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="loading-text"
          >
            Pilar Negara Digital
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Progress Bar */}
      <motion.div 
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky Navigation */}
      <motion.nav 
        className="glass-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="logo-icon" />
            <span>Pilar Negara Digital</span>
          </motion.div>

          <div className="nav-links">
            {['Home', 'Pancasila', 'UUD 1945', 'Sejarah'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className={`nav-link ${activeSection === item.toLowerCase().replace(' ', '') ? 'active' : ''}`}
                whileHover={{ y: -2 }}
                onClick={() => setActiveSection(item.toLowerCase().replace(' ', ''))}
              >
                {item}
                {activeSection === item.toLowerCase().replace(' ', '') && (
                  <motion.div 
                    className="active-underline"
                    layoutId="activeSection"
                  />
                )}
              </motion.a>
            ))}
          </div>

          <div className="nav-actions">
            <motion.div 
              className="search-container"
              whileHover={{ scale: 1.02 }}
            >
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Cari pasal atau sila..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </motion.div>

            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {['Home', 'Pancasila', 'UUD 1945', 'Sejarah'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="mobile-nav-link">
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Pilar Negara Digital
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Arsip Interaktif Pancasila dan UUD 1945
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button 
                className="primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('pancasila').scrollIntoView({ behavior: 'smooth' })}
              >
                Mulai Eksplorasi
                <ArrowRight className="btn-icon" />
              </motion.button>
              <motion.button 
                className="secondary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('uud1945').scrollIntoView({ behavior: 'smooth' })}
              >
                <BookOpen className="btn-icon" />
                Pelajari UUD 1945
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero-pattern"></div>
      </section>

      {/* Pancasila Section */}
      <section id="pancasila" className="pancasila-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Pancasila</h2>
          <p>Lima Sila Dasar Negara Republik Indonesia</p>
        </motion.div>

        <motion.div 
          className="sila-grid bento-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {silaData.map((sila) => (
            <motion.div
              key={sila.id}
              className="sila-card glass-card"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 20px 40px rgba(225, 29, 72, 0.1)'
              }}
              onClick={() => setSelectedSila(sila)}
            >
              <div className="sila-symbol">{sila.symbol}</div>
              <h3 className="sila-title">{sila.title}</h3>
              <p className="sila-description">{sila.description}</p>
              <motion.button 
                className="sila-button"
                whileHover={{ x: 5 }}
              >
                Lihat Detail
                <ChevronRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div 
          className="timeline-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="timeline-title">Sejarah Perumusan Pancasila</h3>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content glass-card">
                  <h4>{item.event}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* UUD 1945 Section */}
      <section id="uud1945" className="uud-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>UUD 1945</h2>
          <p>Undang-Undang Dasar Negara Republik Indonesia 1945</p>
        </motion.div>

        {/* Pembukaan */}
        <motion.div 
          className="pembukaan-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="pembukaan-title">PEMBUKAAN</h3>
          <div className="pembukaan-content">
            {uudData.pembukaan.map((paragraph, index) => (
              <motion.p 
                key={index}
                className="pembukaan-paragraph"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Batang Tubuh */}
        <motion.div 
          className="batang-tubuh-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="batang-tubuh-title">PASAL PASAL</h3>
          <div className="bab-list">
            {uudData.bab.map((bab, index) => (
              <motion.div 
                key={index}
                className="bab-item glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.div 
                  className="bab-header"
                  whileHover={{ backgroundColor: 'rgba(225, 29, 72, 0.05)' }}
                  onClick={() => toggleBab(index)}
                >
                  <span className="bab-number">BAB {bab.no}</span>
                  <h4 className="bab-title">{bab.title}</h4>
                  <motion.div
                    animate={{ rotate: expandedBab.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="bab-chevron" />
                  </motion.div>
                </motion.div>
                <AnimatePresence>
                  {expandedBab.includes(index) && (
                    <motion.div 
                      className="pasal-list"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {bab.pasal.map((pasal, pIndex) => (
                        <motion.div 
                          key={pIndex}
                          className="pasal-item"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: pIndex * 0.03 }}
                        >
                          <span className="pasal-number">Pasal {pasal.no}</span>
                          <span className="pasal-content">{pasal.content}</span>
                          {pasal.ayat > 1 && (
                            <span className="pasal-ayat">({pasal.ayat} Ayat)</span>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Modal for Sila Details */}
      <AnimatePresence>
        {selectedSila && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSila(null)}
          >
            <motion.div 
              className="modal-content glass-card"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-symbol">{selectedSila.symbol}</div>
                <h3 className="modal-title">{selectedSila.title}</h3>
                <button className="modal-close" onClick={() => setSelectedSila(null)}>×</button>
              </div>
              <div className="modal-body">
                <h4 className="butir-title">Butir-Butir Pengamalan Pancasila</h4>
                <ul className="butir-list">
                  {selectedSila.butirButir.map((butir, index) => (
                    <motion.li 
                      key={index}
                      className="butir-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="butir-bullet">•</span>
                      <span>{butir}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;