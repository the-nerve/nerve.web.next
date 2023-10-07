import { cva } from 'cva';
import { type HTMLAttributes } from 'react';

import type { ComposeVariantProps, WithChildren, WithClassName } from '../../types';

/* -------------------------------------------------------------------------------------------------
 * Styles
 * -----------------------------------------------------------------------------------------------*/

const surfaceVariants = cva('', {
  variants: {
    bg: {
      transparent: 'bg-transparent',
      // PRIMARY
      primaryLighter: 'bg-primary-lighter',
      primaryLight: 'bg-primary-light',
      primary: 'bg-primary',
      primaryDark: 'bg-primary-dark',
      primaryDarker: 'bg-primary-darker',
      // SECONDARY
      secondaryDarkest: 'bg-secondary-darkest',
      // NEUTRAL
      neutralLightest: 'bg-neutral-lightest',
      neutralLighter: 'bg-neutral-lighter',
      neutralLight: 'bg-neutral-light',
      neutral: 'bg-neutral',
      neutralDark: 'bg-neutral-dark',
      neutralDarker: 'bg-neutral-darker',
      neutralDarkest: 'bg-neutral-darkest',
    },
    shadow: {},
    borderColor: {
      transparent: 'border-transparent',
      // PRIMARY
      primaryLighter: 'bg-primary-lighter',
      primaryLight: 'bg-primary-light',
      primary: 'bg-primary',
      primaryDark: 'bg-primary-dark',
      primaryDarker: 'bg-primary-darker',
      // SECONDARY
      secondaryDarkest: 'bg-secondary-darkest',
      secondaryDarker: 'bg-secondary-darker',
      secondaryDark: 'bg-secondary-dark',
      secondary: 'bg-secondary',

      // NEUTRAL
      neutralLighter: 'bg-neutral-lighter',
      neutralLight: 'bg-neutral-light',
      neutral: 'bg-neutral',
      neutralDark: 'bg-neutral-dark',
      neutralDarker: 'bg-neutral-darker',
      neutralDarkest: 'bg-neutral-darkest',

      // NEGATIVE
      negativeLight: 'bg-negative-light',
      negative: 'bg-negative',
      negativeDark: 'bg-negative-dark',

      // POSITIVE
      positiveLight: 'bg-positive-light',
      positive: 'bg-positive',
      positiveDark: 'bg-positive-dark',

      // ACCENT
      accentLight: 'bg-accent-light',
      accent: 'bg-accent',
      accentDark: 'bg-accent-dark',
    },
    borderStyle: {
      none: '',
      solid: 'border-solid',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    },
    borderWidth: {
      none: '',
      sm: 'border-sm',
      md: 'border-md',
      lg: 'border-lg',
    },
    radius: {
      none: '',
      xs: 'rounded-xs',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    },
  },
});

/* -------------------------------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------------------------*/

type SurfaceVariants = ComposeVariantProps<typeof surfaceVariants>;

type SurfaceProps = SurfaceVariants & WithChildren & WithClassName & HTMLAttributes<HTMLDivElement>;
/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { surfaceVariants };
export type { SurfaceProps };
