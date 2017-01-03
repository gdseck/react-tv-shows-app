import React from 'react'
import styled from 'styled-components'

export default class Show extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imageUrl: require('public/img/notfound.png')
    }
  }

  render () {
    const {show, router} = this.props
    return (
      <ShowContainer
        onClick={() => router.push(`/series-list/${encodeURIComponent(show._id)}`)}
      >
        <ShowDataList>
          <div>
            <StyledImage hasImage={show.image} src={show.imageUrl
              ? require(`${show.imageUrl}`)
              : this.state.imageUrl}
            />
          </div>
          <ShowInfo>
            <li><b>title:</b> {show.title}</li>
            <li><b>year:</b> {show.year}</li>
            <li><b>creators:</b> {
              show.creators.map((creator, index) =>
                `${creator}${index + 1 === show.creators.length ? '' : ', '}`
              )
            }</li>
          </ShowInfo>
        </ShowDataList>
      </ShowContainer>
    )
  }
}

Show.propTypes = {
  show: React.PropTypes.object,
  router: React.PropTypes.object
}

const ShowContainer = styled.div`
  display: inline-block;
  height: 12%;
  width: 400px;
  overflow: auto;
  border: 1px solid lightgrey;
  border-radius: 3px;
  margin: 1em;
  padding: 1%;
  flex: 0 1 auto;
  cursor: pointer;
  &:hover {
    background: ivory
    border-color: black
  }
`

const ShowDataList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  height: 6em;
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0;
`

const ShowInfo = styled.div`
  height: 90%;
  padding: 1em;
`

const StyledImage = styled.img`
  height: ${props => props.hasImage ? 170 : 116}px;
  width: auto;
`
