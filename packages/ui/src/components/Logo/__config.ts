import { cva } from 'cva';

import type { ComposeVariantProps, WithClassName } from '../../types';

/* -------------------------------------------------------------------------------------------------
 * Styles
 * -----------------------------------------------------------------------------------------------*/

const logoVariants = cva('h-auto leading-flat', {
  variants: {
    size: {
      xxl: 'w-[300px]',
      xl: 'w-[225px]',
      l: 'w-[140px]',
      m: 'w-[100px]',
      s: 'w-[75px]',
      xs: 'w-[50px]',
    },
    color: {
      light: '',
      dark: '',
    },
  },
});

/* -------------------------------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------------------------*/

type LogoVariants = ComposeVariantProps<typeof logoVariants>;
type LogoTypes = 'mark' | 'lockup';

type LogoProps = LogoVariants &
  WithClassName & {
    logo: LogoTypes;
  };
/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { logoVariants };
export type { LogoProps, LogoTypes };
