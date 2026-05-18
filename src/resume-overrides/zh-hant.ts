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
					'在裝載機裝配線使用秒錶法和 ECRS 分析節拍與浪費。',
					'協同現場工程師處理日常問題，保障產線穩定運行。',
				],
			},{
				title: '校園品牌大使',
				org: '柳州柳工人力資源服務有限公司',
				period: '2023年9月 - 2024年12月',
				location: '廣州',
				bullets: [
					'作為企業與高校之間的溝通橋樑，協助雇主品牌推廣。',
					'組織校園招聘活動，支援畢業生完成申請和面試流程。',
				],
			},{
				title: '科研助理',
				org: '廣東工業大學（聯合廣州白雲國際機場）',
				period: '2023年9月 - 2025年6月',
				location: '廣州',
				bullets: [
					'搭建機場特種車輛交通的 AnyLogic 模擬模型。',
					'用 Java 和 MySQL 實作避碰與路徑規劃邏輯。',
					'在高流量場景下改善模擬擁堵和運行安全。',
					'專案成果形成本科畢業論文，獲優秀論文和創新獎。',
				],
			},{
				title: '工業工程實習生',
				org: '佛山市順德區美的洗滌電器製造有限公司',
				period: '2024年4月 - 2024年5月',
				location: '佛山',
				bullets: [
					'在洗碗機內膽裝配線做標準工時測量。',
					'用線平衡和動作經濟方法找瓶頸並提出改善建議。',
				],
			},{
				title: '研發與營運實習生',
				org: '深圳市五線宏音科技有限公司',
				period: '2025年5月 - 2026年4月',
				location: '深圳',
				bullets: [
					'參與基於華為昇騰的 AI 應用和流程優化工作。',
					'圍繞實習專案撰寫並提交多項專利。',
					'用 Prompt Engineering 加快開發和問題定位。',
					'支援網路和行政相關的跨團隊協作。',
				],
			}],
	},
	education: {
		summary: [
			'我的學習背景涵蓋航空、工業工程和法學輔修。',
			'這種組合讓我在營運管理問題上有更全面的視角。',
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
			'我目前還沒有正式論文發表，但有實際專案成果。',
			'主要是專利產出和獲獎的模擬研究專案。',
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