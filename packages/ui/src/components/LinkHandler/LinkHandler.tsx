import NextLink from 'next/link';
import React, { type Ref } from 'react';

import { isInternalHref } from '../../utils/isInternalHref';

/**
 * Provides a centralized way to handle internal, external, and accessible disabled links
 *
 * ! Currently, this component renders a Link component from next/link, so it can only be used in NextJS applications.
 *
 * Note - Accessible disabled links are weird and require special care
 * @see https://www.scottohara.me/blog/2021/05/28/disabled-links.html
 */
export const LinkHandler = React.forwardRef(
  ({ href, children, disabled, className, ...props }: LinkHandlerProps, ref: Ref<HTMLAnchorElement>) => {
    if (disabled) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { onClick, ...restOfProps } = props;
      return (
        <a role="link" aria-disabled="true" ref={ref} className={className} {...restOfProps}>
          {children}
        </a>
      );
    }

    const isExternalHref = !isInternalHref(href);
    const _target = isExternalHref ? '_blank' : undefined;
    const _rel = isExternalHref ? 'noopener noreferrer' : undefined;

    return (
      <NextLink href={href} target={_target} rel={_rel} className={className} ref={ref} {...props}>
        {children}
      </NextLink>
    );
  }
);

LinkHandler.displayName = 'LinkHandler';

type NextLinkProps = Parameters<typeof NextLink>[0];

export interface LinkHandlerProps extends Omit<NextLinkProps, 'color' | 'as'> {
  disabled?: boolean;
}
