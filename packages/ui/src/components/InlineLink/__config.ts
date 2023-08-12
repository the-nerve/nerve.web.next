import { cva } from 'cva';

import type { ComposeVariantProps } from '../../types';
import { type LinkHandlerProps } from '../LinkHandler';

/* -------------------------------------------------------------------------------------------------
 * Styles
 * -----------------------------------------------------------------------------------------------*/

export const inlineLinkVariants = cva(
  [
    'inline-block outline-none outline-offset-2 focus-visible:outline-2 underline-offset-4 rounded-sm',
    'focus-visible:no-underline hover:underline',
  ],
  {
    variants: {
      color: {
        accent: ['text-accent-light focus-visible:outline-accent-light'],
        neutral: ['text-neutral focus-visible:outline-neutral'],
      },
      disabled: {
        true: ['cursor-not-allowed opacity-disabled'],
        false: [],
      },
    },
  }
);

/* -------------------------------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------------------------*/

export type InlineLinkProps = ComposeVariantProps<typeof inlineLinkVariants> & LinkHandlerProps;
