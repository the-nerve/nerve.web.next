/**
 * These types are used to build polymorphic components that can be rendered as different React elements.
 *
 * They were pulled directly from a fantastic Log Rocket article on Polymorphic React Components:
 * @see https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
 */

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

/**
 * Polymorphic components WITHOUT Ref
 */
export type PolymorphicComponentProp<C extends React.ElementType, Props = object> = React.PropsWithChildren<
  Props & AsProp<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

/**
 * Polymorphic components WITH Ref
 */
export type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = object> = PolymorphicComponentProp<
  C,
  Props
> & {
  ref?: PolymorphicRef<C>;
};

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];
