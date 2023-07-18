import { cva } from 'cva';

import type { ComposeVariantProps, PolymorphicComponentProp, WithChildren, WithClassName } from '../../types';

/* -------------------------------------------------------------------------------------------------
 * Styles
 * -----------------------------------------------------------------------------------------------*/

const headlineVariants = cva('font-weight-black', {
  variants: {
    size: {
      xxl: ['text-size-20 leading-[92%]'],
      xl: ['text-size-18 leading-[117%]'],
      lg: ['text-size-16 leading-[110%]'],
      md: ['text-size-13 leading-[110%]'],
      sm: ['text-size-11 leading-[115%]'],
      xs: ['text-size-9 leading-[120%]'],
    },
    color: {
      inherit: ['text-inherit'],
      current: ['text-current'],
      primaryLight: ['text-primary-light'],
      primary: ['text-primary'],
      primaryDark: ['text-primary-dark'],
      secondaryLight: ['text-secondary-light'],
      secondary: ['text-secondary'],
      secondaryDark: ['text-secondary-dark'],
      neutralLightest: ['text-neutral-lightest'],
      neutralLighter: ['text-neutral-lighter'],
      neutralLight: ['text-neutral-light'],
      neutral: ['text-neutral'],
      neutralDark: ['text-neutral-dark'],
      neutralDarker: ['text-neutral-darker'],
      neutralDarkest: ['text-neutral-darkest'],
    },
    transform: {
      uppercase: ['uppercase'],
      lowercase: ['lowercase'],
      capitalize: ['capitalize'],
    },
    align: {
      left: ['text-left'],
      center: ['text-center'],
      right: ['text-right'],
    },
  },
});

/* -------------------------------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------------------------*/

type HeadlineVariants = ComposeVariantProps<typeof headlineVariants>;

export type HeadlineTag = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface InternalHeadlineProps extends HeadlineVariants, WithChildren, WithClassName {}

type HeadlineProps<C extends HeadlineTag> = PolymorphicComponentProp<C, InternalHeadlineProps>;
/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { headlineVariants };
export type { HeadlineProps };
