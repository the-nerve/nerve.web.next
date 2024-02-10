import { z } from 'zod';

// ============== MODEL DEFS ============== //

export const addressModel = z.object({
  city: z.string(),
  state: z.string(),
  stateCode: z.string(),
  street: z.string(),
  zipcode: z.string(),
});

export const geoLocationModel = z.object({
  lat: z.string(),
  lng: z.string(),
});

export const locationModel = z.object({
  title: z.string(),
  googleTitle: z.string().optional(),
  address: addressModel,
  geolocation: geoLocationModel.optional(),
  indigenousLandAck: z.string().optional(),
});

export type Address = z.infer<typeof addressModel>;
export type GeoLocation = z.infer<typeof geoLocationModel>;
export type Location = z.infer<typeof locationModel>;

// ============== MODEL FUNCTIONS ============== //

const GMAPS_DIRECTIONS_BASE_URL = 'https://www.google.com/maps/dir/?api=1&destination=';

/**
 * Create a Google Maps URL to generate pre-filled directions to a given destination.
 * Google requirements: https://developers.google.com/maps/url-encoding
 */
export const getGoogleMapsDirectionsURL = <T extends Location>(location: T) => {
  const { googleTitle, address } = location;

  const addressString = `${address.street} ${address.city} ${address.stateCode} ${address.zipcode}`;

  // MUST match a valid registered business in google or this will break
  const businessTitle = googleTitle?.toLowerCase();

  const locationString = businessTitle ? `${businessTitle} ${addressString}` : addressString;

  // Google needs white space encoded as +
  const googleFriendlyLocationString = locationString.replace(/\s/g, '+');

  const locationURL = `${GMAPS_DIRECTIONS_BASE_URL}${googleFriendlyLocationString}`;

  return encodeURI(locationURL);
};
