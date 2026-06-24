import type { ResumeOverride } from './types';

export const frOverride: ResumeOverride = {
	profile: {
		name: 'Haocheng He',
		role: "Étudiant en master d'ingénierie aéronautique et management des opérations",
		location: 'Hong Kong, Chine',
	},
	about: {
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: 'Lieu', value: 'Hong Kong, Chine' },
			{ label: 'Focus', value: 'Opérations aéroportuaires, workflows IA et simulation' },
		],
		highlights: [
			{
				title: 'Optimisation opérationnelle par la simulation',
				description: "Quatre stages en modélisation de simulation aéroportuaire, optimisation de processus industriels et développement IA — combinant AnyLogic, Python et OR-Tools pour résoudre des goulots d'étranglement opérationnels.",
			},
			{
				title: 'Résolution de problèmes interdisciplinaire',
				description: "Parcours combinant ingénierie aéronautique, génie industriel et mineure en droit — permettant une analyse structurée sur les plans technique, opérationnel et réglementaire.",
			},
			{
				title: 'De la recherche aux résultats mesurables',
				description: "Projet de simulation aéroportuaire primé (thèse d'excellence + prix de l'innovation) ; stages en industrie avec réductions quantifiées du temps de cycle.",
			},
		],
	},
	experience: {
		summary: [
			"Quatre stages en simulation aéroportuaire, opérations de fabrication et R&D IA — chacun centré sur l'identification de goulots et l'amélioration mesurable des processus.",
			"Boîte à outils : simulation AnyLogic, Python, SQL, OR-Tools, Plant Simulation et prompt engineering.",
		],
		items: [{
				title: 'Stagiaire en opérations de production',
				org: 'Guangxi LiuGong Machinery Co., Ltd.',
				period: 'Juil 2023 - Août 2023',
				location: 'Liuzhou, Chine',
				bullets: [
					"Études chronométriques sur 12 postes de la ligne d'assemblage de chargeuses ; analyse ECRS identifiant 3 points de goulot majeurs.",
					"Propositions de réorganisation validées en simulation, réduisant le temps de cycle moyen d'environ 8 %.",
				],
			},{
				title: 'Ambassadeur de marque campus',
				org: 'LiuGong HR Services',
				period: 'Sep 2023 - Déc 2024',
				location: 'Guangzhou, Chine',
				bullets: [
					'Gestion du pipeline de recrutement sur 3 campus universitaires ; coordination de 5+ événements et tri de 200+ candidatures.',
					"Interface entre l'entreprise et les universités, améliorant le taux d'acceptation des offres par un suivi personnalisé des candidats.",
				],
			},{
				title: 'Assistant de recherche',
				org: "Université de Technologie du Guangdong (avec l'aéroport de Guangzhou Baiyun)",
				period: 'Sep 2023 - Juin 2025',
				location: 'Guangzhou, Chine',
				bullets: [
					"Modèle de simulation multi-agents AnyLogic pour 50+ véhicules spéciaux sur 3 zones airside ; algorithmes d'évitement de collision et de planification de trajectoire en Java.",
					"Optimisation de la disposition des véhicules en scénarios de pointe (200+ mouvements/heure) : réduction de 35 % de la congestion simulée, zéro collision en tests.",
					"Livrables : mémoire de licence (thèse d'excellence + prix de l'innovation), modèle adopté par l'équipe opérationnelle de l'aéroport.",
				],
			},{
				title: 'Stagiaire en génie industriel',
				org: 'Midea Group (Division lave-vaisselle)',
				period: 'Avr 2024 - Mai 2024',
				location: 'Foshan, Chine',
				bullets: [
					"Mesure des temps standards sur 8 postes de la ligne d'assemblage des cuves de lave-vaisselle (chronométrage + méthode MOD).",
					"Analyse d'équilibrage identifiant 2 goulots critiques ; proposition de rééquilibrage portant l'efficacité théorique de 72 % à 85 %.",
				],
			},{
				title: 'Stagiaire R&D et opérations',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'Mai 2025 - Avr 2026',
				location: 'Shenzhen, Chine',
				bullets: [
					"Développement de 3 cas d'usage IA sur NPU Huawei Ascend, optimisation des pipelines d'inférence pour l'automatisation des workflows internes.",
					"Dépôt de 2 brevets issus des projets de stage (optimisation de processus IA + algorithmes de planification intelligente).",
					"Prompt engineering appliqué pour réduire d'environ 40 % les cycles de développement en validation de prototypes et débogage.",
				],
			}],
	},
	education: {
		summary: [
			"MSc en ingénierie aéronautique (PolyU) + Licence en génie industriel + mineure en droit — fondation interdisciplinaire en recherche opérationnelle, pensée systémique et conscience réglementaire.",
			"Cette combinaison permet une résolution structurée des problèmes sur les plans technique, opérationnel et de gouvernance.",
		],
		items: [
			{
				title: "Master d'ingénierie aéronautique et management des opérations",
				org: 'The Hong Kong Polytechnic University',
				period: 'Sep 2025 - Jan 2027',
				location: 'Hong Kong, Chine',
				bullets: [],
			},
			{
				title: 'Licence en génie industriel',
				org: 'Université de Technologie du Guangdong',
				period: 'Sep 2021 - Juin 2025',
				location: 'Guangzhou, Chine',
				bullets: [],
			},
			{
				title: 'Licence en droit (mineure)',
				org: 'Université de Technologie du Guangdong',
				period: 'Sep 2022 - Juin 2025',
				location: 'Guangzhou, Chine',
				bullets: [],
			},
		],
	},
	publications: {
		summary: [
			'Résultats de recherche issus de stages et projets académiques, incluant des dépôts de brevets et un projet de simulation primé.',
			"Axes de recherche : simulation d'opérations aéroportuaires, optimisation de workflows IA et applications du génie industriel.",
		],
		sections: [
			{
				title: 'Brevets',
				items: [
					{
						title: 'Plusieurs dépôts de brevets pendant le stage',
						year: '2025-2026',
						authors: 'Haocheng He et équipe',
						venue: 'Projets de stage R&D à Shenzhen',
						links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' }],
					},
				],
			},
			{
				title: 'Recherche et distinctions',
				items: [
					{
						title: "Projet de simulation et optimisation des véhicules spéciaux aéroportuaires",
						year: '2025',
						authors: 'Haocheng He',
						venue: "Projet en collaboration avec l'aéroport de Guangzhou Baiyun",
						links: [],
					},
					{
						title: "Mémoire de licence primé et prix de l'innovation",
						year: '2025',
						authors: 'Haocheng He',
						venue: 'Université de Technologie du Guangdong',
						links: [],
					},
				],
			},
		],
	},
};