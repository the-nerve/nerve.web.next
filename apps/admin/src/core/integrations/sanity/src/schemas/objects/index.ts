import { simpleExternalAction, simpleInternalAction } from './actions';
import { address } from './address';
import { contentBlock } from './blocks';
import { components } from './components';
import { singleIcon } from './icons';
import { imageWithAlt, imageWithFullMeta } from './images';
import { pageLayout } from './layout';
import { externalLink, internalLink, internalPostLink, internalSeasonLink, internalShowLink } from './links';
import { pageSEO } from './seo';

export default [
  address,
  imageWithAlt,
  imageWithFullMeta,
  internalPostLink,
  internalSeasonLink,
  internalShowLink,
  internalLink,
  externalLink,
  pageSEO,
  pageLayout,
  contentBlock,
  simpleInternalAction,
  simpleExternalAction,
  singleIcon,
  ...components,
];
