import { cx } from 'cva';
import React from 'react';

import { type PolymorphicRef } from '../../types';
import { LinkHandler } from '../LinkHandler/LinkHandler';

import { type ButtonProps, buttonVariants, textClassVariants } from './__config';

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

/**
 * This is our primary `Button` component designed for user-interactions across our various applications. It must serve many use-cases,
 * so it is built as component with a simple interface, but more robust underlying architecture.
 *
 * ## The `as` prop
 * The `Button` component is a polymorphic component, meaning it can render as different underlying HTML elements
 * _(with correct and complete props typing)_ and exhibit different behaviors depending on the value of the `as` prop.
 *
 * _Note that the `as` prop itself is unfortunately not truly type safe. This is because of how polymorphic props work in TypeScript.
 * Technically you can provide any valid element to `as` that fulfills `React.ElementType`. However this component's `as` prop only
 * supports `LinkHandler` and `button`, so we throw a helpful error in this case where the consumer passes an unsupported
 * (but unfortunately valid) type._
 *
 * ## Button Use-cases
 *
 * 1. **As an internal or external link** _(default behavior when `as` is omitted - resolves to `as=LinkHandler`)_
 *     - This is the __default & preferred use-case__. The button will render as an anchor (`a`) tag, with the appropriate `href` and `target` attributes.
 *     - This is the preferred use case anytime we are changing routes based on a click, or linking to an external site.
 *     - This is the most accessible and SEO-friendly option.
 * 1. **As a `button` element** (`as="button"`)
 *    - The button will not render an `href` attribute, and instead will render as a `button` element with an optional `onClick` handler.
 *    - This is useful for form submissions, or other actions that don't require a route-change _(such as opening a modal)_.
 *    - When using this method, consider if you need to add aria attributes to make the button more accessible.
 *    - _Note that you must explicitly pass `as="button"` to render as a `button`, as this is not the default._
 *    - _Note: This option is unfortunately not type safe/autocompleted by typescript._
 *
 * ## Behind the scenes: The `LinkHandler` component
 * The `Button` component [uses the `LinkHandler` internal component](https://github.com/thelittleotter/littleotter-ui/blob/main/packages/tide/src/components/__internal__/LinkHandler/LinkHandler.tsx) to render the appropriate anchor markup for internal or external links and to handle disabled link states in an accessible manner.
 *
 * ## Behind the scenes: The `NextLink` component
 * The `LinkHandler` component (above) uses [the `NextLink` component from `next/link`](https://nextjs.org/docs/api-reference/next/link) to render internal links.
 *
 * **Benefits**
 * - It was the quickest option to initially get up and running with.
 * - It limits typing complexity of an already complex component.
 *
 * **Drawbacks**
 * - Tide now has a direct dependency on NextJs. This is not ideal, but it's not the end of the world.
 * - In the future, if we need to use the `Button` component outside of a NextJS App, we will need to refactor this component to accept an agnostic routing component as a prop instead of using `next/link` directly.
 *
 * * Usage Note: This `Button` component is NOT meant to be used with both `disabled` and `busy` props at the
 * * same time. If both props are passed in, be advised that `disabled` will always take precedence over `busy` and will apply its corresponding behavior and styles.
 */
export const Button = React.forwardRef(
  <C extends React.ElementType = typeof LinkHandler>(
    {
      as,
      href,
      size = 'md',
      type = 'fill',
      theme = 'secondary',
      disabled = false,
      fullWidth = false,
      busy = false,
      prefix,
      suffix,
      children,
      className,
      ...restProps
    }: ButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    if (as) {
      validateAsProp(as);
    }

    /*
     * If the component consumer happen to pass both props 'disabled' and 'busy', the 'disabled' prop will take
     * precedence and apply styles and behavior accordingly. For the time being both props cannot be combined at the same time
     */
    if (busy && disabled) {
      // eslint-disable-next-line no-console
      console.error(
        `The 'Button' component currently only supports either 'disabled' or 'busy' props and you have provided both of them, please be advised that 'disabled' will be prioritized over busy state when both props are present.`
      );
    }
    const Component = as || LinkHandler;

    const shouldApplyBusyState = busy && !disabled;
    const displayBusyIndicator = shouldApplyBusyState && type !== 'text';
    const isBehaviorDisabled = disabled || busy; // Same as disabled, the busy state won't trigger user actions like clicks, etc

    const classes = cx(
      buttonVariants({ size, theme, type, disabled, fullWidth, busy: shouldApplyBusyState }),
      className
    );
    const textClasses = cx(textClassVariants({ size, type }), {
      invisible: displayBusyIndicator,
      'sr-only': type === 'icon',
    });

    if (as === 'button' || !href) {
      return (
        <button type="button" className={classes} disabled={isBehaviorDisabled} ref={ref} {...restProps}>
          {prefix && <span className="mr-3">{prefix}</span>}
          <span className={textClasses}>{children}</span>
          {suffix && <span className="ml-3">{suffix}</span>}
          <BusyIndicator shouldDisplay={displayBusyIndicator} />
        </button>
      );
    }

    return (
      <Component href={href} className={classes} disabled={isBehaviorDisabled} ref={ref} {...restProps}>
        {prefix && <span className="mr-3">{prefix}</span>}
        <span className={textClasses}>{children}</span>
        {suffix && <span className="ml-3">{suffix}</span>}
        <BusyIndicator shouldDisplay={displayBusyIndicator} />
      </Component>
    );
  }
);

Button.displayName = 'Button';

/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/
const validateAsProp = (as: React.ElementType) => {
  if (as !== LinkHandler && as !== 'button') {
    throw new Error(
      `The 'Button' component currently only supports the 'button' HTML element or 'LinkHandler' component as the 'as' prop. You provided: '${as}'`
    );
  }
};

const BusyIndicator = ({ shouldDisplay }: { shouldDisplay: boolean }) => {
  const classes = cx('absolute w-full h-full inset-0 flex items-center justify-center gap-3 bg-inherit', {
    invisible: !shouldDisplay,
  });
  // const indicatorClasses = cx('h-2 w-2 rounded-full bg-current flex-shrink-0 animate-bounce');

  return (
    <div className={classes}>
      <svg
        className="h-5 w-5 flex-shrink-0 animate-spin bg-transparent text-current"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className="opacity-[.25]" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-[.75]"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};
