import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="max-w-2xl w-full p-8 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            LLM Mastery for Academia
          </h1>
          <p className="text-xl text-gray-400">
            From Prompts to Systems
          </p>
          <p className="text-gray-500">
            Workshop for Doctoral & Postdoctoral Researchers
          </p>
        </div>

        <div className="grid gap-6">
          <Link 
            href="/session1"
            className="block p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition group"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                  Session 1
                </h2>
                <p className="text-gray-400 mt-1">Foundations & Multi-Agent Architecture</p>
              </div>
              <span className="text-3xl text-gray-600 group-hover:text-blue-500 transition">→</span>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Research Team Model • Seven-Component Metaprompt • Phase-Gated Workflows • Devil&apos;s Advocate
            </div>
          </Link>

          <Link 
            href="/session2"
            className="block p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-500 transition group"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition">
                  Session 2
                </h2>
                <p className="text-gray-400 mt-1">Validation Cycles & Advanced Workflows</p>
              </div>
              <span className="text-3xl text-gray-600 group-hover:text-purple-500 transition">→</span>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Three Validation Types • Iteration Protocol • Workflow Patterns • Meta-Validation
            </div>
          </Link>

          <Link 
            href="/templates"
            className="block p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-green-500 transition group"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white group-hover:text-green-400 transition">
                  Templates & Resources
                </h2>
                <p className="text-gray-400 mt-1">Copy-paste ready templates</p>
              </div>
              <span className="text-3xl text-gray-600 group-hover:text-green-500 transition">→</span>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Metaprompt Template • Agent Roles • Workflow Blueprints • Cheat Sheets
            </div>
          </Link>
        </div>

        <div className="text-center text-gray-600 text-sm">
          Use <kbd className="bg-gray-800 px-2 py-1 rounded">←</kbd> <kbd className="bg-gray-800 px-2 py-1 rounded">→</kbd> or <kbd className="bg-gray-800 px-2 py-1 rounded">Space</kbd> to navigate slides
          <br />
          Press <kbd className="bg-gray-800 px-2 py-1 rounded">F</kbd> for fullscreen
        </div>
      </div>
    </div>
  );
}
