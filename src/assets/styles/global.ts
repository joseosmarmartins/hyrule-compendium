import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    box-sizing: border-box;
   }

   body, html, #root  {
    height: 100%;
  }

  iframe.neoasssist-widget-frame {
    display: none !important;
  }

  div#blip-chat-container {
    display: none !important;
  }

`
