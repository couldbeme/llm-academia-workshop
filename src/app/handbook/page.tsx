'use client';

import Link from 'next/link';

export default function HandbookPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-8 flex justify-between items-center">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition">
            ← Back to Home
          </Link>
          <button 
            onClick={() => window.print()}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded transition text-sm"
          >
            🖨️ Print / Save PDF
          </button>
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            LLM Mastery for Academia
          </h1>
          <p className="text-2xl text-gray-400 mb-8">The Complete Handbook</p>
          
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-12">
            <p className="text-blue-400 font-semibold mb-2">What This Is</p>
            <p className="text-gray-300 mb-0">
              A comprehensive playbook for using LLMs effectively in academic research. 
              Not tips and tricks — a complete system for multi-agent orchestration, 
              validation-driven workflows, and production-grade AI collaboration.
            </p>
          </div>

          <nav className="bg-gray-900 rounded-xl p-6 mb-12">
            <p className="font-bold text-white mb-4">Contents</p>
            <ol className="columns-2 gap-8 text-sm">
              <li><a href="#philosophy" className="text-blue-400 hover:underline">1. Philosophy & Mindset</a></li>
              <li><a href="#problems" className="text-blue-400 hover:underline">2. What Goes Wrong</a></li>
              <li><a href="#team-model" className="text-blue-400 hover:underline">3. The Research Team Model</a></li>
              <li><a href="#metaprompt" className="text-blue-400 hover:underline">4. The Metaprompt Architecture</a></li>
              <li><a href="#phase-gates" className="text-blue-400 hover:underline">5. Phase-Gated Workflows</a></li>
              <li><a href="#validation" className="text-blue-400 hover:underline">6. Validation Cycles</a></li>
              <li><a href="#devils-advocate" className="text-blue-400 hover:underline">7. The Devil's Advocate</a></li>
              <li><a href="#iteration" className="text-blue-400 hover:underline">8. Iteration & Escalation</a></li>
              <li><a href="#patterns" className="text-blue-400 hover:underline">9. Workflow Patterns</a></li>
              <li><a href="#claude" className="text-blue-400 hover:underline">10. Claude-Specific Features</a></li>
              <li><a href="#cheatsheet" className="text-blue-400 hover:underline">11. Quick Reference</a></li>
            </ol>
          </nav>

          {/* SECTION 1 */}
          <section id="philosophy" className="mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4 mb-6">
              1. Philosophy & Mindset
            </h2>
            
            <blockquote className="border-l-4 border-blue-500 pl-6 my-8 text-xl italic text-blue-400">
              "You're not learning to prompt. You're learning to architect cognition."
            </blockquote>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">What This Is NOT</h3>
            <ul className="space-y-2 text-gray-300">
              <li>❌ "How to write better prompts"</li>
              <li>❌ Tips and tricks for ChatGPT</li>
              <li>❌ Simple templates to copy-paste</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">What This IS</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✅ <strong>Systems thinking</strong> for AI collaboration</li>
              <li>✅ <strong>Multi-agent orchestration</strong> for complex research tasks</li>
              <li>✅ <strong>Validation-driven workflows</strong> that catch errors before they propagate</li>
              <li>✅ <strong>The meta-skill</strong>: teaching LLMs to build the tools you need</li>
            </ul>

            <div className="bg-gray-900 rounded-xl p-6 mt-8">
              <p className="font-bold text-white mb-2">The Core Insight</p>
              <p className="text-gray-300">
                An LLM is not a vending machine. It's a highly capable collaborator who just arrived 
                and knows nothing about your project. Your job is to onboard them properly, give them 
                the right role, and validate their work — just like you would with a new research assistant.
              </p>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="problems" className="mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4 mb-6">
              2. What Goes Wrong
            </h2>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">The Five Deadly Mistakes</h3>
            
            <div className="space-y-4">
              {[
                { num: 1, title: "Single-agent thinking", desc: "One prompt, one response, done. Complex tasks require orchestrated teams." },
                { num: 2, title: "No validation architecture", desc: "Trusting outputs without adversarial review. Fluent text can be completely wrong." },
                { num: 3, title: "Role confusion", desc: "Same agent does research, critique, and revision. Creative + critical = mediocre at both." },
                { num: 4, title: "No iteration protocol", desc: "Ad-hoc 'try again' instead of structured refinement with documented changes." },
                { num: 5, title: "Missing acceptance criteria", desc: "No definition of 'done' before starting. Can't evaluate what you haven't defined." }
              ].map(m => (
                <div key={m.num} className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="font-bold text-red-400">Mistake {m.num}: {m.title}</p>
                  <p className="text-gray-300 text-sm mt-1">{m.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">The Paradigm Shift</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="font-bold text-red-400 mb-2">❌ Before</p>
                <p className="text-sm text-gray-300">Human → Prompt → LLM → Output → Human reviews</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="font-bold text-green-400 mb-2">✅ After</p>
                <p className="text-sm text-gray-300">Human → Metaprompt → Agent Team → Validation Cycles → Gated Output → Human reviews</p>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="team-model" className="mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4 mb-6">
              3. The Research Team Model
            </h2>

            <p className="text-gray-300 mb-6">
              Instead of one prompt, you spawn a coordinated team with distinct roles. 
              Each agent has one job and does it well.
            </p>

            <div className="bg-gray-900 rounded-xl p-6 mb-8">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-blue-500/20 border border-blue-500 rounded-lg px-6 py-3 text-center">
                  <span className="text-2xl">🎯</span>
                  <p className="font-bold text-blue-400">Principal Investigator</p>
                  <p className="text-sm text-gray-400">Orchestrates, maintains vision</p>
                </div>
                <div className="text-blue-500 text-2xl">↓</div>
                <div className="flex gap-4 flex-wrap justify-center">
                  <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
                    <span className="text-xl">🔬</span>
                    <p className="font-bold text-white text-sm">Domain Expert</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
                    <span className="text-xl">📊</span>
                    <p className="font-bold text-white text-sm">Methodology</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
                    <span className="text-xl">✍️</span>
                    <p className="font-bold text-white text-sm">Writing Expert</p>
                  </div>
                </div>
                <div className="text-blue-500 text-2xl">↓</div>
                <div className="bg-red-500/20 border border-red-500 rounded-lg px-6 py-3 text-center">
                  <span className="text-2xl">😈</span>
                  <p className="font-bold text-red-400">Devil's Advocate</p>
                  <p className="text-sm text-gray-400">Attacks claims, finds weaknesses</p>
                </div>
                <div className="text-blue-500 text-2xl">↓</div>
                <div className="bg-green-500/20 border border-green-500 rounded-lg px-6 py-3 text-center">
                  <span className="text-2xl">🔗</span>
                  <p className="font-bold text-green-400">Integration Editor</p>
                  <p className="text-sm text-gray-400">Synthesizes, resolves conflicts</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Agent Roles Detailed</h3>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-white">🎯 Principal Investigator</p>
                <ul className="text-gray-300 text-sm mt-2 space-y-1">
                  <li>• Maintains research vision</li>
                  <li>• Resolves conflicts between agents</li>
                  <li>• Makes final calls on trade-offs</li>
                  <li>• <em>Doesn't do the work — orchestrates</em></li>
                </ul>
                <p className="text-blue-400 text-sm mt-2 italic">The PI doesn't write — the PI decides.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-white">🔬 Domain Expert</p>
                <ul className="text-gray-300 text-sm mt-2 space-y-1">
                  <li>• Field-specific knowledge</li>
                  <li>• Terminology accuracy</li>
                  <li>• Literature awareness</li>
                  <li>• Knows what's novel vs. obvious</li>
                </ul>
                <p className="text-blue-400 text-sm mt-2 italic">Your field, their memory.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-white">📊 Methodology Expert</p>
                <ul className="text-gray-300 text-sm mt-2 space-y-1">
                  <li>• Study design rigor</li>
                  <li>• Statistical appropriateness</li>
                  <li>• Validity threats (internal, external, construct)</li>
                  <li>• Reproducibility checks</li>
                </ul>
                <p className="text-blue-400 text-sm mt-2 italic">Dr. Methods: 20 years of reviewer experience.</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-bold text-white">✍️ Writing Expert</p>
                <ul className="text-gray-300 text-sm mt-2 space-y-1">
                  <li>• Style and tone consistency</li>
                  <li>• Clarity and flow</li>
                  <li>• Audience calibration</li>
                  <li>• Journal-specific conventions</li>
                </ul>
                <p className="text-blue-400 text-sm mt-2 italic">Makes the brilliant readable.</p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-bold text-white">😈 Devil's Advocate</p>
                <ul className="text-gray-300 text-sm mt-2 space-y-1">
                  <li>• Attacks everything</li>
                  <li>• Finds weaknesses before reviewers do</li>
                  <li>• Suggests defenses</li>
                  <li>• Prevents groupthink</li>
                </ul>
                <p className="text-red-400 text-sm mt-2 italic">If they can't find 3 weaknesses, they've failed.</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-bold text-white">🔗 Integration Editor</p>
                <ul className="text-gray-300 text-sm mt-2 space-y-1">
                  <li>• Synthesizes multi-agent outputs</li>
                  <li>• Resolves contradictions</li>
                  <li>• Ensures coherence</li>
                  <li>• Produces final unified output</li>
                </ul>
                <p className="text-green-400 text-sm mt-2 italic">The orchestra conductor.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Team Sizing Guide</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-blue-400">Complexity</th>
                  <th className="text-left py-2 text-blue-400">Team Size</th>
                  <th className="text-left py-2 text-blue-400">Example</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800"><td className="py-2">Simple</td><td>1 agent</td><td>Email, simple summary</td></tr>
                <tr className="border-b border-gray-800"><td className="py-2">Moderate</td><td>2-3 agents</td><td>Abstract, methods section</td></tr>
                <tr className="border-b border-gray-800"><td className="py-2">Complex</td><td>4-5 agents</td><td>Full paper, analysis pipeline</td></tr>
                <tr><td className="py-2">Critical</td><td>Full team + meta-validation</td><td>Dissertation chapter, grant</td></tr>
              </tbody>
            </table>
          </section>

          {/* SECTION 4 */}
          <section id="metaprompt" className="mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4 mb-6">
              4. The Metaprompt Architecture
            </h2>

            <blockquote className="border-l-4 border-purple-500 pl-6 my-8 text-xl italic text-purple-400">
              "A metaprompt is a prompt that generates a better prompt than you would have written yourself."
            </blockquote>

            <p className="text-gray-300 mb-6">
              But that's level 1. Level 2 is a <strong>complete agent specification</strong>.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">The Seven Components</h3>

            <div className="space-y-4">
              {[
                { num: 1, name: "IDENTITY & ROLE", desc: "Who is this agent? What expertise? What relationships to other agents?", critical: false },
                { num: 2, name: "CONTEXT & BACKGROUND", desc: "What does the agent need to know about the project? Prior decisions?", critical: false },
                { num: 3, name: "TASK SPECIFICATION", desc: "What exactly must they produce? What are the boundaries (DO NOT)?", critical: false },
                { num: 4, name: "OUTPUT FORMAT", desc: "Exact structure expected. No ambiguity in what 'good' looks like.", critical: false },
                { num: 5, name: "ACCEPTANCE CRITERIA", desc: "How will output be evaluated? Specific, checkable, binary pass/fail.", critical: true },
                { num: 6, name: "REJECTION PROTOCOL", desc: "What happens if it fails? Max iterations? Escalation path?", critical: true },
                { num: 7, name: "HANDOFF SPECIFICATION", desc: "Who receives output next? What context passes along?", critical: true }
              ].map(c => (
                <div key={c.num} className={`rounded-lg p-4 ${c.critical ? 'bg-blue-500/10 border border-blue-500/30' : 'bg-gray-900'}`}>
                  <p className={`font-bold ${c.critical ? 'text-blue-400' : 'text-white'}`}>
                    {c.num}. {c.name} {c.critical && <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded ml-2">CRITICAL</span>}
                  </p>
                  <p className="text-gray-300 text-sm mt-1">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mt-8">
              <p className="text-purple-400 font-bold">💡 The Secret</p>
              <p className="text-gray-300 mt-2">
                Most people stop at component 3 or 4. The magic is in components 5-7. 
                Acceptance criteria, rejection protocols, and handoff specifications are what 
                separate amateur prompting from production-grade AI orchestration.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Full Example: Methodology Expert Agent</h3>

            <pre className="bg-gray-900 rounded-xl p-6 overflow-x-auto text-sm text-gray-300 whitespace-pre-wrap font-mono">
{`# METAPROMPT: Methodology Expert Agent

## 1. IDENTITY & ROLE
You are Dr. Methods — a methodological expert with deep knowledge of 
research design, statistical analysis, and validity threats. You have 
20 years of experience reviewing papers across disciplines.

Your role in this team: Review research methodology for rigor.
You report to: Principal Investigator
You receive input from: Domain Expert (draft methods section)
You pass output to: Devil's Advocate

## 2. CONTEXT & BACKGROUND
**Project:** [Title]
**Research question:** [RQ]
**Study design:** [Design type]
**Data:** [Description]

**Prior context:**
- Domain Expert has drafted initial methods section
- PI has approved overall research direction
- Target journal: [Journal] (requires [specific standards])

## 3. TASK SPECIFICATION
Review the attached methods section for:
1. Appropriate statistical tests for data types
2. Adequate sample size justification
3. Validity threats (internal, external, construct)
4. Reproducibility (could someone replicate this?)
5. Assumption violations

DO NOT:
- Rewrite the section (that's the Writing Expert's job)
- Question the research question itself (already approved)
- Suggest entirely different study designs (out of scope)

## 4. OUTPUT FORMAT
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

**Reproducibility Score:** [1-5] — [Justification]

## 5. ACCEPTANCE CRITERIA
Output passes if:
- [ ] All five review areas addressed
- [ ] At least one strength identified
- [ ] Required revisions include specific locations
- [ ] Suggested fixes are actionable
- [ ] Validity threats explicitly analyzed
- [ ] Reproducibility assessed

## 6. REJECTION PROTOCOL
If feedback indicates output failed criteria:
1. Identify which criteria failed
2. Request specific clarification if issue unclear
3. Regenerate only the failed sections
4. Maximum 2 revision attempts before escalating to PI

## 7. HANDOFF SPECIFICATION
Pass to Devil's Advocate:
- This review document
- The original methods section
- Flag any areas of uncertainty for adversarial focus

Decisions made here: Statistical test appropriateness
Decisions deferred: Final wording (Writing Expert)`}
            </pre>
          </section>

          {/* SECTION 5 */}
          <section id="phase-gates" className="mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4 mb-6">
              5. Phase-Gated Workflows
            </h2>

            <p className="text-gray-300 mb-6">
              Every complex task moves through explicit phases with gates. 
              Bad output doesn't propagate — it gets caught and fixed at the gate.
            </p>

            <div className="bg-gray-900 rounded-xl p-6 mb-8 overflow-x-auto">
              <div className="flex items-center gap-4 min-w-max">
                <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
                  <p className="font-bold text-white">DRAFT</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-500/20 border border-yellow-500 rounded px-3 py-1 text-yellow-400 text-sm">GATE 1</div>
                  <p className="text-xs text-gray-500 mt-1">Criteria?</p>
                </div>
                <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
                  <p className="font-bold text-white">REVIEW</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-500/20 border border-yellow-500 rounded px-3 py-1 text-yellow-400 text-sm">GATE 2</div>
                  <p className="text-xs text-gray-500 mt-1">Criteria?</p>
                </div>
                <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
                  <p className="font-bold text-white">REVISION</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-500/20 border border-yellow-500 rounded px-3 py-1 text-yellow-400 text-sm">GATE 3</div>
                  <p className="text-xs text-gray-500 mt-1">Criteria?</p>
                </div>
                <div className="bg-green-500/20 border border-green-500 rounded-lg px-4 py-2 text-center">
                  <p className="font-bold text-green-400">FINAL</p>
                </div>
              </div>
              <p className="text-center text-sm text-red-400 mt-4">
                ↓ REJECT + Feedback → Redo (at any gate)
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Gate Criteria Examples</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="font-bold text-yellow-400 mb-3">Gate 1: Draft → Review</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>☐ All required sections present</li>
                  <li>☐ No placeholder text remaining</li>
                  <li>☐ Consistent terminology</li>
                  <li>☐ Word count within ±10%</li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="font-bold text-yellow-400 mb-3">Gate 2: Review → Revision</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>☐ Critical issues addressed</li>
                  <li>☐ No logical contradictions</li>
                  <li>☐ Claims supported by evidence</li>
                  <li>☐ Methodology detailed enough</li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="font-bold text-yellow-400 mb-3">Gate 3: Revision → Final</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>☐ Devil's Advocate: no fatal flaws</li>
                  <li>☐ Style matches target venue</li>
                  <li>☐ All feedback incorporated</li>
                  <li>☐ Ready for human review</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="validation" className="mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4 mb-6">
              6. Validation Cycles
            </h2>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
              <p className="text-red-400 font-bold text-lg">⚠️ The Trap</p>
              <p className="text-xl text-gray-300 mt-2 italic">"It looks smart, so it must be right."</p>
              <p className="text-gray-400 mt-2 text-sm">
                This is the single most dangerous assumption in AI-assisted research.
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Why Smart Outputs Fool You</h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong className="text-white">Fluency ≠ Accuracy</strong> — Eloquent text can be completely wrong</li>
              <li><strong className="text-white">Confidence ≠ Correctness</strong> — LLMs don't "know" when they're wrong</li>
              <li><strong className="text-white">Structure ≠ Substance</strong> — Perfect formatting hides empty content</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">The Three Types of Validation</h3>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="font-bold text-blue-400">1. Self-Validation</p>
                <p className="text-gray-300 text-sm mt-1">Agent checks own output against acceptance criteria before submitting.</p>
                <pre className="mt-3 text-xs bg-gray-800 p-3 rounded text-gray-400">
{`Before submitting, verify:
☐ All required sections present
☐ Acceptance criteria passed
☐ No placeholder text
☐ Claims match evidence
Self-assessment: [PASS / NEEDS REVISION]`}
                </pre>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <p className="font-bold text-purple-400">2. Peer Validation</p>
                <p className="text-gray-300 text-sm mt-1">Another agent reviews (typically Devil's Advocate). Different perspective catches blind spots.</p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="font-bold text-blue-400">3. Meta-Validation ⭐</p>
                <p className="text-gray-300 text-sm mt-1">Validate the validators. Most people never do this.</p>
                <ul className="text-sm text-gray-400 mt-2 space-y-1">
                  <li>• Feed known-bad input through pipeline — did validators catch it?</li>
                  <li>• Are acceptance criteria actually checkable?</li>
                  <li>• Are Devil's Advocate attacks substantive or superficial?</li>
                  <li>• Look for validator collusion — are they just agreeing?</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 7 */}
          <section id="devils-advocate" className="mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4 mb-6">
              7. The Devil's Advocate
            </h2>

            <blockquote className="border-l-4 border-red-500 pl-6 my-8 text-xl italic text-red-400">
              "Find weaknesses, attack claims, identify failure modes. You are not here to be helpful. You are here to break things."
            </blockquote>

            <p className="text-gray-300 mb-6">
              This is not a friendly reviewer. This is <strong>Reviewer 2</strong>.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">The Review Protocol</h3>
            <ol className="space-y-2 text-gray-300">
              <li><strong className="text-white">1. Evidence check:</strong> What evidence supports this? Is it sufficient?</li>
              <li><strong className="text-white">2. Alternatives:</strong> What alternative explanations exist?</li>
              <li><strong className="text-white">3. Falsifiability:</strong> What would make this claim false?</li>
              <li><strong className="text-white">4. Weak links:</strong> What's the weakest link in the argument?</li>
              <li><strong className="text-white">5. Hostile read:</strong> What would a hostile reviewer say?</li>
            </ol>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Output Format</h3>
            <pre className="bg-gray-900 rounded-xl p-6 overflow-x-auto text-sm text-gray-300 whitespace-pre-wrap font-mono">
{`### ADVERSARIAL REVIEW

**Critical Vulnerabilities:** (could sink the paper)
1. [Vulnerability]: [Attack vector] — [How to defend]

**Significant Weaknesses:** (reviewers will notice)
1. [Weakness]: [Why it matters] — [Suggested fix]

**Logical Gaps:**
1. [Gap between claim X and evidence Y]

**Unfounded Assumptions:**
1. [Assumption] — [Why it might not hold]

**Strongest Attack:**
"If I were a reviewer trying to reject this, I would argue that..."

**Defense Recommendations:**
1. [How to preemptively address attack 1]
2. [How to preemptively address attack 2]
3. [How to preemptively address attack 3]`}
            </pre>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mt-8">
              <p className="text-red-400 font-bold text-lg">The Golden Rule</p>
              <p className="text-xl text-gray-300 mt-2">
                If the Devil's Advocate cannot find at least 3 weaknesses, they have failed.
              </p>
              <p className="text-gray-400 mt-2 text-sm">
                Everything has weaknesses. If you can't find them, you're not looking hard enough.
              </p>
            </div>
          </section>

          {/* SECTION 8 */}
          <section id="iteration" className="mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4 mb-6">
              8. Iteration & Escalation
            </h2>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Iteration Rules</h3>
            <ol className="space-y-2 text-gray-300">
              <li><strong className="text-white">1. Maximum iterations per phase: 3</strong> — Prevents infinite loops</li>
              <li><strong className="text-white">2. Document every iteration</strong> — What changed and why</li>
              <li><strong className="text-white">3. Never iterate without specific feedback</strong> — "Try again" is not acceptable</li>
              <li><strong className="text-white">4. Regenerate only failed sections</strong> — Don't restart from scratch</li>
            </ol>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Iteration Documentation Format</h3>
            <pre className="bg-gray-900 rounded-xl p-6 overflow-x-auto text-sm text-gray-300 whitespace-pre-wrap font-mono">
{`### ITERATION RECORD

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

**Assessment:** PASS — Ready for next phase`}
            </pre>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Escalation Protocol</h3>
            <p className="text-gray-300 mb-4">When 3 iterations exhausted without success:</p>
            <pre className="bg-gray-900 rounded-xl p-6 overflow-x-auto text-sm text-gray-300 whitespace-pre-wrap font-mono">
{`### ESCALATION TO HUMAN

**Phase:** Methodology Review
**Attempts completed:** 3 of 3

**Summary of attempts:**
1. Initial: Failed criteria 3, 5
2. Revision 1: Fixed 5, still failing 3
3. Revision 2: Still failing 3

**Remaining issue:**
Criterion 3: "Sample size justified" — Unable to justify 
given power requirements without additional data.

**Options for human decision:**
A) Provide missing power analysis data
B) Revise criterion to acknowledge limitation
C) Override with documented rationale

**Recommendation:** Option A preferred if data available

**What I need to proceed:**
[Specific information, decision, or resource required]`}
            </pre>
          </section>

          {/* SECTION 9 */}
          <section id="patterns" className="mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4 mb-6">
              9. Workflow Patterns
            </h2>

            <p className="text-gray-300 mb-8">
              Don't reinvent the wheel. These patterns are battle-tested for academic work.
            </p>

            {/* Pattern 1 */}
            <div className="bg-gray-900 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Pattern 1: Literature Review Pipeline</h3>
              <div className="space-y-3">
                {[
                  { num: 1, name: "Scope Definition", desc: "Inclusion/exclusion criteria", criteria: "Criteria are specific, operationalizable" },
                  { num: 2, name: "Search Strategy", desc: "Terms and database strategy", criteria: "Strategy would find known key papers" },
                  { num: 3, name: "Screening", desc: "Per-paper evaluation", criteria: "Each decision is justified" },
                  { num: 4, name: "Synthesis", desc: "Identify themes", criteria: "Themes are distinct, well-supported" },
                  { num: 5, name: "Gap Identification", desc: "Find what's missing", criteria: "Gap is specific, addressable" },
                  { num: 6, name: "Devil's Advocate", desc: "Attack the gap claim", criteria: "At least 2 counterarguments found" },
                  { num: 7, name: "Integration Editor", desc: "Coherent narrative", criteria: "Flows logically, gap established" }
                ].map(s => (
                  <div key={s.num} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm shrink-0">{s.num}</div>
                    <div className="flex-1">
                      <span className="font-bold text-white">{s.name}</span>
                      <span className="text-gray-400 ml-2">— {s.desc}</span>
                      <div className="text-sm text-green-400">✓ {s.criteria}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pattern 2 */}
            <div className="bg-gray-900 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Pattern 2: Data Analysis Pipeline</h3>
              <div className="space-y-3">
                {[
                  { num: 1, name: "Data Understanding", desc: "Describe dataset, flag issues", criteria: "All columns characterized, issues listed" },
                  { num: 2, name: "Cleaning Agent", desc: "Generate cleaning code", criteria: "Code runs, each step justified" },
                  { num: 3, name: "Analysis Design", desc: "Propose approach", criteria: "Matches RQ, assumptions stated" },
                  { num: 4, name: "Implementation", desc: "Write analysis code", criteria: "Code runs, outputs interpretable" },
                  { num: 5, name: "Interpretation", desc: "Explain findings", criteria: "No overclaiming, limitations noted" },
                  { num: 6, name: "Methodology Validator", desc: "Review statistical choices", criteria: "No errors, alternatives considered" },
                  { num: 7, name: "Reproducibility Checker", desc: "Replication possible?", criteria: "All decisions documented" }
                ].map(s => (
                  <div key={s.num} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm shrink-0">{s.num}</div>
                    <div className="flex-1">
                      <span className="font-bold text-white">{s.name}</span>
                      <span className="text-gray-400 ml-2">— {s.desc}</span>
                      <div className="text-sm text-green-400">✓ {s.criteria}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pattern 3 */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Pattern 3: POC Development Pipeline</h3>
              <div className="space-y-3">
                {[
                  { num: 1, name: "Requirements", desc: "What must POC demonstrate?", criteria: "Clear pass/fail criteria for POC" },
                  { num: 2, name: "Architecture", desc: "Minimal viable structure", criteria: "Architecture matches requirements" },
                  { num: 3, name: "Implementation", desc: "Build each piece", criteria: "Component works in isolation" },
                  { num: 4, name: "Integration", desc: "Connect components", criteria: "End-to-end flow works" },
                  { num: 5, name: "Testing", desc: "Generate test cases", criteria: "Tests cover requirements" },
                  { num: 6, name: "Documentation", desc: "Create usage guide", criteria: "Someone else could run it" }
                ].map(s => (
                  <div key={s.num} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm shrink-0">{s.num}</div>
                    <div className="flex-1">
                      <span className="font-bold text-white">{s.name}</span>
                      <span className="text-gray-400 ml-2">— {s.desc}</span>
                      <div className="text-sm text-green-400">✓ {s.criteria}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 10 */}
          <section id="claude" className="mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4 mb-6">
              10. Claude-Specific Features
            </h2>

            <p className="text-gray-300 mb-6">
              These principles apply to any LLM, but Claude makes certain patterns especially effective.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Why Claude for Academic Work</h3>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-white">Extended thinking:</strong> Shows reasoning process — critical for understanding why outputs look the way they do</li>
              <li><strong className="text-white">Long context window:</strong> Academic papers, datasets, literature reviews exceed what other models handle gracefully</li>
              <li><strong className="text-white">Nuanced instruction-following:</strong> Handles complex, multi-constraint prompts without losing thread</li>
              <li><strong className="text-white">Consistency in voice:</strong> Stable tone across long outputs — crucial for papers</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Projects Feature</h3>
            <p className="text-gray-300 mb-4">
              Set persistent instructions and upload reference files (papers, style guides, terminology glossaries). 
              Context persists across conversations.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Artifacts</h3>
            <p className="text-gray-300 mb-4">
              Claude generates documents, code, diagrams in a separate panel. Easy to iterate without losing the conversation thread.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Model Selection Strategy</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-blue-400">Model</th>
                  <th className="text-left py-2 text-blue-400">Use For</th>
                  <th className="text-left py-2 text-blue-400">Trade-off</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2">Sonnet 4</td>
                  <td>Iteration, drafting, simpler tasks</td>
                  <td>Fast, cheap, good enough for most</td>
                </tr>
                <tr>
                  <td className="py-2">Opus 4</td>
                  <td>Deep reasoning, complex analysis, final drafts</td>
                  <td>Slower, worth it for important outputs</td>
                </tr>
              </tbody>
            </table>
            <p className="text-blue-400 text-sm mt-4 italic">
              Strategy: Draft with Sonnet. Refine with Opus.
            </p>
          </section>

          {/* SECTION 11 */}
          <section id="cheatsheet" className="mb-16">
            <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4 mb-6">
              11. Quick Reference
            </h2>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">The Seven Components Checklist</h3>
            <ol className="space-y-2 text-gray-300">
              <li>☐ <strong>1. Identity & Role</strong> — Agent knows who it is and relationships</li>
              <li>☐ <strong>2. Context & Background</strong> — All necessary project info provided</li>
              <li>☐ <strong>3. Task Specification</strong> — Clear requirements AND boundaries</li>
              <li>☐ <strong>4. Output Format</strong> — Exact structure defined</li>
              <li className="text-blue-400">☐ <strong>5. Acceptance Criteria</strong> — Checkable, binary pass/fail</li>
              <li className="text-blue-400">☐ <strong>6. Rejection Protocol</strong> — Max iterations, escalation path</li>
              <li className="text-blue-400">☐ <strong>7. Handoff Specification</strong> — Who receives, what context passes</li>
            </ol>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Agent Roles Quick Reference</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { emoji: "🎯", role: "PI", job: "Orchestrates, decides" },
                { emoji: "🔬", role: "Domain", job: "Field expertise" },
                { emoji: "📊", role: "Methods", job: "Stats, validity" },
                { emoji: "✍️", role: "Writing", job: "Style, clarity" },
                { emoji: "😈", role: "Devil's Advocate", job: "Attack, break" },
                { emoji: "🔗", role: "Editor", job: "Synthesize, unify" }
              ].map((a, i) => (
                <div key={i} className="bg-gray-900 rounded-lg p-3 text-center">
                  <span className="text-2xl">{a.emoji}</span>
                  <p className="font-bold text-white text-sm">{a.role}</p>
                  <p className="text-gray-400 text-xs">{a.job}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Common Failure Modes</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-red-400">Problem</th>
                  <th className="text-left py-2 text-green-400">Fix</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800"><td className="py-2">Vague identity</td><td>Define expertise and relationships</td></tr>
                <tr className="border-b border-gray-800"><td className="py-2">Scope creep</td><td>Add explicit "DO NOT" boundaries</td></tr>
                <tr className="border-b border-gray-800"><td className="py-2">Can't tell if output passed</td><td>Add checkable acceptance criteria</td></tr>
                <tr className="border-b border-gray-800"><td className="py-2">Stuck on failure</td><td>Add rejection protocol with max iterations</td></tr>
                <tr className="border-b border-gray-800"><td className="py-2">Context dropped between agents</td><td>Add handoff specification</td></tr>
                <tr><td className="py-2">Devil's Advocate too friendly</td><td>"If you find less than 3 weaknesses, you failed"</td></tr>
              </tbody>
            </table>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Key Mantras</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "You're not prompting — you're managing a research team",
                "Acceptance criteria first, always",
                "Validation isn't optional — it's the whole point",
                "The Devil's Advocate is your best friend",
                "Components 5-7 are where the magic is",
                "If it looks smart, verify it twice"
              ].map((m, i) => (
                <div key={i} className="bg-gray-900 rounded-lg p-4 text-gray-300">
                  "{m}"
                </div>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <div className="border-t border-gray-800 pt-8 mt-16">
            <p className="text-gray-500 text-center">
              LLM Mastery for Academia — The Complete Handbook
              <br />
              <span className="text-sm">From Prompts to Systems</span>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
