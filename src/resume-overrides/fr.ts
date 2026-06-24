import type { ResumeOverride } from './types';

export const frOverride: ResumeOverride = {
	profile: {
		name: 'Haocheng He',
		role: 'Candidat en Analyse des Opérations et Risk Technology',
		location: 'Hong Kong, Chine',
	},
	about: {
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
					"Développement de 3 cas d'usage IA sur NPU Huawei Ascend pour l'automatisation des workflows internes ; optimisation des pipelines d'inférence réduisant la latence de traitement d'environ 30 %.",
					"Dépôt de 2 brevets : optimisation de processus pilotée par IA et algorithmes de planification intelligente.",
					"Prompt engineering appliqué pour accélérer la validation de prototypes et le débogage, réduisant les cycles de développement d'environ 40 %.",
				],
			},{
				title: 'Assistant de recherche — Simulation des opérations aéroportuaires',
				org: "Université de Technologie du Guangdong (avec l'aéroport de Guangzhou Baiyun)",
				period: 'Sep 2023 - Juin 2025',
				location: 'Guangzhou, Chine',
				bullets: [
					"Modèle de simulation multi-agents (AnyLogic) pour 50+ véhicules spéciaux sur 3 zones airside ; algorithmes d'évitement de collision et de planification de trajectoire en Java + MySQL.",
					"Optimisation de la disposition des véhicules sous charge de pointe (200+ mouvements/heure) : réduction de 35 % de la congestion simulée, zéro collision en tests.",
					"Mémoire primé (thèse d'excellence + prix de l'innovation) ; modèle adopté par l'équipe opérationnelle de l'aéroport pour la planification de scénarios.",
				],
			},{
				title: 'Stagiaire en génie industriel',
				org: 'Midea Group — Division Cuisine et Chauffe-eau',
				period: 'Avr 2024 - Mai 2024',
				location: 'Foshan, Chine',
				bullets: [
					"Mesure des temps standards sur 8 postes de la ligne d'assemblage des cuves de lave-vaisselle (chronométrage + méthode MOD).",
					"Analyse d'équilibrage identifiant 2 goulots critiques ; proposition de rééquilibrage portant l'efficacité théorique de 72 % à 85 %.",
				],
			},{
				title: 'Stagiaire en opérations de production',
				org: 'Guangxi LiuGong Machinery Co., Ltd.',
				period: 'Juil 2023 - Août 2023',
				location: 'Liuzhou, Chine',
				bullets: [
					"Études chronométriques sur 12 postes de la ligne d'assemblage de chargeuses ; analyse ECRS identifiant 3 points de goulot majeurs.",
					"Propositions de réorganisation réduisant le temps de cycle moyen d'environ 8 % en simulation, validées par les ingénieurs de production.",
				],
			}],
	},
	education: {
		summary: [
			"MSc en ingénierie aéronautique (PolyU) + Licence en génie industriel + Mineure en droit — perspectives techniques, opérationnelles et réglementaires dans un seul profil.",
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
				bullets: ['GPA : 3,67 / 4,0 (Top 20 %) — Mémoire de licence primé + Prix de l\'innovation.'],
			},
			{
				title: 'Mineure en droit',
				org: 'Université de Technologie du Guangdong',
				period: 'Sep 2022 - Juin 2025',
				location: 'Guangzhou, Chine',
				bullets: [],
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
