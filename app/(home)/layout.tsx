'use client';

import { Header } from '@/components/Header';
import { cn } from '@/src/lib/utils';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow grid" style={{ "gridTemplateRows": "1fr auto"}}>
        <main className="overflow-hidden relative w-full pt-4 px-4 lg:px-0 space-y-8 pb-32">
          <section className="mx-auto w-full max-w-6xl overflow-x-hidden">
            <div 
              className={cn(
                "relative flex flex-col z-10",
                "prose prose-gray dark:prose-invert max-w-none tight-paragraphs",
                "prose-headings:font-bold prose-headings:tracking-tight",
                "prose-h1:text-4xl prose-h1:lg:text-5xl prose-h1:pt-12 prose-h1:mt-4",
                "prose-h2:text-2xl",
                "prose-p:text-lg prose-p:leading-none prose-p:my-0",
                "prose-a:text-primary hover:prose-a:text-primary/80",
                "prose-img:rounded-none"
              )}
            >
              {children}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}