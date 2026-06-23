export type RoleVariant = {
  label: string;
  labelZh?: string;
  profileRole: string;
  highlights: Array<{ title: string; description: string }>;
  experienceSummary: string[];
  educationSummary: string[];
};

export const ROLE_VARIANTS: Record<string, RoleVariant> = {
  default: {
    label: 'General',
    labelZh: '通用',
    profileRole: 'MEng Student in Aviation Engineering and Operation Management',
    highlights: [
      {
        title: 'Simulation-driven operations research',
        description: 'Main interest: using simulation and AI tools to improve airport and airline operations through data-driven analysis.',
      },
      {
        title: 'Cross-functional collaboration across 4 internships',
        description: 'Experience spans manufacturing, R&D, airport research, and campus recruiting — working with diverse teams to deliver results.',
      },
      {
        title: 'Python, SQL, AnyLogic, OR-Tools, Plant Simulation',
        description: 'Hands-on with simulation, optimization, and data tools used in real-world operations and engineering projects.',
      },
    ],
    experienceSummary: [
      'I have worked in R&D, airport simulation research, and factory operations improvement.',
      'Across these roles, I focused on solving daily workflow and efficiency problems with data and engineering methods.',
    ],
    educationSummary: [
      'My background combines aviation, industrial engineering, and law minor training.',
      'I like using this cross-domain view to solve operations and management problems.',
    ],
  },

  aviation: {
    label: 'Aviation',
    labelZh: '航空',
    profileRole: 'Aviation Operations Analyst',
    highlights: [
      {
        title: 'Airport simulation: modeled airside vehicle operations at Baiyun Airport',
        description: 'Designed an AnyLogic simulation model for Guangzhou Baiyun Airport\'s airside vehicle operations, implementing collision avoidance and path planning algorithms that improved simulated traffic flow and safety metrics.',
      },
      {
        title: 'MEng at PolyU — purpose-built for airline and airport operations',
        description: 'The PolyU MEng program is specifically designed for careers in airline operations, airport management, and aviation consulting — providing deep domain expertise alongside technical skills.',
      },
      {
        title: 'IE-trained systems thinking applied to aviation',
        description: 'Industrial engineering training provides a structured, systematic approach to analyzing and optimizing complex airport and airline operational workflows.',
      },
    ],
    experienceSummary: [
      'My most relevant role is a year-long research project with Guangzhou Baiyun International Airport, where I designed a simulation model for airside vehicle operations.',
      'This project combined path planning, collision avoidance, and data-driven optimization — and won Excellent Thesis and Innovation Award.',
    ],
    educationSummary: [
      'The MEng in Aviation Engineering and Operation Management at PolyU is directly aligned with airline operations, airport management, and aviation consulting careers.',
      'My IE bachelor and law minor add structured problem-solving and regulatory awareness to the aviation domain foundation.',
    ],
  },

  consulting: {
    label: 'Consulting',
    labelZh: '咨询',
    profileRole: 'Operations & Management Consulting Candidate',
    highlights: [
      {
        title: 'Cross-industry problem-solving across 4 internships',
        description: 'Experience spans aviation simulation, manufacturing efficiency, AI workflow, and campus recruiting — providing the breadth to diagnose diverse client problems with structured analytical frameworks.',
      },
      {
        title: 'Data-driven process improvement: ECRS, line balancing, time study',
        description: 'Applied ECRS, line balancing, and time study across 2 manufacturing internships (LiuGong, Midea) to identify bottlenecks and propose measurable efficiency improvements.',
      },
      {
        title: 'Stakeholder communication: campus recruiting to R&D teams',
        description: 'Served as campus brand ambassador and cross-functional R&D team member — translating technical findings into clear, actionable recommendations for diverse stakeholders.',
      },
    ],
    experienceSummary: [
      'My internships cover manufacturing operations, R&D, and airport research — each requiring structured analysis, hypothesis testing, and actionable recommendations.',
      'These varied roles build the consulting toolkit: fast context-switching, client-facing communication, and solution delivery under constraints.',
    ],
    educationSummary: [
      'The combination of IE engineering, aviation operations (MEng), and law minor is unusual — it gives me multiple analytical frameworks for diagnosing complex business problems.',
      'This cross-domain background is exactly what management consulting demands: structured thinking applied across industries.',
    ],
  },

  engineering: {
    label: 'Engineering',
    labelZh: '工程',
    profileRole: 'Industrial Engineering / Operations Specialist',
    highlights: [
      {
        title: 'Shop-floor time study and line balancing at 2 major manufacturers',
        description: 'Measured cycle time across multiple workstations at LiuGong and Midea using stopwatch studies and ECRS analysis; identified critical bottlenecks and proposed layout and sequence improvements.',
      },
      {
        title: 'Simulation-driven process design: AnyLogic + Plant Simulation',
        description: 'Built discrete-event and agent-based simulation models in AnyLogic and Plant Simulation to validate process changes before physical implementation, reducing implementation risk.',
      },
      {
        title: 'OR and Python for scheduling, routing, and capacity optimization',
        description: 'Applies OR-Tools, Python, and MySQL to model and solve scheduling, routing, and capacity optimization problems — core skills for operations research and engineering roles.',
      },
    ],
    experienceSummary: [
      'Two manufacturing internships at top Chinese companies (LiuGong, Midea) gave me hands-on IE experience: time study, motion economy, and line balancing on real production lines.',
      'My airport simulation research extended these skills into a more complex, dynamic system — showing adaptability beyond the factory floor.',
    ],
    educationSummary: [
      'Bachelor of Engineering in Industrial Engineering from Guangdong University of Technology — with strong coursework in operations research, simulation, and quality engineering.',
      'The MEng in Aviation adds systems-level thinking to the IE toolkit, applicable to complex logistics and operations problems.',
    ],
  },

  ai: {
    label: 'AI / Data',
    labelZh: 'AI/数据',
    profileRole: 'AI Engineer / Operations Researcher',
    highlights: [
      {
        title: 'AI deployment on Huawei Ascend: use cases + 2 patent filings',
        description: 'Developed AI use cases on Huawei Ascend platform and optimized workflows at Shenzhen Wuxian Hongyin; filed 2 patents from AI-driven internship projects.',
      },
      {
        title: 'Hybrid AI: simulation + optimization + LLM prompt engineering',
        description: 'Combines agent-based simulation (AnyLogic), OR-Tools optimization, and prompt engineering to build hybrid AI-operations solutions — bridging traditional OR with modern AI workflows.',
      },
      {
        title: 'Rapid prototyping: Python, SQL, prompt engineering',
        description: 'Proficient in Python, SQL, and prompt engineering; shipped AI-assisted tools in internship environments and accelerated research workflows with LLM-based automation.',
      },
    ],
    experienceSummary: [
      'At Shenzhen Wuxian Hongyin Technology, I worked on AI use cases based on Huawei Ascend, wrote patents, and used prompt engineering to speed up development.',
      'My earlier simulation research at Guangzhou Baiyun Airport combined path planning algorithms and data modeling — directly relevant to AI systems design.',
    ],
    educationSummary: [
      'Industrial Engineering provides the operations research foundation (optimization, modeling, algorithms) that underpins applied AI work.',
      'The MEng in Aviation Engineering extends this to real-world systems with complex operational constraints — a natural context for AI applications.',
    ],
  },

  quant: {
    label: 'Quant',
    labelZh: '量化',
    profileRole: 'Quantitative Analyst / AI Research Candidate',
    highlights: [
      {
        title: 'Algorithmic modeling: path planning + constraint optimization',
        description: 'Implemented path planning and collision avoidance algorithms for airport vehicle simulation — applying graph search and constraint optimization techniques in a production-relevant system.',
      },
      {
        title: 'OR-Tools, Python, and simulation: transferable to quant finance',
        description: 'Hands-on with operations research algorithms (scheduling, routing, optimization) and simulation modeling — methods that transfer directly to quantitative finance, risk modeling, and algorithmic trading.',
      },
      {
        title: 'Analytical rigor: IE + law minor = structured reasoning',
        description: 'IE background trains systematic decomposition of complex systems; law minor adds structured legal reasoning — applicable to model risk, regulatory compliance, and quantitative research.',
      },
    ],
    experienceSummary: [
      'My research and internship work centered on algorithmic problem-solving: path planning in simulation, patent-driven AI projects, and operations optimization.',
      'These experiences demonstrate the mathematical and programming foundation needed for quantitative research roles.',
    ],
    educationSummary: [
      'Industrial Engineering is deeply quantitative: operations research, stochastic modeling, and data-driven decision-making are core to the curriculum.',
      'The MEng adds systems complexity and real-world operational constraints — valuable context for quantitative modeling in finance and risk.',
    ],
  },
};

export const ROLE_IDS = Object.keys(ROLE_VARIANTS) as string[];
