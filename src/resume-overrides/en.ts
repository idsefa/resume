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
			'I have worked in R&D, airport simulation research, and factory operations improvement.',
			'Across these roles, I focused on solving daily workflow and efficiency problems with data and engineering methods.',
		],
		items: [{
				title: 'Manufacturing Operations Intern',
				org: 'Guangxi LiuGong Machinery Co., Ltd.',
				period: 'Jul 2023 - Aug 2023',
				location: 'Liuzhou, China',
				bullets: [
					'Used stopwatch studies and ECRS to track cycle time and waste on the loader assembly line.',
					'Worked with engineers to solve daily production issues and keep line flow stable.',
				],
			},{
				title: 'Campus Brand Ambassador',
				org: 'LiuGong HR Services',
				period: 'Sep 2023 - Dec 2024',
				location: 'Guangzhou, China',
				bullets: [
					'Acted as a bridge between the company and university students.',
					'Organized campus hiring events and helped graduates in application and interview steps.',
				],
			},{
				title: 'Research Assistant',
				org: "Guangdong University of Technology (with Guangzhou Baiyun Int'l Airport)",
				period: 'Sep 2023 - Jun 2025',
				location: 'Guangzhou, China',
				bullets: [
					'Built an AnyLogic simulation model for airport special vehicle traffic.',
					'Implemented collision avoidance and path planning logic with Java and MySQL.',
					'Improved simulated traffic flow and safety in busy airside scenarios.',
					'This project became my bachelor thesis and won Excellent Thesis and Innovation Award.',
				],
			},{
				title: 'Industrial Engineering Intern',
				org: 'Midea Group (Kitchen and Water Heater Division)',
				period: 'Apr 2024 - May 2024',
				location: 'Foshan, China',
				bullets: [
					'Measured standard time on the dishwasher liner assembly line.',
					'Used line balancing and motion economy to find bottlenecks and suggest improvements.',
				],
			},{
				title: 'R&D and Operations Intern',
				org: 'Shenzhen Wuxian Hongyin Technology Co., Ltd.',
				period: 'May 2025 - Apr 2026',
				location: 'Shenzhen, China',
				bullets: [
					'Worked on AI use cases based on Huawei Ascend and workflow optimization tasks.',
					'Wrote and filed multiple patents from internship projects.',
					'Used prompt engineering to speed up development and problem solving.',
					'Supported network and admin tasks in cross-functional teams.',
				],
			}],
	},
	education: {
		summary: [
			'My background combines aviation, industrial engineering, and law minor training.',
			'I like using this cross-domain view to solve operations and management problems.',
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
			'I do not have formal papers yet, but I have practical outputs from internships and research projects.',
			'These include patent work and award-winning simulation research.',
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