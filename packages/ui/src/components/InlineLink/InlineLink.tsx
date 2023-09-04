import { cx } from 'cva';

import { LinkHandler } from '../LinkHandler/LinkHandler';

import { type InlineLinkProps, inlineLinkVariants } from './__config';

/* -------------------------------------------------------------------------------------------------
 * InlineLink
 * -----------------------------------------------------------------------------------------------*/

/**
 * An `InlineLink` inherits the text size of its parent element and renders an external link or an internal routed link. It can be used on its own or in a body of text.
 *
 * - *Accessibility Note: When inheriting `sm` or `xs` text, it's recommended to use the `neutral` color for accessibility. *
 * - *Usage Note: This `InlineLink` component is NOT meant to be used as a `button`. If that functionality is desired, please see the `TextButton` component.*
 *
 * ### Behind the scenes: The `LinkHandler` component
 * The `InlineLink` component [uses the `LinkHandler` internal component](https://github.com/thelittleotter/littleotter-ui/blob/main/packages/tide/src/components/__internal__/LinkHandler/LinkHandler.tsx) to render the appropriate anchor markup for internal or external links and to handle disabled link states in an accessible manner.
 *
 * ### Behind the scenes: The `NextLink` component
 * The `LinkHandler` component (above) uses [the `NextLink` component from `next/link`](https://nextjs.org/docs/api-reference/next/link) to render internal links.
 */
export const InlineLink = ({
  href,
  color = 'accent',
  children,
  className,
  disabled,
  ...restProps
}: InlineLinkProps) => {
  const classes = cx(inlineLinkVariants({ color, disabled }), className);

  return (
    <LinkHandler href={href} className={classes} disabled={disabled} {...restProps}>
      {children}
    </LinkHandler>
  );
};
