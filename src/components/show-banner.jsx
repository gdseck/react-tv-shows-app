import React from 'react'
import styled from 'styled-components'
import {Icon} from 'react-fa'

export default class ShowBanner extends React.Component {
  render () {
    const {highlightedShow} = this.props
    const {rating, title, creators, image, year} = highlightedShow

    return (
      <HeaderShow>
        <HeaderShowImage>
          {
            image
              ? <img style={{height: '100%', width: '100%'}} src={require(`public/img/${highlightedShow.image}`)} />
              : <img style={{height: '100%', width: '100%'}} src={require(`public/img/notfound.png`)} />
          }
        </HeaderShowImage>
        <HeaderShowInfo>
          <HeaderTitle>
            {title}
          </HeaderTitle>
          <DetailsSection>
            <HeaderRating>
              {
                [1, 2, 3, 4, 5].map(score => {
                  return (
                    <Star
                      key={score}
                      value={score}
                      style={{flex: '0 1 100%'}}
                      rating={rating || ''}
                      color={rating && rating >= score ? 'goldenrod' : 'black'}
                    >
                      <Icon name='star' size='2x' />
                    </Star>
                  )
                })
              }
            </HeaderRating>
            <HeaderDetails>
              <ul>
                <li>{year || '' }</li>
                <li>{creators ? creators.map(creator => creator) : ''}</li>
              </ul>
            </HeaderDetails>
          </DetailsSection>
        </HeaderShowInfo>
      </HeaderShow>
    )
  }
}

const HeaderShow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  position: relative;
  height: 100%;
`

const HeaderShowImage = styled.div`
  height: 100%;
  position: relative;
  flex: 0 1 20%;
  display: inline-block;
`

const HeaderShowInfo = styled.div`
  flex: 1 1 100%;
  align-self: center;
  position: relative;
  height: 100%;
  width: auto;
  display: inline-block;
`

const HeaderTitle = styled.div`
  position: relative;
  width: 100%;
  height: 25%;
  top: 0;
  left: 0;

  padding-left: 2%;
  font-family: Arial, sans-serif;
  line-height: 120%;
  font-weight: 400;
  font-variant: normal;
  font-size: 2.4rem;
`

const HeaderRating = styled.div`
  position: relative;
  width: 30%;
  height: 25%;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`

const HeaderDetails = styled.div`
  width: 70%;
  position: relative:
  right: 0;
  height: 75%;
`

const DetailsSection = styled.div`
  position: relative;
  height: 75%;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
`
const Star = styled.button`
  padding: 2px;
  cursor: pointer;
  width: 1.1rem;
  display: inline-block;
  border: none;
  background: inherit;
  color: ${props => props.color};
`
