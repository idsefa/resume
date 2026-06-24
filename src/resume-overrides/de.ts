import type { ResumeOverride } from './types';

export const deOverride: ResumeOverride = {
	profile: {
		name: 'Haocheng He',
		role: 'Kandidat für Operations Analytics und Technology Risk',
		location: 'Hongkong, China',
	},
	about: {
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: 'Ort', value: 'Hongkong, China' },
			{ label: 'Schwerpunkt', value: 'Technology Risk, Risk Assurance, Data Governance, KI-Governance' },
			{ label: 'Sprachen', value: 'Englisch (IELTS 6.5), Mandarin (Muttersprache), Kantonesisch (Konversation)' },
		],
		highlights: [
			{
				title: 'Ingenieurwesen + KI + Compliance-Hintergrund',
				description: 'Industrieingenieur-Training (Prozessoptimierung, Simulationsmodellierung, statistische Analyse) kombiniert mit KI-Erfahrung und Jura-Kursen zu Regulierung und Compliance.',
			},
			{
				title: 'Prozessprüfung und interne Kontrollerfahrung',
				description: 'Zeitstudien und Prozessaudits in 2 Fertigungsbetrieben durchgeführt; Kontrolllücken identifiziert und Korrekturmaßnahmen mit quantifizierten Verbesserungen vorgeschlagen.',
			},
			{
				title: 'IT-Systeme und Datenanalyse',
				description: 'Simulationsmodelle gebaut (AnyLogic), KI-Anwendungen entwickelt (Huawei Ascend NPU), mit SQL/MySQL-Datenbanken gearbeitet und Python für Datenanalyse und Workflow-Automatisierung eingesetzt.',
			},
		],
	},
	experience: {
		summary: [
			'Kandidat für Operations Analytics und Technology Risk mit Erfahrung in Prozessoptimierung, Simulationsmodellierung, Computer-Vision-Modellunterstützung und Jura/Compliance-Kursen.',
		],
		items: [{
				title: 'KI-Operations-Praktikant',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'Mai 2025 - Apr 2026',
				location: 'Shenzhen, China',
				bullets: [
					'3 KI-Anwendungsfälle auf Huawei Ascend NPU für interne Workflow-Automatisierung entwickelt; Inferenz-Pipelines optimiert und Verarbeitungslatenz um ~30 % gesenkt.',
					'2 Patente eingereicht: KI-gestützte Prozessoptimierung und intelligente Scheduling-Algorithmen.',
					'Prompt Engineering beschleunigte Prototyp-Validierung und Code-Debugging um ~40 %.',
				],
			},{
				title: 'Wissenschaftlicher Mitarbeiter — Flughafen-Simulation',
				org: 'Guangdong University of Technology (mit Flughafen Guangzhou Baiyun)',
				period: 'Sep 2023 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [
					'Agentensimulation (AnyLogic) für 50+ Flughafen-Spezialfahrzeuge in 3 Airside-Bereichen gebaut; Kollisionsvermeidung und Pfadplanung in Java + MySQL implementiert.',
					'Disposition unter Stoßzeiten (200+ Bewegungen/Stunde) optimiert: Stausimulation um 35 % reduziert, keine Kollisionen in Testläufen.',
					'Abschlussarbeit mit Thesis-Auszeichnung + Innovationspreis ausgezeichnet; Flughafenbetrieb hat das Modell für Szenarioplanung übernommen.',
				],
			},{
				title: 'Praktikant Industrial Engineering',
				org: 'Midea Group — Küchen- und Warmwassergeräte-Division',
				period: 'Apr 2024 - Mai 2024',
				location: 'Foshan, China',
				bullets: [
					'Standardzeiten an 8 Arbeitsstationen der Geschirrspüler-Innenwanne gemessen (Stoppuhr + MOD-Methode).',
					'Linienbalancierung identifizierte 2 kritische Engpässe; Verbesserungsvorschlag hob die theoretische Effizienz von 72 % auf 85 %.',
				],
			},{
				title: 'Praktikant Produktionsbetrieb',
				org: 'Guangxi LiuGong Machinery Co., Ltd.',
				period: 'Jul 2023 - Aug 2023',
				location: 'Liuzhou, China',
				bullets: [
					'Zeitstudien an 12 Arbeitsstationen der Radlader-Montagelinie; ECRS-Analyse identifizierte 3 Hauptengpässe.',
					'Layout-Anpassungen reduzierten die durchschnittliche Taktzeit in der Simulation um ~8 %, von Montageingenieuren validiert.',
				],
			}],
	},
	education: {
		summary: [
			'MEng Luftfahrttechnik (PolyU) + BE Industrial Engineering + Jura-Minor — technische, betriebliche und regulatorische Perspektiven in einem Profil.',
		],
		items: [
			{
				title: 'Master of Engineering, Luftfahrttechnik und Operations Management',
				org: 'The Hong Kong Polytechnic University',
				period: 'Sep 2025 - Jan 2027',
				location: 'Hongkong, China',
				bullets: [],
			},
			{
				title: 'Bachelor of Engineering, Industrial Engineering',
				org: 'Guangdong University of Technology',
				period: 'Sep 2021 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: ['GPA: 3,67 / 4,0 (Top 20 %) — Hervorragende Abschlussarbeit + Innovationspreis.'],
			},
			{
				title: 'Minor in Law',
				org: 'Guangdong University of Technology',
				period: 'Sep 2022 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [],
			},
		],
	},
	publications: {
		summary: [
			'Patentanmeldungen und ausgezeichnete Simulationsforschung aus Praktika und Studienprojekten.',
		],
		sections: [
			{
				title: 'Patente',
				items: [
					{
						title: 'KI-gestützte Prozessoptimierung und intelligente Scheduling-Algorithmen',
						year: '2025-2026',
						authors: 'Haocheng He und Team',
						venue: 'F&E-Praktikum — Shenzhen Wuxian Hongyin Technology',
						links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' }],
					},
				],
			},
			{
				title: 'Forschung und Auszeichnungen',
				items: [
					{
						title: 'Flughafen-Spezialfahrzeug-Simulation und -Optimierung',
						year: '2025',
						authors: 'Haocheng He',
						venue: 'Kooperationsprojekt mit dem Flughafen Guangzhou Baiyun',
						links: [],
					},
					{
						title: 'Hervorragende Bachelorarbeit und Innovationspreis',
						year: '2025',
						authors: 'Haocheng He',
						venue: 'Guangdong University of Technology',
						links: [],
					},
				],
			},
		],
	},
};
