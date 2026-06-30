import type { ResumeOverride } from './types';

export const frOverride: ResumeOverride = {
	profile: {
		name: 'Haocheng He',
		role: 'MSc Ingénierie Aéronautique | Ingénierie Interdisciplinaire & IA',
		location: 'Hong Kong, Chine',
	},
	about: {
		bio: "Candidat MSc en ingénierie aéronautique à PolyU (GPA: 3,95/4,3), avec un bachelor en IE et une mineure en droit à la GDUT. Expérience en simulation aéroportuaire (AnyLogic, 5 algorithmes de routage), optimisation manufacturière (équilibrage 58%→70%) et R&D matériel Ascend 310B. 3 demandes de brevet déposées.",
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: 'Lieu', value: 'Hong Kong, Chine' },
			{ label: 'Focus', value: "Optimisation industrielle, Simulation aéroportuaire, Matériel IA, Interdisciplinaire" },
			{ label: 'Langues', value: 'Anglais (IELTS 6.5), Mandarin (Langue maternelle), Cantonais (Conversationnel)' },
		],
		highlights: [
			{
				title: 'Interdisciplinaire: Ingénierie + IA + Droit',
				description: "Formation IE avec simulation aéroportuaire et optimisation manufacturière, maintenant en R&D matériel IA, plus une mineure en droit — compétences multi-domaines.",
			},
			{
				title: 'Expérience pratique en usine',
				description: "Chronométrage et analyse ECRS chez Midea et LiuGong, améliorations proposées vérifiées par simulation (équilibrage 58%→70%).",
			},
			{
				title: 'Matériel IA + modélisation par simulation',
				description: "Modèles de simulation d'urgence aéroportuaire (AnyLogic), R&D matériel Ascend 310B, stack Python/Java/SQL.",
			},
		],
	},
	experience: {
		summary: [
			"Profil opérations analytics et tech risk — optimisation de processus, simulation et déploiement IA sur 4 stages.",
		],
		items: [{
				title: 'Assistant Ingénieur IA',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'Mai 2025 - Avr 2026',
				location: 'Shenzhen, Chine',
				bullets: [
					"Participation à la R&D du piano intelligent Ascend 310B sur 3 phases ; test de 10+ cartes, itération du moteur 3 fois, firmware développé et 5 documents techniques rédigés.",
					"Participation à l'intégration de modules de reconnaissance de doigts caméra + Ascend (Python/C++) ; diagnostic de problèmes inter-couches.",
					"Maintenance des serveurs Ubuntu, configuration réseau Huawei, impression 3D, entretiens techniques.",
					,
				],
			},{
				title: 'Assistant de recherche — Simulation des opérations aéroportuaires',
				org: "Université de Technologie du Guangdong (avec l'aéroport de Guangzhou Baiyun)",
				period: 'Sep 2023 - Juin 2025',
				location: 'Guangzhou, Chine',
				bullets: [
					"Modélisé les déplacements des véhicules au sol à l'aéroport de Guangzhou Baiyun — routes, voies de service, règles de dispatch — avec AnyLogic, Java et MySQL.",
					"Écrit des algorithmes de routage (Dijkstra, A*, BFS, génétique) pour guider 50+ véhicules sur 3 zones sans collision.",
					"Réduit la congestion simulée de 35 % aux heures de pointe (200+ mouvements/heure) ; mémoire primé (thèse d'excellence + prix de l'innovation).",
				],
			},{
				title: 'Stagiaire en génie industriel',
				org: 'Midea Group — Division Cuisine et Chauffe-eau',
				period: 'Avr 2024 - Mai 2024',
				location: 'Foshan, Chine',
				bullets: [
					"Chronométré chaque poste sur une ligne de tôlerie de lave-vaisselle à la main ; identifié 5 postes trop lents.",
					"Proposé 22 améliorations avec des méthodes lean ; simulation : équilibrage de 58 % à 70 %, effectif réduit de 20 à 18.",
				],
			},{
				title: 'Stagiaire en opérations de production',
				org: 'Guangxi LiuGong Machinery Co., Ltd.',
				period: 'Juil 2023 - Août 2023',
				location: 'Liuzhou, Chine',
				bullets: [
					"Chronométré 12 postes sur la ligne d'assemblage de chargeuses ; trouvé les 3 plus gros goulots avec l'ECRS.",
					"Proposé des ajustements de layout réduisant le temps de cycle d'environ 8 % en simulation.",
				],
			}],
	},
	education: {
		summary: [
			"MSc en ingénierie aéronautique (PolyU, GPA 3,95/4,3) + Licence en génie industriel (GPA 3,67, Top 20 %) + Mineure en droit (GPA 3,61) — avec des cours en recherche opérationnelle, processus stochastiques, contrôle qualité statistique et cadres réglementaires.",
		],
		items: [
			{
				title: "Master d'ingénierie aéronautique et management des opérations",
				org: 'The Hong Kong Polytechnic University',
				period: 'Sep 2025 - Jan 2027',
				location: 'Hong Kong, Chine',
				bullets: ['GPA : 3,95 / 4,3 (en cours)'],
			},
			{
				title: 'Licence en génie industriel',
				org: 'Université de Technologie du Guangdong',
				period: 'Sep 2021 - Juin 2025',
				location: 'Guangzhou, Chine',
				bullets: [`GPA : 3,67 / 5,0 (Top 20 %) — Mémoire universitaire excellent, Prix de l'innovation.`],
			},
			{
				title: 'Mineure en droit',
				org: 'Université de Technologie du Guangdong',
				period: 'Sep 2022 - Juin 2025',
				location: 'Guangzhou, Chine',
				bullets: ['GPA : 3,61 / 5,0'],
			},
		],
	},
	publications: {
		summary: [
			"3 brevets d'invention + 1 modèle d'utilité + 2 droits d'auteur logiciel de la GDUT.",
		],
		sections: [
			{
				title: "Brevets d'invention",
				items: [
					{ title: "Contrôle de mouvement de machine de revêtement PI via échantillonnage MCMC", year: '2026', authors: 'Zhou Xianzhong, He Haocheng, He Zhiyuan', venue: 'CN122085794A — Université de Technologie du Guangdong', links: [] },
					{ title: "Méthode et système de contrôle de revêtement (Deep Reinforcement Learning)", year: '2025', authors: 'Zhou Xianzhong, He Haocheng, He Zhiyuan', venue: 'CN121325552A — Université de Technologie du Guangdong', links: [] },
					{ title: "Système de stockage d'énergie solaire domestique — Régulation adaptative", year: '2024', authors: 'Zhou Xianzhong, Zeng Huangtao, Yu Daming, He Haocheng', venue: 'CN117767437A — Université de Technologie du Guangdong', links: [] },
				],
			},
			{
				title: "Modèle d'utilité",
				items: [
					{ title: "Équipement intégré de production de faisceaux de câbles", year: '2024', authors: 'Zhao Xiang, He Haocheng, Hu Bofeng', venue: 'CN221352455U — Université de Technologie du Guangdong', links: [] },
				],
			},
			{
				title: 'Distinctions',
				items: [
					{ title: "Mémoire de licence primé et prix de l'innovation", year: '2025', authors: 'Haocheng He', venue: 'Université de Technologie du Guangdong', links: [] },
				],
			},
		],
	},
};