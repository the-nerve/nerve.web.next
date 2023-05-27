// Import our generated schemas
import { generatedSchemas } from '../generateDocuments';

// import any global objects we've defined
import globalObjects from './objects';

export const sanitySchemas = [...generatedSchemas, ...globalObjects];
