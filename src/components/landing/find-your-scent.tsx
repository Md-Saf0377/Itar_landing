
'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import FadeInSection from './fade-in-section';
import { perfumes, Perfume } from '@/lib/perfumes';

const quizQuestions = [
  {
    step: 1,
    question: 'Which scent family are you drawn to?',
    options: [
      { text: 'Floral' },
      { text: 'Woody' },
      { text: 'Fresh' },
      { text: 'Sweet' },
      { text: 'Spicy/Oriental' },
    ],
  },
  {
    step: 2,
    question: 'What occasion do you have in mind?',
    options: [
      { text: 'Everyday Wear' },
      { text: 'Special Evening' },
      { text: 'A Night Out' },
      { text: 'Work & Office' },
      { text: 'A Relaxing Day' },
    ],
  },
  {
    step: 3,
    question: 'How would you describe your style?',
    options: [
        { text: 'Elegant & Classic' },
        { text: 'Modern & Bold' },
        { text: 'Natural & Earthy' },
        { text: 'Romantic & Dreamy' },
        { text: 'Minimalist & Chic' },
    ],
  },
    {
    step: 4,
    question: 'How strong do you prefer your fragrance?',
    options: [
        { text: 'Subtle & Light' },
        { text: 'Noticeable' },
        { text: 'Bold & Long-lasting' },
    ],
  },
   {
    step: 5,
    question: 'Choose a key ingredient that appeals to you:',
    options: [
        { text: 'Rose' },
        { text: 'Sandalwood' },
        { text: 'Bergamot' },
        { text: 'Oud' },
    ],
  },
];

export default function FindYourScent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(quizQuestions.length).fill(null));
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [recommendedScent, setRecommendedScent] = useState<Perfume | null>(null);

  const handleOptionClick = (optionText: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentStep] = optionText;
    setSelectedAnswers(newAnswers);

    if (currentStep < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    }
  };

  const handleDiscoverClick = () => {
    // Simple logic to pick a scent based on answers.
    // This can be replaced with a more sophisticated algorithm or AI call.
    const answerString = selectedAnswers.join('');
    let hash = 0;
    for (let i = 0; i < answerString.length; i++) {
      const char = answerString.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    const index = Math.abs(hash) % perfumes.length;
    setRecommendedScent(perfumes[index]);
    setQuizCompleted(true);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswers(Array(quizQuestions.length).fill(null));
    setQuizCompleted(false);
    setRecommendedScent(null);
  }

  const progress = ((currentStep + 1) / quizQuestions.length) * 100;
  const currentQuestion = quizQuestions[currentStep];

  return (
    <section id="find-your-scent" className="relative w-full overflow-hidden bg-secondary py-12 md:py-24 lg:py-32">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Subtle golden geometric accents */}
        <div 
          className="absolute top-0 left-0 w-64 h-64 border-4 border-primary/20 rounded-full"
          style={{ transform: 'translate(-20%, -20%)' }}
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 border-l-4 border-b-4 border-primary/20"
          style={{ transform: 'translate(30%, 30%) rotate(45deg)' }}
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeInSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
                Find Your Perfect Scent
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Answer a few simple questions to discover the Kaab Fragrance that's uniquely you.
              </p>
            </div>
          </div>
        </FadeInSection>
        <div className="mx-auto mt-12 max-w-4xl">
        <FadeInSection>
          <Card className="rounded-xl border-2 border-primary/20 bg-background/80 shadow-2xl shadow-primary/5 backdrop-blur-md">
            <CardContent className="p-6 md:p-10">
              {!quizCompleted ? (
                <>
                  <div className="mb-6 text-center">
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Step {currentQuestion.step} of {quizQuestions.length}</p>
                    <Progress value={progress} className="h-2 w-full" />
                  </div>
                  <h3 className="mb-8 text-center font-headline text-2xl font-semibold md:text-3xl">
                    {currentQuestion.question}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option.text}
                        onClick={() => handleOptionClick(option.text)}
                        className={cn(
                          'group flex w-40 flex-col items-center justify-center gap-3 rounded-lg border-2 p-4 text-center transition-all duration-300',
                          selectedAnswers[currentStep] === option.text
                            ? 'border-primary bg-primary/10'
                            : 'border-border/50 hover:border-black hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black'
                        )}
                      >
                        <span className="text-sm font-medium group-hover:text-white dark:group-hover:text-black">{option.text}</span>
                      </button>
                    ))}
                  </div>
                   {currentStep === quizQuestions.length - 1 && selectedAnswers[currentStep] && (
                     <div className="mt-10 flex justify-center">
                        <Button 
                          size="lg"
                          onClick={handleDiscoverClick}
                          className="bg-primary text-primary-foreground shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary/40 hover:scale-105 hover:bg-opacity-90"
                          style={{backgroundColor: '#C9ADA7'}}
                        >
                            Discover My Scent
                        </Button>
                     </div>
                   )}
                </>
              ) : (
                <div className="text-center">
                  <h3 className="font-headline text-3xl font-bold">Thank you!</h3>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Based on your answers, your perfect scent is waiting.
                  </p>
                  <p className="mt-2 font-bold text-2xl text-primary">{recommendedScent?.name || 'Radical Rose'}</p>
                   <div className="mt-8 flex justify-center">
                        <Button 
                          onClick={resetQuiz}
                          size="lg"
                          className="bg-primary text-primary-foreground shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary/40 hover:scale-105 hover:bg-opacity-90"
                          style={{backgroundColor: '#C9ADA7'}}
                        >
                            Take Again
                        </Button>
                     </div>
                </div>
              )}
            </CardContent>
          </Card>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
