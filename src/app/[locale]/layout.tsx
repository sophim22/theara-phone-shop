import clsx from 'clsx';
import {Inter} from 'next/font/google';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider, useLocale} from 'next-intl';
import {ReactNode} from 'react';
import Layout from '@/modules/layouts';

const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const locale = useLocale();
  console.log(locale);
  if (params.locale !== locale) {
    notFound();
  }
  let translations;
  try {
    translations = (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(inter.className)}>
        <NextIntlClientProvider locale={locale} messages={translations}>
          <Layout>
            {children}
          </Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 