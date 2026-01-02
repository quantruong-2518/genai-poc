import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'vi', 'ko'],

  // Used when no locale matches
  defaultLocale: 'vi',
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(vi|en|ko)/:path*']
};
