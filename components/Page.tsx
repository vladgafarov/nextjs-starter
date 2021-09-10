import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'
import 'tippy.js/dist/tippy.css'
import { IPage } from './interfaces/Page'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'proxima';
    src: url('/static/fonts/proxima/ProximaNova-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'proxima-medium';
    src: url('/static/fonts/proxima/ProximaNova-Semibold.woff') format('woff');
    font-style: normal;
  }
  @font-face {
    font-family: 'proxima-bold';
    src: url('/static/fonts/proxima/ProximaNova-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  
  .padding {
    ${tw`px-7 md:px-12 lg:px-20 xl:px-24 2xl:px-32`}
  }
`

const Page = ({ children }: IPage) => {
   return (
      <div>
         <BaseStyles />
         <GlobalStyles />
         {children}
      </div>
   )
}

export default Page
