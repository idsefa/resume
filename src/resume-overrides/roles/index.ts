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
    profileRoleZh: '民航工程与运营管理硕士研究生',
    profileRoleZhHant: '民航工程與運營管理碩士研究生',
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
      { title: "理工大学民航工程硕士——专为航空公司和机场运营设计", description: "港理工MEng课程专门面向航空公司运营、机场管理和航空咨询职业设计——在技术能力之外提供深入的领域专业知识。" },
      { title: "工业工程训练的系统思维应用于航空", description: "工业工程训练提供了结构化、系统化的方法来分析和优化复杂的机场和航空公司运营工作流。" },
    ],
    highlightsZhHant: [
      { title: "機場仿真：白雲機場地面車輛運營建模", description: "為廣州白雲機場地面車輛運營設計AnyLogic仿真模型，實現避碰和路徑規劃算法，改善模擬交通流和安全指標。" },
      { title: "理工大學民航工程碩士——專為航空公司和機場運營設計", description: "港理工MEng課程專門面向航空公司運營、機場管理和航空諮詢職業設計——在技術能力之外提供深入的領域專業知識。" },
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
      "港理工的民航工程与运营管理硕士与航空公司运营、机场管理和航空咨询职业直接对口。",
      "我的工业工程本科和法学辅修为航空领域基础增加了结构化问题解决能力和法规意识。",
    ],
    educationSummaryZhHant: [
      "港理工的民航工程與運營管理碩士與航空公司運營、機場管理和航空諮詢職業直接對口。",
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
    experienceOrder: [0, 1, 3, 2],
    experienceBullets: {
      0: ['Set up 3 AI tools on Huawei Ascend 310B chips for internal team use; sped up response time by ~30%.', 'Designed motor driver circuits and wrote STM32 firmware for a smart piano; tested with oscilloscopes and logic analyzers.', 'Built a finger-position tracking system for the piano using a camera and the Ascend chip; documented the SDK for the team.'],
      1: ['Modeled how ground vehicles move around Guangzhou Baiyun Airport — roads, service lanes, dispatch rules — using AnyLogic, Java, and MySQL.', 'Wrote routing algorithms (Dijkstra, A*, BFS, genetic) so 50+ vehicles across 3 zones could find collision-free paths.', 'Cut simulated congestion by 35% during peak hours (200+ movements/hour); thesis won Excellent Thesis + Innovation Award.'],
      2: ['Timed every step on a dishwasher sheet metal line by hand; found 5 steps that were too slow.', 'Suggested 22 changes using lean methods; simulation showed line balance going from 58% to 70%, with 2 fewer workers.'],
      3: ['Timed 12 workstations on the wheel loader assembly line; found the 3 biggest bottlenecks using ECRS.', 'Suggested layout tweaks that cut cycle time by ~8% in simulation. The line engineers confirmed it worked.'],
    },
    experienceBulletsZh: {
      0: ['在华为昇腾 310B 芯片上跑了 3 个 AI 工具给团队内部用，响应速度提了约 30%。', '画了智能钢琴的电机驱动电路（嘉立创），写了 STM32 固件，用示波器和逻辑分析仪调过板子。', '用摄像头 + 昇腾芯片做了钢琴指法识别系统；帮团队写了 SDK 技术文档。'],
      1: ['用 AnyLogic + Java + MySQL 建了白云机场地面车辆的仿真模型——路网、服务车道、调度规则都做了。', '写了好几种路径算法（Dijkstra、A*、BFS、遗传），让 50 多辆车在 3 个区域里跑不撞。', '高峰时段（200+ 次/小时）拥堵降了 35%，零碰撞；论文拿了优秀论文 + 创新奖。'],
      2: ['拿秒表把洗碗机钣金线每个工位都测了一遍，找出 5 个超节拍的工序。', '用精益方法提了 22 个改善点；仿真结果：线平衡率 58%→70%，20 人减到 18 人。'],
      3: ['对装载机装配线 12 个工位做了秒表测时，用 ECRS 找到 3 个主要瓶颈。', '调整布局方案在仿真中把节拍时间降了约 8%，产线工程师验证过可行。'],
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

    experienceOrder: [0, 3, 2, 1],
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

    experienceOrder: [0, 2, 3, 1],
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
        title: 'AI deployment on Huawei Ascend: use cases and internal tools',
        description: 'Developed AI use cases on Huawei Ascend platform and optimized workflows at Shenzhen Wuxian Hongyin; built internal tools and documented SDK for the team.',
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
    highlightsZh: [
      { title: "华为昇腾AI部署：用例开发与内部工具", description: "开发华为昇腾平台AI用例并优化工作流；构建内部工具并撰写SDK文档。" },
      { title: "混合AI：仿真 + 优化 + LLM提示工程", description: "结合AnyLogic仿真、OR-Tools优化和提示工程构建混合AI-运营解决方案。" },
      { title: "快速原型：Python、SQL、提示工程", description: "常用 Python、SQL 和 Prompt Engineering，在实习中交付过 AI 辅助工具，能把开发周期压下来。" },
    ],
    highlightsZhHant: [
      { title: "華為昇騰AI部署：用例開發與內部工具", description: "開發華為昇騰平台AI用例並優化工作流；構建內部工具並撰寫SDK文檔。" },
      { title: "混合AI：仿真 + 優化 + LLM提示工程", description: "結合AnyLogic仿真、OR-Tools優化和提示工程構建混合AI-運營解決方案。" },
      { title: "快速原型：Python、SQL、提示工程", description: "常用 Python、SQL 和 Prompt Engineering，在實習中交付過 AI 輔助工具，能把開發週期壓下來。" },
    ],
    highlightsDe: [
      { title: "KI-Bereitstellung auf Huawei Ascend: Anwendungsfälle und interne Tools", description: "Entwicklung von KI-Anwendungsfällen auf Huawei Ascend und Optimierung von Workflows; Erstellung interner Tools und SDK-Dokumentation." },
      { title: "Hybride KI: Simulation + Optimierung + Prompt-Engineering", description: "Kombination von Simulation, OR-Tools und Prompt-Engineering für hybride KI-Lösungen." },
      { title: "Schnelles Prototyping: Python, SQL, Prompt-Engineering", description: "Versiert in Python, SQL und Prompt-Engineering; Lieferung KI-unterstützter Tools." },
    ],
    highlightsFr: [
      { title: "Déploiement IA sur Huawei Ascend : cas d'usage et outils internes", description: "Développement de cas d'usage IA sur Huawei Ascend et optimisation des flux de travail ; création d'outils internes et documentation SDK." },
      { title: "IA hybride : simulation + optimisation + prompt engineering", description: "Combinaison de simulation, OR-Tools et prompt engineering pour des solutions hybrides IA." },
      { title: "Prototypage rapide : Python, SQL, prompt engineering", description: "Maîtrise de Python, SQL et prompt engineering ; livraison d'outils assistés par IA." },
    ],
    experienceSummary: [
      'At Shenzhen Wuxian Hongyin Technology, I worked on AI use cases based on Huawei Ascend, built internal tools, and used prompt engineering to speed up development.',
      'My earlier simulation research at Guangzhou Baiyun Airport combined path planning algorithms and data modeling — directly relevant to AI systems design.',
    ],
    experienceSummaryZh: ["在深圳无限宏音参与华为昇腾AI用例开发，构建内部工具，使用提示工程加速开发。", "白云机场仿真实验结合路径规划算法和数据建模——与AI系统设计直接相关。"],
    experienceSummaryZhHant: ["在深圳無限宏音參與華為昇騰AI用例開發，構建內部工具，使用提示工程加速開發。", "白雲機場仿真實驗結合路徑規劃算法和數據建模——與AI系統設計直接相關。"],
    experienceSummaryDe: ["Bei Shenzhen Wuxian Hongyin arbeitete ich an KI-Anwendungsfällen auf Huawei Ascend, erstellte interne Tools und nutzte Prompt Engineering zur Beschleunigung der Entwicklung.", "Meine Flughafensimulation verband Pfadplanungsalgorithmen und Datenmodellierung."],
    experienceSummaryFr: ["Chez Shenzhen Wuxian Hongyin, j'ai travaillé sur des cas d'usage IA sur Huawei Ascend, créé des outils internes et utilisé le prompt engineering pour accélérer le développement.", "Ma recherche en simulation aéroportuaire combinait algorithmes et modélisation."],
    educationSummary: [
      'Industrial Engineering provides the operations research foundation (optimization, modeling, algorithms) that underpins applied AI work.',
      'The MEng in Aviation Engineering extends this to real-world systems with complex operational constraints — a natural context for AI applications.',
    ],
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
        title: 'Engineering + AI + law background',
        description: 'IE training (time study, line balancing, simulation) plus hands-on AI deployment and law minor coursework — gives me a mix of technical, operational, and regulatory thinking.',
      },
      {
        title: 'Factory floor process audits',
        description: 'Did time studies and process reviews at 2 factories (Midea, LiuGong) — found bottlenecks, suggested fixes, and backed them up with numbers.',
      },
      {
        title: 'IT and data skills',
        description: 'Built simulation models in AnyLogic, deployed AI on Huawei Ascend chips, worked with SQL/MySQL, and used Python for data work.',
      },
    ],
    highlightsZh: [
      { title: '工程 + AI + 法学背景', description: 'IE 出身（工时、线平衡、仿真），做过 AI 部署，辅修法学——技术、运营、合规都能聊。' },
      { title: '下过产线做流程审计', description: '在美的和柳工两家工厂做过工时测量和流程审查，找到瓶颈，用数据说话。' },
      { title: 'IT 和数据能力', description: '搭过 AnyLogic 仿真、在华为昇腾芯片上部署过 AI、用过 SQL/MySQL，Python 做数据分析。' },
    ],
    highlightsZhHant: [
      { title: '工程 + AI + 法學背景', description: 'IE 出身（工時、線平衡、仿真），做過 AI 部署，輔修法學——技術、運營、合規都能聊。' },
      { title: '下過產線做流程審計', description: '在美的和柳工兩家工廠做過工時測量和流程審查，找到瓶頸，用數據說話。' },
      { title: 'IT 和數據能力', description: '搭過 AnyLogic 仿真、在華為昇騰芯片上部署過 AI、用過 SQL/MySQL，Python 做數據分析。' },
    ],
    highlightsDe: [
      { title: 'Ingenieurwesen + KI + Jura', description: 'IE-Grundlagen (Zeitstudie, Linienbalance, Simulation) plus KI-Erfahrung und Jura-Minor — technisches, betriebliches und regulatorisches Denken in einem.' },
      { title: 'Fabrik-Prozessprüfungen', description: 'Zeitstudien und Prozessreviews in 2 Fabriken (Midea, LiuGong) gemacht — Engpässe gefunden, Lösungen vorgeschlagen, mit Zahlen belegt.' },
      { title: 'IT und Daten', description: 'Simulationsmodelle in AnyLogic gebaut, KI auf Huawei Ascend-Chips eingesetzt, SQL/MySQL und Python für Datenarbeit genutzt.' },
    ],
    highlightsFr: [
      { title: 'Ingénierie + IA + droit', description: "Formation IE (chronométrage, équilibrage, simulation) plus déploiement IA et mineure en droit — technique, opérationnel et réglementaire dans un seul profil." },
      { title: 'Audits de processus en usine', description: "Chronométrage et revue de processus dans 2 usines (Midea, LiuGong) — goulots identifiés, solutions proposées, chiffrées." },
      { title: 'Compétences IT et données', description: "Modèles de simulation (AnyLogic), déploiement IA sur puces Huawei Ascend, SQL/MySQL, Python pour l'analyse de données." },
    ],
    experienceSummary: [
      'Factory internships taught me process auditing — timing each step, finding bottlenecks, suggesting fixes with data.',
      'Airport simulation research was about modeling complex systems with many moving parts — same thinking applies to risk assessment.',
    ],
    experienceSummaryZh: [
      '工厂实习让我学会了流程审计——测每一步、找瓶颈、用数据提方案。',
      '机场仿真研究做的是多控制点的复杂系统建模——和风险评估的思路是一样的。',
    ],
    experienceSummaryZhHant: [
      '工廠實習讓我學會了流程審計——測每一步、找瓶頸、用數據提方案。',
      '機場仿真研究做的是多控制點的複雜系統建模——和風險評估的思路是一樣的。',
    ],
    experienceSummaryDe: [
      'Fabrik-Praktika brachten mir Prozessprüfung bei — jeden Schritt messen, Engpässe finden, Lösungen mit Zahlen belegen.',
      'Flughafen-Simulation ging um komplexe Systeme mit vielen beweglichen Teilen — dasselbe Denken gilt für Risikobewertung.',
    ],
    experienceSummaryFr: [
      "Les stages en usine m'ont appris l'audit de processus — chronométrer chaque étape, trouver les goulots, proposer des solutions chiffrées.",
      "La recherche en simulation aéroportuaire portait sur des systèmes complexes avec de multiples points de contrôle — même logique pour l'évaluation des risques.",
    ],
    educationSummary: [
      'IE gives me the quant foundation for risk work — OR, stochastic processes, and quality control are core skills for audit.',
      'Law minor adds regulatory awareness and structured reasoning — directly useful for financial audit and risk management.',
    ],
    educationSummaryZh: [
      'IE 给了我做风险工作的量化基础——运筹学、随机过程、质量控制都是审计核心技能。',
      '法学辅修增加了法规意识和结构化推理——对金融审计和风险管理直接有用。',
    ],
    educationSummaryZhHant: [
      'IE 給了我做風險工作的量化基礎——運籌學、隨機過程、品質管制都是審計核心技能。',
      '法學輔修增加了法規意識和結構化推理——對金融審計和風險管理直接有用。',
    ],
    educationSummaryDe: [
      'IE gibt mir die quantitative Grundlage für Risikoarbeit — OR, stochastische Prozesse und Qualitätskontrolle sind Kernkompetenzen für Audit.',
      'Jura-Minor ergänzt regulatorisches Bewusstsein und strukturiertes Reasoning — direkt nützlich für Finanzaudit und Risikomanagement.',
    ],
    educationSummaryFr: [
      "L'IE me donne le fondement quantitatif pour le travail de risque — RO, processus stochastiques et contrôle qualité sont des compétences clés pour l'audit.",
      "La mineure en droit ajoute une conscience réglementaire et un raisonnement structuré — directement utile pour l'audit financier et la gestion des risques.",
    ],
    experienceOrder: [0, 2, 1, 3],
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
        title: 'AI deployment and model experience',
        description: 'Set up AI tools on Huawei Ascend chips and managed server infrastructure — I know how AI models get built, deployed, and where they break.',
      },
      {
        title: 'Data analysis and simulation for risk',
        description: 'Airport simulation with 50+ vehicles and routing algorithms — same math foundations as fraud detection and model risk.',
      },
      {
        title: 'IE quant background',
        description: 'OR, stochastic modeling, and data-driven decision-making from my IE degree — applies directly to AML/KYC, model validation, and risk quantification.',
      },
    ],
    highlightsZh: [
      { title: 'AI 部署和模型经验', description: '在华为昇腾芯片上跑了 AI 工具，管过服务器——我知道 AI 模型怎么建、怎么部署、哪里会出问题。' },
      { title: '数据分析和仿真用于风险', description: '50+ 辆车的机场仿真和路径算法——和反欺诈检测、模型风险的数学基础是一样的。' },
      { title: 'IE 量化背景', description: '运筹学、随机建模、数据驱动决策——直接适用于 AML/KYC、模型验证和风险量化。' },
    ],
    highlightsZhHant: [
      { title: 'AI 部署和模型經驗', description: '在華為昇騰芯片上跑了 AI 工具，管過伺服器——我知道 AI 模型怎麼建、怎麼部署、哪裡會出問題。' },
      { title: '數據分析和仿真用於風險', description: '50+ 輛車的機場仿真和路徑算法——和反欺詐檢測、模型風險的數學基礎是一樣的。' },
      { title: 'IE 量化背景', description: '運籌學、隨機建模、數據驅動決策——直接適用於 AML/KYC、模型驗證和風險量化。' },
    ],
    highlightsDe: [
      { title: 'KI-Einsatz und Modellerfahrung', description: 'KI-Tools auf Huawei Ascend-Chips eingerichtet und Server-Infrastruktur verwaltet — ich weiß, wie KI-Modelle gebaut, eingesetzt werden und wo sie scheitern können.' },
      { title: 'Datenanalyse und Simulation für Risiko', description: 'Flughafen-Simulation mit 50+ Fahrzeugen und Routenalgorithmen — dieselben mathematischen Grundlagen wie bei Betrugserkennung und Modellrisiko.' },
      { title: 'IE-Quant-Hintergrund', description: 'OR, stochastische Modellierung und datengetriebene Entscheidungsfindung — direkt anwendbar auf AML/KYC, Modellvalidierung und Risikoquantifizierung.' },
    ],
    highlightsFr: [
      { title: "Déploiement IA et expérience de modèles", description: "Outils IA sur puces Huawei Ascend et gestion de l'infrastructure serveur — je sais comment les modèles IA sont construits, déployés et où ils peuvent échouer." },
      { title: "Analyse de données et simulation pour le risque", description: "Simulation aéroportuaire avec 50+ véhicules et algorithmes de routage — mêmes fondements mathématiques que la détection de fraude et le risque de modèle." },
      { title: "Background quantitatif IE", description: "RO, modélisation stochastique et prise de décision basée sur les données — directement applicable à l'AML/KYC, la validation de modèles et la quantification des risques." },
    ],
    experienceSummary: [
      'My Huawei Ascend AI internship gave me real experience with model development and deployment — directly relevant to AI risk and model governance.',
      'Airport simulation research used real operational data to build predictive models — same skills needed for fraud analytics and risk quantification.',
    ],
    experienceSummaryZh: [
      '华为昇腾 AI 实习让我真正做过模型开发和部署——直接适用于 AI 风险和模型治理。',
      '机场仿真实验用真实运营数据做预测模型——和反欺诈分析、风险量化需要的技能一样。',
    ],
    experienceSummaryZhHant: [
      '華為昇騰 AI 實習讓我真正做過模型開發和部署——直接適用於 AI 風險和模型治理。',
      '機場仿真實驗用真實運營數據做預測模型——和反欺詐分析、風險量化需要的技能一樣。',
    ],
    experienceSummaryDe: [
      'Mein Huawei Ascend KI-Praktikum gab mir echte Erfahrung mit Modellentwicklung und Einsatz — direkt relevant für KI-Risiko und Modell-Governance.',
      'Flughafen-Simulation nutzte echte Betriebsdaten für prädiktive Modelle — dieselben Fähigkeiten wie bei Betrugsanalyse und Risikoquantifizierung.',
    ],
    experienceSummaryFr: [
      "Mon stage IA sur Huawei Ascend m'a donné une vraie expérience du développement et du déploiement de modèles — directement pertinent pour le risque IA et la gouvernance des modèles.",
      "La recherche en simulation aéroportuaire a utilisé des données opérationnelles réelles pour construire des modèles prédictifs — les mêmes compétences que pour l'analyse de fraude et la quantification des risques.",
    ],
    educationSummary: [
      'IE gives me the quant base — OR, stochastic modeling, and stats are core to risk modeling and fraud detection.',
      'Law minor adds understanding of regulatory frameworks and governance — essential for AI governance and model risk management.',
    ],
    educationSummaryZh: [
      'IE 给了我量化基础——运筹学、随机建模和统计是风险建模和反欺诈的核心。',
      '法学辅修增加了对监管框架和治理的理解——对 AI 治理和模型风险管理很重要。',
    ],
    educationSummaryZhHant: [
      'IE 給了我量化基礎——運籌學、隨機建模和統計是風險建模和反欺詐的核心。',
      '法學輔修增加了對監管框架和治理的理解——對 AI 治理和模型風險管理很重要。',
    ],
    educationSummaryDe: [
      'IE gibt mir die Quant-Grundlage — OR, stochastische Modellierung und Statistik sind Kern der Risikomodellierung und Betrugserkennung.',
      'Jura-Minor ergänzt Verständnis für regulatorische Frameworks und Governance — essenziell für KI-Governance und Modellrisikomanagement.',
    ],
    educationSummaryFr: [
      "L'IE me donne la base quantitative — RO, modélisation stochastique et statistique sont au cœur de la modélisation des risques et de la détection de fraude.",
      "La mineure en droit ajoute la compréhension des cadres réglementaires et de la gouvernance — essentiels pour la gouvernance IA et la gestion du risque de modèle.",
    ],
    experienceOrder: [0, 1, 2, 3],
  },
};

export const ROLE_IDS = Object.keys(ROLE_VARIANTS) as string[];
