import type { ResumeOverride } from './types';

export const enOverride: ResumeOverride = {
	profile: {
		name: 'Haocheng He',
		role: 'Operations Analytics & Technology Risk Candidate',
		location: 'Hong Kong SAR, China',
	},
	about: {
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: 'Location', value: 'Hong Kong SAR, China' },
			{ label: 'Focus', value: 'Technology Risk, Risk Assurance, Data Governance, AI Governance' },
		],
		highlights: [
			{
				title: 'Engineering + AI + Compliance background',
				description: 'Industrial engineering training (process optimization, simulation modeling, statistical analysis) combined with AI deployment experience and law minor coursework in regulatory frameworks and compliance.',
			},
			{
				title: 'Process audit and internal controls experience',
				description: 'Conducted time studies and process audits across 2 manufacturing plants, identifying control gaps and proposing corrective actions with quantified efficiency improvements.',
			},
			{
				title: 'IT systems and data analysis',
				description: 'Built simulation models (AnyLogic), developed AI applications (Huawei Ascend NPU), worked with SQL/MySQL databases, and applied Python for data analysis and workflow automation.',
			},
		],
	},
	experience: {
		summary: [
			'Operations analytics and technology risk candidate with experience in process optimization, simulation modeling, computer vision model support, and legal/compliance coursework.',
		],
		items: [{
				title: 'AI Operations Intern',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'May 2025 - Apr 2026',
				location: 'Shenzhen, China',
				bullets: [
					'Developed 3 AI application use cases on Huawei Ascend NPU platform for internal workflow automation; optimized inference pipelines reducing processing latency by ~30%.',
					'Filed 2 patents covering AI-driven process optimization and intelligent scheduling algorithms.',
					'Applied prompt engineering to accelerate prototype validation and code debugging, cutting development cycles by ~40%.',
				],
			},{
				title: 'Research Assistant — Airport Operations Simulation',
				org: "Guangdong University of Technology (with Guangzhou Baiyun Int'l Airport)",
				period: 'Sep 2023 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [
					'Built an agent-based simulation model (AnyLogic) for 50+ airport special vehicles across 3 airside zones; collision avoidance and path-planning algorithms implemented in Java + MySQL.',
					'Optimized dispatch schedules under peak-hour load (200+ movements/hour): reduced simulated congestion by 35%, zero collision events in test runs.',
					'Thesis won Excellent Thesis Award + Innovation Award; airport operations team adopted the model for scenario planning.',
				],
			},{
				title: 'Industrial Engineering Intern',
				org: 'Midea Group — Kitchen & Water Heater Division',
				period: 'Apr 2024 - May 2024',
				location: 'Foshan, China',
				bullets: [
					'Conducted standard time measurement across 8 workstations on the dishwasher inner-liner assembly line using stopwatch studies and MOD method.',
					'Line balancing analysis identified 2 critical bottlenecks; proposed rebalancing that improved theoretical line efficiency from 72% to 85%.',
				],
			},{
				title: 'Manufacturing Operations Intern',
				org: 'Guangxi LiuGong Machinery Co., Ltd.',
				period: 'Jul 2023 - Aug 2023',
				location: 'Liuzhou, China',
				bullets: [
					'Stopwatch time studies on 12 workstations of the wheel loader assembly line; applied ECRS analysis to identify 3 major bottleneck points.',
					'Proposed layout adjustments that reduced average cycle time by ~8% in simulation, validated by line engineers before implementation.',
				],
			}],
	},
	education: {
		summary: [
			'MEng in Aviation Engineering (PolyU) + BE in Industrial Engineering + Minor in Law — technical, operational, and regulatory perspectives in one profile.',
		],
		items: [
 + Minor in Law — technical, operational, and regulatory perspectives in one profile.',
		],
		items: [
			{
				title: 'Master of Engineering in Aviation Engineering and Operation Management',
				org: 'The Hong Kong Polytechnic University',
				period: 'Sep 2025 - Jan 2027',
				location: 'Hong Kong SAR, China',
				bullets: [],
			},
			{
				title: 'Bachelor of Engineering in Industrial Engineering',
				org: 'Guangdong University of Technology',
				period: 'Sep 2021 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [],
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
			'3 invention patents + 1 utility model from academic research at Guangdong University of Technology.',
		],
		sections: [
			{
				title: 'Invention Patents',
				items: [
					{
						title: 'PI Coating Machine Motion Control via MCMC Sampling',
						year: '2026',
						authors: 'Zhou Xianzhong, He Haocheng, He Zhiyuan',
						venue: 'CN122085794A — Guangdong University of Technology',
						links: [],
					},
					{
						title: 'Coating Control Method and System (Deep Reinforcement Learning)',
						year: '2025',
						authors: 'Zhou Xianzhong, He Haocheng, He Zhiyuan',
						venue: 'CN121325552A — Guangdong University of Technology',
						links: [],
					},
					{
						title: 'Home Solar Energy Storage System — Adaptive Energy Regulation',
						year: '2024',
						authors: 'Zhou Xianzhong, Zeng Huangtao, Yu Daming, He Haocheng',
						venue: 'CN117767437A — Guangdong University of Technology',
						links: [],
					},
				],
			},
			{
				title: 'Utility Model',
				items: [
					{
						title: 'Integrated Wire Harness Production Equipment',
						year: '2024',
						authors: 'Zhao Xiang, He Haocheng, Hu Bofeng',
						venue: 'CN221352455U — Guangdong University of Technology',
						links: [],
					},
				],
			},
			{
				title: 'Awards',
				items: [
					{
						title: 'Excellent Bachelor Thesis and Innovation Award',
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
