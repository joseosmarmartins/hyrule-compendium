import styled, { css } from 'styled-components'
import { HashLink } from 'react-router-hash-link'

export const Background = styled.div`
  background-color: #0d151c;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #fff;
`

export const Content = styled.div<{
  $color?: string
}>`
  text-align: center;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: column;
  ${({ $color }) => {
    if ($color)
      return css`
        background-color: ${$color};
      `

    return css``
  }};
`

export const Title = styled.div`
  font-size: xx-large;
`

export const Subtitle = styled.div`
  font-size: large;
`

export const NavigationButton = styled(HashLink)`
  border: 1px solid #fff;
  color: #fff;
  padding: 10px;
  text-decoration: none;
  border-radius: 15px;
  background: #131f2a;
  margin-top: 150px;

  :hover {
    background: #203446;
  }
`

export const ContentEnd = styled.div`
  height: 80px;
  width: 80px;
  position: absolute;
  bottom: -40px;
  background-color: green;
  transform: rotateZ(45deg);
  z-index: -1;
  background: #0d151c;
`

export const ImageWrapper = styled.div``

export const ImageTitle = styled.div`
  font-weight: bold;
  position: absolute;
  font-size: 100px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: white;
  border-top-style: solid;
  margin-bottom: 140px;
`

export const ImageSubtitle = styled.div`
  width: 700px;
  color: #3d3d3d;
  padding: 50px 0 50px 0;
  white-space: pre-wrap;
  border-bottom: 1px solid;
`

export const ImageSubtitleHighlight = styled.strong`
  font-weight: bold;
`
