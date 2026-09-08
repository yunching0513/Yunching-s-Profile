import React, { useState } from 'react';
import { Language, VideoItem } from '../types';
import { videos } from '../data/portfolioData';
import {
  Video,
  Play,
  Film,
  ExternalLink,
  Eye,
  Camera,
  CheckCircle,
  Clapperboard
} from 'lucide-react';

interface MediaAndDocumentaryProps {
  lang: Language;
}

export const MediaAndDocumentary: React.FC<MediaAndDocumentaryProps> = ({ lang }) => {
  const [activeVideoId, setActiveVideoId] = useState<string>(videos[0].id);

  const currentVideo = videos.find((v) => v.id === activeVideoId) || videos[0];

  return (
    <section id="media" className="py-20 bg-slate-50 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-800 mb-3">
            <Clapperboard size={14} className="text-cyan-600" />
            <span>{lang === 'zh' ? '公共影像敘事與知識轉譯' : 'Documentary & Knowledge Media'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'zh' ? '紀錄片作品與影音倡議' : 'Documentary Works & Visual Production'}
          </h2>
          <p className="mt-2 text-base text-slate-600">
            {lang === 'zh'
              ? '將嚴謹的都市研究與空間權利倡議，轉化為具感染力的影像語言與公眾對話介面。'
              : 'Translating rigorous urban scholarship and spatial rights into evocative cinematic storytelling and public discourse.'}
          </p>
        </div>

        {/* Video Player & Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Embedded Player Container */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900">
              {currentVideo.platform === 'youtube' ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${currentVideo.embedId}`}
                  title={currentVideo.title[lang]}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <iframe
                  src={`https://player.vimeo.com/video/${currentVideo.embedId}`}
                  title={currentVideo.title[lang]}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )}
            </div>

            <div className="mt-4 px-2">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold uppercase">
                  {currentVideo.platform} STREAM
                </span>
                <a
                  href={currentVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-cyan-600 hover:underline"
                >
                  <span>{lang === 'zh' ? '在原平台開啟' : 'Open in Platform'}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {currentVideo.title[lang]}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {currentVideo.description[lang]}
              </p>
            </div>
          </div>

          {/* Right Playlist List */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              {lang === 'zh' ? '精選影像清單' : 'Selected Video Queue'} ({videos.length})
            </div>

            {videos.map((vid, idx) => {
              const isActive = vid.id === activeVideoId;
              return (
                <div
                  key={vid.id}
                  onClick={() => setActiveVideoId(vid.id)}
                  className={`p-4 rounded-xl cursor-pointer transition-all border ${
                    isActive
                      ? 'bg-white border-cyan-500 ring-2 ring-cyan-100 shadow-2xs'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                        isActive
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isActive ? <Play size={14} className="fill-current" /> : `0${idx + 1}`}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-[10px] font-mono text-cyan-800 uppercase">
                          {vid.platform}
                        </span>
                        {isActive && (
                          <span className="text-[10px] font-mono text-cyan-600 font-bold">
                            PLAYING
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 truncate">
                        {vid.title[lang]}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {vid.description[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Media methodology note */}
            <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600">
              <div className="font-bold text-slate-900 font-mono mb-1 flex items-center gap-1.5">
                <Camera size={14} className="text-cyan-600" />
                VISUAL DISSEMINATION
              </div>
              <p>
                {lang === 'zh'
                  ? '將攝影、訪談與微紀錄片結合公民科學研究，透過公共放映會與社群網絡發酵，擴大公共空間議題之觸及率與民主共識。'
                  : 'Synthesizing visual ethnography, field interviews, and documentary shorts to amplify public discourse on democratic street spaces.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
