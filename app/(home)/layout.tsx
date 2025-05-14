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
          <section className="mx-auto w-full max-w-[1390px] overflow-x-hidden">
            <div 
              className={cn(
                "relative flex flex-col z-10",
                "prose prose-zinc dark:prose-invert max-w-none tight-paragraphs",
                "prose-headings:font-bold prose-headings:tracking-tight",
                "prose-h1:text-4xl prose-h1:lg:text-5xl prose-h1:mt-8",
                "prose-h2:text-2xl prose-h2:mb-2",
                "prose-h3:mb-1",
                "prose-p:text-lg prose-p:leading-relaxed prose-p:my-1",
                "prose-a:text-primary hover:prose-a:text-primary/80",
                "prose-img:rounded-none",
                "[&>h1]:mt-8"
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