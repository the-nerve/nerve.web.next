export const ROUTES = {
  ABOUT: '/about',
  ARCHIVES: '/the-archives',
  BLOG: {
    ROOT: '/blog',
    POST: (postSlug: string) => `/blog/${postSlug}`,
  },
  CONTACT: '/contact',
  HOME: '/',
  LEGAL: {
    PRIVACY: '/legal/privacy',
  },
  SEASON: {
    ROOT: (seasonSlug: string) => `/s/${seasonSlug}`,
  },
  SHOW: {
    ROOT: (seasonSlug: string, showSlug: string) => `/s/${seasonSlug}/${showSlug}`,
    PROGRAM: (seasonSlug: string, showSlug: string) => `/s/${seasonSlug}/${showSlug}/program`,
    TICKETS: (seasonSlug: string, showSlug: string) => `/s/${seasonSlug}/${showSlug}/tickets`,
  },
} as const;

export const EXTERNAL_LINKS = {} as const;
