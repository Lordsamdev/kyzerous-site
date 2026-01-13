import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/Section';

const Apply: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjggvgpr", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setError("There was a problem submitting your form. Please check the fields and try again.");
        } else {
          setError("Something went wrong. Please try again later.");
        }
      }
    } catch (err) {
      setError("Unable to connect to the server. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttonBaseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 border border-transparent disabled:opacity-70 disabled:cursor-not-allowed w-full py-4 text-base";

  return (
    <div className="animate-fade-in">
      <Section className="pt-32">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Column: Context */}
          <div>
            <h1 className="text-4xl font-semibold mb-8">Apply to Work<br/>with Kyzerous</h1>
            <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
              Kyzerous works with a limited number of teams and companies.
              Applications are reviewed to ensure fit, scope alignment, and decision readiness.
            </p>

            <div className="mb-12">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-6">Process</h3>
              <ol className="space-y-4 text-neutral-800">
                <li className="flex items-start">
                  <span className="font-mono text-neutral-300 mr-4">01</span>
                  Application review
                </li>
                <li className="flex items-start">
                  <span className="font-mono text-neutral-300 mr-4">02</span>
                  Short clarification conversation
                </li>
                <li className="flex items-start">
                  <span className="font-mono text-neutral-300 mr-4">03</span>
                  Scoped engagement proposal
                </li>
              </ol>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">Guidance</h3>
              <p className="mb-4 text-sm text-neutral-500">Please apply only if:</p>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-300">•</span>
                  Your team is already using AI video tools
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-300">•</span>
                  You are responsible for execution decisions
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-300">•</span>
                  You value structure over experimentation
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-300">•</span>
                  You are prepared to implement systems
                </li>
              </ul>
            </div>
            
            <div className="mt-12 pt-8 border-t border-neutral-100 text-neutral-400 text-sm font-light italic">
              AI video is not a creativity problem.<br/>
              It is an execution problem.<br/>
              Kyzerous exists to solve the execution layer.
            </div>
          </div>

          {/* Right Column: Form */}
          <div>
             <form className="space-y-6" onSubmit={handleSubmit} noValidate>
               <div className="grid grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="firstName" className="block text-sm font-medium text-neutral-500 mb-2">First Name *</label>
                   <input required name="firstName" type="text" id="firstName" className="w-full bg-white border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors" />
                 </div>
                 <div>
                   <label htmlFor="lastName" className="block text-sm font-medium text-neutral-500 mb-2">Last Name *</label>
                   <input required name="lastName" type="text" id="lastName" className="w-full bg-white border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors" />
                 </div>
               </div>

               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-neutral-500 mb-2">Work Email *</label>
                 <input required name="email" type="email" id="email" className="w-full bg-white border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors" />
               </div>

               <div>
                 <label htmlFor="company" className="block text-sm font-medium text-neutral-500 mb-2">Company / Organization *</label>
                 <input required name="company" type="text" id="company" className="w-full bg-white border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors" />
               </div>
               
               <div>
                  <label htmlFor="role" className="block text-sm font-medium text-neutral-500 mb-2">Your Role *</label>
                  <input required name="role" type="text" id="role" className="w-full bg-white border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors" />
               </div>

               <div>
                 <label htmlFor="tools" className="block text-sm font-medium text-neutral-500 mb-2">Which AI Video tools are you currently using? *</label>
                 <input required name="tools" type="text" id="tools" placeholder="e.g. Runway, Pika, Kling..." className="w-full bg-white border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-300" />
               </div>

               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-neutral-500 mb-2">Briefly describe your current challenge *</label>
                 <textarea required name="message" id="message" rows={4} className="w-full bg-white border border-neutral-200 px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors resize-none"></textarea>
               </div>

               {error && (
                  <div className="p-4 bg-red-50 text-red-600 text-sm border border-red-100 rounded-sm">
                    {error}
                  </div>
               )}

               <div className="pt-4">
                 <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className={buttonBaseStyles}
                 >
                   {isSubmitting ? 'Submitting...' : 'Submit Application'}
                 </button>
               </div>
               
               <p className="text-xs text-neutral-400 text-center">
                 Your information is kept strictly confidential.
               </p>
             </form>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default Apply;