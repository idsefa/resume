import type { ResumeOverride } from './types';

export const zhOverride: ResumeOverride = {
	profile: {
		name: '何昊程',
		role: '运营分析与科技风控候选人',
		location: '中国香港',
	},
	about: {
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: '所在地', value: '中国香港' },
			{ label: '方向', value: '科技风控、风险鉴证、数据治理、AI 治理' },
			{ label: '语言', value: '英语（雅思 6.5）、普通话（母语）、粤语（日常会话）' },
		],
		highlights: [
			{
				title: '工程 + AI + 合规的复合背景',
				description: '工业工程训练（流程优化、仿真建模、统计分析）+ AI 部署经验 + 法学辅修中的法规与合规课程。',
			},
			{
				title: '流程审计与内控经验',
				description: '在 2 家制造企业做过工时测量和流程审计，识别控制缺陷并提出有量化改善效果的纠正措施。',
			},
			{
				title: 'IT 系统与数据分析能力',
				description: '搭建过仿真模型（AnyLogic）、开发过 AI 应用（华为昇腾 NPU）、用过 SQL/MySQL 数据库，以及 Python 做数据分析和工作流自动化。',
			},
		],
	},
	experience: {
		summary: [
			'运营分析与科技风控方向，有流程优化、仿真建模、计算机视觉模型支持和法学合规课程的实践经验。',
		],
		items: [{
				title: 'AI 运营实习生',
				org: '深圳市五线宏音科技有限公司',
				period: '2025年5月 - 2026年4月',
				location: '深圳',
				bullets: [
					'参与智能钢琴项目，使用华为昇腾 310B NPU——硬件测试（示波器、万用表、逻辑分析仪）、全桥电机驱动电路设计（嘉立创 EDA）、STM32 固件开发。',
					'基于昇腾 NPU 搭建钢琴指法手势识别的计算机视觉管线；同时撰写昇腾 SDK 技术文档。',
					'兼任服务器运维（Ubuntu Linux）、网络管理（华为交换机/路由器）、行政采购和面试官——初创公司全栈运营角色。',
				],
			},{
				title: '科研助理 — 机场运行仿真',
				org: '广东工业大学（联合广州白云国际机场）',
				period: '2023年9月 - 2025年6月',
				location: '广州',
				bullets: [
					'基于 AnyLogic 搭建广州白云机场地面车辆运营仿真模型——建模路网、服务车道和车辆调度逻辑，技术栈 Java + MySQL。',
					'实现路径规划算法（Dijkstra、A*、BFS、遗传算法）用于避碰路由；验证路网拓扑并在高峰场景下优化调度。',
					'毕业论文获优秀论文 + 创新奖；机场运营团队采纳模型用于场景推演。',
				],
			},{
				title: '工业工程实习生',
				org: '美的集团 — 厨房与热水器事业部',
				period: '2024年4月 - 2024年5月',
				location: '佛山',
				bullets: [
					'对洗碗机内胆钣金线进行手工作业时间测量，建立人工负荷表，识别出 5 道超过节拍的工序。',
					'基于精益思想发现 22 个改善点（动作改善、设备改善、安全改善）；仿真结果：线平衡率从 58% 提升至 70%，人员从 20 人缩减至 18 人。',
				],
			},{
				title: '制造运营实习生',
				org: '广西柳工机械股份有限公司',
				period: '2023年7月 - 2023年8月',
				location: '柳州',
				bullets: [
					'对装载机装配线 12 个工位做秒表测时，用 ECRS 分析识别 3 个主要瓶颈。',
					'提出的布局调整方案在仿真中将节拍时间降低约 8%，经产线工程师验证后实施。',
				],
			}],
	},
	education: {
		summary: [
			'航空工程硕士（港理工，GPA 3.95/4.3）+ 工业工程学士（GPA 3.67，前 20%）+ 法学辅修（GPA 3.61）——核心课程涵盖运筹学、随机过程、统计质量控制和法规框架。',
		],
		items: [
			{
				title: '航空工程与运营管理 硕士',
				org: '香港理工大学',
				period: '2025年9月 - 2027年1月',
				location: '中国香港',
				bullets: ['GPA：3.95 / 4.3（在读）'],
			},
			{
				title: '工业工程 学士',
				org: '广东工业大学',
				period: '2021年9月 - 2025年6月',
				location: '广州',
				bullets: ['GPA：3.67（前 20%）—— 优秀毕业论文 + 创新奖。'],
			},
			{
				title: '法学辅修',
				org: '广东工业大学',
				period: '2022年9月 - 2025年6月',
				location: '广州',
				bullets: ['GPA：3.61'],
			},
		],
	},
	publications: {
		summary: [
			'广东工业大学学术研究成果：3 项发明专利 + 1 项实用新型。',
		],
		sections: [
			{
				title: '发明专利',
				items: [
					{
						title: '一种基于蒙特卡洛马尔科夫链采样的PI涂布机控制器的运动控制方法',
						year: '2026',
						authors: '周贤中; 何昊程; 贺致远',
						venue: 'CN122085794A — 广东工业大学',
						links: [],
					},
					{
						title: '一种涂布控制方法及涂布系统（深度强化学习）',
						year: '2025',
						authors: '周贤中; 何昊程; 贺致远',
						venue: 'CN121325552A — 广东工业大学',
						links: [],
					},
					{
						title: '一种家用太阳能储能系统的能量调控方法及系统',
						year: '2024',
						authors: '周贤中; 曾黄涛; 余达明; 何昊程',
						venue: 'CN117767437A — 广东工业大学',
						links: [],
					},
				],
			},
			{
				title: '实用新型',
				items: [
					{
						title: '一种线束生产一体化设备',
						year: '2024',
						authors: '赵翔; 何昊程; 胡波锋',
						venue: 'CN221352455U — 广东工业大学',
						links: [],
					},
				],
			},
			{
				title: '软件著作权',
				items: [
					{
						title: '企业财务数据分析软件 V1.0',
						year: '2024',
						authors: '李一思; 何昊程',
						venue: '登记号：2024SR0146827',
						links: [],
					},
					{
						title: '城市防汛智能移动应急指挥调度系统 V1.0',
						year: '2024',
						authors: '林诚丰; 李泽茵; 杨华; 何昊程',
						venue: '登记号：2024SR0549247',
						links: [],
					},
				],
			},
			{
				title: '获奖',
				items: [
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
