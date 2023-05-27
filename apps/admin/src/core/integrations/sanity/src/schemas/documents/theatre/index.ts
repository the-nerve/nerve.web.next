import { schema as artistSchema } from './artist';
import { schema as locationSchema } from './location';
import { schema as organizationSchema } from './organization';
import { schema as seasonSchema } from './season';
import { schema as seriesSchema } from './series';
import { objects as showObjects, schema as showSchema } from './show';
import { schema as sponsorSchema } from './sponsor';
import { schema as ticketProviderSchema } from './ticketProvider';

export const theatreDocuments = [
  artistSchema,
  locationSchema,
  organizationSchema,
  ticketProviderSchema,
  seriesSchema,
  showSchema,
  seasonSchema,
  sponsorSchema,
];

export const theatreObjects = [...showObjects];
