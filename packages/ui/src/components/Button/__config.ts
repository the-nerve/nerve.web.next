import { cva } from 'cva';

import type { ComposeVariantProps, PolymorphicComponentPropWithRef } from '../../types';

/* -------------------------------------------------------------------------------------------------
 * Styles
 * -----------------------------------------------------------------------------------------------*/

export const buttonVariants = cva(
  [
    'font-weight-semibold justify-center items-center select-none outline-0 relative overflow-hidden',
    'transition-all duration-100 ease-in-out',
  ],
  {
    variants: {
      size: {
        sm: ['px-4 py-2 rounded-sm'],
        md: ['px-5 py-3 rounded-sm'],
        lg: ['px-5 py-4 rounded-sm'],
      },
      theme: {
        primary: [],
        secondary: [],
        tertiary: [],
      },
      type: {
        fill: [],
        outline: ['border-sm'],
        ghost: ['border-sm border-transparent'],
        icon: [],
        text: ['border-sm border-transparent'],
      },
      disabled: {
        true: ['opacity-disabled cursor-not-allowed'],
        false: ['cursor-pointer'],
      },
      fullWidth: {
        false: ['inline-flex'],
        true: ['flex flex-1'],
      },
      busy: {
        false: [],
        true: ['cursor-wait'],
      },
    },
    compoundVariants: [
      // PRIMARY
      {
        theme: 'primary',
        type: 'fill',
        className: ['bg-secondary text-neutral-lightest', 'hover:bg-secondary-dark'],
      },
      {
        theme: 'primary',
        type: 'outline',
        className: ['bg-transparent text-secondary', 'hover:bg-secondary-darkest'],
      },
      {
        theme: 'primary',
        type: 'ghost',
        className: ['text-secondary hover:bg-secondary-darkest'],
      },
      {
        theme: 'primary',
        type: 'text',
        className: ['text-secondary', 'hover:text-secondary-dark'],
      },
      // SECONDARY
      {
        theme: 'secondary',
        type: 'fill',
        className: ['bg-neutral-lightest text-primary-dark', 'hover:bg-neutral-lighter'],
      },
      {
        theme: 'secondary',
        type: 'outline',
        className: ['bg-transparent text-neutral-lightest', 'hover:bg-neutral-darker'],
      },
      {
        theme: 'secondary',
        type: 'ghost',
        className: ['hover:bg-neutral-darker'],
      },
      {
        theme: 'secondary',
        type: 'text',
        className: ['text-neutral-lightest', 'hover:text-neutral-lighter'],
      },
      // TERTIARY
      {
        theme: 'tertiary',
        type: 'fill',
        className: ['bg-accent text-neutral-lightest', 'hover:bg-accent-dark'],
      },
      {
        theme: 'tertiary',
        type: 'outline',
        className: ['bg-transparent text-accent', 'hover:bg-primary-light'],
      },
      {
        theme: 'tertiary',
        type: 'ghost',
        className: ['text-accent', 'hover:bg-primary-light'],
      },
      {
        theme: 'tertiary',
        type: 'text',
        className: ['text-accent', 'hover:text-accent-dark'],
      },
    ],
  }
);

export const textClassVariants = cva('leading-leading-1', {
  variants: {
    size: {
      sm: ['text-size-2'],
      md: ['text-size-2'],
      lg: ['text-size-3'],
    },
    type: {
      fill: [],
      outline: [],
      ghost: [],
      icon: [],
      text: ['underline underline-offset-2'],
    },
  },
});

/* -------------------------------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------------------------*/

type ButtonVariants = ComposeVariantProps<typeof buttonVariants>;

export type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, ButtonVariants> & {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
};
