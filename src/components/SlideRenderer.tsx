'use client';

import React from 'react';

interface SlideProps {
  slide: any;
  index: number;
  total: number;
}

export function SlideRenderer({ slide, index, total }: SlideProps) {
  const renderSlide = () => {
    switch (slide.type) {
      case 'title':
        return <TitleSlide slide={slide} />;
      case 'section':
        return <SectionSlide slide={slide} />;
      case 'quote':
        return <QuoteSlide slide={slide} />;
      case 'list':
        return <ListSlide slide={slide} />;
      case 'numbered-list':
        return <NumberedListSlide slide={slide} />;
      case 'comparison':
        return <ComparisonSlide slide={slide} />;
      case 'diagram':
        return <DiagramSlide slide={slide} />;
      case 'role':
        return <RoleSlide slide={slide} />;
      case 'table':
        return <TableSlide slide={slide} />;
      case 'component-detail':
        return <ComponentDetailSlide slide={slide} />;
      case 'gates':
        return <GatesSlide slide={slide} />;
      case 'exercise':
        return <ExerciseSlide slide={slide} />;
      case 'summary':
        return <SummarySlide slide={slide} />;
      case 'preview':
        return <PreviewSlide slide={slide} />;
      case 'pipeline':
        return <PipelineSlide slide={slide} />;
      case 'resources':
        return <ResourcesSlide slide={slide} />;
      default:
        return <DefaultSlide slide={slide} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-5xl w-full">
          {renderSlide()}
        </div>
      </div>
      <div className="p-4 flex justify-between items-center text-gray-500 text-sm">
        <div>{slide.id}</div>
        <div>{index + 1} / {total}</div>
      </div>
    </div>
  );
}

function TitleSlide({ slide }: { slide: any }) {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {slide.title}
      </h1>
      <p className="text-3xl text-gray-300">{slide.subtitle}</p>
      <div className="pt-8">
        <p className="text-xl text-blue-400">{slide.session}</p>
        <p className="text-gray-500 mt-4">{slide.footer}</p>
      </div>
    </div>
  );
}

function SectionSlide({ slide }: { slide: any }) {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-5xl font-bold text-white">{slide.title}</h2>
      {slide.subtitle && (
        <p className="text-2xl text-gray-400">{slide.subtitle}</p>
      )}
    </div>
  );
}

function QuoteSlide({ slide }: { slide: any }) {
  return (
    <div className="space-y-8">
      {slide.title && (
        <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
      )}
      <blockquote className="text-3xl text-blue-400 italic border-l-4 border-blue-500 pl-6">
        "{slide.quote}"
      </blockquote>
      {slide.subtext && (
        <p className="text-xl text-gray-400">{slide.subtext}</p>
      )}
      {slide.points && (
        <ul className="space-y-3 mt-8">
          {slide.points.map((point: string, i: number) => (
            <li key={i} className="text-xl text-gray-300 flex items-start gap-3">
              <span className="text-blue-500">→</span>
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ListSlide({ slide }: { slide: any }) {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
      <ul className="space-y-4">
        {slide.items.map((item: any, i: number) => (
          <li key={i} className="flex items-start gap-4">
            <span className="text-2xl text-blue-500 mt-1">→</span>
            <div>
              <span className="text-xl font-semibold text-white">{item.label}</span>
              <span className="text-xl text-gray-400"> — {item.desc}</span>
            </div>
          </li>
        ))}
      </ul>
      {slide.note && (
        <p className="text-gray-500 italic mt-8 border-t border-gray-800 pt-4">{slide.note}</p>
      )}
    </div>
  );
}

function NumberedListSlide({ slide }: { slide: any }) {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
      <ul className="space-y-4">
        {slide.items.map((item: any, i: number) => {
          const isHighlighted = slide.highlight?.includes(item.num);
          return (
            <li key={i} className={`flex items-start gap-4 ${isHighlighted ? 'bg-blue-500/10 -mx-4 px-4 py-2 rounded-lg border border-blue-500/30' : ''}`}>
              <span className={`text-2xl font-bold ${isHighlighted ? 'text-blue-400' : 'text-purple-500'}`}>
                {item.num}.
              </span>
              <div>
                <span className="text-xl font-semibold text-white">{item.label}</span>
                <span className="text-xl text-gray-400"> — {item.desc}</span>
              </div>
            </li>
          );
        })}
      </ul>
      {slide.note && (
        <p className="text-blue-400 font-medium mt-8 border-t border-gray-800 pt-4">{slide.note}</p>
      )}
    </div>
  );
}

function ComparisonSlide({ slide }: { slide: any }) {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
      <div className="grid grid-cols-1 gap-8">
        <div className="comparison-bad">
          <p className="text-lg font-semibold text-red-400 mb-4">{slide.before.label}</p>
          <div className="flex items-center gap-4 flex-wrap">
            {slide.before.flow.map((step: string, i: number) => (
              <React.Fragment key={i}>
                <span className="text-white bg-gray-800 px-4 py-2 rounded">{step}</span>
                {i < slide.before.flow.length - 1 && <span className="text-gray-500">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="comparison-good">
          <p className="text-lg font-semibold text-green-400 mb-4">{slide.after.label}</p>
          <div className="flex items-center gap-4 flex-wrap">
            {slide.after.flow.map((step: string, i: number) => (
              <React.Fragment key={i}>
                <span className="text-white bg-gray-800 px-4 py-2 rounded">{step}</span>
                {i < slide.after.flow.length - 1 && <span className="text-gray-500">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DiagramSlide({ slide }: { slide: any }) {
  if (slide.diagram === 'research-team') {
    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-white text-center">{slide.title}</h2>
        <div className="flex flex-col items-center gap-4">
          <div className="diagram-box w-96">
            <div className="text-lg font-bold text-blue-400">🎯 PRINCIPAL INVESTIGATOR</div>
            <div className="text-sm text-gray-400">Orchestrates, maintains research vision</div>
          </div>
          <div className="text-2xl text-blue-500">↓</div>
          <div className="flex gap-4">
            <div className="diagram-box w-48">
              <div className="font-bold text-blue-400">🔬 DOMAIN</div>
              <div className="text-sm text-gray-400">Field expertise</div>
            </div>
            <div className="diagram-box w-48">
              <div className="font-bold text-blue-400">📊 METHODS</div>
              <div className="text-sm text-gray-400">Stats & rigor</div>
            </div>
            <div className="diagram-box w-48">
              <div className="font-bold text-blue-400">✍️ WRITING</div>
              <div className="text-sm text-gray-400">Style & clarity</div>
            </div>
          </div>
          <div className="text-2xl text-blue-500">↓</div>
          <div className="diagram-box-danger w-64">
            <div className="font-bold text-red-400">😈 DEVIL'S ADVOCATE</div>
            <div className="text-sm text-gray-400">Attacks claims, finds weaknesses</div>
          </div>
          <div className="text-2xl text-blue-500">↓</div>
          <div className="diagram-box-success w-64">
            <div className="font-bold text-green-400">🔗 INTEGRATION EDITOR</div>
            <div className="text-sm text-gray-400">Synthesizes, resolves conflicts</div>
          </div>
        </div>
      </div>
    );
  }

  if (slide.diagram === 'phase-gate') {
    return (
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-white text-center">{slide.title}</h2>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div className="diagram-box px-6 py-4">
            <div className="font-bold">DRAFT</div>
          </div>
          <div className="text-center">
            <div className="diagram-box-warning px-4 py-2 text-sm">GATE 1</div>
            <div className="text-xs text-gray-500 mt-1">Criteria Met?</div>
          </div>
          <div className="diagram-box px-6 py-4">
            <div className="font-bold">REVIEW</div>
          </div>
          <div className="text-center">
            <div className="diagram-box-warning px-4 py-2 text-sm">GATE 2</div>
            <div className="text-xs text-gray-500 mt-1">Criteria Met?</div>
          </div>
          <div className="diagram-box px-6 py-4">
            <div className="font-bold">REVISION</div>
          </div>
          <div className="text-center">
            <div className="diagram-box-warning px-4 py-2 text-sm">GATE 3</div>
            <div className="text-xs text-gray-500 mt-1">Criteria Met?</div>
          </div>
          <div className="diagram-box-success px-6 py-4">
            <div className="font-bold text-green-400">FINAL</div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8">
          <span className="text-red-400">↓ REJECT</span> + Feedback → Redo (at any gate)
        </div>
      </div>
    );
  }

  return null;
}

function RoleSlide({ slide }: { slide: any }) {
  return (
    <div className={`space-y-6 ${slide.highlight ? 'bg-red-500/5 -m-8 p-8 rounded-xl border border-red-500/20' : ''}`}>
      <div className="flex items-center gap-4">
        <span className="text-5xl">{slide.emoji}</span>
        <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
      </div>
      <ul className="space-y-3">
        {slide.responsibilities.map((resp: string, i: number) => (
          <li key={i} className="text-xl text-gray-300 flex items-start gap-3">
            <span className="text-blue-500">•</span>
            {resp}
          </li>
        ))}
      </ul>
      <div className={`text-lg italic pt-4 border-t border-gray-800 ${slide.highlight ? 'text-red-400' : 'text-blue-400'}`}>
        💡 {slide.key}
      </div>
    </div>
  );
}

function TableSlide({ slide }: { slide: any }) {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700">
            {slide.headers.map((h: string, i: number) => (
              <th key={i} className="text-left py-3 px-4 text-blue-400 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slide.rows.map((row: string[], i: number) => (
            <tr key={i} className="border-b border-gray-800">
              {row.map((cell: string, j: number) => (
                <td key={j} className="py-3 px-4 text-gray-300">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {slide.note && (
        <p className="text-gray-500 italic">{slide.note}</p>
      )}
    </div>
  );
}

function ComponentDetailSlide({ slide }: { slide: any }) {
  return (
    <div className={`space-y-6 ${slide.highlight ? 'bg-blue-500/5 -m-4 p-4 rounded-xl border border-blue-500/20' : ''}`}>
      <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
      <pre className="code-block text-sm overflow-x-auto whitespace-pre-wrap">
        {slide.code}
      </pre>
      {slide.key && (
        <div className={`text-lg font-medium ${slide.highlight ? 'text-blue-400' : 'text-purple-400'}`}>
          💡 {slide.key}
        </div>
      )}
    </div>
  );
}

function GatesSlide({ slide }: { slide: any }) {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {slide.gates.map((gate: any, i: number) => (
          <div key={i} className="diagram-box-warning p-4">
            <h3 className="font-bold text-yellow-400 mb-3">{gate.name}</h3>
            <ul className="space-y-2">
              {gate.criteria.map((c: string, j: number) => (
                <li key={j} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-yellow-500">☐</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExerciseSlide({ slide }: { slide: any }) {
  return (
    <div className="space-y-6 bg-purple-500/10 -m-8 p-8 rounded-xl border border-purple-500/30">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-purple-400">{slide.title}</h2>
        <span className="text-purple-400 font-mono">{slide.time}</span>
      </div>
      <ol className="space-y-4">
        {slide.steps.map((step: string, i: number) => (
          <li key={i} className="text-xl text-gray-300 flex items-start gap-4">
            <span className="text-purple-400 font-bold">{i + 1}.</span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

function SummarySlide({ slide }: { slide: any }) {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
      <ul className="space-y-4">
        {slide.items.map((item: string, i: number) => (
          <li key={i} className="text-xl text-gray-300 flex items-start gap-4">
            <span className="text-green-500 text-2xl">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PreviewSlide({ slide }: { slide: any }) {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
      <p className="text-2xl text-blue-400">{slide.subtitle}</p>
      <ul className="space-y-3">
        {slide.items.map((item: string, i: number) => (
          <li key={i} className="text-xl text-gray-400 flex items-start gap-4">
            <span className="text-blue-500">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PipelineSlide({ slide }: { slide: any }) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">{slide.title}</h2>
      <div className="space-y-3">
        {slide.stages.map((stage: any, i: number) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
              {i + 1}
            </div>
            <div className="flex-1 bg-gray-800/50 rounded-lg p-3 border border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-white">{stage.name}</span>
                  <span className="text-gray-400 ml-2">— {stage.desc}</span>
                </div>
              </div>
              <div className="text-sm text-green-400 mt-1">✓ {stage.criteria}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResourcesSlide({ slide }: { slide: any }) {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {slide.items.map((item: string, i: number) => (
          <div key={i} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 flex items-center gap-3">
            <span className="text-blue-500 text-xl">📄</span>
            <span className="text-gray-300">{item}</span>
          </div>
        ))}
      </div>
      {slide.note && (
        <p className="text-blue-400 text-center mt-8">{slide.note}</p>
      )}
    </div>
  );
}

function DefaultSlide({ slide }: { slide: any }) {
  return (
    <div className="space-y-4">
      <h2 className="text-4xl font-bold text-white">{slide.title || 'Slide'}</h2>
      <pre className="code-block">{JSON.stringify(slide, null, 2)}</pre>
    </div>
  );
}
