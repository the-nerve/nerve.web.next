import { cx } from 'cva';

import { type TextProps, type TextTag, textVariants } from './__config';

/* -------------------------------------------------------------------------------------------------
 * Text
 * -----------------------------------------------------------------------------------------------*/
export const Text = <C extends TextTag>({
  children,
  as,
  size = 'md',
  color = 'inherit',
  weight = 'regular',
  truncate = false,
  title,
  transform,
  className,
  ...restProps
}: TextProps<C>) => {
  const Tag = as || 'p';

  const classes = cx(textVariants({ size, color, transform, weight, className }), {
    truncate,
  });

  if (truncate && !title) {
    throw new Error('Text: title prop is required when truncate is true and should be the full text');
  }

  return (
    <Tag className={classes} title={truncate ? title : undefined} {...restProps}>
      {children}
    </Tag>
  );
};
