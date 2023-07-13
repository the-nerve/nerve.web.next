const tokens = require('@nerve/tokens/tokens.json');

/**
 * Our primary Tailwind config file that is consumed by all Design System apps and packages.
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: `${tokens.breakpoint.numeric.sm}px`,
      md: `${tokens.breakpoint.numeric.md}px`,
      lg: `${tokens.breakpoint.numeric.lg}px`,
      xl: `${tokens.breakpoint.numeric.xl}px`,
    },
    opacity: {
      disabled: `${tokens.opacity.disabled}`,
      busy: `${tokens.opacity.busy}`,
    },
    borderRadius: {
      none: tokens.border.radius.NONE,
      DEFAULT: tokens.border.radius.DEFAULT,
      xs: tokens.border.radius.xs,
      sm: tokens.border.radius.sm,
      md: tokens.border.radius.md,
      lg: tokens.border.radius.lg,
      xl: tokens.border.radius.xl,
      full: tokens.border.radius.full,
    },
    borderWidth: {
      none: tokens.border.width.NONE,
      DEFAULT: tokens.border.width.DEFAULT,
      sm: tokens.border.width.sm,
      md: tokens.border.width.md,
      lg: tokens.border.width.lg,
    },
    spacing: {
      0: tokens.spacing['00'],
      1: tokens.spacing['01'],
      2: tokens.spacing['02'],
      3: tokens.spacing['03'],
      4: tokens.spacing['04'],
      5: tokens.spacing['05'],
      6: tokens.spacing['06'],
      7: tokens.spacing['07'],
      8: tokens.spacing['08'],
      9: tokens.spacing['09'],
      10: tokens.spacing['10'],
      11: tokens.spacing['11'],
      12: tokens.spacing['12'],
      13: tokens.spacing['13'],
      14: tokens.spacing['14'],
      15: tokens.spacing['15'],
      16: tokens.spacing['16'],
      17: tokens.spacing['17'],
      18: tokens.spacing['18'],
      19: tokens.spacing['19'],
      20: tokens.spacing['20'],
    },
    fontSize: {
      'size-1': tokens.font.scale['01'],
      'size-2': tokens.font.scale['02'],
      'size-3': tokens.font.scale['03'],
      'size-4': tokens.font.scale['04'],
      'size-5': tokens.font.scale['05'],
      'size-6': tokens.font.scale['06'],
      'size-7': tokens.font.scale['07'],
      'size-8': tokens.font.scale['08'],
      'size-9': tokens.font.scale['09'],
      'size-10': tokens.font.scale[10],
      'size-11': tokens.font.scale[11],
      'size-12': tokens.font.scale[12],
      'size-13': tokens.font.scale[13],
      'size-14': tokens.font.scale[14],
      'size-15': tokens.font.scale[15],
      'size-16': tokens.font.scale[16],
    },
    lineHeight: {
      heading: `${tokens.font['line-height'].heading}`,
      body: `${tokens.font['line-height'].body}`,
      flat: `${tokens.font['line-height'].flat}`,
    },
    zIndex: {
      'layer-sub-2': tokens['z-index'].layerSub2,
      'layer-sub-1': tokens['z-index'].layerSub1,
      root: tokens['z-index'].root,
      'layer-1': tokens['z-index'].layer1,
      'layer-2': tokens['z-index'].layer2,
      'layer-3': tokens['z-index'].layer3,
      'layer-4': tokens['z-index'].layer4,
      'layer-5': tokens['z-index'].layer5,
      'layer-6': tokens['z-index'].layer6,
    },
    corePlugins: {},
    plugins: [],
  },
  plugins: [],
};
