import React from 'react'
import styled from 'styled-components'

export default (props) => (
  <SearchWrapper>
    <SearchField
      type='text'
      placeholder='Search title, year, creator...'
      onChange={(e) => props.onChange(e.target.value)}
    />
  </SearchWrapper>
)

const SearchWrapper = styled.div`
  width: 100%;
  height: 3rem;
  background: linear-gradient(to bottom, #646464 0%,#0e0e0e 100%);
`

const SearchField = styled.input`
  position: relative;
  display: block;
  width: 50%;
  line-height: 1rem;
  font-size: 1rem;
  margin: 0;
  border-radius: 14px;
  padding: 10px;
  border: solid 1px #c9c9c9;
  transition: border 0.3s;
  float: right;
  clear: both;

  &:focus {
    outline: none;
    border-bottom: solid 1px #969696;
  }
`
