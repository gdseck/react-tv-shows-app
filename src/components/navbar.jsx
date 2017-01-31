import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

const NavBar = () => (
  <NavFixed>
    <NavWrap>
      <NavLogo>
        <StyledImage src={require(`public/img/tv-icon.png`)} />
      </NavLogo>
      <StyledNavList>
        <StyledNavItem key='1'>
          <StyledLink to='/' activeClassName={'active'} onlyActiveOnIndex>
            Home
          </StyledLink>
        </StyledNavItem>
        <StyledNavItem key='2'>
          <StyledLink to='/series-list' activeClassName={'active'}>
            Series List
          </StyledLink>
        </StyledNavItem>
      </StyledNavList>
    </NavWrap>
  </NavFixed>
)

const NavFixed = styled.div`
  position: fixed;
  top: 0;
  background: black;
  padding: 0;
  height: 4em;
  z-index: 999;
  width: 100%;
`

const NavWrap = styled.div`
  text-align: left;
  margin: 0 auto;
  width: 95%;
  height: 100%;
  position: relative;
`

const NavLogo = styled.div`
  display: inline-block;
  margin-top: 0.4em;
`

const StyledLink = styled(Link)`
  fontSize: 1.1em;
  color: #bbb;
  padding: 0.7em 1rem 0.6em 1rem;
  textDecoration: none;
  &:hover {
    color: white;
  }
  &.active {
    background: rgb(164, 0, 0);
    color: white;
  }
`

const StyledImage = styled.img`
  display: block;
  width: auto;
  height: 47px;
  text-decoration: none
`

const StyledNavList = styled.ul`
  line-height: 4em;
  position: absolute;
  display: inline-block;
  text-transform: uppercase;
  text-align: left;
  margin: 0;
`

const StyledNavItem = styled.li`
  display: inline-block;
  line-height: 1em;
  text-align: -webkit-match-parent;
`

export default NavBar
