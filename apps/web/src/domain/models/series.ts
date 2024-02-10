import { z } from 'zod';

// ============== MODEL ENUMS ============== //

export enum SERIES_TYPE {
  NERVE = 'nerve',
  COACT = 'coact',
  ALTER_EGO = 'alter-ego',
}

// ============== MODEL DEFS ============== //
export const seriesModel = z.object({
  type: z.nativeEnum(SERIES_TYPE),
  title: z.string().optional(),
  description: z.string().optional(),
});

export type Series = z.infer<typeof seriesModel>;
