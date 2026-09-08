import React from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';
import {
  Sparkles,
  ArrowDown,
  ExternalLink,
  MapPin,
  Mail,
  Linkedin,
  BookOpen,
  Award,
  Layers,
  ChevronRight,
  Database,
  Cpu
} from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section
      id="about"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden tech-grid-bg border-b border-slate-200/80"
    >
      {/* Subtle tech background corner decorations */}
      <div className="absolute top-16 left-6 pointer-events-none hidden xl:block font-mono text-[10px] text-slate-400 select-none">
        <div>[SYS_ID: YCW_TAIPEI_AMSTERDAM]</div>
        <div>[COORDINATES: 52.3676°N, 4.9041°E]</div>
        <div>[SPECIALTY: HCAI // URBAN_STUDIES // GIS]</div>
      </div>

      <div className="absolute top-20 right-8 pointer-events-none hidden xl:block font-mono text-[10px] text-slate-400 text-right select-none">
        <div>STATUS: RESEARCH_ACTIVE</div>
        <div>INSTITUTION: TU DELFT & WUR</div>
        <div>FRAMEWORK: CITIZEN_AI_ARIE</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* High-tech status capsule */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200/80 text-xs font-mono text-slate-700 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold text-slate-800">
                {lang === 'zh' ? '荷蘭台夫特 ✕ 台北' : 'Delft ✕ Taipei'}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-cyan-700 font-medium">
                {lang === 'zh'
                  ? '大都會分析工程 (MSc MADE) ✕ 城市空間轉型'
                  : 'MSc MADE TU Delft & WUR ✕ Urban Innovation'}
              </span>
            </div>

            {/* Name and titles */}
            <div>
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h1
                  id="hero-name-title"
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
                >
                  {personalInfo.name[lang]}
                </h1>
                <span className="text-xl sm:text-2xl font-light text-slate-500 font-mono">
                  {lang === 'zh' ? '/ Wu Yun-Ching' : '/ 吳昀慶'}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-medium text-cyan-800 flex items-center gap-2">
                <span>{personalInfo.roles[lang]}</span>
              </h2>
            </div>

            {/* Core Bio Text */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl font-normal">
              {personalInfo.bio[lang]}
            </p>

            {/* Key Skill Pillars Pills */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                {lang === 'zh' ? '核心研究與實踐領域' : 'Core Research & Competencies'}
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Human-Centered AI (HCAI)',
                  'Urban Mobility Transition',
                  'Science & Technology Studies (STS)',
                  'Advanced QGIS & Geo-Spatial Analysis',
                  'Citizen Participation & Living Labs',
                  'Documentary & Knowledge Media'
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-700 hover:border-cyan-500 hover:text-cyan-800 transition-colors shadow-2xs"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#thesis"
                id="btn-hero-thesis"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-cyan-700 text-sm font-semibold shadow-xs transition-all"
              >
                <Cpu size={16} />
                <span>{lang === 'zh' ? '碩士論文與 ARIE 模型' : 'Explore Thesis & ARIE Model'}</span>
                <ChevronRight size={14} />
              </a>

              <a
                href="#projects"
                id="btn-hero-projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-cyan-500 text-sm font-semibold shadow-2xs transition-all"
              >
                <Layers size={16} className="text-cyan-600" />
                <span>{lang === 'zh' ? 'GIS 地圖與專案' : 'Interactive GIS & Projects'}</span>
              </a>

              <a
                href="#publications"
                id="btn-hero-publications"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-slate-600 hover:text-cyan-700 hover:bg-slate-100/80 text-sm font-medium transition-all"
              >
                <BookOpen size={16} />
                <span>{lang === 'zh' ? '專欄論述' : 'Publications'}</span>
              </a>
            </div>
          </div>

          {/* Right Card / Telemetry HUD Column */}
          <div className="lg:col-span-4">
            <div className="tech-card rounded-2xl p-6 relative overflow-hidden bg-white/95">
              {/* Card header badge */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 font-bold text-slate-900">
                  <Database size={14} className="text-cyan-600" />
                  PROFILE_TELEMETRY
                </span>
                <span className="px-2 py-0.5 rounded-sm bg-slate-100 text-slate-600 text-[10px]">
                  VERIFIED
                </span>
              </div>

              {/* Profile Highlights Matrix */}
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-slate-50/90 border border-slate-200/70">
                  <div className="text-[11px] font-mono text-slate-400">HIGHEST DEGREE</div>
                  <div className="font-semibold text-slate-900 text-sm mt-0.5">
                    MSc MADE (TU Delft & WUR)
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Metropolitan Analysis, Design & Engineering
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/90 border border-slate-200/70">
                  <div className="text-[11px] font-mono text-slate-400">ACADEMIC HONORS</div>
                  <div className="font-semibold text-slate-900 text-sm mt-0.5 flex items-center gap-1.5">
                    <Award size={14} className="text-amber-500 shrink-0" />
                    <span>TU Delft Library Gen-AI Award</span>
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Artwork & Scholarship Competition
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/90 border border-slate-200/70">
                  <div className="text-[11px] font-mono text-slate-400">CIVIC LEADERSHIP</div>
                  <div className="font-semibold text-slate-900 text-sm mt-0.5">
                    Vision Zero Taiwan (行人零死亡)
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {lang === 'zh'
                      ? '共同創辦人暨常務監事 ✕ Walk21 國際發表'
                      : 'Co-founder & Supervisor ✕ Walk21 Speaker'}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50/90 border border-slate-200/70">
                  <div className="text-[11px] font-mono text-slate-400">PUBLIC SECTOR TENURE</div>
                  <div className="font-semibold text-slate-900 text-sm mt-0.5">
                    {lang === 'zh' ? '臺北市都市更新處' : 'Taipei Urban Regeneration Office'}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Associate Urban Engineer (2020–2024)
                  </div>
                </div>
              </div>

              {/* Quick Links Footer */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a
                  href={personalInfo.links.researchgate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-600 hover:text-emerald-600 font-medium"
                >
                  <ExternalLink size={14} /> ResearchGate
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1 text-slate-600 hover:text-cyan-600 font-medium"
                >
                  <Mail size={14} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating metric indicators row */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white/70 border border-slate-200/80">
            <div className="font-mono text-2xl md:text-3xl font-bold text-slate-900">1.19M</div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              {lang === 'zh' ? '全球年車禍遇害者救援研究' : 'Fatalities/Yr Addressed in AI Model'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-slate-200/80">
            <div className="font-mono text-2xl md:text-3xl font-bold text-cyan-800">300 Yrs</div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              {lang === 'zh' ? '阿姆斯特丹老運河岸壁三螺旋解方' : 'Quay Walls Triple Helix Heritage'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-slate-200/80">
            <div className="font-mono text-2xl md:text-3xl font-bold text-slate-900">1850</div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              {lang === 'zh' ? '荷蘭歷史地圖與水文空間疊合' : 'Historic Cartography Stroll'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-slate-200/80">
            <div className="font-mono text-2xl md:text-3xl font-bold text-cyan-800">3 Rounds</div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              {lang === 'zh' ? '公民參與共創原型迭代實證' : 'Iterative Citizen-AI Co-Design'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
