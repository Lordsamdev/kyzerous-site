import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex items-center justify-center px-6 md:px-12 bg-transparent relative overflow-hidden">
         {/* Subtle abstract background element */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50 skew-x-12 translate-x-32 -z-10 opacity-50"></div>
         
         <div className="max-w-4xl w-full pt-12">
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-neutral-900 mb-8 animate-slide-up">
              AI Video Systems for Teams<br className="hidden md:block"/> Who Need Consistency,<br className="hidden md:block"/> Not Experiments
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 font-light mb-8 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Kyzerous consults with companies and creative teams using generative video tools to design structured, repeatable AI video workflows that scale.
            </p>
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              This is not content creation. This is execution architecture.
            </p>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button to="/apply">Apply for a Private Engagement</Button>
            </div>
         </div>
      </section>

      {/* SECTION: CONTEXT */}
      <Section background="light">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-medium mb-6">Most teams adopt AI video tools quickly.<br/>Very few integrate them properly.</h2>
          </div>
          <div className="text-neutral-600 leading-relaxed">
            <p className="mb-6">The result is familiar:</p>
            <ul className="space-y-3 mb-8 border-l-2 border-neutral-200 pl-6">
              <li>Inconsistent outputs</li>
              <li>Prompt drift across projects</li>
              <li>Excessive iteration</li>
              <li>Credit waste</li>
              <li>Creative teams stuck “testing” instead of producing</li>
            </ul>
            <p className="mb-6">
              AI video tools are powerful, but without structure, they introduce volatility into creative pipelines.
            </p>
            <p className="text-neutral-900 font-medium">
              Kyzerous exists to remove that volatility.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION: PHILOSOPHY */}
      <Section>
        <div className="max-w-2xl">
          <span className="block text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Philosophy</span>
          <h2 className="text-4xl font-semibold text-neutral-900 mb-8">Prompting Is Not Typing</h2>
          
          <div className="prose prose-lg prose-neutral text-neutral-600">
            <p className="mb-6">
              Prompting is a thinking discipline.
            </p>
            <p className="mb-6">
              AI video systems do not fail randomly. They fail when intent, constraints, and sequencing are unclear. The model reflects the structure of the instructions it receives.
            </p>
            <p className="mb-6">Kyzerous approaches AI video from first principles:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-neutral-50 border border-neutral-100">
                <span className="block text-sm text-neutral-400 mb-1">01</span>
                Define the outcome
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-100">
                <span className="block text-sm text-neutral-400 mb-1">02</span>
                Design the execution logic
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-100">
                <span className="block text-sm text-neutral-400 mb-1">03</span>
                Control variation
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-100">
                <span className="block text-sm text-neutral-400 mb-1">04</span>
                Standardize quality
              </div>
            </div>
            <p className="text-xl italic text-neutral-800 border-l-4 border-neutral-900 pl-4 py-1">
              Tools change. Systems endure.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION: WHAT KYZEROUS DOES */}
      <Section background="light">
         <h2 className="text-3xl font-medium mb-12">What We Do</h2>
         <div className="flex flex-col md:flex-row gap-12">
           <div className="w-full md:w-1/2">
             <img 
               src="https://picsum.photos/800/600?grayscale" 
               alt="Abstract architectural structure" 
               className="w-full h-80 object-cover grayscale opacity-90"
             />
           </div>
           <div className="w-full md:w-1/2 flex flex-col justify-center">
             <p className="text-neutral-600 mb-6 leading-relaxed">
               Kyzerous works with teams already using AI video generators such as Kling, Runway, Pika, Luma, and emerging platforms.
             </p>
             <p className="text-neutral-900 font-medium mb-8 text-lg">
               We do not generate videos for you.<br/>
               We design the systems your team uses to generate them reliably.
             </p>
             <div className="space-y-4">
               <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Includes</h3>
               <ul className="space-y-2 text-neutral-700">
                 <li className="flex items-center"><span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-3"></span>AI video execution frameworks</li>
                 <li className="flex items-center"><span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-3"></span>Prompt architecture and sequencing logic</li>
                 <li className="flex items-center"><span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-3"></span>Tool-specific workflow design</li>
                 <li className="flex items-center"><span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-3"></span>Internal playbooks and documentation</li>
               </ul>
             </div>
             <p className="mt-8 text-sm text-neutral-500">The goal is predictable output, faster production, and fewer creative dead ends.</p>
           </div>
         </div>
      </Section>

      {/* SECTION: WHO IT'S FOR */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-medium mb-6 flex items-center">
              <span className="bg-neutral-900 text-white w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">✓</span>
              Kyzerous Is For
            </h3>
            <ul className="space-y-4 text-neutral-600">
              <li className="pb-4 border-b border-neutral-100">Creative teams using AI video at scale</li>
              <li className="pb-4 border-b border-neutral-100">Studios integrating generative video into workflows</li>
              <li className="pb-4 border-b border-neutral-100">Companies experimenting seriously with AI video</li>
              <li className="pb-4 border-b border-neutral-100">Teams that care about consistency and quality</li>
            </ul>
          </div>
          
          <div className="opacity-60">
            <h3 className="text-2xl font-medium mb-6 flex items-center text-neutral-500">
              <span className="bg-neutral-200 text-neutral-500 w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">✕</span>
              Kyzerous Is Not For
            </h3>
            <ul className="space-y-4 text-neutral-500">
              <li className="pb-4 border-b border-neutral-100">Individuals learning AI video</li>
              <li className="pb-4 border-b border-neutral-100">Prompt collectors</li>
              <li className="pb-4 border-b border-neutral-100">“Make me a video” requests</li>
              <li className="pb-4 border-b border-neutral-100">Teams without decision authority</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CLOSING CTA */}
      <section className="py-32 px-6 md:px-12 bg-neutral-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            Kyzerous works with a limited number of teams at a time.
            If your organization is serious about AI video execution, apply below.
          </p>
          <Button to="/apply" variant="secondary" className="px-10 py-4 text-lg">Apply for a Private Engagement</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;