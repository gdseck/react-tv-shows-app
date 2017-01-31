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
  margin: auto;
  border: 1px solid lightgray;
  padding: 2em;
  flex: 1 1 auto;
  max-width: 55rem;
  background: #fff;
  overflow: hidden;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.7);
`

const ShowsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: space-between;
`
