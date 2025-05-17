import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { Metadata } from 'next';
import type { MDXComponents } from 'mdx/types';

export default async function Page({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsBody>
        <MDX components={defaultMdxComponents as MDXComponents} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string[];
  };
}): Promise<Metadata> {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
  };
}