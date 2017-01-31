import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'

import Show from './show.jsx'
import SelectedShow from './selected-show.jsx'
import SearchField from './search-field.jsx'

const ShowWithRouter = withRouter(Show)

export default (
  {
    onChangeFilter,
    shows,
    handleRatingClick,
    updatingRating,
    highlightShow,
    highlightedShow,
    hasMoreShows,
    loadMoreShows
  }
) => (
  <PageContainer>
    <SearchField onChange={onChangeFilter} />
    <ShowsContainer>
      {
        shows.map((show, index) => (
          <ShowWithRouter
            show={show}
            key={show.id}
            handleRatingClick={handleRatingClick}
            updatingRating={updatingRating}
            highlightShow={highlightShow}
          />
        ))
      }
    </ShowsContainer>
    <div>
      {hasMoreShows ? <button onClick={loadMoreShows}>Load more</button> : null}
    </div>
  </PageContainer>
)

    // <SelectedShow highlightedShow={highlightedShow} />

const PageContainer = styled.div`
  position: relative;
  height: calc(100vh - 10em);
  margin: auto;
  border: 1px solid lightgray;
  padding: 2em;
  flex: 1 1 auto;
  max-width: 55rem;
  background: #fff;
  margin-bottom: 2rem;
  overflow: hidden;
  box-shadow: 0px 1px 2px black;
`

const PageTitle = styled.h1`
  text-align: center;
  font-size: 3em;
  margin: 0.2em;
`

const ShowsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 68%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: space-between;
  overflow: auto;
`
