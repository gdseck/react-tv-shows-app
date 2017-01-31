import React from 'react'
import ShowBanner from './show-banner'

import styled from 'styled-components'

export default props => (
  <SelectedShow>
    {
      Object.keys(props.highlightedShow).length !== 0
        ? <ShowBanner highlightedShow={props.highlightedShow} />
        : null
    }
  </SelectedShow>
)

const SelectedShow = styled.div`
  background: white;
  color: black;
  width: 100%;
  height: 12rem;
  border: 1px solid gray;
  border-radius: 3px;
  box-shadow: 3px 3px 12px -1px grey;
  margin-bottom: 1rem;
`
