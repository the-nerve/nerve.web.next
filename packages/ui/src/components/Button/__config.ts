import { cva } from 'cva';

import type { ComposeVariantProps, PolymorphicComponentPropWithRef } from '../../types';

/* -------------------------------------------------------------------------------------------------
 * Styles
 * -----------------------------------------------------------------------------------------------*/

export const buttonVariants = cva(
  [
    'font-body-bold font-weight-bold justify-center items-center select-none outline-0 relative overflow-hidden',
    'transition-all duration-100 ease-in-out',
  ],
  {
    variants: {
      size: {
        sm: ['px-5 py-3 rounded-md'],
        md: ['px-5 py-4 rounded-lg'],
        lg: ['px-5 py-5 rounded-lg'],
      },
      theme: {
        primary: ['focus-visible:ring-primary'],
      },
      type: {
        filled: [],
        outlined: ['border-md'],
        ghost: [],
        icon: [],
        text: ['border-md border-transparent'],
      },
      disabled: {
        true: ['opacity-disabled cursor-not-allowed'],
        false: ['cursor-pointer'],
      },
      isFullWidth: {
        false: ['inline-flex'],
        true: ['flex flex-1'],
      },
      busy: {
        false: [],
        true: ['cursor-wait'],
      },
    },
    compoundVariants: [
      {
        theme: 'primary',
        type: 'filled',
        className: [
          'bg-primary text-default-light',
          'hover:bg-primary-dark',
          'active:bg-primary-dark',
          'focus:bg-primary focus-visible:ring-2 focus-visible:ring-offset-2',
        ],
      },
      {
        theme: 'primary',
        type: 'outlined',
        className: [
          'bg-transparent text-primary border-primary-dark',
          'hover:bg-primary-dark hover:text-default-light',
          'focus-visible:bg-neutral focus-visible:text-primary focus:border-primary-dark',
        ],
      },
      {
        theme: 'primary',
        type: 'text',
        className: ['bg-transparent text-primary', 'hover:bg-neutral', 'focus-visible:border-primary'],
      },
    ],
  }
);

export const textClassVariants = cva('leading-leading-1', {
  variants: {
    size: {
      sm: ['text-size-2'],
      md: ['text-size-3'],
      lg: ['text-size-3'],
    },
    type: {
      filled: [],
      outlined: [],
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

export type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, ButtonVariants>;
