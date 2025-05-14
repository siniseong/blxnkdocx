import type { Metadata } from 'next';
import { LinkItemType } from 'fumadocs-ui/layout';
import React from 'react';
import { HomeCard } from '@/components/HomeCard';
import { Header } from '@/components/Header';

const navLinks = [
  {
    text: 'Docs',
    url: '/frotend',
  },  
  {
    text: 'Contribution',
    url: '/',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow grid" style={{ "gridTemplateRows": "1fr auto"}}>
        <main className="overflow-hidden relative w-full pt-8 px-4 lg:px-0 space-y-16 pb-48">
          <section className="mx-auto w-full max-w-6xl overflow-x-hidden">
            <div className="relative flex flex-col lg:items-center z-10">
              <h1 className="text-4xl lg:text-5xl font-bold pt-20 mb-6">
                A home for our documentations
              </h1> 
              <p className="lg:text-center text-lg max-w-2xl text-gray-600 dark:text-gray-400 mb-10">
                Comprehensive documentation for all our libraries with API references and detailed guides.
              </p>

              <div className="flex flex-row gap-4 items-center">
                <a href="https://github.com/LiterateInk" className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none bg-secondary/60 hover:bg-accent shadow-background/20 h-11 px-6 rounded-full border border-bg-secondary/40">
                  GitHub
                </a>
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl flex flex-wrap justify-center items-stretch gap-8">
            <HomeCard
              name='frotend'
              description='A purrfect API wrapper for PRONOTE'
            />
            <HomeCard
              name='Pawdirecte'
              description='A purrfect API wrapper for EcoleDirecte'
            />
            <HomeCard
              name='Educawtable'
              description='An awmazing API wrapper for Educartable'
            />
            <HomeCard
              name='Meowdle'
              description='A purrfect API wrapper for Moodle'
            />
            <HomeCard
              name='Turbawself'
              description='An awmazing API wrapper for Turboself'
            />
            <HomeCard
              name='WebRestaw'
              description='An awmazing API wrapper for WebResto'
            />
            <HomeCard
              name='PawRD'
              description='An awmazing API wrapper for ARD GEC'
            />
            <HomeCard
              name='Crowous'
              description='A wrapper for the mobile API of Les Crous'
            />
            <HomeCard
              name='Pawnilim'
              description='A purrfect API wrapper for Unilim'
            />
          </section>
        </main>
      </div>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "LiterateInk: A home for our documentations",
    description: "Comprehensive documentation for all our libraries with API references and detailed guides.",
  } satisfies Metadata;
}