import type { ResumeOverride } from './types';

export const zhHantOverride: ResumeOverride = {
	profile: {
		name: '何昊程',
		role: '民航工程碩士 | 跨學科工程與 AI',
		location: '中國香港',
	},
	about: {
		bio: '民航工程碩士在讀（GPA 3.95/4.3），本科主修工業工程、輔修法學，知識面橫跨工程優化、航空仿真、AI 硬件與知識產權。曾用精益方法將產線平衡率從 58% 提升至 70%，基於 AnyLogic 完成 4 類機場應急場景與 5 種路徑規劃算法對比（D* Lite 可靠指數 1.342），並參與昇騰 310B 智能硬件研發。已提交 3 項發明專利申請。',
		facts: [
			{ label: 'LinkedIn', value: 'linkedin.com/in/haocheng-he-92657028b', href: 'https://www.linkedin.com/in/haocheng-he-92657028b' },
			{ label: '所在地', value: '中國香港' },
			{ label: '方向', value: '工程優化、航空仿真、AI 硬件、跨學科融合' },
		],
		highlights: [
			{
				title: '跨學科融合：工程 + AI + 法學',
				description: '工業工程出身，做過機場仿真和製造改善，現在搞 AI 硬件，還輔修了法學——知識面橫跨多個領域。',
			},
			{
				title: '產線實戰經驗',
				description: '在美的和柳工做過秒錶測時和 ECRS 分析，提出改善方案並用仿真驗證（線平衡率 58%→70%）。',
			},
			{
				title: 'AI 硬件 + 仿真建模',
				description: '基於 AnyLogic 構建機場應急仿真模型，在昇騰 310B 上做智能硬件研發，熟悉 Python/Java/SQL 全棧。',
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
					'提出佈局優化方案，仿真驗證節拍時間降低約 8%。',
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
				title: 'AI 工程師助理',
				org: '深圳市五線宏音科技有限公司',
				period: '2025年5月 - 2026年4月',
				location: '深圳',
								bullets: [
									'參與昇騰 310B 智能鋼琴研發，經歷 3 個產品研發階段，測試 10+ 塊電路板，全橋電機驅動電路迭代 3 版，開發 STM32 固件並撰寫 5 篇昇騰應用技術文檔。',
									'參與基於攝像頭與昇騰芯片的鋼琴指法識別系統部分模塊聯調（Python/C++），梳理系統架構並定位跨層集成問題。',
									'兼管伺服器運維（Ubuntu）、網路設備配置（華為交換機/路由器）、3D 列印及技術面試。',
								],
			}],
	},
	education: {
		summary: [
			'民航工程碩士（港理工，3.95/4.3）+ 工業工程學士（3.67，前 20%）+ 法學輔修（3.61）——運籌學、隨機過程、品質管制和法規課程。',
		],
		items: [
			{
				title: '民航工程與營運管理 碩士',
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
				title: '發明專利',
				items: [
					{
						title: '一種基於蒙特卡洛馬爾可夫鏈採樣的PI塗布機控制器的運動控制方法',
						year: '2026',
						authors: '周賢中; 何昊程; 賀致遠',
						venue: 'CN122085794A — 廣東工業大學',
						links: [],
					},
					{
						title: '一種塗布控制方法及塗布系統（深度強化學習）',
						year: '2025',
						authors: '周賢中; 何昊程; 賀致遠',
						venue: 'CN121325552A — 廣東工業大學',
						links: [],
					},
					{
						title: '一種家用太陽能儲能系統的能量調控方法及系統',
						year: '2024',
						authors: '周賢中; 曾黃濤; 余達明; 何昊程',
						venue: 'CN117767437A — 廣東工業大學',
						links: [],
					},
				],
			},
			{
				title: '實用新型',
				items: [
					{
						title: '一種線束生產一體化設備',
						year: '2024',
						authors: '趙翔; 何昊程; 胡波鋒',
						venue: 'CN221352455U — 廣東工業大學',
						links: [],
					},
				],
			},
			{
				title: '軟件著作權',
				items: [
					{
						title: '企業財務數據分析軟件 V1.0',
						year: '2024',
						authors: '李一思; 何昊程',
						venue: '登記號：2024SR0146827',
						links: [],
					},
					{
						title: '城市防汛智能移動應急指揮調度系統 V1.0',
						year: '2024',
						authors: '林誠豐; 李澤茵; 楊華; 何昊程',
						venue: '登記號：2024SR0549247',
						links: [],
					},
				],
			},
			{
				title: '獲獎',
				items: [
					{
						title: '校級優秀畢業論文、畢業設計創新獎',
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