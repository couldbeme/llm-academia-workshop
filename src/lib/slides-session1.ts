export interface Slide {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  notes?: string;
}

export const session1Slides = [
  // ============ INTRO ============
  {
    id: "title",
    type: "title",
    title: "LLM Mastery for Academia",
    subtitle: "From Prompts to Systems",
    session: "Session 1: Foundations & Multi-Agent Architecture",
    footer: "Workshop for Doctoral & Postdoctoral Researchers"
  },
  {
    id: "philosophy",
    type: "quote",
    title: "What This Is NOT",
    quote: "This isn't 'how to write better prompts.'",
    subtext: "This is systems thinking for AI collaboration.",
    points: [
      "Multi-agent orchestration for complex research tasks",
      "Validation-driven workflows that catch errors before they propagate",
      "The meta-skill: teaching LLMs to build the tools you need"
    ]
  },
  {
    id: "paradigm",
    type: "quote",
    title: "The Paradigm Shift",
    quote: "You're not learning to prompt. You're learning to architect cognition."
  },

  // ============ THE PROBLEM ============
  {
    id: "section-problem",
    type: "section",
    title: "The Real Problem",
    subtitle: "What Even Advanced Users Get Wrong"
  },
  {
    id: "mistakes",
    type: "list",
    title: "The Five Deadly Mistakes",
    items: [
      { label: "Single-agent thinking", desc: "One prompt, one response, done" },
      { label: "No validation architecture", desc: "Trust outputs without adversarial review" },
      { label: "Role confusion", desc: "Same agent does research, critique, and revision" },
      { label: "No iteration protocol", desc: "Ad-hoc 'try again' instead of structured refinement" },
      { label: "Missing acceptance criteria", desc: "No definition of 'done' before starting" }
    ]
  },
  {
    id: "shift-visual",
    type: "comparison",
    title: "The Shift",
    before: {
      label: "What You Do Now",
      flow: ["Human", "Prompt", "LLM", "Output", "Human reviews"]
    },
    after: {
      label: "What You'll Learn",
      flow: ["Human", "Metaprompt", "Agent Team", "Validation Cycles", "Gated Output", "Human reviews"]
    }
  },

  // ============ WHY SINGLE PROMPTS FAIL ============
  {
    id: "section-failure",
    type: "section",
    title: "Why Single Prompts Fail",
    subtitle: "Understanding the Capability Ceiling"
  },
  {
    id: "ceiling",
    type: "list",
    title: "The Capability Ceiling",
    items: [
      { label: "Context limits", desc: "Single prompts can't hold everything" },
      { label: "No self-correction", desc: "First output is all you get" },
      { label: "Role contamination", desc: "Creative + critical = mediocre at both" },
      { label: "No adversarial pressure", desc: "Echo chamber by design" }
    ]
  },
  {
    id: "vending-machine",
    type: "quote",
    title: "The Mindset Problem",
    quote: "An LLM is not a vending machine. It's a highly capable collaborator who just arrived and knows nothing about your project.",
    subtext: "Stop treating it like a search bar with extra steps."
  },

  // ============ THE RESEARCH TEAM MODEL ============
  {
    id: "section-team",
    type: "section",
    title: "The Research Team Model",
    subtitle: "From Solo Prompts to Coordinated Teams"
  },
  {
    id: "team-diagram",
    type: "diagram",
    title: "Your AI Research Team",
    diagram: "research-team"
  },
  {
    id: "team-why",
    type: "list",
    title: "Why This Works",
    items: [
      { label: "Separation of concerns", desc: "Each role has one job, does it well" },
      { label: "Built-in adversarial review", desc: "Devil's Advocate catches what others miss" },
      { label: "No echo chamber", desc: "Different 'perspectives' challenge assumptions" },
      { label: "Matches real academia", desc: "This is how good research teams actually work" }
    ]
  },
  {
    id: "role-pi",
    type: "role",
    title: "Principal Investigator",
    emoji: "🎯",
    responsibilities: [
      "Maintains research vision",
      "Resolves conflicts between agents",
      "Makes final calls on trade-offs",
      "Doesn't do the work — orchestrates"
    ],
    key: "The PI doesn't write — the PI decides."
  },
  {
    id: "role-domain",
    type: "role",
    title: "Domain Expert",
    emoji: "🔬",
    responsibilities: [
      "Field-specific knowledge",
      "Terminology accuracy",
      "Literature awareness",
      "Knows what's novel vs. obvious"
    ],
    key: "Your field, their memory."
  },
  {
    id: "role-methods",
    type: "role",
    title: "Methodology Expert",
    emoji: "📊",
    responsibilities: [
      "Study design rigor",
      "Statistical appropriateness",
      "Validity threats (internal, external, construct)",
      "Reproducibility checks"
    ],
    key: "Dr. Methods: 20 years of reviewer experience."
  },
  {
    id: "role-writing",
    type: "role",
    title: "Writing Expert",
    emoji: "✍️",
    responsibilities: [
      "Style and tone consistency",
      "Clarity and flow",
      "Audience calibration",
      "Journal-specific conventions"
    ],
    key: "Makes the brilliant readable."
  },
  {
    id: "role-devil",
    type: "role",
    title: "Devil's Advocate",
    emoji: "😈",
    responsibilities: [
      "Attacks everything",
      "Finds weaknesses before reviewers do",
      "Suggests defenses",
      "Prevents groupthink"
    ],
    key: "If they can't find 3 weaknesses, they've failed.",
    highlight: true
  },
  {
    id: "role-editor",
    type: "role",
    title: "Integration Editor",
    emoji: "🔗",
    responsibilities: [
      "Synthesizes multi-agent outputs",
      "Resolves contradictions",
      "Ensures coherence",
      "Produces final unified output"
    ],
    key: "The orchestra conductor."
  },
  {
    id: "team-sizing",
    type: "table",
    title: "When to Use Which Team Size",
    headers: ["Complexity", "Team Size", "Example"],
    rows: [
      ["Simple", "1 agent", "Email draft, simple summary"],
      ["Moderate", "2-3 agents", "Abstract, methods section"],
      ["Complex", "4-5 agents", "Full paper draft, analysis pipeline"],
      ["Critical", "Full team + meta-validation", "Dissertation chapter, grant proposal"]
    ]
  },

  // ============ THE METAPROMPT ARCHITECTURE ============
  {
    id: "section-metaprompt",
    type: "section",
    title: "The Metaprompt Architecture",
    subtitle: "Complete System Specifications, Not Just Instructions"
  },
  {
    id: "metaprompt-intro",
    type: "quote",
    title: "What is a Metaprompt?",
    quote: "A metaprompt is a prompt that generates a better prompt than you would have written yourself.",
    subtext: "But that's level 1. Level 2 is a complete agent specification."
  },
  {
    id: "seven-components",
    type: "numbered-list",
    title: "The Seven Components",
    items: [
      { num: 1, label: "IDENTITY & ROLE", desc: "Who is this agent? What expertise?" },
      { num: 2, label: "CONTEXT & BACKGROUND", desc: "What does the agent need to know?" },
      { num: 3, label: "TASK SPECIFICATION", desc: "What exactly must they produce?" },
      { num: 4, label: "OUTPUT FORMAT", desc: "Exact structure expected" },
      { num: 5, label: "ACCEPTANCE CRITERIA", desc: "How will output be evaluated?" },
      { num: 6, label: "REJECTION PROTOCOL", desc: "What happens if it fails?" },
      { num: 7, label: "HANDOFF SPECIFICATION", desc: "Who receives this output next?" }
    ],
    highlight: [5, 6, 7],
    note: "Most people stop at 3. The magic is in 5-7."
  },
  {
    id: "component-identity",
    type: "component-detail",
    title: "1. Identity & Role",
    code: `## 1. IDENTITY & ROLE
You are Dr. Methods — a methodological expert with deep 
knowledge of research design, statistical analysis, and 
validity threats. You have 20 years of experience 
reviewing papers across disciplines.

Your role in this team: Review research methodology for rigor.
You report to: Principal Investigator
You receive input from: Domain Expert (draft methods section)
You pass output to: Devil's Advocate`,
    key: "Not just 'you are an expert.' Define the relationships."
  },
  {
    id: "component-context",
    type: "component-detail",
    title: "2. Context & Background",
    code: `## 2. CONTEXT & BACKGROUND
**Project:** [Title]
**Research question:** [RQ]
**Study design:** [Design type]
**Data:** [Description]

**Prior context:**
- Domain Expert has drafted initial methods section
- PI has approved overall research direction
- Target journal: [Journal] (requires [specific standards])`,
    key: "Everything the agent needs to know. No mind-reading required."
  },
  {
    id: "component-task",
    type: "component-detail",
    title: "3. Task Specification",
    code: `## 3. TASK SPECIFICATION
Review the attached methods section for:
1. Appropriate statistical tests for data types
2. Adequate sample size justification
3. Validity threats (internal, external, construct)
4. Reproducibility (could someone replicate this?)
5. Assumption violations

DO NOT:
- Rewrite the section (that's the Writing Expert's job)
- Question the research question itself (already approved)
- Suggest entirely different study designs (out of scope)`,
    key: "Boundaries are as important as instructions."
  },
  {
    id: "component-output",
    type: "component-detail",
    title: "4. Output Format",
    code: `## 4. OUTPUT FORMAT
### METHODOLOGY REVIEW

**Overall Assessment:** [PASS / NEEDS REVISION / MAJOR CONCERNS]

**Strengths:**
1. [Strength with specific reference]

**Required Revisions:** (must fix)
1. [Issue]: [Location] — [Why it matters] — [Suggested fix]

**Validity Threat Analysis:**
- Internal: [Assessment]
- External: [Assessment]  
- Construct: [Assessment]

**Reproducibility Score:** [1-5] — [Justification]`,
    key: "Structure drives quality. No ambiguity in what 'good' looks like."
  },
  {
    id: "component-acceptance",
    type: "component-detail",
    title: "5. Acceptance Criteria",
    code: `## 5. ACCEPTANCE CRITERIA
Output passes if:
- [ ] All five review areas addressed
- [ ] At least one strength identified (balanced review)
- [ ] Required revisions include specific locations
- [ ] Suggested fixes are actionable
- [ ] Validity threats explicitly analyzed
- [ ] Reproducibility assessed`,
    key: "Checkable. Binary. No interpretation needed.",
    highlight: true
  },
  {
    id: "component-rejection",
    type: "component-detail",
    title: "6. Rejection Protocol",
    code: `## 6. REJECTION PROTOCOL  
If feedback indicates output failed criteria:
1. Identify which criteria failed
2. Request specific clarification if issue unclear
3. Regenerate only the failed sections
4. Maximum 2 revision attempts before escalating to PI`,
    key: "Prevents infinite loops. Defines graceful failure.",
    highlight: true
  },
  {
    id: "component-handoff",
    type: "component-detail",
    title: "7. Handoff Specification",
    code: `## 7. HANDOFF SPECIFICATION
Pass to Devil's Advocate:
- This review document
- The original methods section
- Flag any areas of uncertainty for adversarial focus

Decisions made here: Statistical test appropriateness
Decisions deferred: Final wording (Writing Expert)`,
    key: "Context doesn't drop between agents. Decisions are explicit.",
    highlight: true
  },
  {
    id: "failure-modes",
    type: "list",
    title: "Common Metaprompt Failure Modes",
    items: [
      { label: "Vague identity", desc: "Agent doesn't know what expertise to apply" },
      { label: "Missing boundaries", desc: "Agent scope-creeps into others' territory" },
      { label: "No acceptance criteria", desc: "Can't tell if output succeeded" },
      { label: "No rejection protocol", desc: "Gets stuck on failure" },
      { label: "Unclear handoff", desc: "Drops context between agents" }
    ],
    note: "Fix these five, and you're ahead of 95% of users."
  },

  // ============ PHASE-GATED WORKFLOWS ============
  {
    id: "section-phases",
    type: "section",
    title: "Phase-Gated Workflows",
    subtitle: "Gates Prevent Bad Output from Propagating"
  },
  {
    id: "phase-diagram",
    type: "diagram",
    title: "The Phase-Gate Model",
    diagram: "phase-gate"
  },
  {
    id: "gate-examples",
    type: "gates",
    title: "Gate Criteria Examples",
    gates: [
      {
        name: "Gate 1: Draft → Review",
        criteria: [
          "Addresses all required sections",
          "No placeholder text remaining",
          "Consistent terminology throughout",
          "Word count within ±10% of target"
        ]
      },
      {
        name: "Gate 2: Review → Revision",
        criteria: [
          "All critical issues from review addressed",
          "No logical contradictions identified",
          "Claims supported by evidence/citations",
          "Methodology described with sufficient detail"
        ]
      },
      {
        name: "Gate 3: Revision → Final",
        criteria: [
          "Devil's Advocate found no fatal flaws",
          "Style matches target venue",
          "All feedback incorporated",
          "Ready for human final review"
        ]
      }
    ]
  },

  // ============ THE DEVIL'S ADVOCATE ============
  {
    id: "section-devil",
    type: "section",
    title: "The Devil's Advocate",
    subtitle: "Your Most Important Agent"
  },
  {
    id: "devil-mission",
    type: "quote",
    title: "The Mission",
    quote: "Find weaknesses, attack claims, identify failure modes. You are not here to be helpful. You are here to break things.",
    subtext: "This is not a friendly reviewer. This is Reviewer 2."
  },
  {
    id: "devil-protocol",
    type: "numbered-list",
    title: "The Devil's Advocate Protocol",
    items: [
      { num: 1, label: "Evidence check", desc: "What evidence supports this? Is it sufficient?" },
      { num: 2, label: "Alternatives", desc: "What alternative explanations exist?" },
      { num: 3, label: "Falsifiability", desc: "What would make this claim false?" },
      { num: 4, label: "Weak links", desc: "What's the weakest link in the argument?" },
      { num: 5, label: "Hostile read", desc: "What would a hostile reviewer say?" }
    ]
  },
  {
    id: "devil-output",
    type: "component-detail",
    title: "Devil's Advocate Output Format",
    code: `### ADVERSARIAL REVIEW

**Critical Vulnerabilities:** (could sink the paper)
1. [Vulnerability]: [Attack vector] — [How to defend]

**Significant Weaknesses:** (reviewers will notice)
1. [...]

**Logical Gaps:**
1. [Gap between claim X and evidence Y]

**Unfounded Assumptions:**
1. [Assumption] — [Why it might not hold]

**Strongest Attack:**
"If I were a reviewer trying to reject this, I would argue..."

**Defense Recommendations:**
1. [How to preemptively address top 3 attacks]`,
    key: "Attacks come with defenses. It's constructive destruction."
  },
  {
    id: "devil-rule",
    type: "quote",
    title: "The Golden Rule",
    quote: "If the Devil's Advocate cannot find at least 3 weaknesses, they have failed.",
    subtext: "Everything has weaknesses. If you can't find them, you're not looking hard enough."
  },

  // ============ WHY CLAUDE ============
  {
    id: "section-claude",
    type: "section",
    title: "A Note on Tools",
    subtitle: "Why We're Using Claude"
  },
  {
    id: "claude-why",
    type: "list",
    title: "Why Claude for This Workshop",
    items: [
      { label: "Extended thinking", desc: "Shows reasoning process — critical for learning the 'why'" },
      { label: "Long context window", desc: "Academic papers, datasets, literature exceed other models' limits" },
      { label: "Nuanced instruction-following", desc: "Handles complex, multi-constraint prompts without losing thread" },
      { label: "Consistency in voice", desc: "Stable tone across long outputs — crucial for papers" },
      { label: "Projects & Artifacts", desc: "Persistent context and clean output separation" }
    ],
    note: "Principles apply everywhere. Claude makes the learning visible."
  },
  {
    id: "claude-models",
    type: "table",
    title: "Model Selection Strategy",
    headers: ["Model", "Use For", "Trade-off"],
    rows: [
      ["Sonnet 4", "Iteration, drafting, simpler tasks", "Fast, cheap, good enough for most"],
      ["Opus 4", "Deep reasoning, complex analysis, final drafts", "Slower, worth it for important outputs"]
    ],
    note: "Draft with Sonnet. Refine with Opus."
  },

  // ============ PRACTICE ============
  {
    id: "section-practice",
    type: "section",
    title: "Hands-On Practice",
    subtitle: "20 Minutes"
  },
  {
    id: "exercise-1",
    type: "exercise",
    title: "Exercise 1: Design Your Research Team",
    time: "10 min",
    steps: [
      "Pick a current research task you're working on",
      "Identify 3-4 agent roles needed",
      "Write the metaprompt for ONE agent (full seven components)",
      "Pair up: Review partner's metaprompt for gaps"
    ]
  },
  {
    id: "exercise-2",
    type: "exercise",
    title: "Exercise 2: Find the Weakness",
    time: "10 min",
    steps: [
      "You'll receive a 'complete' metaprompt",
      "It has subtle flaws hidden in it",
      "Identify what's missing or poorly specified",
      "Discuss: How would this cause the agent to fail?"
    ]
  },

  // ============ CLOSING ============
  {
    id: "session1-summary",
    type: "summary",
    title: "Session 1: Key Takeaways",
    items: [
      "You're not prompting — you're managing a research team",
      "The seven components: Identity → Context → Task → Output → Acceptance → Rejection → Handoff",
      "Acceptance criteria first, always",
      "The Devil's Advocate is your best friend",
      "Gates prevent bad output from propagating"
    ]
  },
  {
    id: "next-session",
    type: "preview",
    title: "Next Session",
    subtitle: "Validation Cycles & Advanced Workflows",
    items: [
      "Building complete validation cycles",
      "The three types of validation",
      "Workflow patterns: Literature Review, Data Analysis, POC",
      "Meta-validation: validating your validators",
      "Error pattern recognition by task type"
    ]
  },
  {
    id: "qa",
    type: "section",
    title: "Questions?",
    subtitle: "10 Minutes"
  }
];
