import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // This is the locale in the url that gets caught by the middleware
  const requested = await requestLocale;
  // We then check if the locale is valid and fallback if not
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 
  // Finally, we return the locale and the json file for the messages  
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});