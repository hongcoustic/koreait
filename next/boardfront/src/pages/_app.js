import { globalStyle } from "@/styles/global.styles";
import { Global } from "@emotion/react";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} /> 
    </>
  )
}
