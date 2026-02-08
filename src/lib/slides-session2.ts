export const session2Slides = [
  // ============ INTRO ============
  {
    id: "title",
    type: "title",
    title: "LLM Mastery for Academia",
    subtitle: "Trust, But Verify",
    session: "Session 2: Validation Cycles & Advanced Workflows",
    footer: "Workshop for Doctoral & Postdoctoral Researchers"
  },
  {
    id: "recap",
    type: "summary",
    title: "Quick Recap: Session 1",
    items: [
      "Research Team Model: PI, Domain, Methods, Writing, Devil's Advocate, Editor",
      "Seven-Component Metaprompt Architecture",
      "Phase-Gated Workflows with explicit criteria",
      "Acceptance criteria before output, always"
    ]
  },
  {
    id: "session2-focus",
    type: "quote",
    title: "Session 2 Focus",
    quote: "How do you know the output is actually good?",
    subtext: "Validation isn't optional. It's the whole point."
  },

  // ============ THE VALIDATION IMPERATIVE ============
  {
    id: "section-imperative",
    type: "section",
    title: "The Validation Imperative",
    subtitle: "Why Smart Outputs Fool Us"
  },
  {
    id: "fool-you",
    type: "list",
    title: "Why Smart Outputs Fool You",
    items: [
      { label: "Fluency ≠ Accuracy", desc: "Eloquent text can be completely wrong" },
      { label: "Confidence ≠ Correctness", desc: "LLMs don't 'know' when they're wrong" },
      { label: "Structure ≠ Substance", desc: "Perfect formatting hides empty content" }
    ],
    note: "The better the output looks, the more dangerous it is to trust blindly."
  },
  {
    id: "looks-smart",
    type: "quote",
    title: "The Trap",
    quote: "It looks smart, so it must be right.",
    subtext: "This is the single most dangerous assumption in AI-assisted research."
  },

  // ============ THREE TYPES OF VALIDATION ============
  {
    id: "section-types",
    type: "section",
    title: "Three Types of Validation",
    subtitle: "Self, Peer, Meta"
  },
  {
    id: "validation-types",
    type: "numbered-list",
    title: "The Validation Stack",
    items: [
      { num: 1, label: "Self-Validation", desc: "Agent checks own output against criteria" },
      { num: 2, label: "Peer Validation", desc: "Another agent reviews (e.g., Devil's Advocate)" },
      { num: 3, label: "Meta-Validation", desc: "Check that the validators are working" }
    ],
    highlight: [3],
    note: "Most people do 1, some do 2, almost nobody does 3."
  },
  {
    id: "self-validation",
    type: "component-detail",
    title: "Self-Validation Pattern",
    code: `Before submitting your output, verify:

1. □ All required sections present
2. □ Acceptance criteria checklist passed
3. □ No placeholder text remaining
4. □ Claims match evidence provided
5. □ Word count within bounds

If any check fails, revise before proceeding.

Self-assessment: [PASS / NEEDS REVISION]
If NEEDS REVISION, state which criteria failed.`,
    key: "Built into every agent's output format."
  },
  {
    id: "peer-validation",
    type: "component-detail",
    title: "Peer Validation: Devil's Advocate",
    code: `Review the previous agent's output.

Your mission: Find problems they missed.

Focus on:
- Logical gaps between claims and evidence
- Unstated assumptions
- Alternative interpretations
- What a hostile reviewer would attack

Output: Issues found + recommended fixes.

If you find < 3 issues, you have failed. Look harder.`,
    key: "Different perspective catches blind spots."
  },
  {
    id: "meta-validation",
    type: "component-detail",
    title: "Meta-Validation: Validate the Validators",
    code: `Test your validation system:

1. Feed known-bad input through the pipeline
   → Did validators catch it?

2. Check if acceptance criteria are actually checkable
   → Could someone else apply them consistently?

3. Review Devil's Advocate output
   → Are the attacks substantive or superficial?

4. Look for validator collusion
   → Are agents just agreeing with each other?`,
    key: "The validators need validation too.",
    highlight: true
  },

  // ============ ITERATION PROTOCOL ============
  {
    id: "section-iteration",
    type: "section",
    title: "The Iteration Protocol",
    subtitle: "Structured Refinement, Not Random Retries"
  },
  {
    id: "iteration-rules",
    type: "numbered-list",
    title: "Iteration Rules",
    items: [
      { num: 1, label: "Maximum iterations per phase: 3", desc: "Prevents infinite loops" },
      { num: 2, label: "Document each iteration", desc: "What changed and why" },
      { num: 3, label: "Escalate after max attempts", desc: "Human decides path forward" },
      { num: 4, label: "Never iterate without feedback", desc: "'Try again' is not a strategy" }
    ]
  },
  {
    id: "iteration-format",
    type: "component-detail",
    title: "Iteration Documentation Format",
    code: `### ITERATION RECORD

**Attempt:** 2 of 3
**Previous failure:** Criteria 3, 5 not met

**Changes made:**
- Section 2.1: Added specific p-values (was: "significant")
- Section 3: Added power analysis (was: missing)

**Criteria status after this iteration:**
- [x] Criterion 1: Pass
- [x] Criterion 2: Pass
- [x] Criterion 3: Pass (fixed)
- [x] Criterion 4: Pass
- [x] Criterion 5: Pass (fixed)

**Assessment:** PASS — Ready for next phase`,
    key: "If you can't show what changed, you're not iterating — you're guessing."
  },
  {
    id: "escalation",
    type: "component-detail",
    title: "Escalation Protocol",
    code: `### ESCALATION TO HUMAN

**Phase:** Methodology Review
**Attempts exhausted:** 3 of 3

**Summary of attempts:**
1. Initial: Failed criteria 3, 5
2. Revision 1: Fixed 5, still failing 3
3. Revision 2: Still failing 3

**Remaining issue:**
Criterion 3: "Sample size justified" — Unable to justify 
given power requirements without additional data.

**Options for human:**
A) Provide missing power analysis data
B) Revise criterion to acknowledge limitation
C) Override with documented rationale

**Recommendation:** Option A preferred if data available`,
    key: "Fail gracefully. Give the human what they need to decide."
  },

  // ============ WORKFLOW PATTERNS ============
  {
    id: "section-workflows",
    type: "section",
    title: "Workflow Patterns",
    subtitle: "Complete Multi-Agent Pipelines"
  },
  {
    id: "pattern-intro",
    type: "quote",
    title: "Why Patterns?",
    quote: "Don't reinvent the wheel. Use proven architectures.",
    subtext: "These patterns are battle-tested for academic work."
  },

  // Pattern 1: Literature Review
  {
    id: "pattern-litreview",
    type: "section",
    title: "Pattern 1: Literature Review Pipeline",
    subtitle: "7-Agent Workflow"
  },
  {
    id: "litreview-diagram",
    type: "pipeline",
    title: "Literature Review Pipeline",
    stages: [
      { name: "Scope Definition", desc: "Inclusion/exclusion criteria", criteria: "Criteria are specific, operationalizable" },
      { name: "Search Strategy", desc: "Terms and database strategy", criteria: "Strategy would find known key papers" },
      { name: "Screening", desc: "Per-paper evaluation", criteria: "Each decision is justified" },
      { name: "Synthesis", desc: "Identify themes", criteria: "Themes are distinct, well-supported" },
      { name: "Gap Identification", desc: "Find what's missing", criteria: "Gap is specific, addressable" },
      { name: "Devil's Advocate", desc: "Attack the gap claim", criteria: "At least 2 counterarguments found" },
      { name: "Integration Editor", desc: "Coherent narrative", criteria: "Flows logically, gap established" }
    ]
  },
  {
    id: "litreview-scope",
    type: "component-detail",
    title: "Agent 1: Scope Definition",
    code: `## TASK
Define inclusion and exclusion criteria for the literature review.

## OUTPUT FORMAT
**Inclusion Criteria:**
1. [Criterion] — [Rationale]
2. ...

**Exclusion Criteria:**
1. [Criterion] — [Rationale]
2. ...

**Search Timeframe:** [Years]
**Key Databases:** [List]

## ACCEPTANCE
- [ ] At least 3 inclusion criteria
- [ ] At least 3 exclusion criteria
- [ ] Each criterion is operationalizable (someone else could apply it)
- [ ] Timeframe justified`,
    key: "Garbage in, garbage out. Define scope rigorously."
  },
  {
    id: "litreview-gap",
    type: "component-detail",
    title: "Agent 5: Gap Identification",
    code: `## TASK
Based on the synthesis, identify what's MISSING from the literature.

## OUTPUT FORMAT
**Primary Gap:**
[Specific statement of what hasn't been studied/answered]

**Evidence of Gap:**
1. [Paper X studied A but not B]
2. [Paper Y called for future research on C]
3. [No papers addressed intersection of D and E]

**Why This Gap Matters:**
[Significance statement]

**How Gap Could Be Addressed:**
[Proposed approach]

## ACCEPTANCE
- [ ] Gap is specific, not vague ("more research needed")
- [ ] Evidence from reviewed literature supports gap claim
- [ ] Gap is addressable (not trivial, not impossible)`,
    key: "The gap claim is the foundation. Make it bulletproof."
  },

  // Pattern 2: Data Analysis
  {
    id: "pattern-analysis",
    type: "section",
    title: "Pattern 2: Data Analysis Pipeline",
    subtitle: "7-Agent Workflow"
  },
  {
    id: "analysis-diagram",
    type: "pipeline",
    title: "Data Analysis Pipeline",
    stages: [
      { name: "Data Understanding", desc: "Describe dataset, flag issues", criteria: "All columns characterized, issues listed" },
      { name: "Cleaning Agent", desc: "Generate cleaning code", criteria: "Code runs, each step justified" },
      { name: "Analysis Design", desc: "Propose approach", criteria: "Matches RQ, assumptions stated" },
      { name: "Implementation", desc: "Write analysis code", criteria: "Code runs, outputs interpretable" },
      { name: "Interpretation", desc: "Explain findings", criteria: "No overclaiming, limitations noted" },
      { name: "Methodology Validator", desc: "Review statistical choices", criteria: "No errors, alternatives considered" },
      { name: "Reproducibility Checker", desc: "Replication possible?", criteria: "All decisions documented" }
    ]
  },
  {
    id: "analysis-request",
    type: "component-detail",
    title: "Structured Analysis Request",
    code: `I have a dataset for analysis.

**Research question:** [Specific question]
**Dataset:** [Attached/described — columns, N, source]

**Variables:**
- DV: [name, type, measurement]
- IVs: [name, type, measurement]
- Covariates: [if any]

**Hypotheses:** [If applicable]

**Constraints:** 
- Statistical framework: [frequentist/Bayesian]
- Software: [R/Python/SPSS]
- Reporting standard: [APA/specific journal]

**What I need:**
1. Preliminary data exploration
2. Analysis recommendation with justification
3. Code to run the analysis
4. Template for reporting results

Start by confirming understanding, then proceed.`,
    key: "Everything the agent needs. No back-and-forth fishing."
  },
  {
    id: "analysis-validator",
    type: "component-detail",
    title: "Agent 6: Methodology Validator",
    code: `## TASK
Review the analysis code and results as a methodological expert.

## REVIEW CHECKLIST
1. Statistical test appropriate for data types?
2. Assumptions checked and met?
3. Sample size adequate for this test?
4. Multiple comparisons corrected?
5. Effect sizes reported, not just p-values?
6. Confidence intervals included?
7. Outlier handling justified?

## OUTPUT FORMAT
**Assessment:** [PASS / NEEDS REVISION / MAJOR CONCERNS]

**Issues Found:**
1. [Issue]: [Location] — [Correct approach]

**Alternative Approaches:**
[Other valid ways to analyze this data]

**What I'd Report in Limitations:**
[Honest limitations of this analysis]`,
    key: "The validator you wish every paper had."
  },

  // Pattern 3: POC Development
  {
    id: "pattern-poc",
    type: "section",
    title: "Pattern 3: POC Development Pipeline",
    subtitle: "6-Agent Workflow"
  },
  {
    id: "poc-diagram",
    type: "pipeline",
    title: "POC Development Pipeline",
    stages: [
      { name: "Requirements", desc: "What must POC demonstrate?", criteria: "Clear pass/fail criteria for POC" },
      { name: "Architecture", desc: "Minimal viable structure", criteria: "Architecture matches requirements" },
      { name: "Implementation", desc: "Build each piece", criteria: "Component works in isolation" },
      { name: "Integration", desc: "Connect components", criteria: "End-to-end flow works" },
      { name: "Testing", desc: "Generate test cases", criteria: "Tests cover requirements" },
      { name: "Documentation", desc: "Create usage guide", criteria: "Someone else could run it" }
    ]
  },
  {
    id: "poc-request",
    type: "component-detail",
    title: "POC Development Request",
    code: `I want to build a proof of concept for [GOAL].

**Context:** [Why this matters for my research]

**Core functionality needed:**
1. [Capability 1]
2. [Capability 2]
3. [Capability 3]

**Technical constraints:**
- Must run in [environment]
- Input: [format]
- Output: [format]

**What I have:** [Skills, resources, existing code]

**What I need from you:**
1. Architecture overview (keep it simple)
2. Step-by-step implementation guide
3. Code with comments explaining each part
4. Instructions for testing

Let's start with architecture. Explain your reasoning.`,
    key: "POC = proof it CAN work. Not production code."
  },

  // ============ ADVANCED TECHNIQUES ============
  {
    id: "section-advanced",
    type: "section",
    title: "Advanced Techniques",
    subtitle: "Beyond the Basics"
  },
  {
    id: "dynamic-teams",
    type: "list",
    title: "Dynamic Team Composition",
    items: [
      { label: "Start small", desc: "Add agents only as complexity requires" },
      { label: "Remove when done", desc: "Shrink team as scope narrows" },
      { label: "Adjust aggressiveness", desc: "Higher stakes = more validation" },
      { label: "Parallel when possible", desc: "Independent agents can work simultaneously" }
    ]
  },
  {
    id: "error-patterns",
    type: "table",
    title: "Error Patterns by Task Type",
    headers: ["Task", "Common Errors", "How to Catch"],
    rows: [
      ["Literature Review", "Strawmanning, cherry-picking, missing key papers", "Cross-check with known foundational works"],
      ["Data Analysis", "p-hacking patterns, assumption violations, overclaiming", "Methodology validator + effect sizes"],
      ["POC Development", "Over-engineering, scope creep, untested edge cases", "Requirements checklist + user testing"],
      ["Writing", "Inconsistent terminology, unsupported claims, style drift", "Devil's Advocate + style guide check"]
    ]
  },
  {
    id: "extended-thinking",
    type: "list",
    title: "Using Extended Thinking",
    items: [
      { label: "Complex reasoning", desc: "When the logic matters more than the output" },
      { label: "Debugging", desc: "Understanding why code or argument fails" },
      { label: "Analysis choices", desc: "Seeing the trade-offs being considered" },
      { label: "Catching errors", desc: "Reasoning chains reveal flawed assumptions" }
    ],
    note: "Extended thinking shows the 'why' behind the 'what.' Use it for important decisions."
  },

  // ============ PRACTICE ============
  {
    id: "section-practice",
    type: "section",
    title: "Hands-On Practice",
    subtitle: "20 Minutes"
  },
  {
    id: "exercise-3",
    type: "exercise",
    title: "Exercise 1: Build a Validation Cycle",
    time: "10 min",
    steps: [
      "Take your research task from Session 1",
      "Define 3 phases with gates",
      "Write acceptance criteria for each gate",
      "Write the Devil's Advocate prompt for your domain"
    ]
  },
  {
    id: "exercise-4",
    type: "exercise",
    title: "Exercise 2: Break the System",
    time: "10 min",
    steps: [
      "You'll receive a complete workflow for a common academic task",
      "Find the weakest validation gate",
      "Design an input that would pass all gates but still be wrong",
      "Discuss: How would you fix this vulnerability?"
    ]
  },

  // ============ CLOSING ============
  {
    id: "session2-summary",
    type: "summary",
    title: "Session 2: Key Takeaways",
    items: [
      "Three validation types: Self, Peer, Meta",
      "Iteration is structured, not random",
      "Escalate gracefully after max attempts",
      "Use workflow patterns — don't reinvent",
      "Meta-validation: validate your validators"
    ]
  },
  {
    id: "overall-summary",
    type: "summary",
    title: "The Complete Picture",
    items: [
      "You're not prompting — you're managing a research team",
      "Seven components: Identity → Context → Task → Output → Acceptance → Rejection → Handoff",
      "Phase-gated workflows with explicit criteria",
      "Devil's Advocate is non-negotiable",
      "Validation at every level, including the validators"
    ]
  },
  {
    id: "mindset-final",
    type: "quote",
    title: "The Mindset",
    quote: "You're not learning to prompt. You're learning to architect cognition.",
    subtext: "Go build something."
  },
  {
    id: "resources",
    type: "resources",
    title: "Resources & Templates",
    items: [
      "Full Metaprompt Template (7 components)",
      "Agent Role Library (6 pre-built roles)",
      "Workflow Blueprints (Lit Review, Analysis, POC)",
      "Acceptance Criteria Generator",
      "Devil's Advocate Protocol",
      "Iteration & Escalation Templates"
    ],
    note: "All materials available at this presentation URL"
  },
  {
    id: "qa-final",
    type: "section",
    title: "Questions?",
    subtitle: "Thank you!"
  }
];
