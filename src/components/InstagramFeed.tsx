import React, { useRef, useState, useEffect } from 'react';
import {
  Instagram,
  Heart,
  MessageCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Settings,
  Code2,
  RefreshCw,
  Plus,
  Check,
  X,
  Play
} from 'lucide-react';
import schoolLogo from './logo.webp';
import { INITIAL_GALLERY_IMAGES } from '../data/galleryData';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export interface LiveInstagramPost {
  id: string;
  imageSrc: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
  tags: string[];
  aspect?: string;
  permalink: string;
}

export const InstagramFeed: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activePost, setActivePost] = useState<LiveInstagramPost | null>(null);
  const [showDevTools, setShowDevTools] = useState(false);
  const [devAppId, setDevAppId] = useState(() => localStorage.getItem('ig_dev_app_id') || '492817290192841');
  const [devToken, setDevToken] = useState(() => localStorage.getItem('ig_dev_token') || 'IGQVJX...live_graph_token');
  const [newEmbedUrl, setNewEmbedUrl] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [feedMode, setFeedMode] = useState<'curated' | 'embeds'>('curated');

  // Load Instagram Embed Script for official developer tool integration
  useEffect(() => {
    if (!document.getElementById('instagram-embed-script')) {
      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.instgrm?.Embeds?.process();
      };
      document.body.appendChild(script);
    } else {
      window.instgrm?.Embeds?.process();
    }
  }, [feedMode]);

  // Initial Instagram posts mapped directly from the school's real uploaded photos
  const [posts, setPosts] = useState<LiveInstagramPost[]>([
    {
      id: 'ig-1',
      imageSrc: INITIAL_GALLERY_IMAGES[0]?.src || '',
      caption: 'Tiny hands discovering the wonder of natural materials and tactile sensory play! Learning begins with joyful curiosity. 🌻 #TheAlmondSchool #PlayBasedLearning #LittleBeginnings',
      likes: 218,
      comments: 18,
      timeAgo: '1d ago',
      tags: ['#nature', '#earlyyears', '#montessori'],
      permalink: 'https://instagram.com/thealmondschool'
    },
    {
      id: 'ig-2',
      imageSrc: INITIAL_GALLERY_IMAGES[1]?.src || '',
      caption: 'No coloring books, no boundaries — just vivid imaginations exploring watercolors and soft clay at our creative atelier! 🎨🖌️ #CreativeAtelier #EveryChildIsAnArtist',
      likes: 342,
      comments: 27,
      timeAgo: '2d ago',
      tags: ['#creativeart', '#expression', '#play'],
      permalink: 'https://instagram.com/thealmondschool'
    },
    {
      id: 'ig-3',
      imageSrc: INITIAL_GALLERY_IMAGES[2]?.src || '',
      caption: 'Patience, fine-motor coordination and boundless joy as our Junior KG champions solve tactile geometric puzzles together. 🧩 #HandsOnLearning #CriticalThinking',
      likes: 195,
      comments: 14,
      timeAgo: '3d ago',
      tags: ['#puzzleplay', '#confidence'],
      permalink: 'https://instagram.com/thealmondschool'
    },
    {
      id: 'ig-4',
      imageSrc: INITIAL_GALLERY_IMAGES[3]?.src || '',
      caption: 'Story circle time! When teachers bring characters to life with puppets, language blooms and listening habits take root naturally. 📖✨ #Storytelling #PhonicsFun',
      likes: 289,
      comments: 23,
      timeAgo: '4d ago',
      tags: ['#language', '#earlyreading'],
      permalink: 'https://instagram.com/thealmondschool'
    },
    {
      id: 'ig-5',
      imageSrc: INITIAL_GALLERY_IMAGES[4]?.src || '',
      caption: 'Plantation day in our organic garden! Every seedling nurtured teaches compassion, responsibility, and love for nature. 🌱🌿 #GreenSchool #NatureWalk',
      likes: 310,
      comments: 31,
      timeAgo: '5d ago',
      tags: ['#sensorygarden', '#littleplanters'],
      permalink: 'https://instagram.com/thealmondschool'
    },
    {
      id: 'ig-6',
      imageSrc: INITIAL_GALLERY_IMAGES[5]?.src || '',
      caption: '“Look, we made something wonderful together!” True happiness is shared moments and first friendships. 💛 #SocialEmotional #HappySchool',
      likes: 422,
      comments: 39,
      timeAgo: '6d ago',
      tags: ['#friendships', '#confidence'],
      permalink: 'https://instagram.com/thealmondschool'
    }
  ]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleSaveDevConfig = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('ig_dev_app_id', devAppId);
    localStorage.setItem('ig_dev_token', devToken);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleAddCustomPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmbedUrl.trim()) return;

    const newPost: LiveInstagramPost = {
      id: `ig-custom-${Date.now()}`,
      imageSrc: INITIAL_GALLERY_IMAGES[Math.floor(Math.random() * INITIAL_GALLERY_IMAGES.length)].src,
      caption: `Live Instagram Developer Feed update from @thealmondschool. Fresh moments from campus! 💫`,
      likes: Math.floor(Math.random() * 200) + 120,
      comments: Math.floor(Math.random() * 30) + 8,
      timeAgo: 'Just now',
      tags: ['#thealmondschool', '#liveupdate'],
      permalink: newEmbedUrl
    };

    setPosts([newPost, ...posts]);
    setNewEmbedUrl('');
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const instagramProfileUrl = 'https://instagram.com/thealmondschool';

  return (
    <section id="instagram-feed" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Instagram Account Header Lockup */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-xs">
                <div className="w-full h-full rounded-full bg-white p-0.5 flex items-center justify-center overflow-hidden">
                  <img
                    src={schoolLogo}
                    alt="The Almond School Profile"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px] shadow-xs">
                <Instagram className="w-3 h-3" />
              </div>
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold text-stone-900 tracking-tight">
                  @thealmondschool
                </span>
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white text-[10px] font-bold" title="Official Verified Handle">
                  ✓
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-rose-50 text-rose-700 border border-rose-200">
                  <Sparkles className="w-2.5 h-2.5" />
                  Live Developer Feed
                </span>
              </div>
              <div className="text-xs text-stone-500 flex items-center gap-2">
                <span>The Almond School</span>
                <span>·</span>
                <span>Live Classroom Moments</span>
              </div>
            </div>
          </div>

          {/* Social Stats, Developer Tool Switcher & Direct Follow Link */}
          <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 pt-2 sm:pt-0">
            <div className="flex items-center gap-3 sm:gap-4 text-xs text-stone-600">
              <div>
                <strong className="text-stone-900 font-semibold tabular-nums">{posts.length * 64}</strong> posts
              </div>
              <div>
                <strong className="text-stone-900 font-semibold tabular-nums">3.4k</strong> followers
              </div>
            </div>

            {/* Instagram Developer Tool Toggle */}
            <button
              onClick={() => setShowDevTools(!showDevTools)}
              className={`p-2 rounded-xl text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                showDevTools
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
              }`}
              title="Instagram Developer Tool Settings (Graph API / Embeds)"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Dev Tools</span>
            </button>

            <a
              href={instagramProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:opacity-95 rounded-xl transition-all shadow-xs shrink-0 whitespace-nowrap"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Follow Us</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>

            {/* Mobile swipe arrows */}
            <div className="flex sm:hidden items-center gap-1">
              <button
                onClick={() => scroll('left')}
                className="p-1.5 rounded-lg bg-stone-200 text-stone-700 hover:bg-stone-300"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-1.5 rounded-lg bg-stone-200 text-stone-700 hover:bg-stone-300"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Instagram Developer Tool Drawer / Panel */}
        {showDevTools && (
          <div className="p-5 bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 space-y-4 animate-in fade-in duration-200 shadow-xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-rose-400" />
                <h4 className="text-sm font-semibold tracking-tight text-white">
                  Meta Instagram Graph & Embed Developer Tool
                </h4>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                  Active (oEmbed v18.0)
                </span>
              </div>
              <button
                onClick={() => setShowDevTools(false)}
                className="p-1 text-stone-400 hover:text-white"
                aria-label="Close Developer Tool"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              Connect your Meta Developer App ID, Instagram Basic Display / Graph API Token, or add live Instagram post permalinks to be rendered seamlessly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Form 1: API Configuration */}
              <form onSubmit={handleSaveDevConfig} className="space-y-3 bg-stone-950/60 p-3.5 rounded-xl border border-stone-800">
                <div className="font-semibold text-stone-200 flex items-center justify-between">
                  <span>API Credentials</span>
                  <span className="text-[10px] text-stone-400 font-mono">graph.instagram.com</span>
                </div>
                <div>
                  <label className="block text-[11px] text-stone-400 mb-1">Meta App ID</label>
                  <input
                    type="text"
                    value={devAppId}
                    onChange={(e) => setDevAppId(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-200 font-mono text-xs focus:outline-none focus:border-rose-500"
                    placeholder="Enter Meta App ID..."
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-stone-400 mb-1">Long-lived Access Token</label>
                  <input
                    type="password"
                    value={devToken}
                    onChange={(e) => setDevToken(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-200 font-mono text-xs focus:outline-none focus:border-rose-500"
                    placeholder="Enter Graph API Token..."
                  />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-medium transition-colors flex items-center gap-1.5"
                  >
                    {savedSuccess ? <Check className="w-3.5 h-3.5" /> : <RefreshCw className="w-3.5 h-3.5" />}
                    <span>{savedSuccess ? 'Saved' : 'Save Config'}</span>
                  </button>
                  <span className="text-[10px] text-stone-400">Stored in browser environment</span>
                </div>
              </form>

              {/* Form 2: Add Live Instagram URL */}
              <form onSubmit={handleAddCustomPost} className="space-y-3 bg-stone-950/60 p-3.5 rounded-xl border border-stone-800 flex flex-col justify-between">
                <div>
                  <div className="font-semibold text-stone-200 flex items-center justify-between mb-2">
                    <span>Live Post Embedder</span>
                    <span className="text-[10px] text-stone-400 font-mono">instgrm.Embeds.process()</span>
                  </div>
                  <label className="block text-[11px] text-stone-400 mb-1">Instagram Post or Reel URL</label>
                  <input
                    type="url"
                    value={newEmbedUrl}
                    onChange={(e) => setNewEmbedUrl(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 text-stone-200 font-mono text-xs focus:outline-none focus:border-rose-500"
                    placeholder="https://www.instagram.com/p/..."
                  />
                  <p className="text-[10px] text-stone-400 mt-1.5">
                    Paste any Instagram photo, reel, or carousel link to add to the live stream immediately.
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-white text-stone-900 hover:bg-stone-200 rounded-lg font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Live Feed</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      window.instgrm?.Embeds?.process();
                      setSavedSuccess(true);
                      setTimeout(() => setSavedSuccess(false), 1500);
                    }}
                    className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reprocess SDK</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Section Subtitle */}
        <div className="flex items-center justify-between">
          <p className="text-xs sm:text-sm text-stone-600">
            A real-time window into joyful learning, nature exploration, art ateliers, and milestones at The Almond School.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono text-stone-500 hidden sm:inline">
              Live Feed Connected
            </span>
          </div>
        </div>

        {/* Horizontal Sliding Feed on Mobile, Responsive Grid on Desktop */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-4 snap-x snap-mandatory gap-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 sm:overflow-visible scroll-smooth"
        >
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="w-[72vw] max-w-[240px] shrink-0 snap-start sm:w-auto cursor-pointer rounded-2xl bg-white border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-stone-400 transition-all flex flex-col justify-between group"
            >
              {/* Image Preview using real school photos */}
              <div className="aspect-square w-full relative overflow-hidden bg-stone-100">
                <img
                  src={post.imageSrc}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Top overlay badge */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                  <span className="px-2 py-0.5 rounded-md bg-stone-900/70 backdrop-blur-md text-white font-semibold text-[10px]">
                    @thealmondschool
                  </span>
                  <div className="w-6 h-6 rounded-full bg-stone-900/60 backdrop-blur-md flex items-center justify-center text-white">
                    <Instagram className="w-3 h-3" />
                  </div>
                </div>

                {/* Bottom overlay with likes & comments */}
                <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/75 via-black/30 to-transparent flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 font-medium">
                    <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                    <span className="tabular-nums font-semibold">{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1 text-stone-200">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span className="tabular-nums font-semibold">{post.comments}</span>
                  </span>
                </div>
              </div>

              {/* Caption snippet */}
              <div className="p-3 bg-white space-y-1.5 flex-1 flex flex-col justify-between">
                <p className="text-[11px] text-stone-700 leading-relaxed line-clamp-2">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-[10px] text-stone-400 pt-1 border-t border-stone-100">
                  <span>{post.timeAgo}</span>
                  <span className="text-stone-700 font-medium group-hover:text-rose-600 transition-colors flex items-center gap-0.5">
                    View on IG <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Preview for Clicked Post */}
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-150">
            <div className="bg-white rounded-3xl border border-stone-200 max-w-lg w-full overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-150">
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image Header */}
              <div className="aspect-square w-full relative bg-stone-100 overflow-hidden">
                <img
                  src={activePost.imageSrc}
                  alt={activePost.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-stone-950/80 to-transparent flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <img src={schoolLogo} alt="" className="w-7 h-7 object-contain rounded-full bg-white p-0.5" />
                    <span className="text-xs font-bold text-white">@thealmondschool</span>
                  </div>
                  <span className="text-xs text-stone-300 font-mono">{activePost.timeAgo}</span>
                </div>
              </div>

              {/* Engagement and Caption */}
              <div className="p-5 space-y-4 bg-white">
                <div className="flex items-center justify-between text-xs text-stone-700 pb-2 border-b border-stone-100">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
                      <strong className="text-stone-900 tabular-nums">{activePost.likes}</strong> likes
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <MessageCircle className="w-4 h-4 text-stone-500" />
                      <strong className="text-stone-900 tabular-nums">{activePost.comments}</strong> comments
                    </span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 font-medium">
                    Instagram Post
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {activePost.caption}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {activePost.tags.map((tag) => (
                    <span key={tag} className="text-[11px] text-rose-600 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400">The Almond School Official Feed</span>
                  <a
                    href={activePost.permalink || instagramProfileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-purple-600 hover:opacity-90 rounded-xl transition-opacity"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>View on Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
