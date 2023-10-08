//
// DOMAIN MODELS
//

export interface Address {
  city: string;
  state: string;
  stateCode: string;
  street: string;
  zipcode: string;
}

export interface GeoLocation {
  lat: string;
  lng: string;
}

export interface Location {
  title: string;
  googleTitle?: string;
  address: Address;
  geolocation?: GeoLocation;
  indigenousLandAck?: string;
}

//
// DOMAIN UTILITIES
//

const GMAPS_DIRECTIONS_BASE_URL = 'https://www.google.com/maps/dir/?api=1&destination=';

/**
 * Create a Google Maps URL to generate pre-filled directions to a given destination.
 * Google requirements: https://developers.google.com/maps/url-encoding
 */
export const getGoogleMapsDirectionsURL = (address: Location['address'], googleTitle: Location['googleTitle']) => {
  // MUST match a valid registered business in google or this will break
  const businessTitle = googleTitle?.toLowerCase();
  const addressString = `${address.street} ${address.city} ${address.stateCode} ${address.zipcode}`;
  const locationString = businessTitle ? `${businessTitle} ${addressString}` : addressString;
  // Google needs white space encoded as +
  const googleFriendlyLocationString = locationString.replace(/\s/g, '+');

  const locationURL = `${GMAPS_DIRECTIONS_BASE_URL}${googleFriendlyLocationString}`;

  return encodeURI(locationURL);
};
