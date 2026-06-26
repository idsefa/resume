import type { ResumeOverride } from './types';

export const zhOverride: ResumeOverride = {
	profile: {
		name: '何昊程',
		role: '运营分析与科技风控候选人',
		location: '中国香港',
	},
	about: {
		bio: '本科在广工读工业工程，现在港理工读民航工程硕士。中间做了 4 段实习——在深圳一家做智能钢琴的创业公司搞硬件和 AI 芯片，跟白云机场合作做地面车辆仿真拿了优秀论文，还有在美的和柳工两家工厂做工时测量和线平衡。手上也有一些专利。我喜欢把东西弄明白，然后让它跑得更好。',
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: '所在地', value: '中国香港' },
			{ label: '方向', value: '科技风控、风险鉴证、数据治理、AI 治理' },
			{ label: '语言', value: '英语（雅思 6.5）、普通话（母语）、粤语（日常会话）' },
		],
		highlights: [
			{
				title: '工程 + AI + 法学背景',
				description: 'IE 出身（工时、线平衡、仿真），做过 AI 部署，辅修法学——技术、运营、合规都能聊。',
			},
			{
				title: '下过产线做流程审计',
				description: '在美的和柳工两家工厂做过工时测量和流程审查，找到瓶颈，用数据说话。',
			},
			{
				title: 'IT 和数据能力',
				description: '搭过 AnyLogic 仿真、在华为昇腾芯片上部署过 AI、用过 SQL/MySQL，Python 做数据分析。',
			},
		],
	},
	experience: {
		summary: [
			'运营分析和科技风控方向，4 段实习覆盖了流程优化、仿真建模、AI 部署和法学合规。',
		],
		items: [{
				title: 'AI 运营实习生',
				org: '深圳市五线宏音科技有限公司',
				period: '2025年5月 - 2026年4月',
				location: '深圳',
				bullets: [
					'参与智能钢琴项目，用华为昇腾 310B 芯片——硬件测试（示波器、万用表、逻辑分析仪）、画电机驱动电路（嘉立创）、写 STM32 固件。',
					'用摄像头 + 昇腾芯片做了钢琴指法识别系统；帮团队写了 SDK 技术文档。',
					'同时管服务器（Ubuntu）、管网络（华为交换机/路由器）、做采购和面试官——初创公司什么都得干。',
				],
			},{
				title: '科研助理 — 机场运行仿真',
				org: '广东工业大学（联合广州白云国际机场）',
				period: '2023年9月 - 2025年6月',
				location: '广州',
				bullets: [
					'用 AnyLogic + Java + MySQL 建了白云机场地面车辆仿真模型——路网、服务车道、调度规则都做了。',
					'写了好几种路径算法（Dijkstra、A*、BFS、遗传），让 50 多辆车在 3 个区域跑不撞。',
					'高峰时段（200+ 次/小时）拥堵降了 35%，零碰撞；论文拿了优秀论文 + 创新奖，机场团队现在还在用这个模型。',
				],
			},{
				title: '工业工程实习生',
				org: '美的集团 — 厨房与热水器事业部',
				period: '2024年4月 - 2024年5月',
				location: '佛山',
				bullets: [
					'拿秒表把洗碗机钣金线每个工位都测了一遍，找出 5 个超节拍的工序。',
					'用精益方法提了 22 个改善点；仿真结果：线平衡率 58%→70%，20 人减到 18 人。',
				],
			},{
				title: '制造运营实习生',
				org: '广西柳工机械股份有限公司',
				period: '2023年7月 - 2023年8月',
				location: '柳州',
				bullets: [
					'对装载机装配线 12 个工位做了秒表测时，用 ECRS 找到 3 个主要瓶颈。',
					'调整布局方案在仿真中把节拍时间降了约 8%，产线工程师验证过可行。',
				],
			}],
	},
	education: {
		summary: [
			'民航工程硕士（港理工，GPA 3.95/4.3）+ 工业工程学士（GPA 3.67，前 20%）+ 法学辅修（GPA 3.61）——核心课程涵盖运筹学、随机过程、统计质量控制和法规框架。',
		],
		items: [
			{
				title: '民航工程与运营管理 硕士',
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
			'GDUT 学术成果：3 项发明专利 + 1 项实用新型 + 2 项软著。',
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
