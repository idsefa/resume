import type { ResumeOverride } from './types';

export const zhHantOverride: ResumeOverride = {
	profile: {
		name: '何昊程',
		role: '航空工程與營運管理碩士在讀',
		location: '中國香港',
	},
	about: {
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: '所在地', value: '中國香港' },
			{ label: '方向', value: '航空營運、AI 工作流、模擬優化' },
		],
		highlights: [
			{
				title: '喜歡解決真實業務問題',
				description: '我主要關注機場和航司營運問題，希望用模擬和 AI 工具把效率做上去。',
			},
			{
				title: '技術和溝通都能做',
				description: '我習慣和不同崗位一起做專案，把複雜問題拆成可以落地的步驟。',
			},
			{
				title: '工具使用偏實戰',
				description: '常用 Python、SQL、AnyLogic、Plant Simulation 和 OR-Tools。',
			},
		],
	},
	experience: {
		summary: [
			'我做過研發實習、機場模擬研究和製造現場改善。',
			'不同崗位裡，我都在做同一件事：用資料和工程方法解決效率問題。',
		],
		items: [{
				title: '製造營運實習生',
				org: '廣西柳工機械股份有限公司',
				period: '2023年7月 - 2023年8月',
				location: '柳州',
				bullets: [
					'對裝載機裝配線 12 個工位做了秒錶測時，用 ECRS 找到 3 個主要瓶頸。',
					'調整佈局方案在模擬中把節拍時間降了約 8%，產線工程師驗證過可行。',
				],
			},{
				title: '科研助理 — 機場運行仿真',
				org: '廣東工業大學（聯合廣州白雲國際機場）',
				period: '2023年9月 - 2025年6月',
				location: '廣州',
				bullets: [
					'用 AnyLogic + Java + MySQL 建了白雲機場地面車輛仿真模型——路網、服務車道、調度規則都做了。',
					'寫了好幾種路徑算法（Dijkstra、A*、BFS、遺傳），讓 50 多輛車在 3 個區域跑不撞。',
					'高峰時段（200+ 次/小時）擁堵降了 35%，零碰撞；論文拿了優秀論文 + 創新獎。',
				],
			},{
				title: '工業工程實習生',
				org: '美的集團 — 廚房與熱水器事業部',
				period: '2024年4月 - 2024年5月',
				location: '佛山',
				bullets: [
					'拿秒錶把洗碗機鈑金線每個工位都測了一遍，找出 5 個超節拍的工序。',
					'用精益方法提了 22 個改善點；模擬結果：線平衡率 58%→70%，20 人減到 18 人。',
				],
			},{
				title: 'AI 運營與研發實習生',
				org: '深圳市五線宏音科技有限公司',
				period: '2025年5月 - 2026年4月',
				location: '深圳',
				bullets: [
					'在華為昇騰 310B 芯片上跑了 3 個 AI 工具給團隊內部用，響應速度提了約 30%。',
					'畫了智能鋼琴的電機驅動電路（嘉立創），寫了 STM32 固件，用示波器和邏輯分析儀調過板子。',
					'用攝像頭 + 昇騰芯片做了鋼琴指法識別系統；幫團隊寫了 SDK 技術文檔。',
					'實習期間出了 2 項專利，一個做流程優化，一個做 AI 排程。',
					'同時管伺服器（Ubuntu）、管網路（華為交換機/路由器）、做採購和面試官。',
				],
			}],
	},
	education: {
		summary: [
			'航空工程碩士（港理工，3.95/4.3）+ 工業工程學士（3.67，前 20%）+ 法學輔修（3.61）——運籌學、隨機過程、品質管制和法規課程。',
		],
		items: [
			{
				title: '航空工程與營運管理 碩士',
				org: '香港理工大學',
				period: '2025年9月 - 2027年1月',
				location: '中國香港',
				bullets: [],
			},
			{
				title: '工業工程 學士',
				org: '廣東工業大學',
				period: '2021年9月 - 2025年6月',
				location: '廣州',
				bullets: [],
			},
			{
				title: '法學 學士（輔修）',
				org: '廣東工業大學',
				period: '2022年9月 - 2025年6月',
				location: '廣州',
				bullets: [],
			},
		],
	},
	publications: {
		summary: [
			'GDUT 學術成果：3 項發明專利 + 1 項實用新型 + 2 項軟著。',
		],
		sections: [
			{
				title: '專利',
				items: [
					{
						title: '實習期間多項專利申請',
						year: '2025-2026',
						authors: '何昊程及團隊',
						venue: '深圳研發實習專案',
						links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' }],
					},
				],
			},
			{
				title: '研究與獎項',
				items: [
					{
						title: '機場特種車輛模擬與優化專案',
						year: '2025',
						authors: '何昊程',
						venue: '廣州白雲國際機場聯合專案',
						links: [],
					},
					{
						title: '本科優秀畢業論文與創新獎',
						year: '2025',
						authors: '何昊程',
						venue: '廣東工業大學',
						links: [],
					},
				],
			},
		],
	},
};