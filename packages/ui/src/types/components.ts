import type { ReactNode } from 'react';
/**
 * TLDR: React removed children from the React.FC type. So we create our own type for components that need children.
 *
 *  There's a great article about this topic so we won't go into details. See the link below.
 * @see https://medium.com/xgeeks/clean-up-your-react-component-types-45acec85d4c3
 *
 * ! We should not be using React.FC anymore for any reason. It's deprecated.
 *
 * Direct Usage:
 *
 * ```ts
 * import { type WithChildren } from '@littleotter/tide/types';
 *
 * const MyComponent1 = ({ children }: WithChildren) => <>{children}</>;
 * const MyComponent2 = ({ children }: WithChildren<MyProps>) => <>{children}</>;
 * ```
 *
 * Extends Usage:
 * ```ts
 * import { type WithChildren } from '@littleotter/tide/types';
 *
 * interface MyProps extends WithChildren {}
 * ```
 */
export type WithChildren<P = object> = P & { children?: ReactNode };

/**
 * A simple utility type for components that would like to allow for an optional className prop.
 */
export type WithClassName<P = object> = P & { className?: string };

/**
 * A utility that allows you to require a given set of props on a component.
 */
export type RequireProps<P, V extends keyof P> = Omit<P, V> & Required<Pick<P, V>>;

/**
 * A utility that allows you to omit a given set of conflicting props ("A" minus conflicting props of "B") and then
 * add all of the props (from (A minus B) & B) to the resulting type.
 */
export type OmitConflicting<A, B> = Omit<A, keyof B> & B;

/**
 * Removes `null` props from the type of each property in `T`.
 */
export type ExcludeNull<T> = {
  [K in keyof T]: Exclude<T[K], null>;
};

/**
 * A utility for extracting props from a component.
 */
export type PropsFrom<TComponent> = TComponent extends React.FC<infer Props>
  ? Props
  : TComponent extends React.Component<infer Props>
  ? Props
  : never;
