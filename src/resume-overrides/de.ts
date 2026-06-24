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
				title: 'Simulationsgestützte Betriebsoptimierung',
				description: 'Vier Praktika in Flughafen-Simulationsmodellierung, Fertigungsprozessoptimierung und KI-Entwicklung — mit AnyLogic, Python und OR-Tools zur Lösung realer Engpässe.',
			},
			{
				title: 'Bereichsübergreifende Problemlösung',
				description: 'Kombination aus Luftfahrttechnik, Industrial Engineering und Jura-Nebenfach — strukturierte Analyse über technische, betriebliche und regulatorische Dimensionen hinweg.',
			},
			{
				title: 'Von der Forschung zum messbaren Ergebnis',
				description: 'Flughafen-Simulationsprojekt mit Thesis-Auszeichnung und Innovationspreis; Fertigungspraktika mit quantifizierbaren Taktzeitreduzierungen.',
			},
		],
	},
	experience: {
		summary: [
			'Vier Praktika in Flughafen-Simulationsforschung, Fertigungsbetrieb und KI-gefütterter F&E — jeweils mit Fokus auf Engpassidentifikation und messbare Prozessverbesserung.',
			'Kernkompetenzen: AnyLogic-Simulation, Python, SQL, OR-Tools, Plant Simulation und Prompt Engineering.',
		],
		items: [{
				title: 'Praktikant Produktionsbetrieb',
				org: 'Guangxi LiuGong Machinery Co., Ltd.',
				period: 'Jul 2023 - Aug 2023',
				location: 'Liuzhou, China',
				bullets: [
					'Zeitstudien an 12 Arbeitsstationen der Radlader-Montagelinie durchgeführt; mittels ECRS-Analyse 3 kritische Engpässe identifiziert.',
					'Layout-Anpassungen vorgeschlagen, die in der Simulation die durchschnittliche Taktzeit um ca. 8 % reduzierten — von Montageingenieuren validiert.',
				],
			},{
				title: 'Campus-Botschafter',
				org: 'LiuGong HR Services',
				period: 'Sep 2023 - Dez 2024',
				location: 'Guangzhou, China',
				bullets: [
					'Rekrutierungspipeline über 3 Hochschulen verwaltet; mehr als 5 Recruiting-Events koordiniert und über 200 Bewerbungen gesichtet.',
					'Als Schnittstelle zwischen Unternehmen und Hochschulen die Angebotsannahmequote durch persönliche Betreuung verbessert.',
				],
			},{
				title: 'Wissenschaftlicher Mitarbeiter',
				org: 'Guangdong University of Technology (mit Flughafen Guangzhou Baiyun)',
				period: 'Sep 2023 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [
					'AnyLogic-Agentensimulation für über 50 Flughafen-Spezialfahrzeuge in 3 Airside-Bereichen entwickelt; Kollisionsvermeidung und Pfadplanung in Java implementiert.',
					'Fahrzeugdisposition unter Stoßzeitszenarien (200+ Bewegungen/Stunde) optimiert: Stausimulation um 35 % reduziert, keine Kollisionen in Testläufen.',
					'Ergebnisse: Bachelorarbeit (Auszeichnung + Innovationspreis), Simulationsmodell vom Flughafenbetrieb für Szenarioplanung übernommen.',
				],
			},{
				title: 'Praktikant Industrial Engineering',
				org: 'Midea Group (Geschirrspüler-Division)',
				period: 'Apr 2024 - Mai 2024',
				location: 'Foshan, China',
				bullets: [
					'Standardzeiten an 8 Arbeitsstationen der Geschirrspüler-Innenwanne gemessen (Stoppuhr + MOD-Methode).',
					'Durch Linienbalancierung 2 kritische Engpässe identifiziert; Verbesserungsvorschlag hob die theoretische Linieneffizienz von 72 % auf 85 %.',
				],
			},{
				title: 'Praktikant F&E und Operations',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'Mai 2025 - Apr 2026',
				location: 'Shenzhen, China',
				bullets: [
					'3 KI-Anwendungsfälle auf Huawei Ascend NPU entwickelt und interne Inferenz-Pipelines für Workflow-Automatisierung optimiert.',
					'2 Patente aus Praktikumsprojekten eingereicht (KI-Prozessoptimierung + intelligente Scheduling-Algorithmen).',
					'Prompt Engineering eingesetzt: Entwicklungszyklen für Prototyp-Validierung und Code-Debugging um ca. 40 % verkürzt.',
				],
			}],
	},
	education: {
		summary: [
			'MEng Luftfahrttechnik (PolyU) + BE Industrial Engineering + Jura-Nebenfach — interdisziplinäre Grundlage in Operations Research, Systemdenken und regulatorischem Bewusstsein.',
			'Diese Kombination ermöglicht strukturierte Problemlösung über technische, betriebliche und Governance-Dimensionen hinweg.',
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
			'Praxisnahe Forschungsergebnisse aus Praktika und Studienprojekten, darunter Patentanmeldungen und eine ausgezeichnete Simulationsstudie.',
			'Schwerpunkte: Flughafenbetriebssimulation, KI-Workflow-Optimierung und Industrial-Engineering-Anwendungen.',
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