import React from 'react'
import styled from 'styled-components'

export default class Show extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render () {
    const {show, router} = this.props
    return (
      <ShowContainer
        onClick={() => router.push(`/series-list/${encodeURIComponent(show._id)}`)}
      >
        <ShowDataList>
          <ShowDataListItem><b>title:</b> {show.title}</ShowDataListItem>
          <ShowDataListItem><b>year:</b> {show.year}</ShowDataListItem>
          <ShowDataListItem><b>creators:</b> {
            show.creators.map((creator, index) =>
              `${creator}${index + 1 === show.creators.length ? '' : ', '}`
            )
          }</ShowDataListItem>
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
  width: 300px;
  overflow: auto;
  border: 1px solid lightgrey;
  border-radius: 3px;
  margin: 1em;
  padding: 1.5em;
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
`

const ShowDataListItem = styled.li`

`
