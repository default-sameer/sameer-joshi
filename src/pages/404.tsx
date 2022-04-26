import { NextSeo } from 'next-seo';
import React from 'react';
import Layout from '../components/layout';

const url = 'https://sameer-joshi.com.np';
const title = '404';

const NotFoundIndex = (): JSX.Element => (
  <>
    <NextSeo
      title={title}
      canonical={url}
      openGraph={{
        url,
        title,
      }}
    />
    <h1>Not Found</h1>
    <p>
      Either this page doesn&#39;t exist... or we&apos;ve just entered an alternate
      timeline. 🤔
    </p>
  </>
);

export default NotFoundIndex;
