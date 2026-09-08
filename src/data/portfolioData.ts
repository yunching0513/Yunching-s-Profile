import { EducationItem, ExperienceItem, CertificationItem, ProjectItem, ArticleItem, VideoItem } from '../types';

export const personalInfo = {
  name: {
    zh: '吳昀慶',
    en: 'Wu Yun-Ching',
  },
  alias: 'Yun-Ching Wu',
  roles: {
    zh: '設計師、研究員與永續倡議者',
    en: 'Designer, Researcher, and Sustainability Advocator',
  },
  tagline: {
    zh: '聚焦人本人工智慧 (Human-Centered AI)、科技與社會研究 (STS)、城市交通轉型與公民參與',
    en: 'Focusing on Human-Centered AI (HCAI), Science & Technology Studies (STS), Urban Mobility Transition, and Citizen Participation',
  },
  email: 'r04544014@ntu.edu.tw',
  phone: '+31 06-4783 9256',
  locations: {
    zh: '阿姆斯特丹，荷蘭 ⇄ 台北，台灣',
    en: 'Amsterdam, Netherlands ⇄ Taipei, Taiwan',
  },
  status: {
    zh: '開放學術研究、城市設計顧問與公民科技合作',
    en: 'Open for Academic Research, Urban Consulting & Civic Tech',
  },
  bio: {
    zh: '吳昀慶畢業於荷蘭台夫特理工大學 (TU Delft) 與瓦赫寧恩大學 (WUR) 共同開設的大都會分析、設計與工程 (MSc MADE) 碩士學位。具備多年都市工程師、公民倡議團體共同創辦人與跨領域研究經驗，長年專注於空間資料分析 (GIS)、人本人工智慧 (HCAI) 與交通轉型。致力於透過科技轉譯、社會設計與公民科學，促進更具民主參與感與包容性的永續宜居城市。',
    en: 'Wu Yun-Ching holds an MSc in Metropolitan Analysis, Design, and Engineering (MADE) jointly offered by TU Delft and Wageningen University & Research (WUR). With proven experience as an Associate Urban Engineer, NPO co-founder, and interdisciplinary researcher, he bridges spatial analytics (GIS), Human-Centered AI (HCAI), and urban mobility transition. His mission is to empower democratic participation and social equity in building sustainable, resilient cities through civic technology and co-creation.',
  },
  skills: [
    {
      category: { zh: '核心研究領域', en: 'Core Research Fields' },
      items: [
        'Science and Technology Studies (STS)',
        'Human-Centered AI (HCAI)',
        'Urban Mobility & Street Design',
        'Citizen Participation & Science',
        'Placemaking & Triple Helix'
      ]
    },
    {
      category: { zh: '數據分析與程式開發', en: 'Data & Programming' },
      items: [
        'Python Programming',
        'R Statistical Analysis',
        'Advanced QGIS & Geo-Spatial Tools',
        'Machine Learning & AI Integration',
        'Data Visualization & Mapping'
      ]
    },
    {
      category: { zh: '多媒體轉譯與倡議', en: 'Media & Advocacy' },
      items: [
        'Documentary Producing',
        'Knowledge Clips Making',
        'Public Photography & Visual Storytelling',
        'Policy Writing & Public Discourse',
        'Community Co-design Workshops'
      ]
    }
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/yunching0513/',
    researchgate: 'https://www.researchgate.net/profile/Yunching-Wu-4/publications',
    tudelftThesis: 'https://repository.tudelft.nl/record/uuid:e0bffdb9-5631-4b07-851c-87858469a082',
    visionZeroLinktree: 'https://linktr.ee/visionzerotw',
    gdriveFolders: [
      {
        id: '1ktWJDxqvLEnm6bVHZOB1dCIbOs4MLBYq',
        name: { zh: '作品集精選 (Google Drive)', en: 'Selected Portfolio (Google Drive)' },
        url: 'https://drive.google.com/drive/folders/1ktWJDxqvLEnm6bVHZOB1dCIbOs4MLBYq'
      },
      {
        id: '1yL5etUlDiEsayWdga9aaVAGV9zn21pVP',
        name: { zh: '專案檔案庫 (Google Drive)', en: 'Project Archive (Google Drive)' },
        url: 'https://drive.google.com/drive/folders/1yL5etUlDiEsayWdga9aaVAGV9zn21pVP'
      },
      {
        id: '1V4u3k7lWJfeUTfuEsrgy9mb9LJIk-S7M',
        name: { zh: '研究資料 (Google Drive)', en: 'Research Materials (Google Drive)' },
        url: 'https://drive.google.com/drive/folders/1V4u3k7lWJfeUTfuEsrgy9mb9LJIk-S7M'
      }
    ]
  }
};

export const thesisData = {
  degree: 'MSc Metropolitan Analysis, Design, and Engineering (MADE)',
  institutions: 'TU Delft & Wageningen University & Research (WUR)',
  title: {
    zh: '潘朵拉的盒子或傑佛遜式民主？生成式 AI 未來與全球道路安全的人本人工智慧實踐',
    en: 'A Pandora or Jeffersonian Scenario? Gen-AI Future & Human-Centered AI for Global Road Safety',
  },
  award: {
    zh: '荷蘭台夫特理工大學圖書館 生成式 AI 藝術與獎學金競賽得主',
    en: 'Awardee: Gen AI Artwork & Scholarship Competition, TU Delft Library',
  },
  repositoryUrl: 'https://repository.tudelft.nl/record/uuid:e0bffdb9-5631-4b07-851c-87858469a082',
  abstract: {
    zh: '本研究探討如何善用人工智慧（AI）來增進全球人類福祉，以 Barber (1998) 的兩難困境作為理論框架：AI 的普及究竟會引向毀滅性的「潘朵拉 (Pandora)」劇本，還是促進民主深化的「傑佛遜 (Jeffersonian)」理想劇本？研究聚焦全球道路安全這一嚴峻挑戰（每年奪走 119 萬條生命，且不成比例地集中於中低收入地區），研發了一款公民友善的 AI 輔助網路平台。該平台系統性推廣「永續安全 (Sustainable Safety)」理念與全球「城市街道設計指南 (Urban Street Design Guide)」，有效消弭跨國知識與語言藩籬。',
    en: 'This study explores how AI can be leveraged to advance global human well-being, using Barber’s (1998) dilemma as a framework to determine if AI leads to a harmful “Pandora” scenario or a beneficial “Jeffersonian” scenario that fosters democratic engagement. Focusing on road safety—an urgent challenge causing 1.19 million fatalities annually, often in lower-income regions—researchers developed a citizen-friendly AI-assisted website. This platform disseminates proven road safety strategies, such as “Sustainable Safety” and the “Urban Street Design Guide,” helping bridge knowledge and language gaps worldwide.',
  },
  coDesignProcess: {
    zh: '歷經三輪迭代原型開發，並由公民工作坊與問卷調查深度引導，最終原型整合了「人」與「AI」的雙重元素，證實 AI 能實質深化公民參與與公共議題思辨。立足於人本 AI (Human-Centered AI, HCAI) 框架，本研究進一步提出「Citizen-AI 公民人工智慧模型」，並建構 ARIE 評估模型（Avoid 避免、Reduce 減少、Insist 堅持、Encourage 鼓勵）與 3E 實踐架構（Education 教育、Empowerment 賦權、Engagement 參與）。',
    en: 'Through three rounds of iterative prototype development, guided by citizen input from workshops and surveys, the final prototype integrates both human and AI elements. It demonstrates that AI can enhance civic participation and public discourse. Building on the Human-Centered AI (HCAI) framework, the study introduces a “Citizen-AI” model supported by the ARIE evaluation model—Avoid, Reduce, Insist, Encourage—and the 3E framework—Education, Empowerment, and Engagement. Together, these models provide a comprehensive ethical and practical guide for AI developers, ensuring that new systems prioritize human welfare and encourage meaningful public involvement.',
  },
  citationReference: 'Inspired by Fui-Hoon Nah, Ozlem Ozmen Garibay et al. (2023), developed by this research',
  arieModel: [
    {
      action: 'Avoid',
      actionZh: 'Avoid (避免)',
      tone: 'rose',
      items: [
        { en: 'Harmful content', zh: '有害暴力內容' },
        { en: 'Inappropriate content', zh: '不當與歧視資訊' },
        { en: 'AI-Misuse & manipulation', zh: 'AI 惡意濫用與操縱' },
      ],
      description: {
        zh: '在系統架構層面嚴格杜絕一切有害、違法與剝削性生成，設定嚴謹的安全圍欄。',
        en: 'Strictly prohibit harmful, illegal, or exploitative generation with robust algorithmic guardrails.',
      }
    },
    {
      action: 'Reduce',
      actionZh: 'Reduce (減少)',
      tone: 'amber',
      items: [
        { en: 'Bias in training data', zh: '訓練資料偏誤' },
        { en: 'Over-reliance on automation', zh: '對自動化過度依賴' },
        { en: 'Digital and AI divide', zh: '數位與 AI 知識鴻溝' },
        { en: 'Hallucination & misinformation', zh: '模型幻覺與不實資訊' },
      ],
      description: {
        zh: '透過檢索增強 (RAG) 與批判性引導，主動抑制模型偏誤與過度依賴造成的認知退化。',
        en: 'Mitigate data bias and cognitive dependency through grounding, verification, and critical UX prompts.',
      }
    },
    {
      action: 'Insist',
      actionZh: 'Insist (堅持)',
      tone: 'blue',
      items: [
        { en: 'High Data Quality', zh: '高標準資料品質' },
        { en: 'Prompt engineering rigor', zh: '嚴謹的提示工程設計' },
        { en: 'Transparency and explainability', zh: '演算法透明度與可解釋性' },
        { en: 'Ethics and governance', zh: '倫理審查與治理責任' },
        { en: 'AI literacy for users', zh: '全面培養公眾 AI 素養' },
      ],
      description: {
        zh: '堅守開放透明、專業審查與倫理規範，確保系統決策邏輯清楚可被公眾檢驗。',
        en: 'Maintain open, explainable systems anchored in authoritative street design engineering standards.',
      }
    },
    {
      action: 'Encourage',
      actionZh: 'Encourage / Advocate (鼓勵倡議)',
      tone: 'emerald',
      items: [
        { en: 'Human well-being orientation', zh: '以人類長遠福祉為導向' },
        { en: 'Privacy and data security', zh: '最高規格隱私與資料安全' },
        { en: 'Authenticity & truthfulness', zh: '真實性與學理實證' },
        { en: 'Intellectual property & copyright', zh: '創作者智財與著作權保障' },
      ],
      description: {
        zh: '積極賦權公眾參與公共決策，以社會公平、安全環境與民主參與為核心終極價值。',
        en: 'Actively empower civic agency, social equity, pedestrian safety, and democratic governance.',
      }
    }
  ],
  framework3E: [
    {
      key: 'Education',
      nameZh: 'Education (教育與認知)',
      nameEn: 'Education & AI Literacy',
      descZh: '普及道路永續安全工程學理與 AI 運作機制，弭平跨專業與語言技術門檻。',
      descEn: 'Disseminating sustainable street design principles and demystifying AI capabilities globally.',
    },
    {
      key: 'Empowerment',
      nameZh: 'Empowerment (賦權與工具化)',
      nameEn: 'Empowerment & Citizen Agency',
      descZh: '將複雜交通安全評估與街道改造指南轉化為市民人人可用的即時分析工具。',
      descEn: 'Equipping grassroots citizens with interactive diagnostic tools to advocate for safer streets.',
    },
    {
      key: 'Engagement',
      nameZh: 'Engagement (公共思辨與參與)',
      nameEn: 'Civic Engagement & Discourse',
      descZh: '促進居民與城市規劃者的雙向平等對話，將群眾智慧納入政策決策流程。',
      descEn: 'Fostering constructive dialogues between communities and urban planners in policymaking.',
    }
  ]
};

export const educations: EducationItem[] = [
  {
    id: 'tudelft-wur',
    period: '2022 — 2024',
    institution: {
      zh: '荷蘭台夫特理工大學 (TU Delft) & 荷蘭瓦赫寧恩大學 (WUR)',
      en: 'TU Delft & Wageningen University & Research (WUR), Netherlands',
    },
    degree: {
      zh: '大都會分析、設計與工程 碩士 (MSc MADE)',
      en: 'MSc Metropolitan, Analysis, Design, and Engineering (MADE)',
    },
    details: {
      zh: [
        '空間數據分析、資料視覺化與地理資訊系統 (GIS) 工具應用',
        '跨國團隊合作、公眾共創 (Co-creation) 與城市 Living Lab 實驗設計',
        '碩士論文獲選為 TU Delft Library 生成式 AI 競賽獲獎研究'
      ],
      en: [
        'Data analysis, data visualization, and advanced GIS tools',
        'Co-creation, participatory living labs, and international multidisciplinary teamwork',
        'Master’s thesis recognized at TU Delft Library Gen-AI Scholarship Competition'
      ]
    },
    badge: 'MSc MADE'
  },
  {
    id: 'ntu-leadership',
    period: '2016 — 2017',
    institution: {
      zh: '國立臺灣大學 (National Taiwan University, NTU)',
      en: 'National Taiwan University (NTU)',
    },
    degree: {
      zh: '國立臺灣大學研究生協會 會長 (Graduate Student Association)',
      en: 'President, Graduate Student Association (NTUGSA)',
    },
    details: {
      zh: [
        '代表全校萬餘名研究生推動權益倡議、校園民主參與及學術環境友善化',
        '組織公共論壇、校園永續治理政策研究與跨校青年交流'
      ],
      en: [
        'Represented 10,000+ graduate students championing academic rights, student welfare, and campus democracy',
        'Organized university-wide public policy forums and inter-collegiate student governance initiatives'
      ]
    },
    badge: 'Leadership'
  }
];

export const certifications: CertificationItem[] = [
  {
    id: 'cert-1',
    title: {
      zh: '永續韌性城市的街道實驗 (Street Experiments for Sustainable and Resilient Cities)',
      en: 'Street Experiments for Sustainable and Resilient Cities',
    },
    category: 'Urban Mobility'
  },
  {
    id: 'cert-2',
    title: {
      zh: '結合 AI 與機器學習的進階 QGIS 空間分析 (Advanced QGIS Analysis with AI and Machine Learning)',
      en: 'Advanced QGIS Analysis with AI and Machine Learning',
    },
    category: 'Spatial AI & GIS'
  },
  {
    id: 'cert-3',
    title: {
      zh: '永續城市發展專業研習 (Sustainable Urban Development)',
      en: 'Sustainable Urban Development',
    },
    category: 'Urban Planning'
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-visionzero',
    period: '2023 — Present',
    role: {
      zh: '共同創辦人暨常務監事 / 國際交流專案',
      en: 'Co-founder & Supervisor / International Team',
    },
    organization: {
      zh: '台灣行人零死亡推動協會 (Vision Zero Taiwan NPO)',
      en: 'Vision Zero Taiwan (NPO)',
    },
    type: {
      zh: '非營利倡議組織與公民科技',
      en: 'Non-Profit Advocacy & Civic Tech',
    },
    description: {
      zh: '發起台灣史上最大規模行人權益路權遊行，推動立法院三讀通過《行人交通安全設施條例》。主導國際交流團隊，於 2024 Walk21 全球步行大會發表專案，並策劃 2025「街道重構暑期學校 (Remaking the Street Summer School)」，鏈結荷蘭與台灣城市規劃經驗。',
      en: 'Co-founded Taiwan’s foremost pedestrian advocacy NGO; spearheaded nationwide mobilization leading to statutory road safety reforms. Lead international partnerships at Walk21 Conference (2024) and directed the 2025 Remaking the Street Summer School bridging Dutch and Taiwanese spatial expertise.',
    },
    tags: ['Vision Zero', 'Walk21', 'Civic Tech', 'Policy Advocacy', 'Street Remaking']
  },
  {
    id: 'exp-taipei-gov',
    period: '2020 — 2024',
    role: {
      zh: '副工程司 (Associate Urban Engineer)',
      en: 'Associate Urban Engineer',
    },
    organization: {
      zh: '臺北市都市更新處 (Urban Regeneration Office, Taipei City Government)',
      en: 'Urban Regeneration Office, Taipei City Government',
    },
    type: {
      zh: '政府部門與城市更新規劃',
      en: 'Public Sector & Urban Regeneration',
    },
    description: {
      zh: '負責台北市都市更新整合、社區公辦都更評估、老舊市區街廓步行動線改善與空間再生策略。運用空間資料分析與公眾溝通程序，提升老舊社區防減災韌性與步行環境品質。',
      en: 'Managed public urban regeneration initiatives, spatial restructuring, neighborhood walkability upgrades, and participatory redevelopment programs across Taipei municipal districts. Implemented spatial data workflows for community disaster mitigation.',
    },
    tags: ['Urban Planning', 'Public Sector', 'Regeneration', 'GIS Analysis', 'Community']
  },
  {
    id: 'exp-lecturer',
    period: '2019',
    role: {
      zh: '華語客座講師 (Mandarin Lecturer)',
      en: 'Mandarin Lecturer',
    },
    organization: {
      zh: '東南亞基督教學院，菲律賓 (Southeast Asia Christian College, Philippines)',
      en: 'Southeast Asia Christian College, Philippines',
    },
    type: {
      zh: '國際教學與文化交流',
      en: 'International Education & Cultural Exchange',
    },
    description: {
      zh: '赴菲律賓進行跨文化語言教學與課程設計，促進東南亞青年跨文化理解與公民議題交流。',
      en: 'Conducted cross-cultural language pedagogy and interactive curriculum design, fostering international youth engagement in Southeast Asia.',
    },
    tags: ['International Education', 'Teaching', 'Cross-Cultural']
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'taipei-walk-map',
    title: {
      zh: '台北步行地圖 (Taipei Walk Map)',
      en: 'Taipei Walk Map',
    },
    subtitle: {
      zh: '公民參與式城市步行環境互動地圖',
      en: 'Interactive Citizen-Driven Urban Walkability Map',
    },
    category: 'gis',
    description: {
      zh: '透過群眾外包與開放資料，視覺化台北市人行道連續性、阻礙物及步行安全熱點，使市民能夠自主記錄並推動社區街道空間改善。',
      en: 'An interactive open-data mapping tool visualizing pedestrian sidewalk continuity, obstacles, and safety hotspots in Taipei, empowering citizens to document and advocate for better walking environments.',
    },
    highlights: {
      zh: [
        '即時地圖互動圖層，直觀顯示人行道鋪面與路障',
        '結合公民科學數據回報機制，促進地方政府針對缺失進行修繕',
        '全面提升公眾對城市人行環境之意識'
      ],
      en: [
        'Dynamic map layers visualizing sidewalk connectivity and physical barriers',
        'Citizen science feedback loop facilitating responsive municipal repairs',
        'Raised widespread public awareness on urban walkability'
      ]
    },
    tags: ['Interactive GIS', 'Vercel App', 'Citizen Science', 'Urban Mobility'],
    link: 'https://taipei-walk-map.vercel.app/',
    linkText: { zh: '開啟互動地圖', en: 'Launch Interactive Map' },
    iconName: 'MapPin',
    statusBadge: 'LIVE CIVIC APP',
    featured: true
  },
  {
    id: 'taiwan-mobility-atlas',
    title: {
      zh: '台灣道路安全平台：人行道地圖 (Taiwan Mobility Atlas - Sidewalk)',
      en: 'Taiwan Mobility Atlas: Sidewalk Infrastructure',
    },
    subtitle: {
      zh: '全國人行設施與步行空間地理資料庫',
      en: 'National Geospatial Database for Pedestrian Walkways',
    },
    category: 'gis',
    description: {
      zh: '建立全台第一個人行道與標線型人行道空間分析圖資系統，量化各縣市人行道覆蓋率與斷點，提供研究者與政策制定者科學依據。',
      en: 'Built the first comprehensive geospatial atlas mapping physical and painted sidewalks across Taiwan, quantifying walkability coverage and gaps for policymakers and urban researchers.',
    },
    highlights: {
      zh: [
        '分析全台鄉鎮市區人行道密度與空間分佈不均',
        '提供開放圖資供學術研究與交通規劃引用',
        '成為全國交通安全倡議關鍵論述依據'
      ],
      en: [
        'Geospatial density analysis across administrative districts in Taiwan',
        'Open spatial datasets accessible for academic research and planning',
        'Serves as empirical benchmark for national pedestrian safety reforms'
      ]
    },
    tags: ['QGIS', 'GeoJSON', 'Open Data', 'Spatial Analysis'],
    link: 'https://visionzerotaiwan.github.io/taiwan-mobility-atlas/sidewalk.html',
    linkText: { zh: '瀏覽全台圖資', en: 'Explore Mobility Atlas' },
    iconName: 'Globe',
    statusBadge: 'OPEN DATA ATLAS',
    featured: true
  },
  {
    id: 'netherlands-historical-map',
    title: {
      zh: '荷蘭歷史地圖漫步 1850 阿姆斯特丹 (Netherlands Historical Map Stroll)',
      en: 'Netherlands Historical Map Stroll: Amsterdam 1850',
    },
    subtitle: {
      zh: '「公眾歷史能否為生活環境的永續性帶來新契機？」',
      en: 'Can Public History Offer New Opportunities for Promoting Sustainability?',
    },
    category: 'gis',
    description: {
      zh: '結合 1850 年阿姆斯特丹歷史手繪圖幅與現代都市空間圖層，探索運河城市數百年來的空間演變，借鏡歷史水文與都市形態啟發當代氣候調適。',
      en: 'Superimposing 1850 historic cartography with modern spatial layers in Amsterdam, examining centuries of urban morphological adaptation to guide climate-resilient water management today.',
    },
    highlights: {
      zh: [
        '高精度歷史地理圖資套疊與動態滑動比對',
        '探討歷史水系與當代綠藍網絡的永續關聯',
        '實踐公眾歷史與空間人文學的數位對話'
      ],
      en: [
        'High-precision historical georeferencing with modern aerial comparison',
        'Analyzes historic hydrological systems for contemporary sponge city design',
        'Bridges spatial humanities, public history, and urban resilience'
      ]
    },
    tags: ['Historical GIS', 'Amsterdam 1850', 'Spatial Humanities', 'Climate Resilience'],
    link: 'https://yunching0513.github.io/Netherlands-historical-map/?city=amsterdam&year=1850',
    linkText: { zh: '探索 1850 歷史地圖', en: 'View Historical Map' },
    iconName: 'Compass',
    statusBadge: 'SPATIAL HUMANITIES',
    featured: true
  },
  {
    id: 'sensing-resilience',
    title: {
      zh: 'Sensing For Resilience: 樹木健康感測器 (Amsterdam Living Lab)',
      en: 'Sensing For Resilience: Urban Tree Sensors (Amsterdam Living Lab)',
    },
    subtitle: {
      zh: '阿姆斯特丹都市生態韌性物聯網感測專案',
      en: 'IoT Sensor Prototyping for Urban Tree Health Monitoring',
    },
    category: 'livinglab',
    description: {
      zh: '於阿姆斯特丹 Living Lab 實地研發，旨在設計低功耗感測裝置以即時監測都市樹木的生理狀態與土壤水分，提升極端氣候下的城市綠色基礎設施存活率。',
      en: 'Developed within the Amsterdam Living Lab framework, focusing on IoT sensor prototypes that monitor tree physiological conditions and soil moisture to safeguard urban green infrastructure under climate stress.',
    },
    highlights: {
      zh: [
        '整合環境微感測器與資料回傳技術',
        '以實證數據輔助阿姆斯特丹市府園藝防旱應變',
        '結合社區居民共同參與觀測'
      ],
      en: [
        'Integrated micro-environmental sensors with telemetry transmission',
        'Empirical data supporting municipal drought response strategies',
        'Community-centered citizen science monitoring protocols'
      ]
    },
    tags: ['Living Lab', 'IoT Sensors', 'Urban Forestry', 'Amsterdam', 'Resilience'],
    iconName: 'Cpu',
    statusBadge: 'LIVING LAB PILOT'
  },
  {
    id: 'quay-walls-amsterdam',
    title: {
      zh: '阿姆斯特丹 300 年老舊運河護岸修復創新 (Quay Walls Amsterdam)',
      en: 'Quay Walls Amsterdam: 300-Year Historic Infrastructure Renewal',
    },
    subtitle: {
      zh: '產官學三螺旋模型 (Triple Helix) 合作策略',
      en: 'Triple Helix Collaboration Model for Deteriorating Historic Canal Walls',
    },
    category: 'innovation',
    description: {
      zh: '阿姆斯特丹約有長達數百公里的歷史磚造運河壁（約 300 年歷史），正面臨沉陷與結構老化危機。本研究提出結合政府、學術機構與私部門的三螺旋創新架構，尋求兼顧文化資產與公共安全的修復解方。',
      en: 'Amsterdam’s historic 300-year-old canal quay walls are degrading, risking collapses. This initiative synthesized a Triple Helix model (city government, university research, and private engineering innovators) to accelerate renewal while preserving cultural heritage.',
    },
    highlights: {
      zh: [
        '面對 200+ 公里運河岸壁檢修挑戰的系統性創新',
        '設計兼顧文化遺產保存與現代結構強度的合作流程',
        '推動跨部門共治與新型標案機制'
      ],
      en: [
        'Systemic innovation addressing 200+ km of aging canal walls',
        'Balancing monumental heritage conservation with structural engineering safety',
        'Fostered collaborative public-private governance models'
      ]
    },
    tags: ['Triple Helix', 'Heritage Infrastructure', 'Policy Innovation', 'Canal City'],
    iconName: 'Anchor',
    statusBadge: 'URBAN GOVERNANCE'
  },
  {
    id: 'nature-return',
    title: {
      zh: 'Nature’s Return: 永續轉型綠色線上銀行構想',
      en: 'Nature’s Return: Sustainable Investment Digital Banking',
    },
    subtitle: {
      zh: '驅動商業世界正向轉變的環境影響力金融平台',
      en: 'Digital Banking Driving Environmental Transformation in Finance',
    },
    category: 'innovation',
    description: {
      zh: '倡議建立促進永續投資的綠色數位金融模式，引導資本流向城市自然復育、再生能源與循環經濟，實現商業價值與生態效益的雙贏。',
      en: 'A conceptual sustainable finance platform designed to redirect private capital toward urban re-naturing, renewable energy, and circular economy initiatives.',
    },
    highlights: {
      zh: [
        '結合 ESG 評估指標與數位金融服務介面',
        '將碳匯與生物多樣性效益納入投資回報模型',
        '促成跨界永續商業模式思辨'
      ],
      en: [
        'Integrating ESG impact indicators into intuitive fintech UX',
        'Quantifying biodiversity and carbon offsets in portfolio returns',
        'Catalyzing sustainable business transitions'
      ]
    },
    tags: ['Green Finance', 'Fintech', 'Circular Economy', 'Sustainability'],
    iconName: 'Coins',
    statusBadge: 'CONCEPT DESIGN'
  }
];

export const videos: VideoItem[] = [
  {
    id: 'vid-1',
    title: {
      zh: '紀錄片作品：城市交通與空間實踐 (5A7puM7b2TQ)',
      en: 'Documentary Showcase: Urban Mobility & Spatial Action',
    },
    platform: 'youtube',
    embedId: '5A7puM7b2TQ',
    url: 'https://www.youtube.com/watch?v=5A7puM7b2TQ',
    description: {
      zh: '透過鏡頭深入記錄城市空間的日常轉變，探討人、車與街道關係的重新定位。',
      en: 'In-depth documentary recording urban street transitions and rebalancing relations between people and vehicles.',
    }
  },
  {
    id: 'vid-2',
    title: {
      zh: '知識轉譯短片：公民科學與街道改造 (kS8EWRITh_c)',
      en: 'Knowledge Clip: Citizen Science & Street Experiments',
    },
    platform: 'youtube',
    embedId: 'kS8EWRITh_c',
    url: 'https://www.youtube.com/watch?v=kS8EWRITh_c',
    description: {
      zh: '結合田野觀察與學術理論，將永續城市街道規劃知識以生動影像傳遞給大眾。',
      en: 'Synthesizing field studies and urban theory into accessible, high-impact video knowledge clips.',
    }
  },
  {
    id: 'vid-3',
    title: {
      zh: '專題訪談與倡議視角 (xZxab7wTdXg)',
      en: 'Special Feature & Advocacy Perspective',
    },
    platform: 'youtube',
    embedId: 'xZxab7wTdXg',
    url: 'https://youtu.be/xZxab7wTdXg',
    description: {
      zh: '記錄行人路權倡議與公民團體的心路歷程，呈現台灣交通改革的歷史時刻。',
      en: 'Documenting the grassroots journey of pedestrian rights advocacy and systemic road reforms in Taiwan.',
    }
  },
  {
    id: 'vid-4',
    title: {
      zh: 'Vimeo 典藏影像作品 (774214159)',
      en: 'Vimeo Archive Visual Production',
    },
    platform: 'vimeo',
    embedId: '774214159',
    url: 'https://vimeo.com/774214159',
    description: {
      zh: '實驗性影像敘事，融合建築、空間美學與生活感官記憶的影像創作。',
      en: 'Experimental visual narrative synthesizing architecture, spatial aesthetics, and sensory urban memory.',
    }
  }
];

export const articles: ArticleItem[] = [
  {
    id: 'art-1',
    year: '2025',
    title: {
      zh: '《台灣為何誤解「15分鐘城市」？從巴黎看交通轉型與居住公平如何並存》',
      en: 'Why Does Taiwan Misunderstand the "15-Minute City"? Learning from Paris on Mobility Transition and Housing Equity',
    },
    publisher: {
      zh: '未來城市@天下 (Future City, CommonWealth Magazine)',
      en: 'Future City @ CommonWealth Magazine',
    },
    category: 'urbanism',
    url: 'https://futurecity.cw.com.tw/article/3729',
    citation: '吳昀慶（2025）。《台灣為何誤解「15分鐘城市」？從巴黎看交通轉型與居住公平如何並存》。未來城市@天下。',
    summary: {
      zh: '深入拆解巴黎 15 分鐘城市的實踐本質，剖析台灣社會常將其誤簡化為房地產口號的盲點，論述交通轉型、生活機能自足與居住正義三者不可分割的共生關係。',
      en: 'Critically examines the true ethos of Paris’s 15-Minute City policy versus Taiwanese real estate oversimplifications, exploring how mobility reform and housing justice must reinforce each other.',
    }
  },
  {
    id: 'art-2',
    year: '2025',
    title: {
      zh: '《Sovereign AI: Security Imaginaries, Tech Competition, and the Reshaping Geopolitical Landscape》',
      en: 'Sovereign AI: Security Imaginaries, Tech Competition, and the Reshaping Geopolitical Landscape',
    },
    publisher: {
      zh: 'ResearchGate [Preprint 學術預印本]',
      en: 'ResearchGate [Preprint]',
    },
    category: 'sts_ai',
    url: 'https://doi.org/10.13140/RG.2.2.27051.96808',
    citation: 'Wu, Y.-C. (2025). Sovereign AI: Security Imaginaries, Tech Competition, and the Reshaping Geopolitical Landscape [Preprint]. ResearchGate. https://doi.org/10.13140/RG.2.2.27051.96808',
    summary: {
      zh: '以科技與社會研究 (STS) 視角，分析當代各國追求「主權 AI (Sovereign AI)」背後的國家安全想像、科技地緣競逐與全球運算基礎設施的重組。',
      en: 'Analyzes national security imaginaries, technological competition, and computing infrastructure realignment underpinning modern sovereign AI initiatives through an STS theoretical lens.',
    }
  },
  {
    id: 'art-3',
    year: '2025',
    title: {
      zh: '《Amsterdam’s Placemaking Innovation: Hand-in-Hand for a Sustainable City》',
      en: 'Amsterdam’s Placemaking Innovation: Hand-in-Hand for a Sustainable City',
    },
    publisher: {
      zh: '文化部台灣社區通 (Ministry of Culture, Taiwan)',
      en: 'Community Connect, Ministry of Culture (Taiwan)',
    },
    category: 'urbanism',
    url: 'https://reurl.cc/pKdMll',
    citation: 'Wu, Y.-C. (2025). Amsterdam\'s Placemaking Innovation: Hand-in-Hand for a Sustainable City Flexible cooperation between locals, students, and governments. 中華民國文化部台灣社區通。',
    summary: {
      zh: '探討阿姆斯特丹如何透過居民、高校青年與市府間的高度彈性協作，將地方場所營造轉化為推動城市永續與社會包容的實質發動機。',
      en: 'Explores flexible co-creation frameworks among residents, students, and local authorities in Amsterdam to advance civic placemaking and urban sustainability.',
    }
  },
  {
    id: 'art-4',
    year: '2024',
    title: {
      zh: '《荷蘭海豹幼稚園：不僅是救援中心，更是未來海洋生態教育館》',
      en: 'Dutch Seal Kindergarten: Beyond a Rescue Center to a Future Marine Ecological Museum',
    },
    publisher: {
      zh: '未來城市@天下 (Future City, CommonWealth Magazine)',
      en: 'Future City @ CommonWealth Magazine',
    },
    category: 'ecology',
    url: 'https://futurecity.cw.com.tw/article/3561',
    citation: '吳昀慶（2024）。《荷蘭海豹幼稚園：不僅是救援中心，更是未來海洋生態教育館》。未來城市@天下。',
    summary: {
      zh: '深入荷蘭北部彼得比倫海豹中心，探討野生動物救援機構如何翻轉為具備公民科學、公眾參與教育與瓦登海生態復育的現代環境教育場域。',
      en: 'Visits Pieterburen Seal Rehabilitation Centre in the Netherlands, detailing how wildlife rescue evolves into a public marine ecology educational hub and citizen science center.',
    }
  },
  {
    id: 'art-5',
    year: '2024',
    title: {
      zh: '《見證記憶的傷痕與力量，葡萄牙阿爾朱比抵抗與自由博物館》',
      en: 'Witnessing the Scars and Strength of Memory: Museu do Aljube in Portugal',
    },
    publisher: {
      zh: '中華民國博物館學會 (Chinese Association of Museums)',
      en: 'Chinese Association of Museums (Taiwan)',
    },
    category: 'museology',
    url: 'https://reurl.cc/xKZQ5b',
    citation: '吳昀慶（2024）。《見證記憶的傷痕與力量，葡萄牙阿爾朱比抵抗與自由博物館》。中華民國博物館學會。',
    summary: {
      zh: '實地探訪里斯本阿爾朱比政治犯監獄舊址，探討威權時期歷史空間如何透過策展與空間轉譯，成為捍衛人權、民主記憶與世代反省的公共精神堡壘。',
      en: 'Field research on the transformation of Lisbon’s historic Aljube political prison into an evocative museum honoring anti-authoritarian resistance, human rights, and democratic memory.',
    }
  },
  {
    id: 'art-6',
    year: '2023',
    title: {
      zh: '《社會設計，百年之道！荷蘭建築與設計博物館特展》',
      en: 'Social Design: A Century of Pathways! Special Exhibition at Nieuwe Instituut',
    },
    publisher: {
      zh: '中華民國博物館學會 (Chinese Association of Museums)',
      en: 'Chinese Association of Museums (Taiwan)',
    },
    category: 'museology',
    url: 'https://reurl.cc/laVem6',
    citation: '吳昀慶（2023）。《社會設計，百年之道！荷蘭建築與設計博物館特展》。中華民國博物館學會。',
    summary: {
      zh: '借鏡鹿特丹新機構 (Nieuwe Instituut) 特展，梳理荷蘭百年來設計如何回應公眾住宅、城市衛生與民主變革等社會關鍵議題的深厚傳統。',
      en: 'Reviews the landmark social design retrospective at Nieuwe Instituut Rotterdam, tracing a century of Dutch design responding to housing justice, civic health, and democracy.',
    }
  },
  {
    id: 'art-7',
    year: '2023',
    title: {
      zh: '《步步落實居住正義的遠見：阿姆斯特丹博物館「住宅行動」特展》',
      en: 'Vision of Housing Justice Step by Step: Amsterdam Museum "Living Action" Exhibition',
    },
    publisher: {
      zh: '中華民國博物館學會 (Chinese Association of Museums)',
      en: 'Chinese Association of Museums (Taiwan)',
    },
    category: 'museology',
    url: 'https://www.tmaroc.org.tw/2023article30/',
    citation: '吳昀慶（2023）。《步步落實居住正義的遠見：阿姆斯特丹博物館「住宅行動」特展》。中華民國博物館學會。',
    summary: {
      zh: '剖析阿姆斯特丹百年社會住宅發展史，從 1901 住房法案到佔屋運動，反思台灣如何從歷史經驗中汲取社會住宅制度與居住正義的啟發。',
      en: 'Examines Amsterdam’s century-long social housing legislation and squatter movements, extracting strategic insights for Taiwan’s public housing policy and tenant rights.',
    }
  },
  {
    id: 'art-8',
    year: '2022',
    title: {
      zh: '《From Microchip to Political Bargaining Chip in the New Cold War Era: Case Study of TSMC Plants in Arizona and Kaohsiung》',
      en: 'From Microchip to Political Bargaining Chip in the New Cold War Era: Case Study of TSMC Plants in Arizona and Kaohsiung',
    },
    publisher: {
      zh: 'ResearchGate [Preprint 學術預印本]',
      en: 'ResearchGate [Preprint]',
    },
    category: 'sts_ai',
    url: 'https://doi.org/10.13140/RG.2.2.24535.38565',
    citation: 'Wu, Y.-C. (2022). From Microchip to Political bargaining chip in the New Cold War Era: Case study of TSMC plants in Arizona and Kaohsiung [Preprint]. ResearchGate. https://doi.org/10.13140/RG.2.2.24535.38565',
    summary: {
      zh: '比較台積電亞利桑那廠與高雄廠之空間佈局與政經博弈，剖析全球半導體供應鏈重組下晶片如何被賦予地緣政治籌碼之角色。',
      en: 'Comparative spatial and political economy analysis of TSMC fabrication plants in Arizona and Kaohsiung amid global semiconductor supply chain reshoring.',
    }
  },
  {
    id: 'art-9',
    year: '2020',
    title: {
      zh: '《飛天改遁地的鐵路立體化政策起源：北京有，我們也要有》',
      en: 'Origins of Railway Undergrounding Policy: "Beijing Has It, So Must We"',
    },
    publisher: {
      zh: '眼底城事 (Eyes on Place)',
      en: 'Eyes on Place (Urbanism Journal)',
    },
    category: 'urbanism',
    url: 'https://eyesonplace.net/2020/02/26/13749/',
    citation: '吳昀慶（2020)。《飛天改遁地的鐵路立體化政策起源：北京有，我們也要有》。眼底城事。https://eyesonplace.net/2020/02/26/13749/',
    summary: {
      zh: '耙梳台灣自 1970 年代以來的鐵路地下化與高架化政策演變歷程，檢視大型軌道建設決策背後的空間政治與都市現代化符號競爭。',
      en: 'Historiographical analysis of Taiwan’s multi-decade railway grade-separation policies, unmasking symbolic modernization politics and spatial power dynamics.',
    }
  }
];
