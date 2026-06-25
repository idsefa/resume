import type { ResumeOverride } from './types';

export const frOverride: ResumeOverride = {
	profile: {
		name: 'Haocheng He',
		role: 'Candidat en Analyse des Opérations et Risk Technology',
		location: 'Hong Kong, Chine',
	},
	about: {
		bio: "J'aime rendre les systèmes complexes plus efficaces — que ce soit modéliser la disposition des véhicules aéroportuaires, optimiser une ligne de montage, ou construire un piano intelligent avec des puces IA. Je finis actuellement mon MSc à PolyU (opérations aéronautiques) tout en faisant de la R&D dans une startup de Shenzhen qui fabrique des instruments de musique IA. Avant ça, j'ai travaillé chez Midea et LiuGong pour comprendre comment les produits sont réellement fabriqués. Mon mémoire de licence sur la simulation aéroportuaire a été primé, et j'ai quelques brevets de mon travail actuel. Les problèmes les plus intéressants se trouvent là où l'ingénierie, les données et les opérations réelles se rencontrent.",
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: 'Lieu', value: 'Hong Kong, Chine' },
			{ label: 'Focus', value: 'Risk Technology, Risk Assurance, Gouvernance des données, Gouvernance IA' },
			{ label: 'Langues', value: 'Anglais (IELTS 6.5), Mandarin (Langue maternelle), Cantonais (Conversationnel)' },
		],
		highlights: [
			{
				title: 'Profil ingénierie + IA + conformité',
				description: "Formation en génie industriel (optimisation de processus, modélisation par simulation, analyse statistique) combinée à une expérience en déploiement IA et des cours de droit sur la réglementation et la conformité.",
			},
			{
				title: 'Audit de processus et contrôles internes',
				description: "Études de temps et audits de processus dans 2 usines de fabrication ; identification de lacunes dans les contrôles et propositions d'actions correctives avec des améliorations quantifiées.",
			},
			{
				title: 'Systèmes IT et analyse de données',
				description: "Construction de modèles de simulation (AnyLogic), développement d'applications IA (Huawei Ascend NPU), travail avec des bases SQL/MySQL, et utilisation de Python pour l'analyse de données et l'automatisation des workflows.",
			},
		],
	},
	experience: {
		summary: [
			"Candidat en analyse des opérations et risk technology, avec expérience en optimisation de processus, modélisation par simulation, support de modèles de vision par ordinateur et cours de droit/conformité.",
		],
		items: [{
				title: 'Stagiaire Opérations IA',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'Mai 2025 - Avr 2026',
				location: 'Shenzhen, Chine',
				bullets: [
					"Installé 3 outils IA sur des puces Huawei Ascend 310B pour l'équipe interne ; temps de réponse réduit d'environ 30 %.",
					"Conçu des circuits de commande moteur (LCEDA) et écrit le firmware STM32 pour un piano intelligent ; testé avec oscilloscopes et analyseurs logiques.",
					"Monté un système de suivi des doigts pour le piano avec une caméra et la puce Ascend ; rédigé la documentation SDK pour l'équipe.",
					"Déposé 2 brevets issus de ce travail — un sur l'optimisation de processus, un sur la planification par IA.",
					"Géré les serveurs (Ubuntu), le réseau (commutateurs/routeurs Huawei) et participé aux entretiens d'embauche.",
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
					"Proposé des changements de layout réduisant le temps de cycle de ~8 % en simulation. Les ingénieurs de production ont validé.",
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
				bullets: ['GPA : 3,67 (Top 20 %) — Mémoire de licence primé + Prix de l\'innovation.'],
			},
			{
				title: 'Mineure en droit',
				org: 'Université de Technologie du Guangdong',
				period: 'Sep 2022 - Juin 2025',
				location: 'Guangzhou, Chine',
				bullets: ['GPA : 3,61'],
			},
		],
	},
	publications: {
		summary: [
			"3 brevets d'invention + 1 modèle d'utilité issus de la recherche académique à l'Université de Technologie du Guangdong.",
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
