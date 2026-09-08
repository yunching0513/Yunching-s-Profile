export type Language = 'zh' | 'en';

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: string;
  detail?: string;
}

export interface EducationItem {
  id: string;
  period: string;
  institution: {
    zh: string;
    en: string;
  };
  degree: {
    zh: string;
    en: string;
  };
  details: {
    zh: string[];
    en: string[];
  };
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: {
    zh: string;
    en: string;
  };
  organization: {
    zh: string;
    en: string;
  };
  type: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  issuer?: string;
  category: string;
}

export interface ProjectItem {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  subtitle: {
    zh: string;
    en: string;
  };
  category: 'gis' | 'advocacy' | 'livinglab' | 'innovation';
  description: {
    zh: string;
    en: string;
  };
  highlights: {
    zh: string[];
    en: string[];
  };
  tags: string[];
  link?: string;
  linkText?: {
    zh: string;
    en: string;
  };
  iconName: string;
  statusBadge: string;
  featured?: boolean;
}

export interface ArticleItem {
  id: string;
  year: string;
  title: {
    zh: string;
    en: string;
  };
  publisher: {
    zh: string;
    en: string;
  };
  category: 'urbanism' | 'museology' | 'ecology' | 'sts_ai';
  url: string;
  citation: string;
  summary: {
    zh: string;
    en: string;
  };
}

export interface VideoItem {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  platform: 'youtube' | 'vimeo';
  embedId: string;
  url: string;
  description: {
    zh: string;
    en: string;
  };
  duration?: string;
}
