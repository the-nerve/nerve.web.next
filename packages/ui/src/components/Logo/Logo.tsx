import { cx } from 'cva';

import { type LogoProps, type LogoTypes, logoVariants } from './__config';
import { BrandMark, Lockup } from './__manifest__';

const logos: Record<LogoTypes, () => JSX.Element> = {
  lockup: Lockup,
  mark: BrandMark,
};

export const Logo = ({ logo, size, color, className }: LogoProps) => {
  const SelectedLogo = logos[logo];
  const classes = cx(logoVariants({ color, size, className }));

  return (
    <div className={classes}>
      <SelectedLogo />
    </div>
  );
};
