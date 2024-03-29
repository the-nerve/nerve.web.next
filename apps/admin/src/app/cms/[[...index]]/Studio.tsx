/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

'use client';

import { NextStudio } from 'next-sanity/studio';

import config from '../../../../sanity.config';

export const Studio = () => {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <NextStudio config={config} />;
};
