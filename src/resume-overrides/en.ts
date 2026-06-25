import type { ResumeOverride } from './types';

export const enOverride: ResumeOverride = {
	profile: {
		name: 'Haocheng He',
		role: 'Operations Analytics & Technology Risk Candidate',
		location: 'Hong Kong SAR, China',
	},
	about: {
		bio: 'I like making complex systems work better — whether that means modeling airport vehicle dispatch, optimizing a factory assembly line, or building a smart piano with AI chips. Currently finishing my MEng at PolyU (aviation operations) while doing R&D at a Shenzhen startup that makes AI-powered musical instruments. Before that, I spent time at Midea and LiuGong factories learning how things actually get built on the ground. My undergrad thesis on airport simulation won awards, and I have a few patents from my current work. I think the most interesting problems sit where engineering, data, and real-world operations overlap.',
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: 'Location', value: 'Hong Kong SAR, China' },
			{ label: 'Focus', value: 'Technology Risk, Risk Assurance, Data Governance, AI Governance' },
			{ label: 'Languages', value: 'English (IELTS 6.5), Mandarin (Native), Cantonese (Conversational)' },
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
				title: 'AI Operations & R&D Intern',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'May 2025 - Apr 2026',
				location: 'Shenzhen, China',
				bullets: [
					'Set up 3 AI tools on Huawei Ascend 310B chips for internal team use; sped up response time by ~30%.',
					'Designed motor driver circuits (LCEDA) and wrote STM32 firmware for a smart piano; tested with oscilloscopes and logic analyzers.',
					'Built a finger-position tracking system for the piano using a camera and the Ascend chip; documented the SDK for the team.',
					'Filed 2 patents from this work — one on process optimization, one on scheduling with AI.',
					'Kept the servers running (Ubuntu), managed the network (Huawei switches and routers), and interviewed candidates for new roles.',
				],
			},{
				title: 'Research Assistant — Airport Operations Simulation',
				org: "Guangdong University of Technology (with Guangzhou Baiyun Int'l Airport)",
				period: 'Sep 2023 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [
					'Modeled how ground vehicles move around Guangzhou Baiyun Airport — roads, service lanes, dispatch rules — using AnyLogic, Java, and MySQL.',
					'Wrote routing algorithms (Dijkstra, A*, BFS, genetic) so 50+ vehicles across 3 zones could find collision-free paths.',
					'Cut simulated congestion by 35% during peak hours (200+ movements/hour) with zero collisions.',
					'Thesis won Excellent Thesis + Innovation Award; the airport team now uses the model for planning.',
				],
			},{
				title: 'Industrial Engineering Intern',
				org: 'Midea Group — Kitchen & Water Heater Division',
				period: 'Apr 2024 - May 2024',
				location: 'Foshan, China',
				bullets: [
					'Timed every step on a dishwasher sheet metal line by hand; found 5 steps that were too slow.',
					'Suggested 22 changes using lean methods; simulation showed the line would go from 58% to 70% balanced, with 2 fewer workers (20→18).',
				],
			},{
				title: 'Manufacturing Operations Intern',
				org: 'Guangxi LiuGong Machinery Co., Ltd.',
				period: 'Jul 2023 - Aug 2023',
				location: 'Liuzhou, China',
				bullets: [
					'Timed 12 workstations on the wheel loader assembly line with a stopwatch; found the 3 biggest bottlenecks using ECRS.',
					'Suggested layout tweaks that cut cycle time by ~8% in simulation. The line engineers confirmed it worked.',
				],
			}],
	},
	education: {
		summary: [
			'MEng in Aviation Engineering (PolyU, GPA 3.95/4.3) + BE in Industrial Engineering (GPA 3.67, Top 20%) + Minor in Law (GPA 3.61) — with coursework in operations research, stochastic processes, statistical quality control, and regulatory frameworks.',
		],
		items: [
			{
				title: 'Master of Engineering in Aviation Engineering and Operation Management',
				org: 'The Hong Kong Polytechnic University',
				period: 'Sep 2025 - Jan 2027',
				location: 'Hong Kong SAR, China',
				bullets: ['GPA: 3.95 / 4.3 (Current)'],
			},
			{
				title: 'Bachelor of Engineering in Industrial Engineering',
				org: 'Guangdong University of Technology',
				period: 'Sep 2021 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: ['GPA: 3.67 (Top 20%) — Excellent Graduation Thesis + Innovation Award.'],
			},
			{
				title: 'Minor in Law',
				org: 'Guangdong University of Technology',
				period: 'Sep 2022 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: ['GPA: 3.61'],
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
