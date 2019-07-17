import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
                <html>
                    <Head>
                        <title>Appetit</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
                        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" />
                    </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </html>
        )
    }
}