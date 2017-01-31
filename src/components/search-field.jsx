import React from 'react'
import styled from 'styled-components'

export default (props) => (
  <div>
    <SearchField
      type='text'
      placeholder='Search title, year, creator...'
      onChange={(e) => props.onChangeFilter(e.target.value)}
    />
  </div>
)

const SearchField = styled.input`
  display: block;
  width: 100%;
  line-height: 2rem;
  font-size: 2rem;
  margin: 0;
  appearance: none;
  box-shadow: none;
  border-radius: none;
  padding: 10px;
  border: none;
  border-bottom: solid 2px #c9c9c9;
  transition: border 0.3s;
  margin-bottom: 1rem;

  &:focus {
    border: none;
    outline: none;
    border-bottom: solid 2px #969696;
  }
`
