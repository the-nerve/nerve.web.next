import { cx } from 'cva';

import { type HeadlineProps, type HeadlineTag, headlineVariants } from './__config';

/* -------------------------------------------------------------------------------------------------
 * Headline
 * -----------------------------------------------------------------------------------------------*/
export const Headline = <C extends HeadlineTag>({
  children,
  as,
  size = 'md',
  color = 'inherit',
  transform,
  className,
  ...restProps
}: HeadlineProps<C>) => {
  const Tag = as || 'h1';

  const classes = cx(headlineVariants({ size, color, transform, className }), {});

  return (
    <Tag className={classes} {...restProps}>
      {children}
    </Tag>
  );
};
