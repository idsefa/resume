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
				title: 'I work on real operations problems',
				description: 'My main interest is using simulation and AI tools to improve airport and airline operations.',
			},
			{
				title: 'Strong mix of engineering and communication',
				description: 'I like working with teams, turning complex tasks into clear steps, and pushing ideas into action.',
			},
			{
				title: 'Hands-on with practical tools',
				description: 'I often use Python, SQL, AnyLogic, Plant Simulation, and OR-Tools in projects.',
			},
		],
	},
	experience: {
		summary: [
			'Experience spans R&D, airport simulation research, and manufacturing operations improvement across 4 internships.',
			'Across these roles, I applied data-driven and engineering methods to solve workflow bottlenecks and improve operational efficiency.',
		],
		items: [{
				title: 'Manufacturing Operations Intern',
				org: 'Guangxi LiuGong Machinery Co., Ltd.',
				period: 'Jul 2023 - Aug 2023',
				location: 'Liuzhou, China',
				bullets: [
					'Conducted stopwatch time studies and ECRS analysis on the loader assembly line, tracking cycle time and identifying waste patterns.',
					'Collaborated with production engineers to resolve daily workflow issues and maintain stable line throughput.',
				],
			},{
				title: 'Campus Brand Ambassador',
				org: 'LiuGong HR Services',
				period: 'Sep 2023 - Dec 2024',
				location: 'Guangzhou, China',
				bullets: [
					'Served as primary liaison between LiuGong and university students, facilitating recruitment pipeline.',
					'Organized campus hiring events and guided graduates through application and interview processes.',
				],
			},{
				title: 'Research Assistant',
				org: "Guangdong University of Technology (with Guangzhou Baiyun Int'l Airport)",
				period: 'Sep 2023 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [
					'Designed and built an AnyLogic simulation model for airport special vehicle traffic operations.',
					'Implemented collision avoidance and path planning algorithms using Java and MySQL.',
					'Improved simulated traffic flow and safety metrics in high-density airside scenarios.',
					'Project成果: bachelor thesis + Excellent Thesis Award + Innovation Award.',
				],
			},{
				title: 'Industrial Engineering Intern',
				org: 'Midea Group (Kitchen and Water Heater Division)',
				period: 'Apr 2024 - May 2024',
				location: 'Foshan, China',
				bullets: [
					'Measured standard time across workstations on the dishwasher liner assembly line.',
					'Applied line balancing and motion economy principles to identify bottlenecks and propose process improvements.',
				],
			},{
				title: 'R&D and Operations Intern',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'May 2025 - Apr 2026',
				location: 'Shenzhen, China',
				bullets: [
					'Developed AI use cases on Huawei Ascend platform and optimized internal workflows.',
					'Filed 2 patents from AI-driven internship projects.',
					'Applied prompt engineering techniques to accelerate development and problem-solving workflows.',
				],
			}],
	},
	education: {
		summary: [
			'Cross-disciplinary foundation: aviation operations (MEng), industrial engineering (BE), and legal studies (LLB minor).',
			'This integrated perspective enables systematic problem-solving across technical, operational, and regulatory domains.',
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