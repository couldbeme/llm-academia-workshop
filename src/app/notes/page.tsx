'use client';

import Link from 'next/link';

export default function SpeakerNotesPage() {
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
            🖨️ Print Notes
          </button>
        </div>

        <h1 className="text-4xl font-bold mb-2">Speaker Notes</h1>
        <p className="text-gray-400 mb-8">Presenter guide with timing, emphasis points, and common questions</p>

        <nav className="bg-gray-900 rounded-xl p-6 mb-12">
          <div className="grid md:grid-cols-2 gap-4">
            <a href="#session1" className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <p className="font-bold text-blue-400">Session 1</p>
              <p className="text-sm text-gray-400">Foundations & Multi-Agent Architecture</p>
            </a>
            <a href="#session2" className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <p className="font-bold text-purple-400">Session 2</p>
              <p className="text-sm text-gray-400">Validation Cycles & Advanced Workflows</p>
            </a>
          </div>
        </nav>

        {/* SESSION 1 */}
        <section id="session1" className="mb-16">
          <h2 className="text-3xl font-bold text-blue-400 border-b border-gray-800 pb-4 mb-8">
            Session 1: Foundations & Multi-Agent Architecture
          </h2>
          <p className="text-gray-400 mb-8">Total time: 90 minutes</p>

          {/* Pre-Session */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">🎬 Pre-Session Setup</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Have Claude open in a browser tab (logged in, ready for live demo)</li>
              <li>• Create a "demo project" in Claude with a sample paper context</li>
              <li>• Test projector/screen sharing</li>
              <li>• Confirm participants have laptops and Claude access</li>
              <li>• Have templates page open: <code className="text-blue-400">/templates</code></li>
            </ul>
          </div>

          {/* Opening */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Opening: Philosophy & Mindset</h3>
              <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded">5 min</span>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-bold text-blue-400">Key Message:</p>
                <p>"This isn't about writing better prompts. It's about thinking in systems."</p>
              </div>
              
              <div>
                <p className="font-bold text-blue-400">Opening Hook (choose one):</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• "Raise your hand if you've used ChatGPT or Claude for research... Now keep it raised if you were satisfied with the output."</li>
                  <li>• "I'm going to show you why most of what you've learned about prompting is holding you back."</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-blue-400">Establish Credibility:</p>
                <p className="text-sm">
                  Briefly mention your research background + AI expertise. Don't oversell — 
                  you're a fellow researcher who figured this out, not an AI guru.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="font-bold text-yellow-400">⚡ Energy Note:</p>
                <p className="text-sm">High energy here. You're setting the tone. If they're skeptical, acknowledge it: "I was skeptical too."</p>
              </div>
            </div>
          </div>

          {/* The Problem */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">The Real Problem</h3>
              <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded">10 min</span>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-bold text-blue-400">The Five Deadly Mistakes:</p>
                <p className="text-sm">Go through each one. For each, ask: "Who's done this?" Get hands raised. They'll recognize themselves.</p>
              </div>

              <div>
                <p className="font-bold text-red-400">🎯 Emphasis Point:</p>
                <p className="text-sm">Mistake #5 (missing acceptance criteria) is the biggest. Pause here: "You can't evaluate what you haven't defined."</p>
              </div>

              <div>
                <p className="font-bold text-blue-400">The Paradigm Shift Slide:</p>
                <p className="text-sm">Walk through the before/after flow slowly. This is the mental model shift they need.</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="font-bold text-green-400">💡 Analogy That Works:</p>
                <p className="text-sm">"Imagine hiring a brilliant research assistant who just arrived from another country. They know nothing about your project. Would you just say 'write my literature review'? No — you'd onboard them."</p>
              </div>
            </div>
          </div>

          {/* Research Team Model */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">The Research Team Model</h3>
              <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded">25 min</span>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-bold text-blue-400">Team Diagram:</p>
                <p className="text-sm">Walk through the visual slowly. Explain each role. Build the picture in their heads.</p>
              </div>

              <div>
                <p className="font-bold text-blue-400">For Each Role (2-3 min each):</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Explain the responsibilities</li>
                  <li>• Give a concrete example from research</li>
                  <li>• Highlight the "key insight" for that role</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-red-400">🎯 Devil's Advocate Emphasis:</p>
                <p className="text-sm">
                  Spend extra time here. This is the non-obvious role. "This is Reviewer 2. They're not here to be helpful — they're here to break things."
                </p>
              </div>

              <div>
                <p className="font-bold text-blue-400">Team Sizing Table:</p>
                <p className="text-sm">Quick reference. Point out that simple tasks don't need the full team.</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="font-bold text-yellow-400">❓ Expected Question:</p>
                <p className="text-sm">"This seems like a lot of work for one task."</p>
                <p className="text-sm text-gray-400 mt-1">Answer: "It's front-loaded investment. You'll iterate less, catch errors earlier, and get better output. Net time is usually less."</p>
              </div>
            </div>
          </div>

          {/* Metaprompt Architecture */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">The Metaprompt Architecture</h3>
              <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded">25 min</span>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-bold text-blue-400">The Seven Components:</p>
                <p className="text-sm">Go through each. When you get to 5-7, slow down and emphasize: "Most people stop at 3 or 4. The magic is here."</p>
              </div>

              <div>
                <p className="font-bold text-purple-400">🔥 Live Demo (10 min):</p>
                <p className="text-sm">
                  Build a metaprompt live with audience input. Ask someone for their current research task.
                  Walk through all 7 components together. Use Claude to show what the output looks like.
                </p>
              </div>

              <div>
                <p className="font-bold text-blue-400">Methodology Expert Example:</p>
                <p className="text-sm">Walk through the full example. Point out specific lines. "See how this specifies what NOT to do?"</p>
              </div>

              <div>
                <p className="font-bold text-red-400">Common Failure Modes Slide:</p>
                <p className="text-sm">Quick hits. "Recognize any of these? You'll see them in the exercise."</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="font-bold text-yellow-400">❓ Expected Question:</p>
                <p className="text-sm">"Do I need to write all this every time?"</p>
                <p className="text-sm text-gray-400 mt-1">Answer: "You build a library. Templates page has starters. Over time, you'll have your own collection."</p>
              </div>
            </div>
          </div>

          {/* Practice */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Hands-On Practice</h3>
              <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded">20 min</span>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-bold text-purple-400">Exercise 1: Design Your Research Team (10 min)</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Have them pick a real task from their research</li>
                  <li>• Identify 3-4 roles needed</li>
                  <li>• Write full metaprompt for ONE role</li>
                  <li>• Pair up and review each other's work</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-purple-400">Exercise 2: Find the Weakness (10 min)</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Provide a flawed metaprompt (prepared in advance)</li>
                  <li>• Have them identify what's missing</li>
                  <li>• Debrief: What did people find?</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="font-bold text-yellow-400">🎯 Facilitation Tips:</p>
                <ul className="text-sm space-y-1">
                  <li>• Walk around, look at screens, answer questions</li>
                  <li>• Find good examples to share with the group</li>
                  <li>• If someone struggles, help them pick a simpler task</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Q&A */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Q&A Session</h3>
              <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded">10 min</span>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p className="font-bold text-blue-400">Common Questions & Answers:</p>
              
              <div className="bg-gray-800 rounded-lg p-4 space-y-4">
                <div>
                  <p className="font-bold text-white">"Isn't this just cheating?"</p>
                  <p className="text-sm text-gray-400">
                    "Is a calculator cheating? Is spell-check? These are tools. The thinking is still yours. 
                    The novelty, the research question, the interpretation — that's you. The LLM is a capable assistant, not a replacement."
                  </p>
                </div>

                <div>
                  <p className="font-bold text-white">"What about AI errors and hallucinations?"</p>
                  <p className="text-sm text-gray-400">
                    "That's exactly why we have validation cycles and Devil's Advocate. The system is designed to catch errors. 
                    Never trust output without verification — that's the whole point."
                  </p>
                </div>

                <div>
                  <p className="font-bold text-white">"My field is too specialized."</p>
                  <p className="text-sm text-gray-400">
                    "The structure is domain-agnostic. The specialization comes from YOU — in the context, the domain expertise, 
                    the documents you upload. You're the expert; the LLM is the capable generalist."
                  </p>
                </div>

                <div>
                  <p className="font-bold text-white">"This will be outdated in 6 months."</p>
                  <p className="text-sm text-gray-400">
                    "Features change. Principles don't. Multi-agent orchestration, validation cycles, acceptance criteria — 
                    these are concepts that work with any capable LLM, now and future."
                  </p>
                </div>

                <div>
                  <p className="font-bold text-white">"What about academic integrity?"</p>
                  <p className="text-sm text-gray-400">
                    "Check your institution's policy. Generally: use as a tool, cite when required, 
                    the intellectual contribution must be yours. Transparency is key."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Session 1 Closing</h3>
            <div className="space-y-4 text-gray-300">
              <p className="font-bold">Key Takeaways to Reinforce:</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>✓ You're not prompting — you're managing a research team</li>
                <li>✓ Seven components: Identity → Context → Task → Output → Acceptance → Rejection → Handoff</li>
                <li>✓ Acceptance criteria first, always</li>
                <li>✓ The Devil's Advocate is your best friend</li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                Preview Session 2: "Next time, we'll go deeper into validation — how to catch errors before they become problems, 
                and complete workflow patterns you can use immediately."
              </p>
            </div>
          </div>
        </section>

        {/* SESSION 2 */}
        <section id="session2" className="mb-16">
          <h2 className="text-3xl font-bold text-purple-400 border-b border-gray-800 pb-4 mb-8">
            Session 2: Validation Cycles & Advanced Workflows
          </h2>
          <p className="text-gray-400 mb-8">Total time: 90 minutes</p>

          {/* Recap */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Opening: Quick Recap</h3>
              <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded">5 min</span>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p className="text-sm">
                Quick hits from Session 1. Don't re-teach — remind and build.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Research Team Model (diagram flash)</li>
                <li>• Seven Components (list them)</li>
                <li>• "Acceptance criteria first, always"</li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                "Today we focus on: How do you know the output is actually good? Trust, but verify."
              </p>
            </div>
          </div>

          {/* Validation Imperative */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">The Validation Imperative</h3>
              <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded">15 min</span>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-bold text-red-400">🎯 The Trap:</p>
                <p className="text-sm">"It looks smart, so it must be right." Let this land. This is the setup for why validation matters.</p>
              </div>

              <div>
                <p className="font-bold text-blue-400">Fluency ≠ Accuracy:</p>
                <p className="text-sm">Give a quick example of fluent-but-wrong output if you have one. Real is better than hypothetical.</p>
              </div>

              <div>
                <p className="font-bold text-purple-400">🔥 Live Demo Suggestion:</p>
                <p className="text-sm">
                  Show a polished-looking output that contains a subtle error. Have them find it. 
                  Then show how validation catches it. "This is why we don't skip this step."
                </p>
              </div>

              <div>
                <p className="font-bold text-blue-400">Three Validation Types:</p>
                <p className="text-sm">
                  Self → Peer → Meta. Emphasize Meta-Validation: "Most people do 1, some do 2, almost nobody does 3. That's where the real power is."
                </p>
              </div>
            </div>
          </div>

          {/* Iteration Protocol */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Iteration & Escalation</h3>
              <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded">15 min</span>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-bold text-blue-400">Iteration Rules:</p>
                <p className="text-sm">Walk through each. Max 3 iterations, document changes, never iterate without feedback.</p>
              </div>

              <div>
                <p className="font-bold text-red-400">🎯 Key Point:</p>
                <p className="text-sm">"'Try again' is not a strategy. If you can't explain what to change, you're guessing."</p>
              </div>

              <div>
                <p className="font-bold text-blue-400">Escalation Protocol:</p>
                <p className="text-sm">
                  Show the format. "Fail gracefully. Give the human what they need to decide. 
                  This is professional-grade AI collaboration."
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="font-bold text-yellow-400">❓ Expected Question:</p>
                <p className="text-sm">"What if I need more than 3 iterations?"</p>
                <p className="text-sm text-gray-400 mt-1">
                  Answer: "If 3 iterations don't fix it, the problem isn't iteration — it's the original specification. 
                  Go back and fix the metaprompt."
                </p>
              </div>
            </div>
          </div>

          {/* Workflow Patterns */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Workflow Patterns</h3>
              <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded">25 min</span>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-bold text-blue-400">Literature Review Pipeline:</p>
                <p className="text-sm">Walk through all 7 stages. Point out the acceptance criteria at each gate. "See how each stage is checkable?"</p>
              </div>

              <div>
                <p className="font-bold text-purple-400">Data Analysis Pipeline:</p>
                <p className="text-sm">
                  This will resonate with STEM folks. Show the structured analysis request template. 
                  "This is what you give the agent. No back-and-forth fishing for information."
                </p>
              </div>

              <div>
                <p className="font-bold text-green-400">POC Development Pipeline:</p>
                <p className="text-sm">
                  Lighter coverage unless audience is technical. Main point: "POC = proof it CAN work. Not production code."
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="font-bold text-yellow-400">🎯 Emphasis:</p>
                <p className="text-sm">
                  "These are patterns, not rigid rules. Adapt them to your needs. But start with a pattern — 
                  don't reinvent from scratch."
                </p>
              </div>
            </div>
          </div>

          {/* Advanced Techniques */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Advanced Techniques</h3>
              <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded">10 min</span>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-bold text-blue-400">Dynamic Team Composition:</p>
                <p className="text-sm">Start small, add as needed. Remove when scope shrinks. Not every task needs the full team.</p>
              </div>

              <div>
                <p className="font-bold text-blue-400">Error Patterns Table:</p>
                <p className="text-sm">Quick reference. "Know what to look for by task type."</p>
              </div>

              <div>
                <p className="font-bold text-blue-400">Extended Thinking:</p>
                <p className="text-sm">Show when it's useful: complex reasoning, debugging, seeing the trade-offs.</p>
              </div>
            </div>
          </div>

          {/* Practice */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">Hands-On Practice</h3>
              <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded">20 min</span>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-bold text-purple-400">Exercise 1: Build a Validation Cycle (10 min)</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Use their task from Session 1</li>
                  <li>• Define 3 phases with gates</li>
                  <li>• Write acceptance criteria for each gate</li>
                  <li>• Write Devil's Advocate prompt for their domain</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-purple-400">Exercise 2: Break the System (10 min)</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Provide a complete workflow</li>
                  <li>• Find the weakest validation gate</li>
                  <li>• Design input that would pass but still be wrong</li>
                  <li>• Discuss: How would you fix it?</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="font-bold text-yellow-400">🎯 Key Learning:</p>
                <p className="text-sm">
                  Exercise 2 teaches them to think adversarially about their own systems. 
                  If they can break it, they can fix it.
                </p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Session 2 Closing</h3>
            <div className="space-y-4 text-gray-300">
              <p className="font-bold">Final Takeaways:</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>✓ Three validation types: Self, Peer, Meta</li>
                <li>✓ Iteration is structured, not random</li>
                <li>✓ Use workflow patterns — don't reinvent</li>
                <li>✓ The Devil's Advocate is non-negotiable</li>
              </ul>
              
              <div className="bg-gray-900 rounded-lg p-4 mt-6">
                <p className="font-bold text-white">Closing Quote:</p>
                <p className="italic text-blue-400">"You're not learning to prompt. You're learning to architect cognition."</p>
                <p className="text-sm text-gray-400 mt-2">Go build something.</p>
              </div>

              <p className="text-sm text-gray-400 mt-4">
                Point them to resources: <code className="text-blue-400">/templates</code> and <code className="text-blue-400">/handbook</code>
              </p>
            </div>
          </div>
        </section>

        {/* GENERAL TIPS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white border-b border-gray-800 pb-4 mb-8">
            General Presenter Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">✅ Do</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Share real examples from your own work</li>
                <li>• Admit when AI tools fail — builds trust</li>
                <li>• Pause for questions throughout</li>
                <li>• Let them see you debug in real-time</li>
                <li>• Rotate discipline-specific examples</li>
                <li>• Move around during practice</li>
                <li>• Find good participant examples to share</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">❌ Don't</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Oversell AI capabilities</li>
                <li>• Rush through the seven components</li>
                <li>• Skip the Devil's Advocate explanation</li>
                <li>• Let practice time get cut</li>
                <li>• Ignore resistance — address it</li>
                <li>• Use jargon without explaining</li>
                <li>• Fake a demo if something breaks — own it</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">⚡ Energy Management</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300 text-sm">
              <div>
                <p className="font-bold text-white mb-2">Session 1:</p>
                <p>Higher energy. You're establishing credibility and shifting mindsets. Build momentum.</p>
              </div>
              <div>
                <p className="font-bold text-white mb-2">Session 2:</p>
                <p>Can be more technical. They're bought in. Go deeper on the details.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <div className="border-t border-gray-800 pt-8 mt-16">
          <p className="text-gray-500 text-center">
            Speaker Notes — LLM Mastery for Academia
          </p>
        </div>
      </div>
    </div>
  );
}
