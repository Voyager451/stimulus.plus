import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    static render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="description" content="U.S. stimulus payment calculator."/>
                    <meta name="keywords"
                        content="stimulus calculator, stimulus payment calculator, stimulus check calculator, coronavirus stimulus calculator, coronavirus payment calculator, covid-19 payment calculator"/>
                    <meta name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <link
                        href="https://fonts.googleapis.com/css?family=Montserrat:500,700"
                        rel="stylesheet"
                    />
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
