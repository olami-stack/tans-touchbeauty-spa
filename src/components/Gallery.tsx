import { useState, useEffect, MouseEvent } from 'react';
import { Play, Trash2, Video, Sparkles } from 'lucide-react';
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
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  // Load videos from localStorage or set defaults
  useEffect(() => {
    const saved = localStorage.getItem('tans_touch_videos');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Migrate any old R2 S3 endpoints or invalid paths to the working R2 video
        const migrated = parsed.map((v: VideoItem) => {
          let updatedUrl = v.url;
          if (updatedUrl.includes('ab287c23a7e4f498f84ebd225413526f.r2.cloudflarestorage.com/videos')) {
            updatedUrl = updatedUrl.replace(
              'https://ab287c23a7e4f498f84ebd225413526f.r2.cloudflarestorage.com/videos',
              'https://pub-37df63176e3c4891bd0bd2b2187205dc.r2.dev'
            );
          }
          if (updatedUrl.endsWith('/hammam.mp4') || updatedUrl.includes('hammam.mp4')) {
            updatedUrl = 'https://pub-37df63176e3c4891bd0bd2b2187205dc.r2.dev/SaveVid.Net_AQMak92LyO5FNoxxc3dmJ4ewlpYVFZf6x--Y0veHzTcomY1a0q7JcEUW7qYnTiWAPB20LeDq-n9KUYqWOtb7coG3r2sqsZQj7sLTph8.mp4';
          }
          return { ...v, url: updatedUrl };
        });
        setVideos(migrated);
        localStorage.setItem('tans_touch_videos', JSON.stringify(migrated));
      } catch (e) {
        setVideos(DEFAULT_VIDEOS);
      }
    } else {
      setVideos(DEFAULT_VIDEOS);
    }
  }, []);

  const saveVideos = (updated: VideoItem[]) => {
    setVideos(updated);
    localStorage.setItem('tans_touch_videos', JSON.stringify(updated));
  };

  const handleDeleteVideo = (id: string, e: MouseEvent) => {
    e.stopPropagation(); // Avoid triggering play
    const updated = videos.filter(v => v.id !== id);
    saveVideos(updated);
  };

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
                  
                  {/* Custom Added Deletion Support */}
                  {!DEFAULT_VIDEOS.some((dv) => dv.id === vid.id) && (
                    <button
                      onClick={(e) => handleDeleteVideo(vid.id, e)}
                      className="p-1 rounded-full bg-red-900/80 text-cream hover:bg-red-700 transition-colors duration-300 z-20"
                      title="Delete Video"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Play Button Icon Overlaid elegantly */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-gold/90 text-cream flex items-center justify-center shadow-lg group-hover:bg-gold group-hover:scale-110 active:scale-95 transition-all duration-300">
                  <Play className="w-6 h-6 fill-cream translate-x-0.5" />
                </div>
              </div>

              {/* Video Title and Caption Card Info */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h4 className="font-serif text-lg font-medium text-[#FDFCF7] group-hover:text-gold transition-colors duration-300 mb-1">
                  {vid.title}
                </h4>
                <span className="text-[10px] font-mono tracking-wide text-cream-dark/50 block truncate">
                  {vid.url}
                </span>
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
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden border border-gold/25 bg-[#120E0A] shadow-2xl mx-auto"
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

              {/* R2 troubleshooting/info footer inside lightbox */}
              <div className="px-6 py-4 bg-[#1C1611]/40 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold">Cloudflare R2 Integration</span>
                  <p className="text-xs text-cream-dark/60 mt-0.5 max-w-xl">
                    If this video fails to load, ensure your bucket's Cross-Origin Resource Sharing (CORS) rules allow requests from your AI Studio development domain.
                  </p>
                </div>
                <a
                  href="https://wa.me/2348163917761?text=Hello%20Tan%27s%20Touch!%20I%27d%20like%20to%20inquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gold text-cream font-sans text-[10px] font-bold uppercase tracking-widest hover:bg-gold-light transition-all duration-300"
                >
                  Inquire Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
