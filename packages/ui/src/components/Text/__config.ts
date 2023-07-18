import { cva } from 'cva';

import type { ComposeVariantProps, PolymorphicComponentProp, WithChildren, WithClassName } from '../../types';

/* -------------------------------------------------------------------------------------------------
 * Styles
 * -----------------------------------------------------------------------------------------------*/

const textVariants = cva('', {
  variants: {
    size: {
      xl: ['text-size-7 leading-[130%]'],
      lg: ['text-size-5 leading-[140%]'],
      md: ['text-size-3 leading-[140%]'],
      sm: ['text-size-2'],
      xs: ['text-size-1'],
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
      accent: ['text-accent'],
      positive: ['text-positive'],
      negative: ['text-negative'],
    },
    transform: {
      uppercase: ['uppercase'],
      lowercase: ['lowercase'],
      capitalize: ['capitalize'],
    },
    weight: {
      regular: ['font-weight-regular'],
      semibold: ['font-weight-semibold'],
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

type TextVariants = ComposeVariantProps<typeof textVariants>;

export type TextTag = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface InternalTextProps extends TextVariants, WithChildren, WithClassName {
  title?: string;
  truncate?: boolean;
}

type TextProps<C extends TextTag> = PolymorphicComponentProp<C, InternalTextProps>;
/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { textVariants };
export type { TextProps };
