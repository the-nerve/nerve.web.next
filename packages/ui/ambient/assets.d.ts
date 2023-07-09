// Imports from `.svg?url` will import the src URL of the SVG.
declare module '*.svg?url' {
  const value: string;
  export default value;
}

// Direct imports from `.svg` will import the React Component.
declare module '*.svg' {
  import { type ComponentType, type SVGAttributes } from 'react';

  const ReactComponent: ComponentType<PropsWithChildren<SVGAttributes<SVGElement>>>;
  export default ReactComponent;
}
