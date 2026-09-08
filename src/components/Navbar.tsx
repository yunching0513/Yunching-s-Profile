import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';
import { Globe, Terminal, Menu, X, Cpu, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toTimeString().split(' ')[0] + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { id: 'about', label: lang === 'zh' ? '簡介' : 'About' },
    { id: 'thesis', label: lang === 'zh' ? '碩士論文 / AI 模型' : 'Thesis & HCAI' },
    { id: 'projects', label: lang === 'zh' ? 'GIS 地圖與專案' : 'GIS & Projects' },
    { id: 'experience', label: lang === 'zh' ? '學經歷' : 'Experience' },
    { id: 'media', label: lang === 'zh' ? '紀錄片影像' : 'Media' },
    { id: 'publications', label: lang === 'zh' ? '專欄與論文' : 'Publications' },
    { id: 'contact', label: lang === 'zh' ? '聯絡方式' : 'Contact' },
  ];

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white/60 backdrop-blur-xs border-b border-slate-100'
      }`}
    >
      {/* Top micro-telemetry bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-1 border-b border-slate-100 bg-slate-50/70 text-[11px] font-mono text-slate-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-cyan-600 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
            SYS: ACTIVE // YCW_SYSTEM_v2.5
          </span>
          <span className="text-slate-400">|</span>
          <span>LOC: AMS [52.37°N, 4.90°E] ⇄ TPE [25.03°N, 121.56°E]</span>
        </div>
        <div className="flex items-center gap-4">
          <span>{timeStr}</span>
          <span className="text-slate-400">|</span>
          <a
            href={personalInfo.links.tudelftThesis}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-600 hover:text-cyan-600 transition-colors"
          >
            TU Delft Repo <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand with high-tech badge */}
          <a
            href="#about"
            id="nav-brand-logo"
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs tracking-wider shadow-xs group-hover:bg-cyan-600 transition-colors">
              YC
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-slate-900 tracking-tight">
                  {lang === 'zh' ? '吳昀慶' : 'Wu Yun-Ching'}
                </span>
                <span className="hidden sm:inline-block font-mono text-[10px] px-1.5 py-0.5 rounded-sm bg-cyan-50 text-cyan-700 border border-cyan-200">
                  MSc MADE
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                {lang === 'zh' ? '人本 AI ✕ 城市空間轉型' : 'Human-Centered AI & Urban Mobility'}
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                id={`nav-link-${item.id}`}
                className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-cyan-700 hover:bg-slate-100/70 rounded-md transition-all whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Toggle & Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleLang}
              id="btn-lang-toggle"
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300/80 bg-white hover:bg-slate-50 text-xs font-mono text-slate-700 hover:border-cyan-500 shadow-2xs transition-all cursor-pointer"
              title={lang === 'zh' ? '切換為英文 (Switch to English)' : '切換為中文 (Switch to Chinese)'}
            >
              <Globe size={14} className="text-cyan-600" />
              <span className="font-semibold">{lang === 'zh' ? 'EN / 繁中' : 'ZH / EN'}</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="btn-mobile-menu-toggle"
              type="button"
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl"
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-cyan-50/50"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>TU Delft & WUR Alum</span>
            <span className="text-cyan-600">Vision Zero Taiwan</span>
          </div>
        </div>
      )}
    </header>
  );
};
