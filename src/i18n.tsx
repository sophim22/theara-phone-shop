import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}: any) => {
  return {
    messages: (await import(`./locales/${locale}.json`)).default
  }
});
