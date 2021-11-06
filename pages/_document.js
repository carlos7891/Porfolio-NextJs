import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
        <Html>
            <Head>
                <title>Carlos Espinosa Portfolio</title>
                <script src="https://kit.fontawesome.com/86934e9611.js" crossOrigin="anonymous"></script>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Mulish:wght@500&family=Roboto&display=swap" rel="stylesheet"/>
                <meta name="description" content="Carlos Espinosa Portfolio Website"/>
            </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument