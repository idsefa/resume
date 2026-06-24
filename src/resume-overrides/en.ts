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
					'Built 3 AI application use cases on Huawei Ascend NPU platform for internal workflow automation; optimized inference pipelines reducing processing latency by ~30%.',
					'Filed 2 patents covering AI-driven process optimization and intelligent scheduling algorithms.',
					'Applied prompt engineering to accelerate prototype validation and code debugging, cutting development cycles by ~40%.',
				],
			},{
				title: 'Research Assistant — Airport Operations Simulation',
				org: "Guangdong University of Technology (with Guangzhou Baiyun Int'l Airport)",
				period: 'Sep 2023 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [
					'Built an AnyLogic agent-based simulation of Guangzhou Baiyun Airport ground vehicle operations — modeled road networks, service lanes, and vehicle dispatch logic using Java + MySQL.',
					'Built path-planning algorithms (Dijkstra, A*, BFS, genetic algorithm) for collision-free routing; validated road network topology and optimized dispatch under peak-hour scenarios.',
					'Thesis won Excellent Thesis + Innovation Award; airport operations team adopted model for scenario planning.',
				],
			},{
				title: 'Industrial Engineering Intern',
				org: 'Midea Group — Kitchen & Water Heater Division',
				period: 'Apr 2024 - May 2024',
				location: 'Foshan, China',
				bullets: [
					'Measured manual operation times on dishwasher inner-liner sheet metal line; built operator workload charts and identified 5 processes exceeding takt time.',
					'Found 22 improvement opportunities using lean methods (ECRS, motion economy, safety); simulation showed line balance rate improving from 58% to 70% with headcount reduced from 20 to 18.',
				],
			},{
				title: 'R&D and Operations Intern',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'May 2025 - Apr 2026',
				location: 'Shenzhen, China',
				bullets: [
					'Worked on smart piano project using Huawei Ascend 310B NPU — hardware testing (oscilloscope, multimeter, logic analyzer), full-bridge motor driver circuit design (LCEDA), and STM32 firmware development.',
					'Built computer vision pipeline for piano finger gesture recognition on Ascend NPU; also wrote technical documentation for Ascend SDK usage.',
					'Handled server ops (Ubuntu Linux), network administration (Huawei switches/routers), office procurement, and served as interviewer for new hires — full-stack operational role in a startup.',
				],
			}],
	},
	education: {
		summary: [
			'MEng in Aviation Engineering (PolyU) + BE in Industrial Engineering + Minor in Law — technical, operational, and regulatory perspectives in one profile.',
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
				bullets: ['GPA: 3.67 / 4.0 (Top 20%) — Excellent Graduation Thesis + Innovation Award.'],
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
				title: 'Software Copyright',
				items: [
					{
						title: 'Enterprise Financial Data Analysis Software V1.0',
						year: '2024',
						authors: 'Li Yisi, He Haocheng',
						venue: 'Registration No. 2024SR0146827',
						links: [],
					},
					{
						title: 'Urban Flood Intelligent Mobile Emergency Command Dispatch System V1.0',
						year: '2024',
						authors: 'Lin Chengfeng, Li Zeyin, Yang Hua, He Haocheng',
						venue: 'Registration No. 2024SR0549247',
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
