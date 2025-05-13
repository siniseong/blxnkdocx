  import { type DocsLayoutProps } from 'fumadocs-ui/layout';
  import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
  import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
  import { source } from '@/lib/source';

  export const baseOptions: HomeLayoutProps = {
    nav: {
      title: 'LiterateInk',
    },
  };

  export const docsOptions: DocsLayoutProps = {
    ...baseOptions,
    tree: source.pageTree,
    githubUrl: "https://github.com/ LiterateInk",
    sidebar: {
      banner: (
        <RootToggle
          options={[
            {
              title: '프론트엔드',
              description: '',
              url: '/frotend',
              icon: '',
            },
            {
              title: '백엔드',
              description: '',
              url: '/pawdirecte',
              icon: '',
            },
            {
              title: 'UI/UX 디자인',
              description: '',
              url: '/turbawself',
              icon: '',
            },
            {
              title: 'DevOps',
              description: '',
              url: '/educawtable',
              icon: '',
            },
            {
              title: '보안',
              description: '',
              url: '/meowdle',
              icon: '',
            },
            {
              title: '임베디드',
              description: '',
              url: '/webrestaw',
              icon: '',
            },
          ]}
        />
      ),
    }
  };
