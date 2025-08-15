import { createTranslator } from 'next-intl';

export function getTranslator(locale: string) {
  return createTranslator({ locale, messages: require(`./public/locales/${locale}.json`) });
}
