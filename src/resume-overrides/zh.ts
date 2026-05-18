import type { ResumeOverride } from './types';

export const zhOverride: ResumeOverride = {
	profile: {
		name: '何昊程',
		role: '航空工程与运营管理硕士在读',
		location: '中国香港',
	},
	about: {
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: '所在地', value: '中国香港' },
			{ label: '方向', value: '航空运行、AI 工作流、仿真优化' },
		],
		highlights: [
			{
				title: '喜欢解决真实业务问题',
				description: '我主要关注机场和航司运营问题，希望用仿真和 AI 工具把效率做上去。',
			},
			{
				title: '技术和沟通都能做',
				description: '我习惯和不同岗位一起做项目，把复杂问题拆成可以落地的步骤。',
			},
			{
				title: '工具使用偏实战',
				description: '常用 Python、SQL、AnyLogic、Plant Simulation 和 OR-Tools。',
			},
		],
	},
	experience: {
		summary: [
			'我做过研发实习、机场仿真研究和制造现场改善。',
			'不同岗位里，我都在做同一件事：用数据和工程方法解决效率问题。',
		],
		items: [{
				title: '制造运营实习生',
				org: '广西柳工机械股份有限公司',
				period: '2023年7月 - 2023年8月',
				location: '柳州',
				bullets: [
					'在装载机装配线使用秒表法和 ECRS 分析节拍与浪费。',
					'协同现场工程师处理日常问题，保障产线稳定运行。',
				],
			},{
				title: '校园品牌大使',
				org: '柳州柳工人力资源服务有限公司',
				period: '2023年9月 - 2024年12月',
				location: '广州',
				bullets: [
					'作为企业与高校之间的沟通桥梁，协助雇主品牌推广。',
					'组织校园招聘活动，支持毕业生完成申请和面试流程。',
				],
			},{
				title: '科研助理',
				org: '广东工业大学（联合广州白云国际机场）',
				period: '2023年9月 - 2025年6月',
				location: '广州',
				bullets: [
					'搭建机场特种车辆交通的 AnyLogic 仿真模型。',
					'用 Java 和 MySQL 实现避碰与路径规划逻辑。',
					'在高流量场景下改善仿真拥堵和运行安全。',
					'项目成果形成本科毕业论文，获优秀论文和创新奖。',
				],
			},{
				title: '工业工程实习生',
				org: '佛山市顺德区美的洗涤电器制造有限公司',
				period: '2024年4月 - 2024年5月',
				location: '佛山',
				bullets: [
					'在洗碗机内胆装配线做标准工时测量。',
					'用线平衡和动作经济方法找瓶颈并提出改善建议。',
				],
			},{
				title: '研发与运营实习生',
				org: '深圳市五线宏音科技有限公司',
				period: '2025年5月 - 2026年4月',
				location: '深圳',
				bullets: [
					'参与基于华为昇腾的 AI 应用和流程优化工作。',
					'围绕实习项目撰写并提交多项专利。',
					'用 Prompt Engineering 加快开发和问题定位。',
					'支持网络和行政相关的跨团队协作。',
				],
			}],
	},
	education: {
		summary: [
			'我的学习背景覆盖航空、工业工程和法学辅修。',
			'这种组合让我在运营管理问题上有更全面的视角。',
		],
		items: [
			{
				title: '航空工程与运营管理 硕士',
				org: '香港理工大学',
				period: '2025年9月 - 2027年1月',
				location: '中国香港',
				bullets: [],
			},
			{
				title: '工业工程 学士',
				org: '广东工业大学',
				period: '2021年9月 - 2025年6月',
				location: '广州',
				bullets: [],
			},
			{
				title: '法学 学士（辅修）',
				org: '广东工业大学',
				period: '2022年9月 - 2025年6月',
				location: '广州',
				bullets: [],
			},
		],
	},
	publications: {
		summary: [
			'我目前还没有正式论文发表，但有实际项目成果。',
			'主要是专利产出和获奖的仿真研究项目。',
		],
		sections: [
			{
				title: '专利',
				items: [
					{
						title: '实习期间多项专利申请',
						year: '2025-2026',
						authors: '何昊程及团队',
						venue: '深圳研发实习项目',
						links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' }],
					},
				],
			},
			{
				title: '研究与奖项',
				items: [
					{
						title: '机场特种车辆仿真与优化项目',
						year: '2025',
						authors: '何昊程',
						venue: '广州白云国际机场联合项目',
						links: [],
					},
					{
						title: '本科优秀毕业论文与创新奖',
						year: '2025',
						authors: '何昊程',
						venue: '广东工业大学',
						links: [],
					},
				],
			},
		],
	},
};