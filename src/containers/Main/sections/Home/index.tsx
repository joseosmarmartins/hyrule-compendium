import Carousel from '~components/Carousel'
import Section from '~containers/Main/styled'
import hyrule from '~assets/images/hyrule.jpg'
import * as Styled from './styled'

function Home() {
  return (
    <Section id="home">
      <Styled.Background>
        <Carousel>
          <Styled.Content>
            <Styled.Title>The Legend of Zelda</Styled.Title>
            <Styled.Subtitle>Breath of the Wild</Styled.Subtitle>

            <Styled.NavigationButton smooth to="#categories">
              Explore Compendium
            </Styled.NavigationButton>
          </Styled.Content>
          <Styled.Content $color="#FFF">
            <img src={hyrule} alt="hyrule" />
            <Styled.ImageTitle>Hyrule</Styled.ImageTitle>
            <Styled.ImageSubtitle>
              Explore the complete{' '}
              <Styled.ImageSubtitleHighlight>
                Hyrule&apos;s Compedium
              </Styled.ImageSubtitleHighlight>
              , a vast continent rich in details, creatures, places, and items
              that will delight your eyes and keep you wanting to explore more
              and more. Let the magical land of Hyrule enchant you by knowing
              the game Legend of Zeld: Breath of the Wild, available for
              Nintendo Swith and Nintendo Wii.
            </Styled.ImageSubtitle>
          </Styled.Content>
          <Styled.Content>
            <Styled.Title>The Legend of Zelda 3</Styled.Title>
            <Styled.Subtitle>Breath of the Wild 3</Styled.Subtitle>
          </Styled.Content>
        </Carousel>
        <Styled.ContentEnd />
      </Styled.Background>
    </Section>
  )
}

export default Home
