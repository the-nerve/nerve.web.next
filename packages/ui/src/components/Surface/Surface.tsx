import { cx } from 'cva';

import { type SurfaceProps, surfaceVariants } from './__config';

export const Surface = ({
  bg,
  borderStyle = 'solid',
  borderColor = 'transparent',
  borderWidth = 'sm',
  radius = 'md',
  shadow,
  className,
  children,
  ...restProps
}: SurfaceProps) => {
  const classes = cx(surfaceVariants({ bg, borderStyle, borderColor, borderWidth, radius, shadow, className }));

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};
