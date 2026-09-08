import React, { useState } from 'react';
import { Language } from '../types';
import { thesisData } from '../data/portfolioData';
import {
  Cpu,
  Award,
  ExternalLink,
  ShieldAlert,
  Sliders,
  CheckCircle2,
  Sparkles,
  Users,
  GraduationCap,
  ArrowRight,
  BookOpen,
  Info
} from 'lucide-react';

interface ThesisShowcaseProps {
  lang: Language;
}

export const ThesisShowcase: React.FC<ThesisShowcaseProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'abstract' | 'arie' | '3e'>('arie');
  const [selectedArie, setSelectedArie] = useState<number>(0);

  return (
    <section id="thesis" className="py-20 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-800 mb-3">
            <Cpu size={14} className="text-cyan-600" />
            <span>{lang === 'zh' ? '碩士學位研究與理論架構' : 'Master’s Degree Thesis & Theoretical Model'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {thesisData.title[lang]}
          </h2>
          <p className="mt-2 text-base text-slate-600 font-medium">
            {thesisData.degree} • {thesisData.institutions}
          </p>

          {/* Award banner */}
          <div className="mt-4 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-amber-50 border border-amber-200/80 text-xs font-semibold text-amber-900">
            <Award size={16} className="text-amber-600 shrink-0" />
            <span>{thesisData.award[lang]}</span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex border-b border-slate-200 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('arie')}
            className={`pb-3 px-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
              activeTab === 'arie'
                ? 'border-cyan-600 text-cyan-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sliders size={16} />
            <span>{lang === 'zh' ? 'ARIE 評估模型 (Avoid, Reduce, Insist, Encourage)' : 'ARIE Evaluation Model'}</span>
          </button>

          <button
            onClick={() => setActiveTab('3e')}
            className={`pb-3 px-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
              activeTab === '3e'
                ? 'border-cyan-600 text-cyan-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Users size={16} />
            <span>{lang === 'zh' ? '3E 公民實踐架構 (Education, Empowerment, Engagement)' : '3E Framework Practice'}</span>
          </button>

          <button
            onClick={() => setActiveTab('abstract')}
            className={`pb-3 px-4 text-sm font-semibold whitespace-nowrap transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
              activeTab === 'abstract'
                ? 'border-cyan-600 text-cyan-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen size={16} />
            <span>{lang === 'zh' ? '研究摘要與兩難困境分析' : 'Abstract & Barber’s Dilemma'}</span>
          </button>
        </div>

        {/* Tab 1: ARIE Model Interactive Explorer */}
        {activeTab === 'arie' && (
          <div className="space-y-8">
            <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span>The ARIE (Aria) Evaluation Model</span>
                    <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-cyan-100 text-cyan-800">
                      HCAI FRAMEWORK
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    {thesisData.citationReference}
                  </p>
                </div>
                <div className="text-xs text-slate-500 max-w-sm">
                  {lang === 'zh'
                    ? '點擊四象限探索人本 AI 於公共政策與道路安全應用的具體防護與倡議準則'
                    : 'Interactive quadrant guide for ethical, citizen-aligned generative AI deployment'}
                </div>
              </div>

              {/* 4 Quadrants Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {thesisData.arieModel.map((item, index) => {
                  const isSelected = selectedArie === index;
                  let borderClass = 'border-slate-200';
                  let headerBg = 'bg-slate-100 text-slate-800';
                  let badgeBg = 'bg-slate-200 text-slate-700';

                  if (item.action === 'Avoid') {
                    borderClass = isSelected ? 'border-rose-500 ring-2 ring-rose-100' : 'hover:border-rose-300';
                    headerBg = 'bg-rose-50 text-rose-900 border-rose-200';
                    badgeBg = 'bg-rose-100 text-rose-700';
                  } else if (item.action === 'Reduce') {
                    borderClass = isSelected ? 'border-amber-500 ring-2 ring-amber-100' : 'hover:border-amber-300';
                    headerBg = 'bg-amber-50 text-amber-900 border-amber-200';
                    badgeBg = 'bg-amber-100 text-amber-700';
                  } else if (item.action === 'Insist') {
                    borderClass = isSelected ? 'border-blue-500 ring-2 ring-blue-100' : 'hover:border-blue-300';
                    headerBg = 'bg-blue-50 text-blue-900 border-blue-200';
                    badgeBg = 'bg-blue-100 text-blue-700';
                  } else if (item.action === 'Encourage') {
                    borderClass = isSelected ? 'border-emerald-500 ring-2 ring-emerald-100' : 'hover:border-emerald-300';
                    headerBg = 'bg-emerald-50 text-emerald-900 border-emerald-200';
                    badgeBg = 'bg-emerald-100 text-emerald-700';
                  }

                  return (
                    <div
                      key={item.action}
                      onClick={() => setSelectedArie(index)}
                      className={`cursor-pointer rounded-xl bg-white border p-5 transition-all shadow-2xs ${borderClass}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${headerBg}`}>
                          {item.action.toUpperCase()}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          0{index + 1} / 04
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-base mb-1">
                        {lang === 'zh' ? item.actionZh : item.action}
                      </h4>
                      <p className="text-xs text-slate-600 mb-4 line-clamp-2">
                        {item.description[lang]}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        {item.items.map((sub, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                            <span>{lang === 'zh' ? sub.zh : sub.en}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Detail view of selected ARIE quadrant */}
              <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200/90 text-sm">
                <div className="flex items-start gap-3">
                  <Info size={18} className="text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">
                      {thesisData.arieModel[selectedArie].actionZh}:
                    </span>{' '}
                    <span className="text-slate-700">
                      {thesisData.arieModel[selectedArie].description[lang]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 3E Framework */}
        {activeTab === '3e' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {thesisData.framework3E.map((item, idx) => (
              <div
                key={item.key}
                className="tech-card rounded-2xl p-6 bg-white border border-slate-200 relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center font-mono font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {lang === 'zh' ? item.nameZh : item.nameEn}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {lang === 'zh' ? item.descZh : item.descEn}
                </p>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-cyan-700 font-medium">
                  <CheckCircle2 size={14} />
                  <span>CITIZEN-AI PRACTICE</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Abstract & Barber's Dilemma */}
        {activeTab === 'abstract' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  {lang === 'zh' ? '論文核心研究摘要' : 'Thesis Abstract'}
                </h4>
                <p className="text-base text-slate-800 leading-relaxed font-normal">
                  {thesisData.abstract[lang]}
                </p>
              </div>

              <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  {lang === 'zh' ? '三輪公民工作坊與共創原型迭代' : 'Three-Round Participatory Co-Design Process'}
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {thesisData.coDesignProcess[lang]}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <h4 className="font-bold text-slate-900 text-sm font-mono mb-4 flex items-center gap-2">
                  <Sliders size={16} className="text-cyan-600" />
                  BARBER (1998) DILEMMA FRAMEWORK
                </h4>

                <div className="space-y-4 text-xs">
                  <div className="p-3 rounded-lg bg-rose-50/60 border border-rose-200">
                    <div className="font-bold text-rose-900 font-mono">
                      1. PANDORA SCENARIO (潘朵拉情境)
                    </div>
                    <p className="text-rose-800 mt-1">
                      {lang === 'zh'
                        ? 'AI 淪為寡頭工具、假訊息蔓延、數位落差擴大，導致民主參與萎縮與公民無力感。'
                        : 'Algorithmic monopoly, disinformation, surveillance, and disenfranchisement eroding public trust.'}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-200">
                    <div className="font-bold text-emerald-900 font-mono">
                      2. JEFFERSONIAN SCENARIO (傑佛遜民主情境)
                    </div>
                    <p className="text-emerald-800 mt-1">
                      {lang === 'zh'
                        ? 'AI 作為公民賦權工具，打破語言與專業壁壘，廣泛普及永續街道知識，深化大眾公共參與。'
                        : 'AI as an equalizer for civic agency, democratizing expert street design standards worldwide.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Download / Repository link box */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-cyan-400">TU DELFT REPOSITORY</div>
                  <div className="font-semibold text-sm mt-0.5">Read Full Thesis Publication</div>
                </div>
                <a
                  href={thesisData.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Open Paper</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
