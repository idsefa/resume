import type { ResumeOverride } from './types';

export const enOverride: ResumeOverride = {
	profile: {
		name: 'Haocheng He',
		role: "MEng Student in Aviation Engineering and Operation Management",
		location: 'Hong Kong SAR, China',
	},
	about: {
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: 'Location', value: 'Hong Kong SAR, China' },
			{ label: 'Focus', value: 'Aviation operations, AI workflow, and simulation' },
		],
		highlights: [
			{
				title: 'Simulation-driven operations research',
				description: 'Built airport vehicle simulation models and manufacturing process optimization systems across 4 internships, combining AnyLogic, Python, and OR-Tools to solve real operational bottlenecks.',
			},
			{
				title: 'Cross-domain problem-solving',
				description: 'Background spans aviation operations, industrial engineering, and legal studies — enabling structured analysis across technical, operational, and regulatory dimensions.',
			},
			{
				title: 'From research to measurable impact',
				description: 'Airport simulation project won Excellent Thesis and Innovation Award; manufacturing internships delivered quantifiable cycle-time reductions on production lines.',
			},
		],
	},
	experience: {
		summary: [
			'Four internships across aviation simulation research, manufacturing operations, and AI-driven R&D — each focused on identifying bottlenecks and delivering measurable process improvements.',
			'Core toolkit: AnyLogic simulation, Python, SQL, OR-Tools, Plant Simulation, and prompt engineering for accelerated development workflows.',
		],
		items: [{
				title: 'Manufacturing Operations Intern',
				org: 'Guangxi LiuGong Machinery Co., Ltd.',
				period: 'Jul 2023 - Aug 2023',
				location: 'Liuzhou, China',
				bullets: [
					'Stopwatch time studies on 12 workstations of the wheel loader line — used ECRS to find 3 main bottleneck points.',
					'Suggested layout changes that cut cycle time by ~8% in simulation. Line engineers validated the results before we implemented.',
				],
			},{
				title: 'Campus Brand Ambassador',
				org: 'LiuGong HR Services',
				period: 'Sep 2023 - Dec 2024',
				location: 'Guangzhou, China',
				bullets: [
					'Ran the recruitment pipeline across 3 campuses: organized 5+ hiring events, screened 200+ applications.',
					'Main contact between corporate HR and university career centers — helped improve offer acceptance by staying in touch with candidates personally.',
				],
			},{
				title: 'Research Assistant',
				org: "Guangdong University of Technology (with Guangzhou Baiyun Int'l Airport)",
				period: 'Sep 2023 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [
					'Built an AnyLogic simulation of 50+ airport vehicles across 3 airside zones. The collision avoidance and path-planning logic was written in Java.',
					'Under peak-hour load (200+ movements/hour), the optimized dispatch schedule cut simulated congestion by 35% — zero collisions in test runs.',
					'The thesis won Excellent Thesis + Innovation Award. The airport operations team now uses the model for scenario planning.',
				],
			},{
				title: 'Industrial Engineering Intern',
				org: 'Midea Group (Kitchen and Water Heater Division)',
				period: 'Apr 2024 - May 2024',
				location: 'Foshan, China',
				bullets: [
					'Standard time measurement on 8 workstations of the dishwasher inner-liner line — stopwatch plus MOD method.',
					'Line balancing analysis found 2 key bottlenecks. My rebalancing proposal raised theoretical line efficiency from 72% to 85%.',
				],
			},{
				title: 'R&D and Operations Intern',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'May 2025 - Apr 2026',
				location: 'Shenzhen, China',
				bullets: [
					'Built 3 AI use cases on Huawei Ascend NPU — optimized inference pipelines for internal workflow automation.',
					'2 patents filed from internship work: AI-driven process optimization and intelligent scheduling algorithms.',
					'Prompt engineering cut prototype validation and debugging cycles by ~40%.',
				],
			}],
	},
	education: {
		summary: [
			'Aviation engineering (MEng) + industrial engineering (BE) + law minor — I can approach problems from technical, operational, and regulatory angles.',
			'This mix has been useful for structured thinking across different kinds of challenges.',
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
				title: 'Bachelor of Laws (Minor)',
				org: 'Guangdong University of Technology',
				period: 'Sep 2022 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [],
			},
		],
	},
	publications: {
		summary: [
			'Practical research outputs from internships and academic projects, including patent filings and award-winning simulation research.',
			'Focus areas: airport operations simulation, AI workflow optimization, and industrial engineering applications.',
		],
		sections: [
			{
				title: 'Patents',
				items: [
					{
						title: 'Multiple internship patent filings',
						year: '2025-2026',
						authors: 'Haocheng He and team',
						venue: 'R&D internship projects in Shenzhen',
						links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' }],
					},
				],
			},
			{
				title: 'Research and Awards',
				items: [
					{
						title: 'Airport special vehicle simulation and optimization project',
						year: '2025',
						authors: 'Haocheng He',
						venue: 'Guangzhou Baiyun International Airport collaboration project',
						links: [],
					},
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