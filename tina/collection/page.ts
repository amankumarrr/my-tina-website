import type { Collection } from 'tinacms';
import { heroBlockSchema } from '@/src/components/blocks/hero';
import { contentBlockSchema } from '@/src/components/blocks/content';
import { testimonialBlockSchema } from '@/src/components/blocks/testimonial';
import { featureBlockSchema } from '@/src/components/blocks/features';
import { videoBlockSchema } from '@/src/components/blocks/video';
import { calloutBlockSchema } from '@/src/components/blocks/callout';
import { statsBlockSchema } from '@/src/components/blocks/stats';
import { ctaBlockSchema } from '@/src/components/blocks/call-to-action';

const Page: Collection = {
  label: 'Pages',
  name: 'page',
  path: 'content/pages',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      const filepath = document._sys.breadcrumbs.join('/');
      if (filepath === 'home') {
        return '/';
      }
      return `/${filepath}`;
    },
  },
  fields: [
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Sections',
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        calloutBlockSchema,
        featureBlockSchema,
        statsBlockSchema,
        ctaBlockSchema,
        contentBlockSchema,
        testimonialBlockSchema,
        videoBlockSchema,
      ],
    },
  ],
};

export default Page;
