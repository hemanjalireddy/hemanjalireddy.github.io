// All site copy lives here. Edit this file to update the journal.

export const person = {
  name: 'Hemanjali Reddy',
  headline: 'I build AI agents, and the evidence that you can trust them.',
  offers: [
    'evaluation frameworks',
    'agent harnesses',
    'RAG systems',
    'robustness & drift testing',
    'calibration',
  ],
  status: 'Open to AI Engineer roles',
  location: 'New York, USA',
  email: 'hemanjali2402@gmail.com',
  github: 'https://github.com/hemanjalireddy',
  linkedin: 'https://www.linkedin.com/in/hemanjali-reddy-3198b2212/',
  linkedinActivity: 'https://www.linkedin.com/in/hemanjali-reddy-3198b2212/recent-activity/all/',
  medium: 'https://medium.com/@hema03anjali',
  resume: '/Hemanjali_Reddy_Resume.pdf',
  intro:
    'I study how AI systems behave: where they drift, where they break, and how sure they really are. Then I build the agents, harnesses and tests that make them dependable. Most recently at Pfizer, evaluating an oncology AI assistant; before that, building production agentic chatbots at ResMed.',
};

export type Measurement = { value: string; label: string; where: string };

export const measurements: Measurement[] = [
  { value: '7s', label: 'cut from end-to-end chatbot latency by migrating guardrails to AWS Bedrock', where: 'ResMed' },
  { value: '20M+', label: 'insurance records used to benchmark and tune classification models', where: 'ResMed' },
  { value: '71%', label: 'LLM agreement with human experts across 581 constitutions × 460 variables', where: 'Cornell' },
  { value: '6–8×', label: 'lower calibration error for LLMs than foundational ML baselines', where: 'Los Alamos capstone' },
  { value: '52%', label: 'of calibration error recovered by self-critique prompting in the hardest setting', where: 'Los Alamos capstone' },
  { value: '3.4×', label: 'faster decoding with 56% lower latency in tested CPU inference configs', where: 'InferBench' },
];

export type Expedition = {
  org: string;
  role: string;
  place: string;
  dates: string;
  story: string;
  points: string[];
  tools: string[];
};

export const expeditions: Expedition[] = [
  {
    org: 'Pfizer',
    role: 'AI Engineering Intern',
    place: 'New York, NY',
    dates: 'Jun – Aug 2026',
    story:
      'An oncology AI assistant needed more than a thumbs-up: the team needed to know whether its answers were good, whether its agent took sensible paths, and whether it behaved the same way twice.',
    points: [
      'Architected a multi-dimensional evaluation framework combining LLM-as-a-Judge, trajectory analysis and behavioral-drift detection.',
      'Built an LLM-as-a-Judge pipeline with context-aware batch evaluation and tool evidence, and benchmarked stochastic judge scores against deterministic metrics to test how reliable the judge itself was.',
      'Designed perturbation-based robustness tests that surfaced paraphrase-sensitive failure modes.',
      'Characterized agent execution patterns with vector representations, UMAP, clustering and geometric heuristics.',
    ],
    tools: ['LLM-as-a-Judge', 'Google ADK', 'UMAP', 'clustering', 'robustness testing'],
  },
  {
    org: 'ResMed',
    role: 'Associate Machine Learning Engineer',
    place: 'Bengaluru, India',
    dates: 'Jul 2024 – Jul 2025',
    story:
      'A medical chatbot answering real customers has to be grounded, fast and safe, so I worked on the parts that make that true: the agent harness, its context, its guardrails and the tests that guard every change.',
    points: [
      'Built the agent harness for a production agentic medical chatbot with LangChain and LangGraph, served via FastAPI microservices on AWS and Docker.',
      'Engineered the context layer and agent scaffolding: customer instructions, clinical context, retrieval and safety constraints.',
      'Created an automated regression-evaluation system benchmarking prompt, model, context and harness changes across quality, latency, safety and failure modes.',
      'Led the migration from Guardrails AI to AWS Bedrock Guardrails, cutting end-to-end latency by 7 seconds while strengthening HIPAA-aligned controls.',
      'Built an agentic RAG system for insurance claims that routes between a SQL agent and PostgreSQL vector retrieval, then synthesizes with an LLM.',
      'Benchmarked models over 20M+ insurance records and tuned CatBoost with cross-validation and drift analysis.',
    ],
    tools: ['LangGraph', 'LangChain', 'LangSmith', 'FastAPI', 'AWS', 'AWS Bedrock', 'Docker', 'Datadog', 'PostgreSQL', 'CatBoost'],
  },
  {
    org: 'Cornell University',
    role: 'Graduate Research Assistant · Teaching Assistant',
    place: 'Ithaca, NY',
    dates: 'Aug 2025 – May 2026',
    story:
      'Two research questions about whether models can be trusted with nuanced, human judgments, plus a semester teaching statistics.',
    points: [
      'Comparative Constitutional Analysis with LLMs: benchmarked LLMs against human experts across 460 variables and 581 constitutions, reaching 71% agreement; built pipelines for legal-document ingestion and inter-rater reliability.',
      'Multimodal AI for Harmful Speech Detection: benchmarked vision-language models on real-world, code-mixed multimedia across culturally nuanced, implicit harm categories.',
      'Teaching Assistant, STSCI 2100: led weekly labs in R, statistics and data analysis.',
    ],
    tools: ['VLMs', 'inter-rater reliability', 'R', 'statistics'],
  },
  {
    org: 'Mobileum',
    role: 'Machine Learning Intern',
    place: 'Bengaluru, India',
    dates: 'Jan – Jun 2023',
    story: 'Where it started: spotting spam calls in telecom data.',
    points: [
      'Trained and benchmarked Decision Tree, Random Forest and deep learning models for spam-call detection on Call Detail Records.',
    ],
    tools: ['scikit-learn', 'deep learning'],
  },
];

export type Specimen = {
  slug: string;
  title: string;
  mapLabel?: string;
  latin: string;
  kind: string;
  year: string;
  summary: string;
  habitat: string;
  stack: string[];
  repo?: string;
  hasPage: boolean;
  // Position on the specimen map: x = building (0) → evaluating (1), y = classic ML & vision (0) → LLMs & agents (1)
  map: { x: number; y: number };
  // Detail page content
  problem?: string;
  approach?: string[];
  findings?: string[];
  status?: string;
  extraLink?: { label: string; href: string };
};

export const specimens: Specimen[] = [
  {
    slug: 'ultimate-judge',
    title: 'Ultimate Judge',
    latin: 'Iudex inconstans',
    kind: 'LLM evaluation research',
    year: '2026',
    summary:
      'A reproducible benchmark that judges the judges: does an LLM-as-a-Judge change its verdict when answer order, verbosity, style or the generator’s identity changes?',
    habitat: 'Grew out of building LLM-as-a-Judge evaluations at Pfizer.',
    stack: ['Python', 'Groq API', 'Streamlit', 'pytest', 'Docker', 'GitHub Actions'],
    repo: 'https://github.com/hemanjalireddy/ultimate-judge',
    hasPage: true,
    map: { x: 0.93, y: 0.96 },
    problem:
      'Teams increasingly let one LLM grade another. But if the grader prefers whichever answer it sees first, or the longer one, or one written by its own model family, every score built on it inherits that bias. I wanted a way to measure that, not assume it away.',
    approach: [
      'Frozen benchmark cases built from a movie-recommendation domain, so every run judges exactly the same inputs.',
      'Answer generation is a separate, checkpointed step; style and verbosity variants are human-reviewed before they count.',
      'Seeded judge trials across four conditions, two judges and three repeats, for 60 judgments per case.',
      'Metrics with numerators, denominators and cluster-bootstrap intervals: consistency, flip rate, repeatability, preference rates, ties and failures.',
      'Streamlit dashboard, an offline demo, and CI that runs tests, the demo and a Docker health check.',
    ],
    findings: [
      'The framework, 30 scenarios and the metrics pipeline are built and tested.',
      'Live measurements are pending human review, so I deliberately make no bias claims until the data supports them.',
    ],
    status: 'Observation in progress',
    extraLink: { label: 'Read my “I decided to judge the LLM-as-a-Judge” post', href: 'https://www.linkedin.com/in/hemanjali-reddy-3198b2212/recent-activity/all/' },
  },
  {
    slug: 'llm-calibration',
    title: 'Probabilistic Calibration of LLMs',
    mapLabel: 'LLM calibration',
    latin: 'Fiducia mensurata',
    kind: 'Capstone · Los Alamos National Laboratory',
    year: '2025 – 2026',
    summary:
      'When an LLM says it is 80% sure, is it right 80% of the time? A framework comparing six prompting strategies for calibrated probabilities.',
    habitat: 'Cornell MPS capstone with Los Alamos National Laboratory; presented as my final poster.',
    stack: ['Python', 'LLMs', 'Brier score', 'ECE', 'cross-entropy'],
    hasPage: true,
    map: { x: 0.72, y: 0.73 },
    problem:
      'A model that is confidently wrong is more dangerous than one that knows its limits. For high-stakes science and decision support, we need probabilities we can take at face value.',
    approach: [
      'Compared six prompting strategies for eliciting probabilities from LLMs.',
      'Scored them with Brier score, Expected Calibration Error (ECE) and cross-entropy.',
      'Benchmarked against foundational ML baselines on the same tasks.',
    ],
    findings: [
      'LLM calibration error was 6–8× lower than the foundational ML baselines.',
      'Self-critique prompting recovered up to 52% of the error in the hardest setting.',
    ],
  },
  {
    slug: 'inferbench',
    title: 'InferBench',
    latin: 'Velocitas cacheata',
    kind: 'LLM inference performance lab',
    year: '2026',
    summary:
      'A modular lab for running controlled LLM inference experiments on CPU and finding out where the time actually goes.',
    habitat: 'Built to understand what really moves the needle for local LLM inference.',
    stack: ['Python', 'PyTorch', 'Hugging Face Transformers', 'Streamlit', 'Plotly', 'Poetry'],
    repo: 'https://github.com/hemanjalireddy/InferBench',
    hasPage: true,
    map: { x: 0.4, y: 0.66 },
    problem:
      '“Make it faster” is not actionable until you know whether the cost is in prefill or decode, threads or attention kernels, cache or compilation.',
    approach: [
      'Splits generation into prefill (time to first token, TTFT) and decode (time per output token, TPOT).',
      'Controlled experiments: prompt length (KV cache on/off), output length, thread scaling, attention implementations (eager vs. SDPA), and torch.compile vs. eager.',
      'Backend-agnostic runner with a PyTorch/Transformers adapter, an experimental llama.cpp adapter, and room for OpenVINO.',
      'CSV/JSON results, regression comparison between runs, and a Streamlit + Plotly dashboard.',
    ],
    findings: ['Measured 3.4× faster decoding and 56% lower latency in tested configurations.'],
  },
  {
    slug: 'autocode-md',
    title: 'AutoCode-MD',
    latin: 'Scriptura medica',
    kind: 'Multimodal extraction + RAG medical coding',
    year: '2026',
    summary:
      'Turns handwritten ambulance run sheets into structured clinical data and guideline-grounded ICD-10-CM coding suggestions, with reasoning a human coder can review.',
    habitat: 'Healthcare billing, where messy handwriting meets strict coding rules.',
    stack: ['Python', 'FastAPI', 'Llama 4 Scout (vision)', 'Llama 3.3 70B', 'Groq', 'Instructor', 'ChromaDB', 'PostgreSQL', 'Streamlit', 'Docker'],
    repo: 'https://github.com/hemanjalireddy/AutoCode-MD',
    hasPage: true,
    map: { x: 0.3, y: 0.85 },
    problem:
      'Medical coders spend their days turning scanned, often handwritten, EMS notes into billing codes, and the rules for picking the right code are long and unforgiving. A useful assistant has to read the handwriting, follow the official guidelines, and show its reasoning so a qualified coder can check it.',
    approach: [
      'Two-stage pipeline: a vision-language model (Llama 4 Scout) extracts patient/run ID, date, chief complaint, field impression and interventions from the scanned run sheet.',
      'Instructor + Pydantic schemas force typed, validated output at both stages, so downstream code never parses free text.',
      'Guideline-grounded RAG: the official ICD-10-CM guidelines PDF is chunked (500 chars, 50 overlap), embedded with MiniLM and stored in ChromaDB; the top 3 rules for each diagnosis are retrieved into the prompt.',
      'A coding model (Llama 3.3 70B) proposes the most specific ICD-10-CM code, an optional CPT code and reasoning that cites the guideline it used.',
      'FastAPI backend, Streamlit review UI, PostgreSQL persistence with Alembic migrations, all orchestrated with Docker Compose.',
    ],
    findings: [
      'Working end-to-end prototype: upload an image, get structured fields plus a reviewable code suggestion.',
      'Built for review, not autopilot: outputs are decision support for a qualified coder, and the model-reported confidence is flagged as uncalibrated until it is evaluated against labelled data.',
    ],
  },
  {
    slug: 'sharkbait',
    title: 'SharkBait',
    latin: 'Squalus persuasor',
    kind: 'Hackathon team project · multimodal pitch coach',
    year: '2025',
    summary:
      'An AI startup coach for founders. I built Pitch Practice: upload a pitch video and get feedback on content and delivery from five AI investor personas.',
    habitat: 'A Claude hackathon, built with a team of three.',
    stack: ['Python', 'FastAPI', 'Claude', 'Faster-Whisper', 'OpenCV', 'FFmpeg', 'Next.js', 'TypeScript'],
    repo: 'https://github.com/hemanjalireddy/SharkBait',
    hasPage: true,
    map: { x: 0.18, y: 0.6 },
    problem:
      'Founders rarely get honest, specific feedback on how they pitch before they are in front of real investors. We wanted a practice room that judges both what you say and how you say it.',
    approach: [
      'My part, Pitch Practice: FFmpeg extracts the audio from a recorded or uploaded pitch, Faster-Whisper transcribes it locally, and OpenCV samples 10 frames from the video.',
      'Claude receives the frames and the transcript in a single multimodal call and responds as five personas: Venture Investor, Pitch Advisor, Healthcare Expert, EdTech Specialist and Tech Startup Expert.',
      'Fixed missing audio in browser recordings with a codec fallback chain.',
      'Teammates built the Idea Analyzer (weighted scoring plus patent search) and Market Insights (segments, personas and competitors); FastAPI backend with a Next.js frontend.',
    ],
    findings: ['Shipped as a working three-feature app during the hackathon.'],
  },
  {
    slug: 'rasengan',
    title: 'Rasengan',
    latin: 'Sphaera chakrae',
    kind: 'Just for fun · real-time computer vision',
    year: '2026',
    summary:
      'Channeling my inner child: hold up your hand to your webcam and a spinning Naruto Rasengan appears in your palm, sound effect and all.',
    habitat: 'My favorite anime, plus a free evening.',
    stack: ['Python', 'MediaPipe', 'OpenCV', 'pygame'],
    repo: 'https://github.com/hemanjalireddy/Rasengan',
    hasPage: true,
    map: { x: 0.1, y: 0.28 },
    problem: 'Could I get the powers of one of my favorite anime characters with nothing but a webcam?',
    approach: [
      'MediaPipe Hand Landmarker tracks 21 joints per hand in real time.',
      'The palm center is the midpoint of the wrist and middle-finger base; their distance sets the Rasengan’s size, so it scales as your hand moves.',
      'The frame dims to 40% for a cinematic look while a transparent Rasengan sprite spins 15° per frame on your palm.',
      'Sound loops while a hand is visible and stops when it leaves.',
    ],
    findings: ['Runs live on a laptop webcam with two-hand tracking and an automatic fallback if the sprite or sound is missing.'],
  },
];

export type Sprout = { title: string; summary: string; repo: string; note: string };

export const greenhouse: Sprout[] = [
  {
    title: 'GPT Under the Hood',
    summary:
      'Building a GPT from scratch, inspired by nanoGPT (tokenization, embeddings, causal self-attention, transformer blocks, training and sampling), trained on Michael Scott’s dialogue from The Office.',
    repo: 'https://github.com/hemanjalireddy/gpt_under_the_hood',
    note: 'data prep done · attention next',
  },
  {
    title: 'AI Engineering Roadmap',
    summary:
      'A public log I started during my Master’s to keep myself accountable: topics, code snippets and resources as I learn, pushed as I go.',
    repo: 'https://github.com/hemanjalireddy/AI-Engineering-Roadmap',
    note: 'growing a little every week',
  },
];

export type FieldNote = { title: string; where: string; date: string; href: string; blurb: string };

export const fieldNotes: FieldNote[] = [
  {
    title: 'I decided to judge the LLM-as-a-Judge',
    where: 'LinkedIn',
    date: 'Oct 2026',
    href: 'https://www.linkedin.com/in/hemanjali-reddy-3198b2212/recent-activity/all/',
    blurb: 'Why I started Ultimate Judge after building judge pipelines at Pfizer.',
  },
  {
    title: 'What actually moves the needle for LLM inference?',
    where: 'LinkedIn',
    date: 'Aug 2026',
    href: 'https://www.linkedin.com/in/hemanjali-reddy-3198b2212/recent-activity/all/',
    blurb: 'Notes from running local CPU experiments with InferBench.',
  },
  {
    title: 'Automate-CoT: Revolutionizing Chain-of-Thought Prompting with Automation',
    where: 'Medium',
    date: 'Feb 2025',
    href: 'https://medium.com/@hema03anjali/automate-cot-revolutionizing-chain-of-thought-prompting-with-automation-b1a71a6d4ab8',
    blurb: 'Generating, pruning and selecting reasoning chains without hand-written rationales.',
  },
  {
    title: 'Monte Carlo Tree Search (MCTS): A Smarter AI Thinking Process',
    where: 'Medium',
    date: 'Feb 2025',
    href: 'https://medium.com/@hema03anjali/monte-carlo-tree-search-mcts-a-smarter-ai-thinking-process-5b76e5885af7',
    blurb: 'How tree search over reasoning paths helps language models think.',
  },
  {
    title: 'Siri vs. OpenAI’s Operator: Underlying Mechanisms and Functionality',
    where: 'Medium',
    date: 'Jan 2025',
    href: 'https://medium.com/@hema03anjali/siri-vs-openais-operator-a-detailed-comparison-of-their-underlying-mechanisms-and-functionality-7304a1a39029',
    blurb: 'A voice assistant and a browser agent, compared under the hood.',
  },
];

export const education = [
  {
    school: 'Cornell University',
    degree: 'Master of Professional Studies, Applied Statistics',
    detail: 'CGPA 3.9 / 4.0',
    dates: '2025 – 2026',
  },
  {
    school: 'Vellore Institute of Technology',
    degree: 'B.Tech + M.Tech (Integrated), Computer Science Engineering · Minor in Data Science',
    detail: 'CGPA 9.18 / 10',
    dates: '2020 – 2025',
  },
];

export const honors = [
  'AWS Certified Solutions Architect – Associate',
  '3rd Place, ResMed Hackathon',
  'Amazon ML Summer School',
  'Machine Learning, Stanford (online)',
];

export const toolkit = [
  { group: 'Languages & data', items: ['Python', 'R', 'C++', 'SQL', 'SAS', 'PostgreSQL', 'DynamoDB', 'MongoDB'] },
  { group: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'LangChain', 'LangGraph', 'LangSmith', 'Google ADK'] },
  { group: 'Build & ship', items: ['FastAPI', 'React', 'Streamlit', 'AWS', 'GCP', 'Docker', 'Terraform', 'GitHub Actions', 'Datadog'] },
];

// Early classic-ML work (2022): one repo per algorithm, shown in the specimen cabinet.
const gh = (repo: string) => `https://github.com/hemanjalireddy/${repo}`;

// One repo per algorithm, each implemented and studied on its own.
export const algorithms: { name: string; repo: string }[] = [
  { name: 'Data preprocessing', repo: gh('Data_Preprocessing') },
  { name: 'Simple linear regression', repo: gh('Simple_Linear_Regression') },
  { name: 'Multiple regression', repo: gh('Multiple_Regression') },
  { name: 'Polynomial regression', repo: gh('Polynomial_regression') },
  { name: 'Support vector regression', repo: gh('support_vector_regresion') },
  { name: 'Decision tree regression', repo: gh('Decision_tree_regression') },
  { name: 'Random forest regression', repo: gh('Random_forest_regression') },
  { name: 'Logistic regression', repo: gh('Logistic_Regression') },
  { name: 'K-nearest neighbours', repo: gh('K_Nearest_Neighbours') },
  { name: 'Support vector machine', repo: gh('Support_Vector_Machine') },
  { name: 'Kernel SVM', repo: gh('Kernel_SVM') },
  { name: 'Naive Bayes', repo: gh('Naive_Bayes') },
  { name: 'Decision tree classifier', repo: gh('Decision_tree_Classifier') },
  { name: 'Random forest classifier', repo: gh('Random_Forest_Classifier') },
  { name: 'K-means clustering', repo: gh('K_Means_Clustering') },
  { name: 'Hierarchical clustering', repo: gh('Hierarchical_clustering') },
  { name: 'Model selection', repo: gh('Model_Selection') },
];
