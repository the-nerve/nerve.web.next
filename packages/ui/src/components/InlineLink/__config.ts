import { cva } from 'cva';

import type { ComposeVariantProps } from '../../types';
import { type LinkHandlerProps } from '../LinkHandler';

/* -------------------------------------------------------------------------------------------------
 * Styles
 * -----------------------------------------------------------------------------------------------*/

export const inlineLinkVariants = cva(
  [
    'text-inherit inline-block outline-1 outline-offset-2 underline underline-offset-4 rounded-sm',
    'focus-visible:no-underline hover:text-secondary active:text-secondary',
  ],
  {
    variants: {
      color: {
        primary: [
          'text-primary outline-primary decoration-primary visited:text-secondary visited:decoration-secondary visited:focus-visible:outline-secondary-dark',
        ],
        neutral: [
          'text-default-dark outline-default-dark decoration-default-dark visited:text-neutral visited:decoration-neutral',
        ],
      },
      disabled: {
        true: ['!cursor-not-allowed opacity-disabled'],
        false: [''],
      },
    },
  }
);

/* -------------------------------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------------------------*/

export type InlineLinkProps = ComposeVariantProps<typeof inlineLinkVariants> & LinkHandlerProps;
