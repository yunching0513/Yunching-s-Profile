import React from 'react';
import { Language } from '../types';
import { educations, experiences, certifications } from '../data/portfolioData';
import {
  GraduationCap,
  Briefcase,
  Award,
  Calendar,
  Building,
  CheckCircle2,
  Terminal,
  Compass
} from 'lucide-react';

interface ExperienceAndEducationProps {
  lang: Language;
}

export const ExperienceAndEducation: React.FC<ExperienceAndEducationProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-800 mb-3">
            <Terminal size={14} className="text-cyan-600" />
            <span>{lang === 'zh' ? '學歷演進與職涯歷程' : 'Education & Career Trajectory'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'zh' ? '學歷背景與實務經歷' : 'Education & Experience'}
          </h2>
          <p className="mt-2 text-base text-slate-600">
            {lang === 'zh'
              ? '跨越台灣與荷蘭兩國都市規劃體系，兼具地方政府公共工程實務與國際非營利組織倡議視野。'
              : 'Synthesizing Taiwanese and Dutch urban governance, municipal engineering practice, and international civic advocacy.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
              <Briefcase size={20} className="text-cyan-600" />
              <h3 className="text-xl font-bold text-slate-900">
                {lang === 'zh' ? '工作經歷與社會實踐' : 'Work Experience & Civic Leadership'}
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-9 group">
                  {/* Timeline node */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-cyan-600 group-hover:scale-125 transition-transform"></div>

                  <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-cyan-300 transition-all shadow-2xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-cyan-100 text-cyan-900">
                        {exp.period}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {exp.type[lang]}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">
                      {exp.role[lang]}
                    </h4>

                    <div className="text-xs font-medium text-cyan-800 mb-3">
                      {exp.organization[lang]}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {exp.description[lang]}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/50">
                      {exp.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-5 space-y-10">
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
                <GraduationCap size={20} className="text-cyan-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  {lang === 'zh' ? '學歷背景與青年領導' : 'Education & Leadership'}
                </h3>
              </div>

              <div className="space-y-4">
                {educations.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:bg-white hover:border-cyan-300 transition-all shadow-2xs"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                        {edu.period}
                      </span>
                      {edu.badge && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-50 text-cyan-700 border border-cyan-200">
                          {edu.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      {edu.degree[lang]}
                    </h4>

                    <div className="text-xs text-cyan-800 font-medium mb-3">
                      {edu.institution[lang]}
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-600 border-t border-slate-200/50 pt-3">
                      {edu.details[lang].map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 size={12} className="text-cyan-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Specialized Training */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
                <Award size={20} className="text-cyan-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  {lang === 'zh' ? '專業研習認證' : 'Certifications'}
                </h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-xl bg-white border border-slate-200 flex items-start justify-between gap-3 shadow-2xs hover:border-cyan-400 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                        0{index + 1}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 leading-snug">
                          {cert.title[lang]}
                        </div>
                        <div className="text-[11px] font-mono text-cyan-700 mt-1">
                          {cert.category}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
