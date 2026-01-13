import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const ThankYou: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Section className="min-h-[60vh] flex items-center justify-center text-center">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-medium mb-6">Application Received</h1>
          <p className="text-neutral-600 mb-10 leading-relaxed text-lg">
            Thank you for your interest in Kyzerous.<br/>
            We will review your details and reach out if there is a potential fit.
          </p>
          <Button to="/" variant="outline">Return Home</Button>
        </div>
      </Section>
    </div>
  );
};

export default ThankYou;