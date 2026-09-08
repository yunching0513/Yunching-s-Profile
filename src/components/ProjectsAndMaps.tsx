import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { projects, personalInfo } from '../data/portfolioData';
import {
  MapPin,
  Globe,
  Compass,
  Cpu,
  Anchor,
  Coins,
  ExternalLink,
  Layers,
  FolderGit2,
  CheckCircle,
  ArrowUpRight,
  Filter
} from 'lucide-react';

interface ProjectsAndMapsProps {
  lang: Language;
}

export const ProjectsAndMaps: React.FC<ProjectsAndMapsProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'gis' | 'livinglab' | 'innovation'>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin size={20} className="text-cyan-600" />;
      case 'Globe':
        return <Globe size={20} className="text-blue-600" />;
      case 'Compass':
        return <Compass size={20} className="text-emerald-600" />;
      case 'Cpu':
        return <Cpu size={20} className="text-violet-600" />;
      case 'Anchor':
        return <Anchor size={20} className="text-amber-600" />;
      case 'Coins':
        return <Coins size={20} className="text-teal-600" />;
      default:
        return <Layers size={20} className="text-cyan-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 tech-dots-bg border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-800 mb-3">
              <Layers size={14} className="text-cyan-600" />
              <span>{lang === 'zh' ? '空間圖資、公民科技與都市實驗' : 'Spatial GIS, Civic Tech & Urban Labs'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'zh' ? '互動地圖與專案實踐' : 'Interactive Maps & Projects'}
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              {lang === 'zh'
                ? '點擊地圖與應用程式連結，親自體驗互動式公民地圖、歷史水文套疊與阿姆斯特丹生活實驗室 (Living Lab) 創新專案。'
                : 'Click project links to launch interactive maps, historical cartography superimposition, and Amsterdam Living Lab urban prototypes.'}
            </p>
          </div>

          {/* Filter Pill Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs self-start md:self-auto overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {lang === 'zh' ? '全部專案' : 'All Projects'}
            </button>
            <button
              onClick={() => setFilter('gis')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'gis'
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {lang === 'zh' ? 'GIS 地圖圖資' : 'GIS & Maps'}
            </button>
            <button
              onClick={() => setFilter('livinglab')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'livinglab'
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {lang === 'zh' ? '生活實驗室' : 'Living Lab'}
            </button>
            <button
              onClick={() => setFilter('innovation')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === 'innovation'
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {lang === 'zh' ? '政策與創新' : 'Governance & Policy'}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="tech-card rounded-2xl bg-white p-6 flex flex-col justify-between transition-all duration-300 relative group"
            >
              {/* Top metadata badge */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getIcon(project.iconName)}
                  </div>
                  <span className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                    {project.statusBadge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {project.title[lang]}
                </h3>

                <p className="text-xs text-cyan-800 font-medium mt-1 mb-3">
                  {project.subtitle[lang]}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {project.description[lang]}
                </p>

                {/* Bullet highlights */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                  {project.highlights[lang].map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600">
                      <CheckCircle size={12} className="text-cyan-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tags & Action Link */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-50 text-[10px] font-mono text-slate-600 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-900 hover:bg-cyan-700 text-white text-xs font-semibold transition-all shadow-xs"
                  >
                    <span>{project.linkText ? project.linkText[lang] : (lang === 'zh' ? '開啟專案頁面' : 'Launch Project')}</span>
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <div className="w-full py-2 px-3 rounded-lg bg-slate-100 text-slate-500 text-xs font-mono text-center">
                    {lang === 'zh' ? '研究檔案庫 / 論文成果' : 'Archived Research Artifact'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Drive Archive Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center">
                <FolderGit2 size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  {lang === 'zh' ? '完整作品集與研究資料庫 (Google Drive Archives)' : 'Full Portfolio & Research Archives (Google Drive)'}
                </h4>
                <p className="text-xs text-slate-500">
                  {lang === 'zh'
                    ? '查閱完整高解析度圖版、設計分析圖紙與現場踏查報告'
                    : 'Access full high-resolution design plates, fieldwork reports, and project documentation.'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {personalInfo.links.gdriveFolders.map((folder) => (
                <a
                  key={folder.id}
                  href={folder.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 hover:border-cyan-500 text-xs font-medium text-slate-700 transition-colors"
                >
                  <span>{folder.name[lang]}</span>
                  <ExternalLink size={12} className="text-slate-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
