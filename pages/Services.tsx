import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* HEADER */}
      <section className="pt-32 pb-20 px-6 md:px-12 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-semibold tracking-tight mb-8">AI Video Execution Consulting</h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
            Kyzerous provides AI Video Execution Consulting.<br/>
            The work focuses on transforming fragmented experimentation into structured, repeatable systems your team can own and operate.
          </p>
        </div>
      </section>

      {/* CORE ENGAGEMENT */}
      <Section>
        <div className="grid md:grid-cols-12 gap-12">
           <div className="md:col-span-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Core Engagement</span>
              <h2 className="text-3xl font-medium mt-4">AI Video Execution System</h2>
           </div>
           <div className="md:col-span-8 space-y-12">
              <div>
                <h3 className="text-xl font-medium mb-4">What This Is</h3>
                <p className="text-neutral-600 leading-relaxed">
                  A scoped consulting engagement where Kyzerous designs a complete AI video execution framework tailored to your team, tools, and objectives.
                </p>
                <div className="mt-6 flex space-x-6 text-sm font-medium text-neutral-400">
                  <span className="line-through decoration-neutral-300">This is not a workshop.</span>
                  <span className="line-through decoration-neutral-300">This is not training.</span>
                  <span className="text-neutral-900 border-b border-neutral-900 pb-0.5">This is system design.</span>
                </div>
              </div>

              <div className="bg-neutral-50 p-8">
                <h3 className="text-xl font-medium mb-6">What’s Included</h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {['Workflow diagnosis', 'Execution architecture', 'Tool-specific optimization', 'Internal playbook', 'Handoff and alignment'].map((item) => (
                    <li key={item} className="flex items-center text-neutral-700">
                      <svg className="w-4 h-4 mr-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
           </div>
        </div>
      </Section>

      {/* OUTCOMES */}
      <Section background="light">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-medium mb-6">Outcomes</h2>
          <p className="text-neutral-600">Teams typically see:</p>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-6">
           {[
             { title: "Reduced", desc: "Iteration cycles" },
             { title: "Consistent", desc: "Visual output" },
             { title: "Clear", desc: "Internal standards" },
             { title: "Less", desc: "Prompt guesswork" },
             { title: "Faster", desc: "Production timelines" },
           ].map((outcome, idx) => (
             <div key={idx} className="bg-white p-8 border border-neutral-100 flex flex-col items-center text-center hover:border-neutral-300 transition-colors duration-300">
                <span className="text-3xl font-light text-neutral-300 mb-2">0{idx + 1}</span>
                <span className="text-lg font-medium text-neutral-900">{outcome.title}</span>
                <span className="text-neutral-500">{outcome.desc}</span>
             </div>
           ))}
        </div>
      </Section>

      {/* COMMERCIAL STRUCTURE */}
      <Section>
        <div className="max-w-3xl mx-auto text-center border p-12 border-neutral-200">
          <h2 className="text-2xl font-medium mb-6">Commercial Structure</h2>
          <p className="text-neutral-600 mb-8 max-w-lg mx-auto leading-relaxed">
            Kyzerous operates on a private engagement basis.
            Pricing reflects scope, complexity, and organizational impact.
            Details are discussed after application review.
          </p>
          <Button to="/apply">Apply for a Private Engagement</Button>
        </div>
      </Section>
    </div>
  );
};

export default Services;