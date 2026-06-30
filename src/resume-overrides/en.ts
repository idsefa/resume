import type { ResumeOverride } from './types';

export const enOverride: ResumeOverride = {
	profile: {
		name: 'Haocheng He',
		role: 'Aviation Engineering MSc | Cross-Disciplinary Engineering & AI',
		location: 'Hong Kong SAR, China',
	},
	about: {
		bio: 'Aviation Engineering MSc candidate at PolyU (GPA: 3.95/4.3), with an IE undergraduate and Law minor from GDUT. Experience spans airport simulation (AnyLogic, 5 routing algorithms), manufacturing optimization (line balance 58%→70%), and Ascend 310B hardware R&D. 3 patent applications filed.',
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: 'Location', value: 'Hong Kong SAR, China' },
			{ label: 'Focus', value: 'Engineering Optimization, Airport Simulation, AI Hardware, Cross-Disciplinary' },
			{ label: 'Languages', value: 'English (IELTS 6.5), Mandarin (Native), Cantonese (Conversational)' },
		],
		highlights: [
			{
				title: 'Cross-disciplinary: Engineering + AI + Law',
				description: 'IE background with airport simulation and manufacturing optimization experience, now working on AI hardware, plus a law minor — knowledge spans multiple domains.',
			},
			{
				title: 'Hands-on factory experience',
				description: 'Conducted stopwatch time studies and ECRS analysis at Midea and LiuGong, proposed improvements verified by simulation (line balance 58%→70%).',
			},
			{
				title: 'AI hardware + simulation modeling',
				description: 'Built airport emergency simulation models in AnyLogic, worked on Ascend 310B smart hardware R&D, proficient in Python/Java/SQL stack.',
			},
		],
	},
	experience: {
		summary: [
			'Background in operations analytics and tech risk — did process optimization, simulation modeling, and AI deployment work across 4 internships.',
		],
		items: [{
				title: 'AI Engineer Assistant',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'May 2025 - Apr 2026',
				location: 'Shenzhen, China',
				bullets: [
					'Participated in Ascend 310B smart piano R&D across 3 development phases; tested 10+ boards (CPLD, STM32), iterated motor driver 3 times, developed firmware and authored 5 technical documents.',
					'Participated in camera- and Ascend-based piano fingering recognition module integration (Python/C++); diagnosed cross-layer issues.',
					'Maintained Ubuntu servers, configured Huawei network equipment, operated 3D printer, supported technical interviews.',
					,
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
					'Proposed layout adjustments estimated to reduce cycle time by approximately 8% in simulation.',
				],
			}],
	},
	education: {
		summary: [
			'MEng in Aviation (PolyU, 3.95/4.3) + BE in IE (3.67, Top 20%) + Minor in Law (3.61) — operations research, stochastic processes, quality control, and regulatory coursework.',
		],
		items: [
			{
				title: 'Master of Science in Aviation Engineering and Operations Management',
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
				bullets: ['GPA: 3.67 / 5.0 (Top 20%) — University-level Excellent Graduation Thesis, Graduation Design Innovation Award.'],
			},
			{
				title: 'Minor in Law',
				org: 'Guangdong University of Technology',
				period: 'Sep 2022 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: ['GPA: 3.61 / 5.0'],
			},
		],
	},
	publications: {
		summary: [
			'3 invention patents + 1 utility model + 2 software copyrights from research at GDUT.',
		],
		sections: [
			{
				title: 'Invention Patents',
				items: [
					{
						title: 'MCMC Motion Control for PI Coating Machine Controller',
						year: '2026',
						authors: 'Zhou Xianzhong, He Haocheng, He Zhiyuan',
						venue: 'CN122085794A — Guangdong University of Technology',
						links: [],
					},
					{
						title: 'Coating Control via Deep Reinforcement Learning',
						year: '2025',
						authors: 'Zhou Xianzhong, He Haocheng, He Zhiyuan',
						venue: 'CN121325552A — Guangdong University of Technology',
						links: [],
					},
					{
						title: 'Energy Regulation for Household Solar Storage',
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