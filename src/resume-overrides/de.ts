import type { ResumeOverride } from './types';

export const deOverride: ResumeOverride = {
	profile: {
		name: 'Haocheng He',
		role: 'Kandidat für Operations Analytics und Technology Risk',
		location: 'Hongkong, China',
	},
	about: {
		bio: 'IE-Bachelor an der GDUT, jetzt MEng Luftfahrt an der PolyU. Unterwegs 4 Praktika gemacht — ein Shenzhen-Startup mit intelligentem Klavier und KI-Chips, ein Flughafen-Simulationsprojekt mit Guangzhou Baiyun (Thesis-Preis gewonnen), und zwei Fabrikpraktika bei Midea und LiuGong mit Zeitstudien und Linienbalance. Ein paar Patente dabei entstanden. Ich mag es, Dinge zu verstehen und besser laufen zu lassen.',
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: 'Ort', value: 'Hongkong, China' },
			{ label: 'Schwerpunkt', value: 'Technology Risk, Risk Assurance, Data Governance, KI-Governance' },
			{ label: 'Sprachen', value: 'Englisch (IELTS 6.5), Mandarin (Muttersprache), Kantonesisch (Konversation)' },
		],
		highlights: [
			{
				title: 'Ingenieurwesen + KI + Jura',
				description: 'IE-Grundlagen (Zeitstudie, Linienbalance, Simulation) plus KI-Erfahrung und Jura-Minor — technisches, betriebliches und regulatorisches Denken in einem.',
			},
			{
				title: 'Fabrik-Prozessprüfungen',
				description: 'Zeitstudien und Prozessreviews in 2 Fabriken (Midea, LiuGong) gemacht — Engpässe gefunden, Lösungen vorgeschlagen, mit Zahlen belegt.',
			},
			{
				title: 'IT und Daten',
				description: 'Simulationsmodelle in AnyLogic gebaut, KI auf Huawei Ascend-Chips eingesetzt, SQL/MySQL und Python für Datenarbeit genutzt.',
			},
		],
	},
	experience: {
		summary: [
			'Hintergrund in Operations Analytics und Tech Risk — Prozessoptimierung, Simulation und KI-Einsatz in 4 Praktika.',
		],
		items: [{
				title: 'KI-Operations-Praktikant',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'Mai 2025 - Apr 2026',
				location: 'Shenzhen, China',
				bullets: [
					'3 KI-Tools auf Huawei Ascend 310B-Chips für das Team eingerichtet; Antwortzeit um ~30 % verkürzt.',
					'Motortreiberschaltungen entworfen (LCEDA) und STM32-Firmware für ein intelligentes Klavier geschrieben; mit Oszilloskopen und Logikanalysatoren getestet.',
					'Ein Fingerspositionserkennungssystem für das Klavier mit Kamera und Ascend-Chip gebaut; SDK-Dokumentation für das Team erstellt.',
					'Server betrieben (Ubuntu), Netzwerk verwaltet (Huawei-Switches und -Router) und Vorstellungsgespräche für neue Positionen geführt.',
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
					'Layoutänderungen vorgeschlagen, die die Taktzeit in der Simulation um ~8 % senkten. Die Montageingenieure haben es bestätigt.',
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
				bullets: ['GPA: 3,67 (Top 20 %) — Hervorragende Abschlussarbeit + Innovationspreis.'],
			},
			{
				title: 'Minor in Law',
				org: 'Guangdong University of Technology',
				period: 'Sep 2022 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: ['GPA: 3,61'],
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
