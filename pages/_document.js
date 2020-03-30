import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {

        const siteUrl = 'https://stimulus.plus';
        const siteTitle = 'Stimulus Payment Calculator';
        const siteDesc = 'Calculate what you will get from COVID-19 (Coronavirus) stimulus payments/checks.';

        return (
            <html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="description" content={ siteDesc } />
                    <meta name="keywords"
                        content="stimulus calculator, stimulus payment calculator, stimulus check calculator, coronavirus stimulus calculator, coronavirus payment calculator, covid-19 payment calculator"/>
                    <meta name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <link
                        href="https://fonts.googleapis.com/css?family=Montserrat:500,700"
                        rel="stylesheet"
                    />

                    <link rel="canonical" href={ siteUrl } />
                    <meta property="og:type" content="website" />
                    <meta name="og:title" property="og:title" content={ siteTitle } />
                    <meta name="og:description" property="og:description" content={ siteDesc } />
                    <meta name="twitter:title" content={ siteTitle } />
                    <meta name="twitter:description" content={ siteDesc } />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }

}

export default MyDocument;
