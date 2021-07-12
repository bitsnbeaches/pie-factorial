import * as React from 'react'
import Document, {
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

export default class RootDocument extends Document {
  render () {
    return (
      <Html lang='pt-br'>
        <Head>
          <meta charSet='utf-8' />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

RootDocument.getInitialProps = async (ctx): Promise<DocumentInitialProps> => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  }
}
