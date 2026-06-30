import type { ResumeOverride } from './types';

export const deOverride: ResumeOverride = {
	profile: {
		name: 'Haocheng He',
		role: 'MSc Luftfahrt | Interdisziplinäre Ingenieurwesen & KI',
		location: 'Hongkong, China',
	},
	about: {
		bio: 'MSc Luftfahrttechnik an der PolyU (GPA: 3,95/4,3), mit IE-Bachelor und Jura-Minor an der GDUT. Erfahrung in Flughafensimulation (AnyLogic, 5 Routing-Algorithmen), Fertigungsoptimierung (Linienbalance 58%→70%) und Ascend 310B Hardware-Entwicklung. 3 Patentanmeldungen.',
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: 'Ort', value: 'Hongkong, China' },
			{ label: 'Schwerpunkt', value: 'Engineering-Optimierung, Flughafensimulation, KI-Hardware, Interdisziplinär' },
			{ label: 'Sprachen', value: 'Englisch (IELTS 6.5), Mandarin (Muttersprache), Kantonesisch (Konversation)' },
		],
		highlights: [
			{
				title: 'Interdisziplinär: Ingenieurwesen + KI + Jura',
				description: 'IE-Hintergrund mit Flughafensimulation und Fertigungsoptimierung, jetzt KI-Hardware, plus Jura-Minor — Wissen über mehrere Domänen.',
			},
			{
				title: 'Praxiserfahrung in der Fertigung',
				description: 'Stoppuhr-Zeitstudien und ECRS-Analysen bei Midea und LiuGong durchgeführt, Verbesserungen per Simulation verifiziert (Linienbalance 58%→70%).',
			},
			{
				title: 'KI-Hardware + Simulationsmodellierung',
				description: 'Flughafen-Notfall-Simulationsmodelle in AnyLogic gebaut, Ascend 310B Hardware-Entwicklung, Python/Java/SQL-Stack.',
			},
		],
	},
	experience: {
		summary: [
			'Hintergrund in Operations Analytics und Tech Risk — Prozessoptimierung, Simulation und KI-Einsatz in 4 Praktika.',
		],
		items: [{
				title: 'KI-Ingenieurassistent',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'Mai 2025 - Apr 2026',
				location: 'Shenzhen, China',
				bullets: [
					'Teilnahme an der Ascend 310B Klavier-Entwicklung in 3 Phasen; 10+ Platinen getestet, Motorantrieb 3x iteriert, Firmware entwickelt und 5 technische Dokumente verfasst.',
					'Teilnahme an der Kamera- und Ascend-basierten Klavier-Fingererkennung (Python/C++); diagnose von Integrationproblemen.',
					'Ubuntu-Server verwaltet, Huawei-Netzwerk konfiguriert, 3D-Drucker betrieben, technische Interviews geführt.',
					,
				],
			},{
				title: 'Wissenschaftlicher Mitarbeiter — Flughafen-Simulation',
				org: 'Guangdong University of Technology (mit Flughafen Guangzhou Baiyun)',
				period: 'Sep 2023 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [
					'Simulationsmodell für Bodenfahrzeuge am Flughafen Guangzhou Baiyun gebaut — Straßen, Servicewege, Dispositionsregeln — mit AnyLogic, Java und MySQL.',
					'Routenalgorithmen (Dijkstra, A*, BFS, Genetik) geschrieben, damit 50+ Fahrzeuge in 3 Zonen kollisionsfrei fahren.',
					'Staugefälle zur Stoßzeit (200+ Bewegungen/Stunde) um 35 % gesenkt, keine Kollisionen; Abschlussarbeit mit Preis + Innovationspreis ausgezeichnet.',
				],
			},{
				title: 'Praktikant Industrial Engineering',
				org: 'Midea Group — Küchen- und Warmwassergeräte-Division',
				period: 'Apr 2024 - Mai 2024',
				location: 'Foshan, China',
				bullets: [
					'Jeden Arbeitsschritt an einer Geschirrspüler-Blechlinie per Stoppuhr gemessen; 5 zu langsame Schritte gefunden.',
					'22 Verbesserungsvorschläge mit Lean-Methoden erarbeitet; Simulation: Linienbalance von 58 % auf 70 %, 2 statt 20 Mitarbeiter eingespart.',
				],
			},{
				title: 'Praktikant Produktionsbetrieb',
				org: 'Guangxi LiuGong Machinery Co., Ltd.',
				period: 'Jul 2023 - Aug 2023',
				location: 'Liuzhou, China',
				bullets: [
					'12 Arbeitsstationen an der Radlader-Montagelinie per Stoppuhr gemessen; mit ECRS die 3 größten Engpässe gefunden.',
					'Layoutoptimierung vorgeschlagen, Simulation zeigte Taktzeitreduktion von ~8 %.',
				],
			}],
	},
	education: {
		summary: [
			'MEng Luftfahrttechnik (PolyU, GPA 3,95/4,3) + BE Industrial Engineering (GPA 3,67, Top 20 %) + Jura-Minor (GPA 3,61) — mit Lehrveranstaltungen in Operations Research, stochastischen Prozessen, statistischer Qualitätskontrolle und Regulierungsrahmen.',
		],
		items: [
			{
				title: 'Master of Engineering, Luftfahrttechnik und Operations Management',
				org: 'The Hong Kong Polytechnic University',
				period: 'Sep 2025 - Jan 2027',
				location: 'Hongkong, China',
				bullets: ['GPA: 3,95 / 4,3 (derzeit)'],
			},
			{
				title: 'Bachelor of Engineering, Industrial Engineering',
				org: 'Guangdong University of Technology',
				period: 'Sep 2021 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: ['GPA: 3,67 / 5,0 (Top 20 %) — Hochschulübergreifende hervorragende Abschlussarbeit, Innovationspreis.'],
			},
			{
				title: 'Minor in Law',
				org: 'Guangdong University of Technology',
				period: 'Sep 2022 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: ['GPA: 3,61 / 5,0'],
			},
		],
	},
	publications: {
		summary: [
			'3 Erfindungspatente + 1 Gebrauchsmuster + 2 Softwareurheberrechte von der GDUT.',
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