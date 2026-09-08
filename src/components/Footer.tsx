import React from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';
import { Globe, ArrowUp, Terminal, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onToggleLang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      {/* Top telemetry bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-tight">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              {lang === 'zh' ? '吳昀慶 (Wu Yun-Ching)' : 'Wu Yun-Ching (吳昀慶)'}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {personalInfo.roles[lang]}
            </p>
            <div className="font-mono text-[11px] text-slate-500">
              MSc MADE • TU Delft & WUR
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider font-semibold">
              {lang === 'zh' ? '重點連結' : 'Quick Navigation'}
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {lang === 'zh' ? '個人簡介與核心領域' : 'About & Bio'}
                </a>
              </li>
              <li>
                <a href="#thesis" className="hover:text-white transition-colors">
                  {lang === 'zh' ? '碩士論文與 ARIE 模型' : 'Thesis & ARIE Model'}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  {lang === 'zh' ? 'GIS 地圖與專案實踐' : 'GIS Maps & Living Labs'}
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-white transition-colors">
                  {lang === 'zh' ? '專欄文章與預印本' : 'Articles & Preprints'}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider font-semibold">
              {lang === 'zh' ? '研究與學術平台' : 'Academic & Civic Repositories'}
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href={personalInfo.links.tudelftThesis}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  TU Delft Repository Paper
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.links.researchgate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ResearchGate Publications
                </a>
              </li>
              <li>
                <a
                  href="https://linktr.ee/visionzerotw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Vision Zero Taiwan
                </a>
              </li>
              <li>
                <a
                  href="https://taipei-walk-map.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Taipei Walk Map App
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider font-semibold">
              {lang === 'zh' ? '地理座標與時區' : 'Telemetry & Location'}
            </div>
            <div className="font-mono text-[11px] space-y-1 text-slate-400">
              <div>AMS: 52.3676° N, 4.9041° E</div>
              <div>TPE: 25.0330° N, 121.5654° E</div>
              <div>LOC: Amsterdam, NL ⇄ Taipei, TW</div>
            </div>
            <button
              onClick={onToggleLang}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors cursor-pointer"
            >
              <Globe size={12} className="text-cyan-400" />
              <span>{lang === 'zh' ? 'Switch to English' : '切換為繁體中文'}</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Wu Yun-Ching (吳昀慶). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>HUMAN-CENTERED AI & SUSTAINABLE URBANISM</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
