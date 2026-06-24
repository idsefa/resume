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
					'Conducted stopwatch time studies across 12 workstations on the wheel loader assembly line, applying ECRS analysis to identify 3 major bottleneck points.',
					'Proposed layout adjustments that reduced average cycle time by ~8% in simulation, validated with line engineers before implementation.',
				],
			},{
				title: 'Campus Brand Ambassador',
				org: 'LiuGong HR Services',
				period: 'Sep 2023 - Dec 2024',
				location: 'Guangzhou, China',
				bullets: [
					'Managed recruitment pipeline across 3 university campuses, coordinating 5+ hiring events and screening 200+ candidate applications.',
					'Served as primary liaison between corporate HR and university career centers, improving offer acceptance rate through personalized candidate engagement.',
				],
			},{
				title: 'Research Assistant',
				org: "Guangdong University of Technology (with Guangzhou Baiyun Int'l Airport)",
				period: 'Sep 2023 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [
					'Designed an AnyLogic agent-based simulation model for 50+ airport special vehicles operating across 3 airside zones, with collision avoidance and path-planning algorithms implemented in Java.',
					'Optimized vehicle dispatch schedules under peak-hour scenarios (200+ movements/hour), reducing simulated congestion by 35% and eliminating collision events in test runs.',
					'Project deliverables: bachelor thesis (awarded Excellent Thesis + Innovation Award), simulation model adopted by airport operations team for scenario planning.',
				],
			},{
				title: 'Industrial Engineering Intern',
				org: 'Midea Group (Kitchen and Water Heater Division)',
				period: 'Apr 2024 - May 2024',
				location: 'Foshan, China',
				bullets: [
					'Measured standard times across 8 workstations on the dishwasher inner-liner assembly line using stopwatch studies and predetermined motion time systems.',
					'Identified 2 critical bottlenecks through line balancing analysis; proposed rebalancing方案 that improved theoretical line efficiency from 72% to 85%.',
				],
			},{
				title: 'R&D and Operations Intern',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'May 2025 - Apr 2026',
				location: 'Shenzhen, China',
				bullets: [
					'Developed 3 AI application use cases on Huawei Ascend NPU platform, optimizing inference pipelines for internal workflow automation.',
					'Filed 2 patents from internship projects covering AI-driven process optimization and intelligent scheduling algorithms.',
					'Applied prompt engineering techniques to reduce development cycle time by ~40% for prototype validation and code debugging tasks.',
				],
			}],
	},
	education: {
		summary: [
			'MEng in Aviation Engineering (PolyU) + BE in Industrial Engineering + Law minor — a cross-disciplinary foundation spanning operations research, systems thinking, and regulatory awareness.',
			'This combination enables structured problem-solving across technical, operational, and governance dimensions.',
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