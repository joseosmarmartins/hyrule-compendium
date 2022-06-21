import styled from 'styled-components'

export const Carousel = styled.div`
  overflow: hidden;
`

export const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
  height: 100vh;
  display: flex;
`

export const Item = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Footer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
`

export const Button = styled.button.attrs({ type: 'button' })<{
  $color: string
}>`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 10px;
  border: 0;
  background-color: ${({ $color }) => $color};
  cursor: pointer;
  border: 1px solid #2d4962;
`
