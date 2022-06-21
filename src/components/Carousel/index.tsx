import React, { useState } from 'react'
import { Props } from './interfaces'
import * as Styled from './styled'

function Carousel({ children }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)

  function handleClickCarouselItem(newIndex: number) {
    setActiveIndex(newIndex)
  }

  return (
    <Styled.Carousel>
      <Styled.Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child: React.ReactNode) => {
          return React.cloneElement(<Styled.Item>{child}</Styled.Item>)
        })}
      </Styled.Inner>
      <Styled.Footer>
        {React.Children.map(children, (_, index) => {
          return (
            <Styled.Button
              $color={index === activeIndex ? '#fff' : '#2D4962'}
              onClick={() => handleClickCarouselItem(index)}
            />
          )
        })}
      </Styled.Footer>
    </Styled.Carousel>
  )
}

export default Carousel
