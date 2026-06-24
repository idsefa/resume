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
				title: '仿真驱动的运筹优化',
				description: '4段实习覆盖机场仿真建模、制造流程优化和 AI 应用开发，综合运用 AnyLogic、Python、OR-Tools 解决实际运营瓶颈。',
			},
			{
				title: '跨领域的问题解决能力',
				description: '航空工程 × 工业工程 × 法学辅修，能从技术、运营、合规三个维度结构化分析问题。',
			},
			{
				title: '从研究到可量化的成果',
				description: '机场仿真项目获优秀论文和创新奖；制造业实习在产线上实现了可量化的节拍改善。',
			},
		],
	},
	experience: {
		summary: [
			'4段实习横跨航空仿真研究、制造业运营和 AI 研发，核心工作始终围绕"识别瓶颈→数据建模→量化改善"。',
			'技术栈：AnyLogic 仿真、Python、SQL、OR-Tools、Plant Simulation、Prompt Engineering。',
		],
		items: [{
				title: '制造运营实习生',
				org: '广西柳工机械股份有限公司',
				period: '2023年7月 - 2023年8月',
				location: '柳州',
				bullets: [
					'在装载机装配线对 12 个工位进行秒表测时，运用 ECRS 分析识别出 3 个主要瓶颈工位。',
					'提出布局调整方案，仿真验证节拍时间降低约 8%，经产线工程师评估后落地实施。',
				],
			},{
				title: '校园品牌大使',
				org: '柳州柳工人力资源服务有限公司',
				period: '2023年9月 - 2024年12月',
				location: '广州',
				bullets: [
					'对接 3 所高校的招聘渠道，协调 5 场以上校园招聘活动，筛选 200+ 份候选人简历。',
					'作为企业与高校之间的桥梁，通过个性化沟通提升 offer 接受率。',
				],
			},{
				title: '科研助理',
				org: '广东工业大学（联合广州白云国际机场）',
				period: '2023年9月 - 2025年6月',
				location: '广州',
				bullets: [
					'基于 AnyLogic 搭建机场特种车辆仿真模型，覆盖 3 个空侧区域、50+ 辆车的避碰与路径规划，核心算法用 Java 实现。',
					'在高峰场景（200+ 次/小时车辆调度）下优化调度方案，仿真拥堵降低 35%，测试运行零碰撞。',
					'项目成果：本科毕业论文获优秀论文 + 创新奖，仿真模型被机场运营团队采纳用于场景推演。',
				],
			},{
				title: '工业工程实习生',
				org: '佛山市顺德区美的洗涤电器制造有限公司',
				period: '2024年4月 - 2024年5月',
				location: '佛山',
				bullets: [
					'对洗碗机内胆装配线 8 个工位进行标准工时测量（秒表法 + MOD 法）。',
					'通过线平衡分析识别 2 个关键瓶颈，提出再平衡方案，理论线体效率从 72% 提升至 85%。',
				],
			},{
				title: '研发与运营实习生',
				org: '深圳市五线宏音科技有限公司',
				period: '2025年5月 - 2026年4月',
				location: '深圳',
				bullets: [
					'基于华为昇腾 NPU 开发 3 个 AI 应用场景，优化内部工作流自动化推理管线。',
					'围绕实习项目提交 2 项专利（AI 流程优化 + 智能排程算法）。',
					'运用 Prompt Engineering 将原型验证和代码调试的开发周期缩短约 40%。',
				],
			}],
	},
	education: {
		summary: [
			'航空工程硕士（港理工）+ 工业工程学士 + 法学辅修——运筹学、系统思维和法规意识的跨学科基础。',
			'这种组合让我能在技术、运营和治理三个层面进行结构化分析。',
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
			'实习和学术项目产出的实践研究成果，包括专利申请和获奖仿真项目。',
			'研究方向：机场运行仿真、AI 工作流优化、工业工程应用。',
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