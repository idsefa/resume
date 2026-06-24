export type RoleVariant = {
  label: string;
  labelZh?: string;
  labelZhHant?: string;
  labelDe?: string;
  labelFr?: string;
  profileRole: string;
  profileRoleZh?: string;
  profileRoleZhHant?: string;
  profileRoleDe?: string;
  profileRoleFr?: string;
  highlights: Array<{ title: string; description: string }>;
  highlightsZh?: Array<{ title: string; description: string }>;
  highlightsZhHant?: Array<{ title: string; description: string }>;
  highlightsDe?: Array<{ title: string; description: string }>;
  highlightsFr?: Array<{ title: string; description: string }>;
  experienceSummary: string[];
  experienceSummaryZh?: string[];
  experienceSummaryZhHant?: string[];
  experienceSummaryDe?: string[];
  experienceSummaryFr?: string[];
  educationSummary: string[];
  educationSummaryZh?: string[];
  educationSummaryZhHant?: string[];
  educationSummaryDe?: string[];
  educationSummaryFr?: string[];
  /** Reorder experience items: array of original indices, e.g. [2,1,0,3] */
  experienceOrder?: number[];
  /** Override bullet points per experience item (keyed by original index) */
  experienceBullets?: Record<number, string[]>;
  experienceBulletsZh?: Record<number, string[]>;
  experienceBulletsZhHant?: Record<number, string[]>;
  experienceBulletsDe?: Record<number, string[]>;
  experienceBulletsFr?: Record<number, string[]>;
};

export const ROLE_VARIANTS: Record<string, RoleVariant> = {
  default: {
    label: 'General',
    labelZh: '通用',
    labelZhHant: '通用',
    labelDe: 'Allgemein',
    labelFr: 'Général',
    profileRole: 'MEng Student in Aviation Engineering and Operation Management',
    profileRoleZh: '航空工程与运营管理硕士研究生',
    profileRoleZhHant: '航空工程與運營管理碩士研究生',
    profileRoleDe: 'MSc-Student in Luftfahrttechnik und Betriebsmanagement',
    profileRoleFr: 'Étudiant MSc en Ingénierie Aéronautique et Management des Opérations',
    highlights: [
      {
        title: 'Simulation-driven operations research',
        description: 'Main interest: using simulation and AI tools to improve airport and airline operations through data-driven analysis.',
      },
      {
        title: 'Worked across 4 different internships',
        description: 'Manufacturing, R&D, airport research, and campus recruiting — each one taught me something different about how teams get things done.',
      },
      {
        title: 'Python, SQL, AnyLogic, OR-Tools, Plant Simulation',
        description: 'I use Python, SQL, AnyLogic, Plant Simulation, and OR-Tools regularly in projects — tools that matter in real operations and engineering work.',
      },
    ],
    highlightsZh: [
      { title: '仿真驱动的运筹学研究', description: '主要兴趣：利用仿真和AI工具，通过数据驱动分析改善机场和航空公司运营。' },
      { title: '4段实习中的跨职能协作', description: '经历涵盖制造业、研发、机场研究和校园招聘——与多元团队合作交付成果。' },
      { title: 'Python, SQL, AnyLogic, OR-Tools, Plant Simulation', description: '熟练使用仿真、优化和数据工具，应用于实际运营和工程项目。' },
    ],
    highlightsZhHant: [
      { title: '仿真驅動的運籌學研究', description: '主要興趣：利用仿真和AI工具，通過數據驅動分析改善機場和航空公司運營。' },
      { title: '4段實習中的跨職能協作', description: '經歷涵蓋製造業、研發、機場研究和校園招聘——與多元團隊合作交付成果。' },
      { title: 'Python, SQL, AnyLogic, OR-Tools, Plant Simulation', description: '熟練使用仿真、優化和數據工具，應用於實際運營和工程項目。' },
    ],
    highlightsDe: [
      { title: 'Simulationgestützte Operationsforschung', description: 'Hauptinteresse: Einsatz von Simulations- und KI-Tools zur Verbesserung des Flughafen- und Flugbetriebs durch datengetriebene Analyse.' },
      { title: 'Funktionsübergreifende Zusammenarbeit in 4 Praktika', description: 'Erfahrung in Fertigung, F&E, Flughafenforschung und Campus-Recruiting — Arbeit in diversen Teams zur Ergebnislieferung.' },
      { title: 'Python, SQL, AnyLogic, OR-Tools, Plant Simulation', description: 'Praktische Erfahrung mit Simulations-, Optimierungs- und Datenwerkzeugen für reale Betriebs- und Ingenieurprojekte.' },
    ],
    highlightsFr: [
      { title: 'Recherche opérationnelle pilotée par la simulation', description: 'Intérêt principal : utiliser la simulation et les outils IA pour améliorer les opérations aéroportuaires et aériennes par l\'analyse basée sur les données.' },
      { title: 'Collaboration interfonctionnelle à travers 4 stages', description: 'Expérience en fabrication, R&D, recherche aéroportuaire et recrutement campus — travail en équipes diversifiées pour produire des résultats.' },
      { title: 'Python, SQL, AnyLogic, OR-Tools, Plant Simulation', description: 'Maîtrise des outils de simulation, d\'optimisation et de données appliqués aux projets d\'opérations et d\'ingénierie.' },
    ],
    experienceSummary: [
      'I have worked in R&D, airport simulation research, and factory operations improvement.',
      'Across these roles, I focused on solving daily workflow and efficiency problems with data and engineering methods.',
    ],
    experienceSummaryZh: [
      '我在研发、机场仿真研究和工厂运营改善方面有实践经验。',
      '在这些角色中，我专注于用数据和工程方法解决日常工作流程和效率问题。',
    ],
    experienceSummaryZhHant: [
      '我在研發、機場仿真研究和工廠運營改善方面有實踐經驗。',
      '在這些角色中，我專注於用數據和工程方法解決日常工作流程和效率問題。',
    ],
    experienceSummaryDe: [
      'Ich habe in F&E, Flughafen-Simulationsforschung und Fabrikbetriebsoptimierung gearbeitet.',
      'In diesen Rollen konzentrierte ich mich auf die Lösung täglicher Workflow- und Effizienzprobleme mit Daten- und Ingenieurmethoden.',
    ],
    experienceSummaryFr: [
      'J\'ai travaillé en R&D, en recherche de simulation aéroportuaire et en amélioration des opérations d\'usine.',
      'Dans ces rôles, je me suis concentré sur la résolution des problèmes quotidiens de flux de travail et d\'efficacité grâce aux données et aux méthodes d\'ingénierie.',
    ],
    educationSummary: [
      'My background combines aviation, industrial engineering, and law minor training.',
      'I like using this cross-domain view to solve operations and management problems.',
    ],
    educationSummaryZh: [
      '我的背景结合了航空、工业工程和法学辅修训练。',
      '我喜欢用这种跨领域视角来解决运营和管理问题。',
    ],
    educationSummaryZhHant: [
      '我的背景結合了航空、工業工程和法學輔修訓練。',
      '我喜歡用這種跨領域視角來解決運營和管理問題。',
    ],
    educationSummaryDe: [
      'Mein Hintergrund verbindet Luftfahrt, Industrieingenieurwesen und ein Nebenfach Rechtswissenschaften.',
      'Ich nutze gerne diese bereichsübergreifende Perspektive zur Lösung von Betriebs- und Managementproblemen.',
    ],
    educationSummaryFr: [
      'Mon parcours combine l\'aéronautique, l\'ingénierie industrielle et une mineure en droit.',
      'J\'aime utiliser cette perspective interdisciplinaire pour résoudre les problèmes d\'opérations et de gestion.',
    ],
    highlightsZh: [
      { title: "仿真驱动的运筹学研究", description: "主要兴趣：利用仿真和AI工具，通过数据驱动分析改善机场和航空公司运营。" },
      { title: "4段实习中的跨职能协作", description: "经历涵盖制造业、研发、机场研究和校园招聘——与多元团队合作交付成果。" },
      { title: "Python, SQL, AnyLogic, OR-Tools, Plant Simulation", description: "熟练使用仿真、优化和数据工具，应用于实际运营和工程项目。" },
    ],
    highlightsZhHant: [
      { title: "仿真驅動的運籌學研究", description: "主要興趣：利用仿真和AI工具，通過數據驅動分析改善機場和航空公司運營。" },
      { title: "4段實習中的跨職能協作", description: "經歷涵蓋製造業、研發、機場研究和校園招聘——與多元團隊合作交付成果。" },
      { title: "Python, SQL, AnyLogic, OR-Tools, Plant Simulation", description: "熟練使用仿真、優化和數據工具，應用於實際運營和工程項目。" },
    ],
    highlightsDe: [
      { title: "Simulationgestützte Operationsforschung", description: "Hauptinteresse: Einsatz von Simulations- und KI-Tools zur Verbesserung des Flughafenbetriebs." },
      { title: "Funktionsübergreifende Zusammenarbeit in 4 Praktika", description: "Erfahrung in Fertigung, F&E, Flughafenforschung und Campus-Recruiting." },
      { title: "Python, SQL, AnyLogic, OR-Tools, Plant Simulation", description: "Praktische Erfahrung mit Simulations- und Optimierungswerkzeugen." },
    ],
    highlightsFr: [
      { title: "Recherche opérationnelle pilotée par la simulation", description: "Intérêt principal : simulation et outils IA pour améliorer les opérations aéroportuaires." },
      { title: "Collaboration interfonctionnelle via 4 stages", description: "Expérience en fabrication, R&D, recherche aéroportuaire et recrutement campus." },
      { title: "Python, SQL, AnyLogic, OR-Tools, Plant Simulation", description: "Maîtrise des outils de simulation et d'optimisation pour les opérations." },
    ],
    experienceSummaryZh: ["我在研发、机场仿真研究和工厂运营改善方面有实践经验。", "在这些角色中，我专注于用数据和工程方法解决日常工作流程和效率问题。"],
    experienceSummaryZhHant: ["我在研發、機場仿真研究和工廠運營改善方面有實踐經驗。", "在這些角色中，我專注於用數據和工程方法解決日常工作流程和效率問題。"],
    experienceSummaryDe: ["Ich habe in F&E, Flughafen-Simulationsforschung und Fabrikbetriebsoptimierung gearbeitet.", "In diesen Rollen konzentrierte ich mich auf Workflow- und Effizienzprobleme mit Daten- und Ingenieurmethoden."],
    experienceSummaryFr: ["J'ai travaillé en R&D, en recherche de simulation aéroportuaire et en amélioration des opérations d'usine.", "Dans ces rôles, je me suis concentré sur les problèmes de flux de travail et d'efficacité."],
    educationSummaryZh: ["我的背景结合了航空、工业工程和法学辅修训练。", "我喜欢用这种跨领域视角来解决运营和管理问题。"],
    educationSummaryZhHant: ["我的背景結合了航空、工業工程和法學輔修訓練。", "我喜歡用這種跨領域視角來解決運營和管理問題。"],
    educationSummaryDe: ["Mein Hintergrund verbindet Luftfahrt, Industrieingenieurwesen und ein Nebenfach Rechtswissenschaften.", "Ich nutze gerne diese bereichsübergreifende Perspektive zur Lösung von Betriebsproblemen."],
    educationSummaryFr: ["Mon parcours combine l'aéronautique, l'ingénierie industrielle et une mineure en droit.", "J'aime utiliser cette perspective interdisciplinaire pour résoudre les problèmes d'opérations."],

  },

  aviation: {
    label: 'Aviation',
    labelZh: '航空',
    labelZhHant: '航空',
    labelDe: 'Luftfahrt',
    labelFr: 'Aéronautique',
    profileRole: 'Aviation Operations Analyst',
    profileRoleZh: '航空运营分析师',
    profileRoleZhHant: '航空運營分析師',
    profileRoleDe: 'Luftfahrtbetriebsanalyst',
    profileRoleFr: 'Analyste des opérations aéronautiques',
    highlights: [
      {
        title: 'Airport simulation: modeled airside vehicle operations at Baiyun Airport',
        description: 'Designed an AnyLogic simulation model for Guangzhou Baiyun Airport\'s airside vehicle operations, implementing collision avoidance and path planning algorithms that improved simulated traffic flow and safety metrics.',
      },
      {
        title: 'MEng at PolyU — purpose-built for airline and airport operations',
        description: 'The PolyU MEng program is specifically designed for careers in airline operations, airport management, and aviation consulting — providing deep domain expertise alongside technical skills.',
      },
      {
        title: 'IE-trained systems thinking applied to aviation',
        description: 'Industrial engineering training provides a structured, systematic approach to analyzing and optimizing complex airport and airline operational workflows.',
      },
    ],
    experienceSummary: [
      'My most relevant role is a year-long research project with Guangzhou Baiyun International Airport, where I designed a simulation model for airside vehicle operations.',
      'This project combined path planning, collision avoidance, and data-driven optimization — and won Excellent Thesis and Innovation Award.',
    ],
    educationSummary: [
      'The MEng in Aviation Engineering and Operation Management at PolyU is directly aligned with airline operations, airport management, and aviation consulting careers.',
      'My IE bachelor and law minor add structured problem-solving and regulatory awareness to the aviation domain foundation.',
    ],
    highlightsZh: [
      { title: "机场仿真：白云机场地面车辆运营建模", description: "为广州白云机场地面车辆运营设计AnyLogic仿真模型，实现避碰和路径规划算法，改善模拟交通流和安全指标。" },
      { title: "理工大学航空工程硕士——专为航空公司和机场运营设计", description: "港理工MEng课程专门面向航空公司运营、机场管理和航空咨询职业设计——在技术能力之外提供深入的领域专业知识。" },
      { title: "工业工程训练的系统思维应用于航空", description: "工业工程训练提供了结构化、系统化的方法来分析和优化复杂的机场和航空公司运营工作流。" },
    ],
    highlightsZhHant: [
      { title: "機場仿真：白雲機場地面車輛運營建模", description: "為廣州白雲機場地面車輛運營設計AnyLogic仿真模型，實現避碰和路徑規劃算法，改善模擬交通流和安全指標。" },
      { title: "理工大學航空工程碩士——專為航空公司和機場運營設計", description: "港理工MEng課程專門面向航空公司運營、機場管理和航空諮詢職業設計——在技術能力之外提供深入的領域專業知識。" },
      { title: "工業工程訓練的系統思維應用於航空", description: "工業工程訓練提供了結構化、系統化的方法來分析和優化複雜的機場和航空公司運營工作流。" },
    ],
    highlightsDe: [
      { title: "Flughafensimulation: Modellierung des Airside-Fahrzeugbetriebs", description: "Entwurf eines AnyLogic-Simulationsmodells für den Airside-Fahrzeugbetrieb am Flughafen Guangzhou Baiyun mit Kollisionsvermeidung und Pfadplanungsalgorithmen." },
      { title: "MEng an der PolyU — maßgeschneidert für Luftfahrtbetrieb", description: "Das PolyU MEng-Programm ist speziell auf Karrieren im Flugbetrieb, Flughafenmanagement und Luftfahrtberatung ausgerichtet." },
      { title: "IE-geschultes systemisches Denken in der Luftfahrt", description: "Das IE-Training bietet einen strukturierten Ansatz zur Analyse und Optimierung komplexer Flughafen- und Flugbetriebsabläufe." },
    ],
    highlightsFr: [
      { title: "Simulation aéroportuaire : modélisation des opérations airside", description: "Conception d\'un modèle de simulation AnyLogic pour les opérations de véhicules airside à l\'aéroport de Guangzhou Baiyun, avec évitement de collisions et algorithmes de planification de trajectoire." },
      { title: "MEng à PolyU — conçue pour les opérations aériennes", description: "Le programme MEng de PolyU est spécialement conçu pour les carrières en opérations aériennes, gestion aéroportuaire et conseil aéronautique." },
      { title: "Pensée systémique IE appliquée à l'aéronautique", description: "La formation IE fournit une approche structurée pour analyser et optimiser les flux opérationnels complexes des aéroportuaires et aériens." },
    ],
    experienceSummaryZh: [
      "我最相关的角色是与广州白云国际机场合作的一年期研究项目，设计地面车辆运营仿真模型。",
      "该项目结合了路径规划、避碰和数据驱动优化——获得优秀论文和创新奖。",
    ],
    experienceSummaryZhHant: [
      "我最相關的角色是與廣州白雲國際機場合作的一年期研究項目，設計地面車輛運營仿真模型。",
      "該項目結合了路徑規劃、避碰和數據驅動優化——獲得優秀論文和創新獎。",
    ],
    experienceSummaryDe: [
      "Meine relevanteste Rolle ist ein einjähriges Forschungsprojekt mit dem Flughafen Guangzhou Baiyun für den Airside-Fahrzeugbetrieb.",
      "Dieses Projekt verband Pfadplanung, Kollisionsvermeidung und datengetriebene Optimierung — und erhielt den Innovationspreis.",
    ],
    experienceSummaryFr: [
      "Mon rôle le plus pertinent est un projet de recherche d\'un an avec l\'aéroport de Guangzhou Baiyun pour les opérations de véhicules airside.",
      "Ce projet combinait planification de trajectoire, évitement de collisions et optimisation basée sur les données — prix de l\'innovation obtenu.",
    ],
    educationSummaryZh: [
      "港理工的航空工程与运营管理硕士与航空公司运营、机场管理和航空咨询职业直接对口。",
      "我的工业工程本科和法学辅修为航空领域基础增加了结构化问题解决能力和法规意识。",
    ],
    educationSummaryZhHant: [
      "港理工的航空工程與運營管理碩士與航空公司運營、機場管理和航空諮詢職業直接對口。",
      "我的工業工程本科和法學輔修為航空領域基礎增加了結構化問題解決能力和法規意識。",
    ],
    educationSummaryDe: [
      "Der MEng in Aviation Engineering an der PolyU ist direkt auf Flugbetrieb und Flughafenmanagement ausgerichtet.",
      "Mein IE-Bachelor und Nebenfach Recht ergänzen die Luftfahrtbasis um strukturierte Problemlösung und regulatorisches Bewusstsein.",
    ],
    educationSummaryFr: [
      "Le MSc en Ingénierie Aéronautique à PolyU est directement aligné sur les opérations aériennes et la gestion aéroportuaire.",
      "Ma licence IE et mineure en droit ajoutent résolution structurée des problèmes et conscience réglementaire au domaine aéronautique.",
    ],

    highlightsZh: [
      { title: "机场仿真：白云机场地面车辆运营建模", description: "为广州白云机场地面车辆运营设计AnyLogic仿真模型，实现避碰和路径规划算法。" },
      { title: "理工大学航空工程硕士", description: "港理工MEng课程专门面向航空公司运营、机场管理和航空咨询职业设计。" },
      { title: "工业工程系统思维应用于航空", description: "工业工程训练提供了结构化方法来分析和优化复杂的机场运营工作流。" },
    ],
    highlightsZhHant: [
      { title: "機場仿真：白雲機場地面車輛運營建模", description: "為廣州白雲機場地面車輛運營設計AnyLogic仿真模型，實現避碰和路徑規劃算法。" },
      { title: "理工大學航空工程碩士", description: "港理工MEng課程專門面向航空公司運營、機場管理和航空諮詢職業設計。" },
      { title: "工業工程系統思維應用於航空", description: "工業工程訓練提供了結構化方法來分析和優化複雜的機場運營工作流。" },
    ],
    highlightsDe: [
      { title: "Flughafensimulation: Airside-Fahrzeugbetrieb", description: "Entwurf eines AnyLogic-Simulationsmodells für den Airside-Fahrzeugbetrieb am Flughafen Guangzhou Baiyun." },
      { title: "MEng an der PolyU für Luftfahrtbetrieb", description: "Das PolyU MEng-Programm ist speziell auf Karrieren im Flugbetrieb ausgerichtet." },
      { title: "IE-geschultes systemisches Denken in der Luftfahrt", description: "Das IE-Training bietet einen strukturierten Ansatz zur Optimierung komplexer Flughafenabläufe." },
    ],
    highlightsFr: [
      { title: "Simulation aéroportuaire : opérations airside", description: "Conception d'un modèle de simulation AnyLogic pour les opérations de véhicules airside." },
      { title: "MEng à PolyU pour les opérations aériennes", description: "Le programme MEng de PolyU est conçu pour les carrières en opérations aériennes." },
      { title: "Pensée systémique IE appliquée à l'aéronautique", description: "La formation IE fournit une approche structurée pour optimiser les flux aéroportuaires." },
    ],
    experienceSummaryZh: ["我最相关的角色是与广州白云国际机场合作的一年期研究项目，设计地面车辆运营仿真模型。", "该项目结合了路径规划、避碰和数据驱动优化——获得优秀论文和创新奖。"],
    experienceSummaryZhHant: ["我最相關的角色是與廣州白雲國際機場合作的一年期研究項目，設計地面車輛運營仿真模型。", "該項目結合了路徑規劃、避碰和數據驅動優化——獲得優秀論文和創新獎。"],
    experienceSummaryDe: ["Meine relevanteste Rolle ist ein einjähriges Forschungsprojekt mit dem Flughafen Guangzhou Baiyun.", "Dieses Projekt verband Pfadplanung, Kollisionsvermeidung und datengetriebene Optimierung."],
    experienceSummaryFr: ["Mon rôle le plus pertinent est un projet de recherche d'un an avec l'aéroport de Guangzhou Baiyun.", "Ce projet combinait planification de trajectoire, évitement de collisions et optimisation."],
    educationSummaryZh: ["港理工的航空工程与运营管理硕士与航空公司运营、机场管理和航空咨询职业直接对口。", "我的工业工程本科和法学辅修为航空领域基础增加了结构化问题解决能力和法规意识。"],
    educationSummaryZhHant: ["港理工的航空工程與運營管理碩士與航空公司運營、機場管理和航空諮詢職業直接對口。", "我的工業工程本科和法學輔修為航空領域基礎增加了結構化問題解決能力和法規意識。"],
    educationSummaryDe: ["Der MEng in Aviation Engineering an der PolyU ist direkt auf Flugbetrieb und Flughafenmanagement ausgerichtet.", "Mein IE-Bachelor und Nebenfach Recht ergänzen die Luftfahrtbasis um strukturierte Problemlösung."],
    educationSummaryFr: ["Le MSc en Ingénierie Aéronautique à PolyU est aligné sur les opérations aériennes et la gestion aéroportuaire.", "Ma licence IE et mineure en droit ajoutent résolution structurée des problèmes au domaine aéronautique."],
    experienceOrder: [1, 0, 3, 2],
    experienceBullets: {
      0: ['Built 3 AI use cases on Huawei Ascend NPU — optimized inference pipelines for internal workflow automation.', '2 patents filed: AI-driven process optimization and intelligent scheduling algorithms.'],
      1: ['AnyLogic agent-based simulation for 50+ airport vehicles across 3 airside zones; collision avoidance and path-planning in Java.', 'Optimized dispatch under peak-hour load (200+ movements/hour): 35% congestion reduction, zero collisions.', 'Thesis won Excellent Thesis + Innovation Award; airport operations team adopted model for scenario planning.'],
      2: ['Standard time measurement on 8 workstations of dishwasher inner-liner line — stopwatch plus MOD method.', 'Line balancing found 2 key bottlenecks; rebalancing proposal raised theoretical efficiency from 72% to 85%.'],
      3: ['Stopwatch time studies on 12 workstations of the wheel loader line — used ECRS to find 3 main bottleneck points.', 'Suggested layout changes that cut cycle time by ~8% in simulation. Line engineers validated the results.'],
    },
    experienceBulletsZh: {
      0: ['基于华为昇腾 NPU 开发 3 个 AI 应用场景，优化推理管线。', '提交 2 项专利：AI 流程优化和智能排程算法。'],
      1: ['基于 AnyLogic 搭建 50+ 辆机场车辆的多智能体仿真模型，避碰与路径规划用 Java 实现。', '高峰场景（200+ 次/小时）下优化调度，拥堵降低 35%，零碰撞。', '论文获优秀论文 + 创新奖，机场运营团队采纳模型。'],
      2: ['对洗碗机内胆装配线 8 个工位进行标准工时测量。', '线平衡分析识别 2 个瓶颈，再平衡方案将效率从 72% 提升至 85%。'],
      3: ['对装载机装配线 12 个工位做秒表测时，用 ECRS 识别 3 个主要瓶颈。', '布局调整方案在仿真中将节拍时间降低约 8%。'],
    },
  },

  consulting: {
    label: 'Consulting',
    labelZh: '咨询',
    labelZhHant: '諮詢',
    labelDe: 'Beratung',
    labelFr: 'Conseil',
    profileRole: 'Operations & Management Consulting Candidate',
    profileRoleZh: '运营与管理咨询候选人',
    profileRoleZhHant: '運營與管理諮詢候選人',
    profileRoleDe: 'Kandidat für Betriebs- und Managementberatung',
    profileRoleFr: 'Candidat Conseil en Opérations et Management',
    highlights: [
      {
        title: 'Cross-industry problem-solving across 4 internships',
        description: 'Experience spans aviation simulation, manufacturing efficiency, AI workflow, and campus recruiting — providing the breadth to diagnose diverse client problems with structured analytical frameworks.',
      },
      {
        title: 'Data-driven process improvement: ECRS, line balancing, time study',
        description: 'Applied ECRS, line balancing, and time study across 2 manufacturing internships (LiuGong, Midea) to identify bottlenecks and propose measurable efficiency improvements.',
      },
      {
        title: 'Stakeholder communication: campus recruiting to R&D teams',
        description: 'Worked as campus brand ambassador and on R&D teams — learned to explain technical findings clearly to people outside my field.',
      },
    ],
    experienceSummary: [
      'My internships cover manufacturing operations, R&D, and airport research — each requiring structured analysis, hypothesis testing, and actionable recommendations.',
      'These varied roles build the consulting toolkit: fast context-switching, client-facing communication, and solution delivery under constraints.',
    ],
    educationSummary: [
      'The combination of IE engineering, aviation operations (MEng), and law minor is unusual — it gives me multiple analytical frameworks for diagnosing complex business problems.',
      'This cross-domain background is exactly what management consulting demands: structured thinking applied across industries.',
    ],
    highlightsZh: [
      { title: "跨行业问题解决：4段实习经验", description: "经历涵盖航空仿真、制造业效率、AI工作流和校园招聘。" },
      { title: "数据驱动的流程改善：ECRS、线平衡、工时研究", description: "在柳工和美的应用ECRS、线平衡和工时研究，识别瓶颈并提出效率改善方案。" },
      { title: "利益相关方沟通", description: "担任校园品牌大使和跨职能研发团队成员——将技术发现转化为清晰建议。" },
    ],
    highlightsZhHant: [
      { title: "跨行業問題解決：4段實習經驗", description: "經歷涵蓋航空仿真、製造業效率、AI工作流和校園招聘。" },
      { title: "數據驅動的流程改善：ECRS、線平衡、工時研究", description: "在柳工和美的應用ECRS、線平衡和工時研究，識別瓶頸並提出效率改善方案。" },
      { title: "利益相關方溝通", description: "擔任校園品牌大使和跨職能研發團隊成員——將技術發現轉化為清晰建議。" },
    ],
    highlightsDe: [
      { title: "Branchenübergreifende Problemlösung in 4 Praktika", description: "Erfahrung in Luftfahrtsimulation, Fertigungseffizienz, KI-Workflow und Campus-Recruiting." },
      { title: "Datengetriebene Prozessverbesserung: ECRS, Linienbalance", description: "Anwendung von ECRS und Zeitstudie in 2 Fertigungspraktika." },
      { title: "Stakeholder-Kommunikation", description: "Campus-Markenbotschafter und F&E-Teammitglied — Übersetzung technischer Erkenntnisse in Empfehlungen." },
    ],
    highlightsFr: [
      { title: "Résolution de problèmes intersectorielle via 4 stages", description: "Expérience en simulation aéronautique, efficacité manufacturière et recrutement campus." },
      { title: "Amélioration des processus par les données : ECRS, équilibrage", description: "Application de l'ECRS et de l'étude de temps lors de 2 stages en fabrication." },
      { title: "Communication avec les parties prenantes", description: "Ambassadeur de marque campus et membre d'équipe R&D — recommandations claires." },
    ],
    experienceSummaryZh: ["我的实习涵盖制造业运营、研发和机场研究——每个都需要结构化分析和可操作的建议。", "这些多样化角色构建了咨询工具箱：快速上下文切换、客户沟通和约束下的方案交付。"],
    experienceSummaryZhHant: ["我的實習涵蓋製造業運營、研發和機場研究——每個都需要結構化分析和可操作的建議。", "這些多樣化角色構建了諮詢工具箱：快速上下文切換、客戶溝通和約束下的方案交付。"],
    experienceSummaryDe: ["Meine Praktika decken Fertigungsoperationen, F&E und Flughafenforschung ab.", "Diese vielfältigen Rollen bilden das Berater-Toolkit."],
    experienceSummaryFr: ["Mes stages couvrent les opérations, la R&D et la recherche aéroportuaire.", "Ces rôles diversifiés construisent la boîte à outils du consultant."],
    educationSummaryZh: ["工业工程、航空运营和法学辅修的组合给了我多个分析框架来诊断复杂的商业问题。", "这种跨领域背景正是管理咨询所需要的。"],
    educationSummaryZhHant: ["工業工程、航空運營和法學輔修的組合給了我多個分析框架來診斷複雜的商業問題。", "這種跨領域背景正是管理諮詢所需要的。"],
    educationSummaryDe: ["Die Kombination aus IE, Luftfahrt und Recht gibt mir mehrere analytische Frameworks.", "Dieser bereichsübergreifende Hintergrund ist genau das, was Managementberatung verlangt."],
    educationSummaryFr: ["La combinaison IE, aéronautique et droit me donne plusieurs cadres analytiques.", "Ce parcours interdisciplinaire est ce que le conseil en management exige."],

    experienceOrder: [3, 2, 1, 0],
  },

  engineering: {
    label: 'Engineering',
    labelZh: '工程',
    labelZhHant: '工程',
    labelDe: 'Ingenieurwesen',
    labelFr: 'Ingénierie',
    profileRole: 'Industrial Engineering / Operations Specialist',
    profileRoleZh: '工业工程 / 运营专家',
    profileRoleZhHant: '工業工程 / 運營專家',
    profileRoleDe: 'Industrieingenieur / Betriebsspezialist',
    profileRoleFr: 'Ingénieur Industriel / Spécialiste des Opérations',
    highlights: [
      {
        title: 'Shop-floor time study and line balancing at 2 major manufacturers',
        description: 'Measured cycle time across multiple workstations at LiuGong and Midea using stopwatch studies and ECRS analysis; identified critical bottlenecks and proposed layout and sequence improvements.',
      },
      {
        title: 'Simulation-driven process design: AnyLogic + Plant Simulation',
        description: 'Built discrete-event and agent-based simulation models in AnyLogic and Plant Simulation to validate process changes before physical implementation, reducing implementation risk.',
      },
      {
        title: 'OR and Python for scheduling, routing, and capacity optimization',
        description: 'Applies OR-Tools, Python, and MySQL to model and solve scheduling, routing, and capacity optimization problems — core skills for operations research and engineering roles.',
      },
    ],
    experienceSummary: [
      'Two manufacturing internships at top Chinese companies (LiuGong, Midea) gave me hands-on IE experience: time study, motion economy, and line balancing on real production lines.',
      'My airport simulation research extended these skills into a more complex, dynamic system — showing adaptability beyond the factory floor.',
    ],
    educationSummary: [
      'Bachelor of Engineering in Industrial Engineering from Guangdong University of Technology — with strong coursework in operations research, simulation, and quality engineering.',
      'The MEng in Aviation adds systems-level thinking to the IE toolkit, applicable to complex logistics and operations problems.',
    ],
    highlightsZh: [
      { title: "两家制造企业的车间工时研究和线平衡", description: "在柳工和美的测量节拍时间，识别瓶颈并提出布局改善方案。" },
      { title: "仿真驱动的流程设计：AnyLogic + Plant Simulation", description: "构建离散事件和基于代理的仿真模型，在实施前验证流程变更。" },
      { title: "运筹学和Python用于排程、路径和产能优化", description: "应用OR-Tools、Python和MySQL解决排程和优化问题。" },
    ],
    highlightsZhHant: [
      { title: "兩家製造企業的車間工時研究和線平衡", description: "在柳工和美的測量節拍時間，識別瓶頸並提出布局改善方案。" },
      { title: "仿真驅動的流程設計：AnyLogic + Plant Simulation", description: "構建離散事件和基於代理的仿真模型，在實施前驗證流程變更。" },
      { title: "運籌學和Python用於排程、路徑和產能優化", description: "應用OR-Tools、Python和MySQL解決排程和優化問題。" },
    ],
    highlightsDe: [
      { title: "Zeitstudie und Linienbalance bei 2 Herstellern", description: "Messung der Zykluszeit bei LiuGong und Midea; Identifikation kritischer Engpässe." },
      { title: "Simulationsgestützte Prozessgestaltung", description: "Erstellung von Simulationsmodellen zur Validierung von Prozessänderungen." },
      { title: "OR und Python für Optimierung", description: "Einsatz von OR-Tools, Python und MySQL zur Lösung von Optimierungsproblemen." },
    ],
    highlightsFr: [
      { title: "Étude de temps et équilibrage chez 2 fabricants", description: "Mesure du temps de cycle chez LiuGong et Midea ; identification des goulots." },
      { title: "Conception de processus par simulation", description: "Construction de modèles de simulation pour valider les changements avant implémentation." },
      { title: "RO et Python pour optimisation", description: "Utilisation d'OR-Tools, Python et MySQL pour résoudre les problèmes d'optimisation." },
    ],
    experienceSummaryZh: ["在柳工和美的的制造业实习给了我实战IE经验：工时研究、动作经济和线平衡。", "机场仿真实验将这些技能扩展到更复杂的动态系统。"],
    experienceSummaryZhHant: ["在柳工和美的的製造業實習給了我實戰IE經驗：工時研究、動作經濟和線平衡。", "機場仿真實驗將這些技能擴展到更複雜的動態系統。"],
    experienceSummaryDe: ["Zwei Fertigungspraktika gaben mir praktische IE-Erfahrung: Zeitstudie und Linienbalance.", "Meine Flughafensimulation erweiterte diese Fähigkeiten auf komplexere Systeme."],
    experienceSummaryFr: ["Deux stages en fabrication m'ont donné une expérience pratique de l'IE.", "Ma recherche en simulation aéroportuaire a étendu ces compétences à des systèmes plus complexes."],
    educationSummaryZh: ["广东工业大学工业工程学士——运筹学、仿真和质量工程课程扎实。", "航空硕士为IE工具包增加了系统层面思维。"],
    educationSummaryZhHant: ["廣東工業大學工業工程學士——運籌學、仿真和質量工程課程紮實。", "航空碩士為IE工具包增加了系統層面思維。"],
    educationSummaryDe: ["Bachelor in Industrieingenieurwesen — fundierte Kurse in OR und Simulation.", "Der MEng in Luftfahrt ergänzt das IE-Toolkit um systemisches Denken."],
    educationSummaryFr: ["Licence en Ingénierie Industrielle — cours solides en RO et simulation.", "Le MSc en Aéronautique ajoute une pensée systémique à la boîte à outils IE."],

    experienceOrder: [2, 3, 1, 0],
  },

  ai: {
    label: 'AI / Data',
    labelZh: 'AI/数据',
    labelZhHant: 'AI/數據',
    labelDe: 'KI / Daten',
    labelFr: 'IA / Données',
    profileRole: 'AI Engineer / Operations Researcher',
    profileRoleZh: 'AI工程师 / 运筹研究员',
    profileRoleZhHant: 'AI工程師 / 運籌研究員',
    profileRoleDe: 'KI-Ingenieur / Operations-Researcher',
    profileRoleFr: 'Ingénieur IA / Chercheur en Recherche Opérationnelle',
    highlights: [
      {
        title: 'AI deployment on Huawei Ascend: use cases + 2 patent filings',
        description: 'Developed AI use cases on Huawei Ascend platform and optimized workflows at Shenzhen Wuxian Hongyin; filed 2 patents from AI-driven internship projects.',
    highlightsZh: [
      { title: "跨行业问题解决：4段实习经验", description: "经历涵盖航空仿真、制造业效率、AI工作流和校园招聘。" },
      { title: "数据驱动的流程改善：ECRS、线平衡、工时研究", description: "在柳工和美的应用ECRS、线平衡和工时研究，识别瓶颈并提出效率改善方案。" },
      { title: "利益相关方沟通", description: "担任校园品牌大使和跨职能研发团队成员——将技术发现转化为清晰建议。" },
    ],
    highlightsZhHant: [
      { title: "跨行業問題解決：4段實習經驗", description: "經歷涵蓋航空仿真、製造業效率、AI工作流和校園招聘。" },
      { title: "數據驅動的流程改善：ECRS、線平衡、工時研究", description: "在柳工和美的應用ECRS、線平衡和工時研究，識別瓶頸並提出效率改善方案。" },
      { title: "利益相關方溝通", description: "擔任校園品牌大使和跨職能研發團隊成員——將技術發現轉化為清晰建議。" },
    ],
    highlightsDe: [
      { title: "Branchenübergreifende Problemlösung in 4 Praktika", description: "Erfahrung in Luftfahrtsimulation, Fertigungseffizienz, KI-Workflow und Campus-Recruiting." },
      { title: "Datengetriebene Prozessverbesserung: ECRS, Linienbalance, Zeitstudie", description: "Anwendung von ECRS und Zeitstudie in 2 Fertigungspraktika zur Engpassidentifikation." },
      { title: "Stakeholder-Kommunikation", description: "Campus-Markenbotschafter und funktionsübergreifendes F&E-Teammitglied — Übersetzung technischer Erkenntnisse in klare Empfehlungen." },
    ],
    highlightsFr: [
      { title: "Résolution de problèmes intersectorielle via 4 stages", description: "Expérience en simulation aéronautique, efficacité manufacturière, flux IA et recrutement campus." },
      { title: "Amélioration des processus par les données : ECRS, équilibrage, étude de temps", description: "Application de l\'ECRS et de l\'étude de temps lors de 2 stages en fabrication pour identifier les goulots." },
      { title: "Communication avec les parties prenantes", description: "Ambassadeur de marque campus et membre d\'équipe R&D interfonctionnelle — traduction des résultats techniques en recommandations claires." },
    ],
    experienceSummaryZh: [
      "我的实习涵盖制造业运营、研发和机场研究——每个都需要结构化分析和可操作的建议。",
      "这些多样化角色构建了咨询工具箱：快速上下文切换、客户沟通和约束下的方案交付。",
    ],
    experienceSummaryZhHant: [
      "我的實習涵蓋製造業運營、研發和機場研究——每個都需要結構化分析和可操作的建議。",
      "這些多樣化角色構建了諮詢工具箱：快速上下文切換、客戶溝通和約束下的方案交付。",
    ],
    experienceSummaryDe: [
      "Meine Praktika decken Fertigungsoperationen, F&E und Flughafenforschung ab — jeweils mit strukturierter Analyse und umsetzbaren Empfehlungen.",
      "Diese vielfältigen Rollen bilden das Berater-Toolkit: schneller Kontextwechsel und kundenorientierte Kommunikation.",
    ],
    experienceSummaryFr: [
      "Mes stages couvrent les opérations, la R&D et la recherche aéroportuaire — chacun nécessitant analyse structurée et recommandations exploitables.",
      "Ces rôles diversifiés construisent la boîte à outils du consultant : changement de contexte rapide et communication client.",
    ],
    educationSummaryZh: [
      "工业工程、航空运营和法学辅修的组合给了我多个分析框架来诊断复杂的商业问题。",
      "这种跨领域背景正是管理咨询所需要的：跨行业的结构化思维。",
    ],
    educationSummaryZhHant: [
      "工業工程、航空運營和法學輔修的組合給了我多個分析框架來診斷複雜的商業問題。",
      "這種跨領域背景正是管理諮詢所需要的：跨行業的結構化思維。",
    ],
    educationSummaryDe: [
      "Die Kombination aus IE, Luftfahrt und Recht gibt mir mehrere analytische Frameworks zur Diagnose komplexer Geschäftsprobleme.",
      "Dieser bereichsübergreifende Hintergrund ist genau das, was Managementberatung verlangt.",
    ],
    educationSummaryFr: [
      "La combinaison IE, aéronautique et droit me donne plusieurs cadres analytiques pour diagnostiquer des problèmes commerciaux complexes.",
      "Ce parcours interdisciplinaire est ce que le conseil en management exige : pensée structurée intersectorielle.",
    ],

      },
      {
        title: 'Hybrid AI: simulation + optimization + LLM prompt engineering',
        description: 'Combines agent-based simulation (AnyLogic), OR-Tools optimization, and prompt engineering to build hybrid AI-operations solutions — bridging traditional OR with modern AI workflows.',
      },
      {
        title: 'Rapid prototyping: Python, SQL, prompt engineering',
        description: 'Proficient in Python, SQL, and prompt engineering; shipped AI-assisted tools in internship environments and accelerated research workflows with LLM-based automation.',
      },
    ],
    experienceSummary: [
      'At Shenzhen Wuxian Hongyin Technology, I worked on AI use cases based on Huawei Ascend, wrote patents, and used prompt engineering to speed up development.',
      'My earlier simulation research at Guangzhou Baiyun Airport combined path planning algorithms and data modeling — directly relevant to AI systems design.',
    ],
    educationSummary: [
      'Industrial Engineering provides the operations research foundation (optimization, modeling, algorithms) that underpins applied AI work.',
      'The MEng in Aviation Engineering extends this to real-world systems with complex operational constraints — a natural context for AI applications.',
    ],
    highlightsZh: [
      { title: "华为昇腾AI部署：用例开发 + 2项专利", description: "开发华为昇腾平台AI用例并优化工作流；申请2项专利。" },
      { title: "混合AI：仿真 + 优化 + LLM提示工程", description: "结合AnyLogic仿真、OR-Tools优化和提示工程构建混合AI-运营解决方案。" },
      { title: "快速原型：Python、SQL、提示工程", description: "常用 Python、SQL 和 Prompt Engineering，在实习中交付过 AI 辅助工具，能把开发周期压下来。" },
    ],
    highlightsZhHant: [
      { title: "華為昇騰AI部署：用例開發 + 2項專利", description: "開發華為昇騰平台AI用例並優化工作流；申請2項專利。" },
      { title: "混合AI：仿真 + 優化 + LLM提示工程", description: "結合AnyLogic仿真、OR-Tools優化和提示工程構建混合AI-運營解決方案。" },
      { title: "快速原型：Python、SQL、提示工程", description: "常用 Python、SQL 和 Prompt Engineering，在實習中交付過 AI 輔助工具，能把開發週期壓下來。" },
    ],
    highlightsDe: [
      { title: "KI-Bereitstellung auf Huawei Ascend + 2 Patente", description: "Entwicklung von KI-Anwendungsfällen auf Huawei Ascend; Einreichung von 2 Patenten." },
      { title: "Hybride KI: Simulation + Optimierung + Prompt-Engineering", description: "Kombination von Simulation, OR-Tools und Prompt-Engineering für hybride KI-Lösungen." },
      { title: "Schnelles Prototyping: Python, SQL, Prompt-Engineering", description: "Versiert in Python, SQL und Prompt-Engineering; Lieferung KI-unterstützter Tools." },
    ],
    highlightsFr: [
      { title: "Déploiement IA sur Huawei Ascend + 2 brevets", description: "Développement de cas d'usage IA sur Huawei Ascend ; dépôt de 2 brevets." },
      { title: "IA hybride : simulation + optimisation + prompt engineering", description: "Combinaison de simulation, OR-Tools et prompt engineering pour des solutions hybrides IA." },
      { title: "Prototypage rapide : Python, SQL, prompt engineering", description: "Maîtrise de Python, SQL et prompt engineering ; livraison d'outils assistés par IA." },
    ],
    experienceSummaryZh: ["在深圳无限宏音参与华为昇腾AI用例开发，撰写专利，使用提示工程加速开发。", "白云机场仿真实验结合路径规划算法和数据建模——与AI系统设计直接相关。"],
    experienceSummaryZhHant: ["在深圳無限宏音參與華為昇騰AI用例開發，撰寫專利，使用提示工程加速開發。", "白雲機場仿真實驗結合路徑規劃算法和數據建模——與AI系統設計直接相關。"],
    experienceSummaryDe: ["Bei Shenzhen Wuxian Hongyin arbeitete ich an KI-Anwendungsfällen auf Huawei Ascend und schrieb Patente.", "Meine Flughafensimulation verband Pfadplanungsalgorithmen und Datenmodellierung."],
    experienceSummaryFr: ["Chez Shenzhen Wuxian Hongyin, j'ai travaillé sur des cas d'usage IA sur Huawei Ascend et rédigé des brevets.", "Ma recherche en simulation aéroportuaire combinait algorithmes et modélisation."],
    educationSummaryZh: ["工业工程提供运筹学基础（优化、建模、算法），这是应用AI的基石。", "航空硕士将其扩展到具有复杂运营约束的真实系统。"],
    educationSummaryZhHant: ["工業工程提供運籌學基礎（優化、建模、算法），這是應用AI的基石。", "航空碩士將其擴展到具有複雜運營約束的真實系統。"],
    educationSummaryDe: ["Industrieingenieurwesen bietet die OR-Grundlage für angewandte KI.", "Der MEng erweitert dies auf reale Systeme mit komplexen Einschränkungen."],
    educationSummaryFr: ["L'ingénierie industrielle fournit le fondement RO pour l'IA appliquée.", "Le MSc l'étend aux systèmes réels avec des contraintes opérationnelles complexes."],

  },

  quant: {
    label: 'Quant',
    labelZh: '量化',
    labelZhHant: '量化',
    labelDe: 'Quantitativ',
    labelFr: 'Quantitatif',
    profileRole: 'Quantitative Analyst / AI Research Candidate',
    profileRoleZh: '量化分析师 / AI研究候选人',
    profileRoleZhHant: '量化分析師 / AI研究候選人',
    profileRoleDe: 'Quantitativer Analyst / KI-Forschungskandidat',
    profileRoleFr: 'Analyste Quantitatif / Candidat Recherche IA',
    highlights: [
      {
        title: 'Algorithmic modeling: path planning + constraint optimization',
        description: 'Implemented path planning and collision avoidance algorithms for airport vehicle simulation — applying graph search and constraint optimization techniques in a production-relevant system.',
      },
      {
        title: 'OR-Tools, Python, and simulation: transferable to quant finance',
        description: 'I work with scheduling, routing, and optimization algorithms plus simulation — these same methods apply to quant finance and risk modeling.',
      },
      {
        title: 'Analytical rigor: IE + law minor = structured reasoning',
        description: 'IE background trains systematic decomposition of complex systems; law minor adds structured legal reasoning — applicable to model risk, regulatory compliance, and quantitative research.',
      },
    ],
    experienceSummary: [
      'My research and internship work centered on algorithmic problem-solving: path planning in simulation, patent-driven AI projects, and operations optimization.',
      'These experiences demonstrate the mathematical and programming foundation needed for quantitative research roles.',
    ],
    educationSummary: [
      'Industrial Engineering is deeply quantitative: operations research, stochastic modeling, and data-driven decision-making are core to the curriculum.',
      'The MEng adds systems complexity and real-world operational constraints — valuable context for quantitative modeling in finance and risk.',
    ],
    highlightsZh: [
      { title: "算法建模：路径规划 + 约束优化", description: "为机场车辆仿真实现路径规划和避碰算法——应用图搜索和约束优化。" },
      { title: "OR-Tools、Python和仿真：可转移到量化金融", description: "熟练使用运筹学算法和仿真建模——可直接转移到量化金融和风险建模。" },
      { title: "分析严谨性：IE + 法学辅修", description: "IE训练系统性分解能力；法学辅修增加结构化推理——适用于模型风险和合规。" },
    ],
    highlightsZhHant: [
      { title: "算法建模：路徑規劃 + 約束優化", description: "為機場車輛仿真實現路徑規劃和避碰算法——應用圖搜索和約束優化。" },
      { title: "OR-Tools、Python和仿真：可轉移到量化金融", description: "熟練使用運籌學算法和仿真建模——可直接轉移到量化金融和風險建模。" },
      { title: "分析嚴謹性：IE + 法學輔修", description: "IE訓練系統性分解能力；法學輔修增加結構化推理——適用於模型風險和合規。" },
    ],
    highlightsDe: [
      { title: "Algorithmische Modellierung: Pfadplanung + Constraint-Optimierung", description: "Implementierung von Pfadplanungsalgorithmen für Flughafenfahrzeugsimulation." },
      { title: "OR-Tools, Python und Simulation: übertragbar auf Quant-Finanzen", description: "Praktische Erfahrung mit OR-Algorithmen — übertragbar auf quantitative Finanzen." },
      { title: "Analytische Rigorosität: IE + Nebenfach Recht", description: "IE-Hintergrund trainiert systematische Zerlegung komplexer Systeme." },
    ],
    highlightsFr: [
      { title: "Modélisation algorithmique : planification + optimisation sous contraintes", description: "Implémentation d'algorithmes de planification pour la simulation de véhicules aéroportuaires." },
      { title: "OR-Tools, Python et simulation : transférable à la finance quantitative", description: "Maîtrise des algorithmes de RO — transférable à la finance quantitative." },
      { title: "Rigueur analytique : IE + mineure en droit", description: "La formation IE développe la décomposition systématique des systèmes complexes." },
    ],
    experienceSummaryZh: ["我的研究和实习以算法问题解决为中心：仿真中的路径规划、AI项目和运营优化。", "这些经验量化研究岗位所需的数学和编程基础。"],
    experienceSummaryZhHant: ["我的研究和實習以算法問題解決為中心：仿真中的路徑規劃、AI項目和運營優化。", "這些經驗量化研究崗位所需的數學和編程基礎。"],
    experienceSummaryDe: ["Meine Forschung konzentrierte sich auf algorithmische Problemlösung: Pfadplanung und Betriebsoptimierung.", "Diese Erfahrungen demonstrieren die mathematische Grundlage für quantitative Forschungsstellen."],
    experienceSummaryFr: ["Mes travaux se sont concentrés sur la résolution algorithmique : planification de trajectoire et optimisation.", "Ces expériences démontrent les fondements mathématiques pour les postes de recherche quantitative."],
    educationSummaryZh: ["工业工程的课程本身就偏量化——运筹学、随机建模、数据驱动决策都是主课。", "航空硕士增加了系统复杂性和真实运营约束——对量化建模很有价值。"],
    educationSummaryZhHant: ["工業工程的課程本身就偏量化——運籌學、隨機建模、數據驅動決策都是主課。", "航空碩士增加了系統複雜性和真實運營約束——對量化建模很有價值。"],
    educationSummaryDe: ["Industrieingenieurwesen ist zutiefst quantitativ: OR und stochastische Modellierung sind Kern des Lehrplans.", "Der MEng ergänzt Systemkomplexität — wertvoll für quantitative Modellierung."],
    educationSummaryFr: ["L'ingénierie industrielle est profondément quantitative : RO et modélisation stochastique sont au cœur du programme.", "Le MSc ajoute la complexité des systèmes — précieux pour la modélisation quantitative."],

  },

  audit: {
    label: 'Tech Risk',
    labelZh: '科技风控',
    labelZhHant: '科技風控',
    labelDe: 'Tech-Risiko',
    labelFr: 'Risk Tech',
    profileRole: 'Risk Assurance & Technology Risk Analyst',
    profileRoleZh: '风险鉴证与科技风控分析师',
    profileRoleZhHant: '風險鑑證與科技風控分析師',
    profileRoleDe: 'Risk Assurance & Technology Risk Analyst',
    profileRoleFr: 'Analyste Risk Assurance & Technology Risk',
    highlights: [
      {
        title: 'Engineering + AI + Compliance background',
        description: 'Industrial engineering training (process optimization, simulation modeling, statistical analysis) combined with AI deployment experience and law minor coursework in regulatory frameworks and compliance.',
      },
      {
        title: 'Process audit and internal controls experience',
        description: 'Conducted time studies and process audits across 2 manufacturing plants, identifying control gaps and proposing corrective actions with quantified efficiency improvements.',
      },
      {
        title: 'IT systems and data analysis',
        description: 'Built simulation models (AnyLogic), developed AI applications (Huawei Ascend NPU), worked with SQL/MySQL databases, and applied Python for data analysis and workflow automation.',
      },
    ],
    highlightsZh: [
      { title: '工程 + AI + 合规的复合背景', description: '工业工程训练（流程优化、仿真建模、统计分析）+ AI 部署经验 + 法学辅修中的法规与合规课程。' },
      { title: '流程审计与内控经验', description: '在 2 家制造企业做过工时测量和流程审计，识别控制缺陷并提出有量化改善效果的纠正措施。' },
      { title: 'IT 系统与数据分析能力', description: '搭建过仿真模型（AnyLogic）、开发过 AI 应用（华为昇腾 NPU）、用过 SQL/MySQL 数据库，以及 Python 做数据分析和工作流自动化。' },
    ],
    highlightsZhHant: [
      { title: '工程 + AI + 合規的複合背景', description: '工業工程訓練（流程優化、仿真建模、統計分析）+ AI 部署經驗 + 法學輔修中的法規與合規課程。' },
      { title: '流程審計與內控經驗', description: '在 2 家製造企業做過工時測量和流程審計，識別控制缺陷並提出有量化改善效果的糾正措施。' },
      { title: 'IT 系統與數據分析能力', description: '搭建過仿真模型（AnyLogic）、開發過 AI 應用（華為昇騰 NPU）、用過 SQL/MySQL 數據庫，以及 Python 做數據分析和工作流自動化。' },
    ],
    highlightsDe: [
      { title: 'Ingenieurwesen + KI + Compliance-Hintergrund', description: 'Industrieingenieur-Training (Prozessoptimierung, Simulationsmodellierung, statistische Analyse) kombiniert mit KI-Erfahrung und Jura-Kursen zu Regulierung und Compliance.' },
      { title: 'Prozessprüfung und interne Kontrollerfahrung', description: 'Zeitstudien und Prozessaudits in 2 Fertigungsbetrieben durchgeführt; Kontrolllücken identifiziert und Korrekturmaßnahmen mit quantifizierten Verbesserungen vorgeschlagen.' },
      { title: 'IT-Systeme und Datenanalyse', description: 'Simulationsmodelle gebaut (AnyLogic), KI-Anwendungen entwickelt (Huawei Ascend NPU), mit SQL/MySQL-Datenbanken gearbeitet und Python für Datenanalyse und Workflow-Automatisierung eingesetzt.' },
    ],
    highlightsFr: [
      { title: 'Profil ingénierie + IA + conformité', description: "Formation en génie industriel (optimisation, modélisation par simulation, analyse statistique) combinée à une expérience en déploiement IA et des cours de droit sur la réglementation et la conformité." },
      { title: 'Audit de processus et contrôles internes', description: "Études de temps et audits de processus dans 2 usines de fabrication ; identification de lacunes dans les contrôles et propositions d'actions correctives avec des améliorations quantifiées." },
      { title: 'Systèmes IT et analyse de données', description: "Construction de modèles de simulation (AnyLogic), développement d'applications IA (Huawei Ascend NPU), travail avec des bases SQL/MySQL, et utilisation de Python pour l'analyse de données et l'automatisation des workflows." },
    ],
    experienceSummary: [
      'My internships in manufacturing operations required systematic process auditing — identifying bottlenecks, verifying compliance with standards, and recommending corrective actions.',
      'My airport simulation research involved modeling complex systems with multiple control points and risk scenarios — directly applicable to risk assessment and audit methodology.',
    ],
    experienceSummaryZh: [
      '我的制造业运营实习需要系统化的流程审计——识别瓶颈、验证标准合规性、提出纠正措施。',
      '我的机场仿真实验涉及对多控制点和风险场景的复杂系统建模——可直接应用于风险评估和审计方法论。',
    ],
    experienceSummaryZhHant: [
      '我的製造業運營實習需要系統化的流程審計——識別瓶頸、驗證標準合規性、提出糾正措施。',
      '我的機場仿真實驗涉及對多控制點和風險場景的複雜系統建模——可直接應用於風險評估和審計方法論。',
    ],
    experienceSummaryDe: [
      'Meine Praktika in der Fertigungsoperation erforderten systematische Prozessprüfung — Engpassidentifikation, Compliance-Überprüfung und Korrekturmaßnahmen.',
      'Meine Flughafensimulation umfasste die Modellierung komplexer Systeme mit mehreren Kontrollpunkten und Risikoszenarien — direkt anwendbar auf Risikobewertung und Audit-Methodik.',
    ],
    experienceSummaryFr: [
      'Mes stages en opérations de fabrication nécessitaient un audit de processus systématique — identification des goulets, vérification de conformité et recommandations correctives.',
      "Ma recherche en simulation aéroportuaire impliquait la modélisation de systèmes complexes avec multiples points de contrôle — applicable à l'évaluation des risques et à la méthodologie d'audit.",
    ],
    educationSummary: [
      'Industrial engineering provides the quantitative foundation for risk modeling — operations research, stochastic processes, and statistical quality control are core audit-relevant skills.',
      'The law minor adds regulatory and compliance awareness, structured legal reasoning, and understanding of governance frameworks — directly applicable to financial audit and risk management.',
    ],
    educationSummaryZh: [
      '工业工程为风险建模提供了定量基础——运筹学、随机过程和统计质量控制是审计相关的核心技能。',
      '法学辅修增加了法规合规意识、结构化法律推理和治理框架理解——直接适用于金融审计和风险管理。',
    ],
    educationSummaryZhHant: [
      '工業工程為風險建模提供了定量基礎——運籌學、隨機過程和統計質量控制是審計相關的核心技能。',
      '法學輔修增加了法規合規意識、結構化法律推理和治理框架理解——直接適用於金融審計和風險管理。',
    ],
    educationSummaryDe: [
      'Industrieingenieurwesen bietet die quantitative Grundlage für Risikomodellierung — OR, stochastische Prozesse und statistische Qualitätskontrolle sind audit-relevante Kernkompetenzen.',
      'Das Nebenfach Recht ergänzt regulatorisches Bewusstsein und strukturiertes juristisches Reasoning — direkt anwendbar auf Finanzaudit und Risikomanagement.',
    ],
    educationSummaryFr: [
      "L'ingénierie industrielle fournit le fondement quantitatif pour la modélisation des risques — RO, processus stochastiques et contrôle qualité statistique sont des compétences clés pour l'audit.",
      "La mineure en droit ajoute une conscience réglementaire et un raisonnement juridique structuré — directement applicable à l'audit financier et à la gestion des risques.",
    ],
    experienceOrder: [2, 1, 0, 3],
  },

  'risk-tech': {
    label: 'AI Risk',
    labelZh: 'AI风控',
    labelZhHant: 'AI風控',
    labelDe: 'KI-Risiko',
    labelFr: 'Risque IA',
    profileRole: 'AI Risk & Fraud Analytics Analyst',
    profileRoleZh: 'AI风控与反欺诈分析师',
    profileRoleZhHant: 'AI風控與反欺詐分析師',
    profileRoleDe: 'KI-Risiko- und Betrugsanalyse-Analyst',
    profileRoleFr: 'Analyste Risque IA et Fraude',
    highlights: [
      {
        title: 'AI deployment and model development experience',
        description: 'Built 3 AI use cases on Huawei Ascend NPU, filed 2 patents on AI-driven process optimization — I understand how AI models are built, deployed, and where they can fail.',
      },
      {
        title: 'Data analysis and simulation for risk modeling',
        description: 'Airport simulation with 50+ vehicles, collision avoidance algorithms, and statistical optimization — same mathematical foundations as fraud detection and model risk.',
      },
      {
        title: 'Quantitative background from industrial engineering',
        description: 'Operations research, stochastic modeling, and data-driven decision-making from my IE degree — directly applicable to AML/KYC analytics, model validation, and risk quantification.',
      },
    ],
    highlightsZh: [
      { title: 'AI 部署与模型开发经验', description: '在华为昇腾 NPU 上搭建了 3 个 AI 应用场景，提交了 2 项 AI 流程优化专利——我理解 AI 模型怎么建、怎么部署、哪里会出问题。' },
      { title: '数据分析与仿真用于风险建模', description: '50+ 辆车的机场仿真、避碰算法和统计优化——和反欺诈检测、模型风险的数学基础是一样的。' },
      { title: '工业工程的量化背景', description: '运筹学、随机建模、数据驱动决策——直接适用于 AML/KYC 分析、模型验证和风险量化。' },
    ],
    highlightsZhHant: [
      { title: 'AI 部署與模型開發經驗', description: '在華為昇騰 NPU 上搭建了 3 個 AI 應用場景，提交了 2 項 AI 流程優化專利——我理解 AI 模型怎麼建、怎麼部署、哪裡會出問題。' },
      { title: '數據分析與仿真用於風險建模', description: '50+ 輛車的機場仿真、避碰算法和統計優化——和反欺詐檢測、模型風險的數學基礎是一樣的。' },
      { title: '工業工程的量化背景', description: '運籌學、隨機建模、數據驅動決策——直接適用於 AML/KYC 分析、模型驗證和風險量化。' },
    ],
    highlightsDe: [
      { title: 'KI-Bereitstellung und Modellerfahrung', description: '3 KI-Anwendungsfälle auf Huawei Ascend NPU gebaut, 2 Patente zur KI-gestützten Prozessoptimierung — ich verstehe, wie KI-Modelle gebaut, bereitgestellt werden und wo sie versagen können.' },
      { title: 'Datenanalyse und Simulation für Risikomodellierung', description: 'Flughafen-Simulation mit 50+ Fahrzeugen, Kollisionsvermeidungsalgorithmen und statistische Optimierung — dieselben mathematischen Grundlagen wie bei Betrugserkennung und Modellrisiko.' },
      { title: 'Quantitativer Hintergrund aus dem Industrieingenieurwesen', description: 'OR, stochastische Modellierung und datengetriebene Entscheidungsfindung — direkt anwendbar auf AML/KYC-Analyse, Modellvalidierung und Risikoquantifizierung.' },
    ],
    highlightsFr: [
      { title: "Expérience en déploiement IA et développement de modèles", description: "3 cas d'usage IA sur Huawei Ascend NPU, 2 brevets sur l'optimisation de processus par IA — je comprends comment les modèles IA sont construits, déployés et où ils peuvent échouer." },
      { title: "Analyse de données et simulation pour la modélisation des risques", description: "Simulation aéroportuaire avec 50+ véhicules, algorithmes d'évitement de collision et optimisation statistique — mêmes fondements mathématiques que la détection de fraude et le risque de modèle." },
      { title: "Background quantitatif du génie industriel", description: "RO, modélisation stochastique et prise de décision basée sur les données — directement applicable à l'analyse AML/KYC, la validation de modèles et la quantification des risques." },
    ],
    experienceSummary: [
      'My AI internship on Huawei Ascend NPU gave me hands-on experience with model development, deployment pipelines, and failure modes — directly relevant to AI risk and model governance.',
      'My airport simulation research involved building predictive models with real operational data — the same skills needed for fraud analytics and risk quantification.',
    ],
    experienceSummaryZh: [
      '我的华为昇腾 AI 实习让我亲手做过模型开发、部署管线和故障模式——直接适用于 AI 风险和模型治理。',
      '我的机场仿真实验用真实运营数据构建预测模型——和反欺诈分析、风险量化需要的技能一样。',
    ],
    experienceSummaryZhHant: [
      '我的華為昇騰 AI 實習讓我親手做過模型開發、部署管線和故障模式——直接適用於 AI 風險和模型治理。',
      '我的機場仿真實驗用真實運營數據構建預測模型——和反欺詐分析、風險量化需要的技能一樣。',
    ],
    experienceSummaryDe: [
      'Mein KI-Praktikum auf Huawei Ascend NPU gab mir praktische Erfahrung mit Modellentwicklung, Deployment-Pipelines und Fehlermoden — direkt relevant für KI-Risiko und Modell-Governance.',
      'Meine Flughafen-Simulationsforschung umfasste die Erstellung prädiktiver Modelle mit echten Betriebsdaten — dieselben Fähigkeiten wie bei Betrugsanalyse und Risikoquantifizierung.',
    ],
    experienceSummaryFr: [
      "Mon stage IA sur Huawei Ascend NPU m'a donné une expérience concrète du développement de modèles, des pipelines de déploiement et des modes de défaillance — directement pertinent pour le risque IA et la gouvernance des modèles.",
      "Ma recherche en simulation aéroportuaire impliquait la construction de modèles prédictifs avec des données opérationnelles réelles — les mêmes compétences que pour l'analyse de fraude et la quantification des risques.",
    ],
    educationSummary: [
      'Industrial engineering provides the quantitative foundation — operations research, stochastic modeling, and statistical analysis are core to risk modeling and fraud detection.',
      'The law minor adds understanding of regulatory frameworks, compliance requirements, and governance structures — essential for AI governance and model risk management.',
    ],
    educationSummaryZh: [
      '工业工程提供了量化基础——运筹学、随机建模和统计分析是风险建模和反欺诈的核心。',
      '法学辅修增加了对监管框架、合规要求和治理结构的理解——对 AI 治理和模型风险管理至关重要。',
    ],
    educationSummaryZhHant: [
      '工業工程提供了量化基礎——運籌學、隨機建模和統計分析是風險建模和反欺詐的核心。',
      '法學輔修增加了對監管框架、合規要求和治理結構的理解——對 AI 治理和模型風險管理至關重要。',
    ],
    educationSummaryDe: [
      'Industrieingenieurwesen bietet die quantitative Grundlage — OR, stochastische Modellierung und statistische Analyse sind Kern der Risikomodellierung und Betrugserkennung.',
      'Das Nebenfach Recht ergänzt Verständnis für regulatorische Frameworks, Compliance-Anforderungen und Governance-Strukturen — essenziell für KI-Governance und Modellrisikomanagement.',
    ],
    educationSummaryFr: [
      "L'ingénierie industrielle fournit le fondement quantitatif — RO, modélisation stochastique et analyse statistique sont au cœur de la modélisation des risques et de la détection de fraude.",
      "La mineure en droit ajoute la compréhension des cadres réglementaires, des exigences de conformité et des structures de gouvernance — essentiels pour la gouvernance IA et la gestion du risque de modèle.",
    ],
    experienceOrder: [0, 1, 2, 3],
  },
};

export const ROLE_IDS = Object.keys(ROLE_VARIANTS) as string[];
