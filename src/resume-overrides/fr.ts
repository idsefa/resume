import type { ResumeOverride } from './types';

export const frOverride: ResumeOverride = {
	profile: {
		name: 'Haocheng He',
		role: 'Étudiant en master, ingénierie aéronautique et management des opérations',
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
				title: 'Pourquoi je fais ce travail',
				description: "J'aime travailler sur des problèmes réels d'exploitation, surtout dans les aéroports et les opérations des compagnies aériennes.",
			},
			{
				title: 'Technique et communication',
				description: 'Je travaille facilement avec des équipes différentes et je transforme les sujets complexes en étapes claires.',
			},
			{
				title: 'Mes outils au quotidien',
				description: "Dans les projets, j'utilise surtout Python, SQL, AnyLogic, Plant Simulation et OR-Tools.",
			},
		],
	},
	experience: {
		summary: [
			"J'ai travaillé en R&D, en recherche sur la simulation aéroportuaire, et sur l'amélioration d'opérations en usine.",
			"Dans chaque rôle, mon objectif était le même: résoudre des problèmes concrets de flux et d'efficacité avec des méthodes d'ingénierie.",
		],
		items: [{
				title: 'Stagiaire en opérations de production',
				org: 'Guangxi LiuGong Machinery Co., Ltd.',
				period: 'Jul 2023 - Aug 2023',
				location: 'Liuzhou, China',
				bullets: [
					"Sur la ligne d'assemblage de chargeuses, j'ai suivi le temps de cycle et les pertes avec des études chronométrées et ECRS.",
					"J'ai collaboré avec les ingénieurs pour résoudre les problèmes quotidiens et garder un flux stable.",
				],
			},{
				title: 'Ambassadeur de marque sur campus',
				org: 'LiuGong HR Services',
				period: 'Sep 2023 - Dec 2024',
				location: 'Guangzhou, China',
				bullets: [
					"J'ai fait le lien entre l'entreprise et les étudiants de l'université.",
					"J'ai organisé des événements de recrutement et accompagné les candidats dans les étapes de candidature.",
				],
			},{
				title: 'Assistant de recherche',
				org: "Guangdong University of Technology (with Guangzhou Baiyun Int'l Airport)",
				period: 'Sep 2023 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [
					"J'ai construit un modèle AnyLogic pour simuler le trafic des véhicules spéciaux aéroportuaires.",
					"J'ai implémenté la logique d'évitement de collision et de planification de trajet avec Java et MySQL.",
					"Le projet a permis d'améliorer la fluidité et la sécurité dans les scénarios de trafic dense.",
					"Ce travail est devenu mon mémoire de licence, avec un prix d'excellence et un prix d'innovation.",
				],
			},{
				title: 'Stagiaire en génie industriel',
				org: 'Midea Group (Kitchen and Water Heater Division)',
				period: 'Avr 2024 - Mai 2024',
				location: 'Foshan, China',
				bullets: [
					"J'ai mesuré les temps standards sur la ligne d'assemblage des cuves de lave-vaisselle.",
					"J'ai appliqué l'équilibrage de ligne et l'analyse des mouvements pour trouver des goulots d'étranglement.",
				],
			},{
				title: 'Stagiaire R&D et opérations',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'Mai 2025 - Avr 2026',
				location: 'Shenzhen, China',
				bullets: [
					"J'ai travaillé sur des cas d'usage IA avec Huawei Ascend et sur l'optimisation des workflows.",
					"J'ai rédigé et déposé plusieurs brevets issus des projets du stage.",
					"J'ai utilisé le prompt engineering pour accélérer le développement et la résolution de problèmes.",
					"J'ai aussi aidé des équipes transverses sur des sujets réseau et administratifs.",
				],
			}],
	},
	education: {
		summary: [
			"Mon parcours mélange l'aéronautique, le génie industriel et une mineure en droit.",
			"Cette combinaison me donne une vision plus large pour traiter les sujets d'opérations et de management.",
		],
		items: [
			{
				title: 'Master of Engineering, aviation engineering and operation management',
				org: 'The Hong Kong Polytechnic University',
				period: 'Sep 2025 - Jan 2027',
				location: 'Hong Kong, Chine',
				bullets: [],
			},
			{
				title: 'Bachelor of Engineering, génie industriel',
				org: 'Guangdong University of Technology',
				period: 'Sep 2021 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [],
			},
			{
				title: 'Bachelor of Laws (mineure)',
				org: 'Guangdong University of Technology',
				period: 'Sep 2022 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [],
			},
		],
	},
	publications: {
		summary: [
			"Je n'ai pas encore de publication scientifique formelle, mais j'ai déjà des résultats concrets de stage et de recherche.",
			"Ces résultats incluent des brevets et un projet de simulation primé.",
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
						title: 'Projet de simulation et optimisation des véhicules spéciaux aéroportuaires',
						year: '2025',
						authors: 'Haocheng He',
						venue: "Projet en collaboration avec l'aéroport de Guangzhou Baiyun",
						links: [],
					},
					{
						title: 'Mémoire de licence primé et prix d\'innovation',
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