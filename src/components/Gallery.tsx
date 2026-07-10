import { useState } from 'react';
import { Play, Video, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import hammamSpaCard from '../assets/images/hammam_spa_card_1783627605364.jpg';
import bespokeBodyPolish from '../assets/images/bespoke_body_polish_1783627649827.jpg';
import immersiveNigerianLadySpa from '../assets/images/immersive_nigerian_lady_spa_1783637278539.jpg';
import bodyMassageCard from '../assets/images/body_massage_card_1783627580683.jpg';
import ledFacialCard from '../assets/images/led_facial_card_1783627593297.jpg';

interface VideoItem {
  id: string;
  title: string;
  category: string;
  url: string;
  duration: string;
  thumbnail: string;
}

const DEFAULT_VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Hammam Steam & Detox Experience',
    category: 'Wellness',
    url: 'https://pub-37df63176e3c4891bd0bd2b2187205dc.r2.dev/SaveVid.Net_AQNJ1FecCuiVTc46Da8YVs9w3HpVzxjwmd2f7r2_OlwMviqClv32wms_iaxkJIUfDzFT3hxeMCz_YnbkE2pRijqSSlgv8wsNTL_ca4o.mp4',
    duration: '0:30',
    thumbnail: hammamSpaCard
  },
  {
    id: 'vid-2',
    title: 'Bespoke Body Polish & Ritual',
    category: 'Therapy',
    url: 'https://pub-37df63176e3c4891bd0bd2b2187205dc.r2.dev/SaveVid.Net_AQNi_FJZoQR1sIvbjosnZHe5rRPR_ZfnG2Qw_wyBqMVSl9vQOdmQr9c_ZrQUHsCD5QGXDjDwl01SCfdM7lrRmDkoN-XTFk1TAYl8EEY.mp4',
    duration: '0:30',
    thumbnail: bespokeBodyPolish
  },
  {
    id: 'vid-3',
    title: 'Sanctuary Face & Skin Renewal',
    category: 'Aesthetics',
    url: 'https://pub-37df63176e3c4891bd0bd2b2187205dc.r2.dev/SaveVid.Net_AQOfU3N5RTueqSdXHcxM3Bg4SsBiXkTlxW_DMe6SfGDeSWWDjvGTAhbIO-Hb4BV3DzvDhJIVMmH-YcPsRemST7_MNIRhGYkO0B_ycUE.mp4',
    duration: '0:30',
    thumbnail: immersiveNigerianLadySpa
  },
  {
    id: 'vid-4',
    title: 'Deep Tissue Body Massage',
    category: 'Massage',
    url: 'https://pub-37df63176e3c4891bd0bd2b2187205dc.r2.dev/SaveVid.Net_AQP051CVAvg2AekhIkaA9IOPVRKHMV3jwRwOe6KgY0sNeBPgiuX_yfsx3V1xtH4zcs3a65KFEhLyfJ2peIFJIojX.mp4',
    duration: '0:30',
    thumbnail: bodyMassageCard
  },
  {
    id: 'vid-5',
    title: 'LED Facial Glow Therapy',
    category: 'Aesthetics',
    url: 'https://pub-37df63176e3c4891bd0bd2b2187205dc.r2.dev/SaveVid.Net_AQPZ9V2yVAhDu77MZU7JEHl9DHVU96FZE60jZFc0ncE5DeQFvS2kp42R0XSkB-2hpA55xCuBx31TK3wKlBfHKNrB.mp4',
    duration: '0:30',
    thumbnail: ledFacialCard
  }
];

export default function Gallery() {
  const videos = DEFAULT_VIDEOS;
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="gallery" className="w-full bg-[#120E0A] py-24 px-6 sm:px-10 border-b border-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block with elegant alignment */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-3">
              Sanctuary Gallery
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-cream leading-tight mb-4">
              Bespoke Wellness <span className="italic text-gold font-light">in Motion</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-cream-dark/70 leading-relaxed">
              Explore dynamic rituals, calming steam therapies, and high-end aesthetic wellness captures. Watch the premium Tan's Touch experience in high definition.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Show Cloudflare R2 Connection Status tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/15 text-[10px] uppercase font-bold tracking-widest text-gold/80">
              <Sparkles className="w-3 h-3 text-gold animate-pulse" />
              Connected to R2 Storage
            </div>
          </div>
        </div>

        {/* Video Items Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((vid) => (
            <motion.div
              key={vid.id}
              variants={itemVariants}
              onClick={() => setSelectedVideo(vid)}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-gold/10 bg-[#1C1611]/40 cursor-pointer shadow-lg hover:shadow-gold/5 hover:border-gold/35 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Thumbnail Image */}
              <img
                src={vid.thumbnail}
                alt={vid.title}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120E0A] via-[#120E0A]/40 to-transparent"></div>

              {/* Tags & Action Row */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-[#120E0A]/80 border border-gold/15 text-[9px] uppercase font-bold tracking-widest text-gold">
                  {vid.category}
                </span>

                <div className="flex gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#120E0A]/80 text-[10px] font-mono text-cream-dark/90">
                    {vid.duration}
                  </span>
                </div>
              </div>

              {/* Play Button Icon Overlaid elegantly */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-gold/90 text-cream flex items-center justify-center shadow-lg group-hover:bg-gold group-hover:scale-110 active:scale-95 transition-all duration-300">
                  <Play className="w-6 h-6 fill-cream translate-x-0.5" />
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Lightbox Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#120E0A]/95 backdrop-blur-md"
          >
            {/* Always-visible close button, independent of modal scroll */}
            <button
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
              className="fixed top-5 right-5 z-[60] w-11 h-11 rounded-full flex items-center justify-center bg-[#1C1611] border border-gold/30 text-cream hover:text-gold hover:border-gold transition-colors shadow-lg focus:outline-none"
            >
              ✕
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm sm:max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-gold/25 bg-[#120E0A] shadow-2xl mx-auto"
            >
              {/* Modal Video Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gold/10 bg-[#1C1611]/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <Video className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif italic text-lg text-cream">{selectedVideo.title}</h4>
                    <p className="text-[10px] font-mono tracking-wider text-cream-dark/50">{selectedVideo.url}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-gold/20 text-cream-dark hover:text-gold transition-colors focus:outline-none"
                >
                  ✕
                </button>
              </div>

              {/* Video Tag Element */}
              <div className="aspect-[9/16] w-full bg-black relative">
                <video
                  src={selectedVideo.url}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
