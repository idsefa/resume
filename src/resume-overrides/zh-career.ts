import type { ResumeOverride } from './types';

export const zhCareerOverride: ResumeOverride = {
  about: {
    highlights: [
      {
        title: '关注航空运营与数字化转型方向',
        description: '对航司运营、机场管理、数字化转型和运营咨询感兴趣——有仿真研究和4段行业实习作为基础。',
      },
      {
        title: '我能做什么',
        description: '搭建仿真模型、跑优化算法、用 AI 工具，同时也了解实际运营现场——从工厂车间到机场机坪。',
      },
      {
        title: '能拿出来的成果',
        description: '机场仿真项目拿了优秀论文和创新奖，制造业实习产线上有可量化的节拍改善，AI 实习提交了 2 项专利。',
      },
    ],
  },
  experience: {
    summary: [
      '4段实习横跨航空仿真、制造运营和 AI 研发，核心围绕"识别瓶颈→数据建模→量化改善"。',
      '技术栈：AnyLogic 仿真、Python、SQL、OR-Tools、Plant Simulation、Prompt Engineering。',
    ],
  },
  education: {
    summary: [
      '航空工程硕士（港理工）——专为航司运营、机场管理和航空咨询设计。',
      '工业工程学士 + 法学辅修——结构化问题解决 + 法规意识，跨行业通用。',
    ],
  },
};
