export type RoleVariant = {
  label: string;
  profileRole: string;
  highlights: Array<{ title: string; description: string }>;
  experienceSummary: string[];
  educationSummary: string[];
};

export const ROLE_VARIANTS: Record<string, RoleVariant> = {
  default: {
    label: 'General',
    profileRole: 'MEng Student in Aviation Engineering and Operation Management',
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
    profileRole: 'Aviation Operations Analyst',
    highlights: [
      {
        title: 'Airport simulation and airside optimization',
        description: "Built an AnyLogic simulation model for Guangzhou Baiyun Airport's special vehicle traffic, improving safety and throughput in complex airside scenarios.",
      },
      {
        title: 'MEng tailored for the aviation industry',
        description: 'The PolyU program is purpose-built for airline operations, airport management, and aviation consulting — giving me the right technical and domain foundation.',
      },
      {
        title: 'Systems thinking meets operations',
        description: 'IE background provides a structured approach to analyzing and redesigning airport and airline workflows at scale.',
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
    profileRole: 'Operations & Management Consulting Candidate',
    highlights: [
      {
        title: 'Cross-industry problem-solving',
        description: 'Experience spans aviation simulation, manufacturing efficiency, and AI workflow — giving me the breadth to approach diverse client problems with a structured lens.',
      },
      {
        title: 'Data-driven process improvement',
        description: 'Applied ECRS, line balancing, and time study methods at LiuGong and Midea to identify bottlenecks and drive measurable improvements on factory floors.',
      },
      {
        title: 'Communication and stakeholder alignment',
        description: 'Served as campus brand ambassador and worked in cross-functional R&D teams — I translate technical findings into clear recommendations for non-technical audiences.',
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
    profileRole: 'Industrial Engineering / Operations Specialist',
    highlights: [
      {
        title: 'Time study and line balancing on the shop floor',
        description: 'Measured cycle time at LiuGong and Midea using stopwatch studies and ECRS; identified bottlenecks and proposed layout and sequence improvements.',
      },
      {
        title: 'Simulation-driven process design',
        description: 'Built discrete-event and agent-based simulation models in AnyLogic and Plant Simulation to test process changes before implementation.',
      },
      {
        title: 'OR and Python for optimization',
        description: 'Uses OR-Tools, Python, and MySQL to model and solve scheduling, routing, and capacity problems in engineering and operations contexts.',
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
    profileRole: 'AI Engineer / Operations Researcher',
    highlights: [
      {
        title: 'Practical AI deployment on Huawei Ascend',
        description: 'Worked on AI use cases and workflow optimization at Shenzhen Wuxian Hongyin; filed multiple patents from AI-driven internship projects.',
      },
      {
        title: 'Simulation + optimization + LLM workflows',
        description: 'Combines agent-based simulation (AnyLogic), OR-Tools optimization, and prompt engineering to build hybrid AI-operations solutions.',
      },
      {
        title: 'Fast from idea to working prototype',
        description: 'Strong in Python, SQL, and prompt engineering; has shipped AI-assisted tools in internship environments and accelerated research with AI workflows.',
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
    profileRole: 'Quantitative Analyst / AI Research Candidate',
    highlights: [
      {
        title: 'Optimization and algorithmic modeling',
        description: 'Implemented path planning and collision avoidance algorithms for airport vehicle simulation — applying graph search and constraint optimization in a real-world system.',
      },
      {
        title: 'OR-Tools, Python, and simulation for quantitative work',
        description: 'Hands-on with operations research algorithms (scheduling, routing, optimization) and simulation modeling; these methods transfer directly to quantitative finance and risk.',
      },
      {
        title: 'Analytical rigor across disciplines',
        description: 'IE background trains systematic decomposition of complex systems; law minor adds regulatory and structured reasoning — useful for model risk and compliance contexts.',
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
