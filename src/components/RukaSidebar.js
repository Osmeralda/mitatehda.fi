import React, { useState } from 'react'
import * as styles from '../styles/global.css'
import styled, {createGlobalStyle} from "styled-components"
import { Link, graphql, useStaticQuery } from 'gatsby'

const Global = createGlobalStyle`
body {
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
`
const MenuIcon = styled.button`
  position: relative;
  top: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div{
    width: 1.5rem;
    height: 0.2rem;
    background: tomato;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: transform 200ms;

    :first-child {
      transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)'}
    }
    :nth-child(2) {
      transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)'}
    }
    :nth-child(3) {
      transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)'}
    }
  }
`
const MenuLinks = styled.nav`

transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
`
const RukaSidebar = () => {
  const [nav, showNav] = useState(false)

 

    return (
        <div>
        <Global />
        <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
        </MenuIcon>
        <MenuLinks nav={nav} className='drpdwn'>
        <ul className='ul'>
          <li className='li'>
          <Link to="/ruka/laskettelu">Laskettelu</Link>
          </li>
          <li className='li'>
          <Link to="/ruka/kelkkailu">Kelkkailu</Link>
          </li>
          <li className='li'>
          <Link to="/ruka/hiihto">Hiihto</Link>
          </li>
          <li className='li'>
          <Link to="/ruka/vaellus">Vaellusreitit</Link>
          </li>
          <li className='li'>
          <Link to="/ruka/kaupat">Kaupat</Link>
          </li>
        </ul>
        </MenuLinks>
      </div>           
    )
}

export default RukaSidebar