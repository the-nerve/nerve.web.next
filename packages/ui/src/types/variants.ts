import { type VariantProps as CvaVariantProps } from 'cva';

import type { ExcludeNull } from './components';

/**
 * A wrapper around `class-variance-authority`'s `VariantProps` type that removes `null` from the type of each property.
 *
 * * For some reason, the VariantProps method sva gives us, adds "null" as an inferred type to each property. This is
 * * not what we want. So we remove it here.
 *
 * * Using `any` is required to fulfill the underlying type of VariantProps from CVA 😕
 */
export type ComposeVariantProps<T extends (...args: any) => any> = ExcludeNull<CvaVariantProps<T>>;
