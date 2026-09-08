import React, { useState } from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  FolderArchive,
  Compass,
  MapPin
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [inquiryType, setInquiryType] = useState('collaboration');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Inquiry - ${inquiryType.toUpperCase()}] From ${senderName || 'Visitor'} via Portfolio`
    );
    const body = encodeURIComponent(
      `Hello Yun-Ching,\n\n${message}\n\nBest regards,\n${senderName}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 tech-dots-bg border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-800 mb-3">
            <MessageSquare size={14} className="text-cyan-600" />
            <span>{lang === 'zh' ? '聯繫與學術合作' : 'Contact & Collaborative Inquiries'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'zh' ? '跨界對話與合作邀約' : 'Get in Touch'}
          </h2>
          <p className="mt-2 text-base text-slate-600">
            {lang === 'zh'
              ? '歡迎就人本 AI、空間地理資訊 (GIS) 分析、都市交通轉型政策或工作坊演講交流合作。'
              : 'Open for academic research collaborations, urban mobility consulting, keynote speaking, and civic tech partnerships.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct channels cards */}
          <div className="lg:col-span-6 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">EMAIL ADDRESS</div>
                    <div className="font-bold text-slate-900 text-sm font-mono mt-0.5">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
                    title={lang === 'zh' ? '複製 Email' : 'Copy Email'}
                  >
                    {copiedEmail ? (
                      <Check size={16} className="text-emerald-600" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-cyan-700 text-xs font-semibold transition-colors"
                  >
                    {lang === 'zh' ? '寄信' : 'Send'}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">TELEPHONE (NETHERLANDS)</div>
                    <div className="font-bold text-slate-900 text-sm font-mono mt-0.5">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
                  title={lang === 'zh' ? '複製電話號碼' : 'Copy Phone'}
                >
                  {copiedPhone ? (
                    <Check size={16} className="text-emerald-600" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Social & Academic Networks Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 transition-all flex items-center gap-3 group shadow-2xs"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Linkedin size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600">LinkedIn</div>
                  <div className="text-[10px] font-mono text-slate-500">yunching0513</div>
                </div>
              </a>

              <a
                href={personalInfo.links.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 transition-all flex items-center gap-3 group shadow-2xs"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ExternalLink size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-600">ResearchGate</div>
                  <div className="text-[10px] font-mono text-slate-500">Yunching-Wu-4</div>
                </div>
              </a>
            </div>

            {/* Google Drive Archives Shortcut Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-2">
                <FolderArchive size={16} className="text-cyan-600" />
                <span>{lang === 'zh' ? '雲端資料夾直接存取 (Google Drive)' : 'Google Drive Direct Archives'}</span>
              </div>
              <div className="space-y-2">
                {personalInfo.links.gdriveFolders.map((folder) => (
                  <a
                    key={folder.id}
                    href={folder.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 hover:bg-cyan-50/60 border border-slate-200 text-xs font-medium text-slate-700 hover:text-cyan-800 transition-colors"
                  >
                    <span>{folder.name[lang]}</span>
                    <ExternalLink size={12} className="text-slate-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quick Email Inquiry Composer */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSendEmail}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Send size={16} className="text-cyan-600" />
                  {lang === 'zh' ? '快速發送合作信函' : 'Quick Inquiry Dispatch'}
                </span>
                <span className="font-mono text-[10px] text-slate-400">MAILTO PROTOCOL</span>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-600 mb-1.5">
                  {lang === 'zh' ? '合作類型' : 'Inquiry Category'}
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'collaboration', labelZh: '學術研究合作', labelEn: 'Academic Research' },
                    { id: 'consulting', labelZh: '城市規劃與 GIS 顧問', labelEn: 'Urban / GIS Consulting' },
                    { id: 'speaking', labelZh: '演講與工作坊邀請', labelEn: 'Keynote & Workshop' },
                    { id: 'visionzero', labelZh: '路權倡議與公民科技', labelEn: 'Civic Tech & Vision Zero' },
                  ].map((type) => (
                    <button
                      type="button"
                      key={type.id}
                      onClick={() => setInquiryType(type.id)}
                      className={`p-2.5 rounded-xl border text-left font-medium transition-all cursor-pointer ${
                        inquiryType === type.id
                          ? 'border-cyan-600 bg-cyan-50/70 text-cyan-900 font-semibold ring-1 ring-cyan-500'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {lang === 'zh' ? type.labelZh : type.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-600 mb-1">
                  {lang === 'zh' ? '您的姓名或單位' : 'Your Name / Organization'}
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder={lang === 'zh' ? '例：國立臺灣大學 研究團隊 / 某某設計事務所' : 'e.g. TU Delft Research Team / Studio'}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-hidden focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-600 mb-1">
                  {lang === 'zh' ? '諮詢內容或合作提議' : 'Message or Proposal Summary'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === 'zh'
                      ? '請簡述您的需求、合作構想或預計時程...'
                      : 'Please outline your proposed collaboration, project timeline, or research scope...'
                  }
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:outline-hidden focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <Send size={14} />
                <span>
                  {lang === 'zh' ? '開啟預填信件發送至 r04544014@ntu.edu.tw' : 'Open Draft Email to r04544014@ntu.edu.tw'}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
