import type { ResumeOverride } from './types';

export const deOverride: ResumeOverride = {
	profile: {
		name: 'Haocheng He',
		role: 'Masterstudent in Luftfahrttechnik und Operations Management',
		location: 'Hongkong, China',
	},
	about: {
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: 'Ort', value: 'Hongkong, China' },
			{ label: 'Schwerpunkt', value: 'Luftfahrtbetrieb, KI-Workflows und Simulation' },
		],
		highlights: [
			{
				title: 'Warum ich das mache',
				description: 'Mich motiviert die Frage, wie man den Alltag am Flughafen mit Daten, Simulation und KI besser steuern kann.',
			},
			{
				title: 'Technik und Teamarbeit',
				description: 'Ich arbeite gern mit verschiedenen Teams zusammen und mache aus komplexen Themen klare, umsetzbare Schritte.',
			},
			{
				title: 'Tools, mit denen ich arbeite',
				description: 'In Projekten nutze ich vor allem Python, SQL, AnyLogic, Plant Simulation und OR-Tools.',
			},
		],
	},
	experience: {
		summary: [
			'Ich habe in F&E, in der Flughafen-Simulationsforschung und in der Produktionsoptimierung gearbeitet.',
			'In allen Rollen ging es für mich darum, alltägliche Ablaufprobleme mit Daten und Ingenieurmethoden sauber zu lösen.',
		],
		items: [{
				title: 'Praktikant Produktionsbetrieb',
				org: 'Guangxi LiuGong Machinery Co., Ltd.',
				period: 'Jul 2023 - Aug 2023',
				location: 'Liuzhou, China',
				bullets: [
					'An der Lader-Montagelinie habe ich mit Zeitstudien und ECRS Taktzeit und Verschwendung untersucht.',
					'Gemeinsam mit Ingenieuren habe ich tägliche Produktionsprobleme gelöst und den Ablauf stabil gehalten.',
				],
			},{
				title: 'Campus Brand Ambassador',
				org: 'LiuGong HR Services',
				period: 'Sep 2023 - Dec 2024',
				location: 'Guangzhou, China',
				bullets: [
					'Ich war die Schnittstelle zwischen Unternehmen und Studierenden.',
					'Ich habe Campus-Recruiting organisiert und Absolventen bei Bewerbung und Interview begleitet.',
				],
			},{
				title: 'Wissenschaftlicher Mitarbeiter',
				org: "Guangdong University of Technology (with Guangzhou Baiyun Int'l Airport)",
				period: 'Sep 2023 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [
					'Ich habe ein AnyLogic-Modell für den Verkehr von Spezialfahrzeugen am Flughafen gebaut.',
					'Mit Java und MySQL habe ich Logik für Kollisionsvermeidung und Routenplanung umgesetzt.',
					'Dadurch wurden Staus und Risiken in der Simulation deutlich reduziert.',
					'Aus dem Projekt entstand meine Bachelorarbeit, die als hervorragende Arbeit ausgezeichnet wurde.',
				],
			},{
				title: 'Praktikant Industrial Engineering',
				org: 'Midea Group (Kitchen and Water Heater Division)',
				period: 'Apr 2024 - Mai 2024',
				location: 'Foshan, China',
				bullets: [
					'Ich habe Standardzeiten an der Montagelinie für Geschirrspüler-Innenwannen gemessen.',
					'Mit Line Balancing und Bewegungsanalyse habe ich Engpässe gefunden und Verbesserungen vorgeschlagen.',
				],
			},{
				title: 'Praktikant F&E und Operations',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'Mai 2025 - Apr 2026',
				location: 'Shenzhen, China',
				bullets: [
					'Ich habe an KI-Anwendungen auf Huawei Ascend gearbeitet und interne Abläufe verbessert.',
					'Ich habe mehrere Patente aus den Praktikumsprojekten ausgearbeitet und eingereicht.',
					'Mit Prompt Engineering habe ich Entwicklung und Fehlersuche beschleunigt.',
					'Zusätzlich habe ich Teams bei Netzwerk- und Verwaltungsaufgaben unterstützt.',
				],
			}],
	},
	education: {
		summary: [
			'Mein Studium verbindet Luftfahrt, Industrial Engineering und ein Nebenfach in Jura.',
			'Diese Kombination hilft mir, technische und organisatorische Fragen zusammen zu denken.',
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
				bullets: [],
			},
			{
				title: 'Bachelor of Laws (Nebenfach)',
				org: 'Guangdong University of Technology',
				period: 'Sep 2022 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [],
			},
		],
	},
	publications: {
		summary: [
			'Ich habe bisher noch keine formalen Fachpublikationen, aber bereits klare Projektergebnisse.',
			'Dazu gehören Patentanmeldungen und ein ausgezeichnetes Simulationsprojekt aus meiner Abschlussarbeit.',
		],
		sections: [
			{
				title: 'Patente',
				items: [
					{
						title: 'Mehrere Patentanmeldungen im Praktikum',
						year: '2025-2026',
						authors: 'Haocheng He und Team',
						venue: 'F&E-Praktikumsprojekte in Shenzhen',
						links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' }],
					},
				],
			},
			{
				title: 'Forschung und Auszeichnungen',
				items: [
					{
						title: 'Simulations- und Optimierungsprojekt für Spezialfahrzeuge am Flughafen',
						year: '2025',
						authors: 'Haocheng He',
						venue: 'Kooperationsprojekt mit dem Flughafen Guangzhou Baiyun',
						links: [],
					},
					{
						title: 'Auszeichnung: Hervorragende Bachelorarbeit und Innovationspreis',
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