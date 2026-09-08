import React, { useState } from 'react';
import { Language, ArticleItem } from '../types';
import { articles } from '../data/portfolioData';
import {
  BookOpen,
  ExternalLink,
  Copy,
  Check,
  Search,
  FileText,
  Bookmark,
  Building2,
  Cpu,
  Landmark,
  Trees
} from 'lucide-react';

interface PublicationsSectionProps {
  lang: Language;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCitation = (article: ArticleItem) => {
    navigator.clipboard.writeText(article.citation);
    setCopiedId(article.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const filteredArticles = articles.filter((art) => {
    const matchesCategory =
      selectedCategory === 'all' || art.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSearch =
      art.title.zh.toLowerCase().includes(query) ||
      art.title.en.toLowerCase().includes(query) ||
      art.publisher.zh.toLowerCase().includes(query) ||
      art.publisher.en.toLowerCase().includes(query) ||
      art.citation.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', labelZh: '全部論述', labelEn: 'All Publications' },
    { id: 'urbanism', labelZh: '都市主義與交通', labelEn: 'Urbanism & Mobility' },
    { id: 'sts_ai', labelZh: '主權 AI 與科技地緣', labelEn: 'STS & Geopolitics' },
    { id: 'museology', labelZh: '博物館學與人權記憶', labelEn: 'Museology & Memory' },
    { id: 'ecology', labelZh: '生態與永續社會', labelEn: 'Ecology & Sustainability' },
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'urbanism':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
            <Building2 size={10} /> URBANISM
          </span>
        );
      case 'sts_ai':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
            <Cpu size={10} /> STS & AI
          </span>
        );
      case 'museology':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
            <Landmark size={10} /> MUSEOLOGY
          </span>
        );
      case 'ecology':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Trees size={10} /> ECOLOGY
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="publications" className="py-20 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-800 mb-3">
              <BookOpen size={14} className="text-cyan-600" />
              <span>{lang === 'zh' ? '公眾專欄與學術論文' : 'Public Articles & Academic Preprints'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'zh' ? '文章論述與研究成果' : 'Published Articles & Research'}
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              {lang === 'zh'
                ? '發表於《未來城市@天下》、《眼底城事》、《中華民國博物館學會》及 ResearchGate 之跨領域專欄與論文。'
                : 'Selected writings published in Future City @ CommonWealth, Eyes on Place, Chinese Association of Museums, and ResearchGate.'}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'zh' ? '搜尋關鍵字、標題或刊物...' : 'Search articles, keywords...'}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:border-cyan-500 bg-slate-50 focus:bg-white transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {lang === 'zh' ? cat.labelZh : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {filteredArticles.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-slate-50 border border-slate-200 text-slate-500 text-sm">
              {lang === 'zh' ? '未找到符合關鍵字的文章。' : 'No articles matched your search query.'}
            </div>
          ) : (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 transition-all duration-200 shadow-2xs hover:shadow-xs"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {article.year}
                      </span>
                      {getCategoryBadge(article.category)}
                      <span className="text-xs font-mono text-cyan-800">
                        {article.publisher[lang]}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 hover:text-cyan-700 transition-colors">
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        {article.title[lang]}
                      </a>
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed max-w-4xl">
                      {article.summary[lang]}
                    </p>
                  </div>

                  {/* Action buttons on right */}
                  <div className="flex items-center gap-2 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <button
                      onClick={() => handleCopyCitation(article)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-medium transition-colors cursor-pointer"
                      title={lang === 'zh' ? '複製引用格式' : 'Copy Citation'}
                    >
                      {copiedId === article.id ? (
                        <>
                          <Check size={14} className="text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">
                            {lang === 'zh' ? '已複製' : 'Copied'}
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>{lang === 'zh' ? '引用格式' : 'Cite'}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-cyan-700 text-xs font-semibold transition-colors shadow-2xs"
                    >
                      <span>{lang === 'zh' ? '閱讀全文' : 'Read Article'}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
