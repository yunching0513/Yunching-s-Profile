/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ThesisShowcase } from './components/ThesisShowcase';
import { ProjectsAndMaps } from './components/ProjectsAndMaps';
import { ExperienceAndEducation } from './components/ExperienceAndEducation';
import { MediaAndDocumentary } from './components/MediaAndDocumentary';
import { PublicationsSection } from './components/PublicationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('ycw_portfolio_lang');
      if (saved === 'zh' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'zh';
  });

  const handleToggleLang = () => {
    const nextLang: Language = lang === 'zh' ? 'en' : 'zh';
    setLang(nextLang);
    try {
      localStorage.setItem('ycw_portfolio_lang', nextLang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-cyan-100 selection:text-cyan-900">
      {/* Top sticky navigation bar */}
      <Navbar lang={lang} onToggleLang={handleToggleLang} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero lang={lang} />
        <ThesisShowcase lang={lang} />
        <ProjectsAndMaps lang={lang} />
        <ExperienceAndEducation lang={lang} />
        <MediaAndDocumentary lang={lang} />
        <PublicationsSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} onToggleLang={handleToggleLang} />
    </div>
  );
}
