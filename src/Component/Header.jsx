import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const FrameHeader = styled.header`
  background: rgb(197, 225, 249);
`;

const Header = () => {
    const menuList = [
      '메뉴1',
      '메뉴2',
      '메뉴3',
      '메뉴4',
      '메뉴5',
      '메뉴6',
    ]
  return (
    <>
      <FrameHeader>
      <ul>
        {menuList.map((menu, index) => {
          return (
            <li>
              <a href='#none' key={index}>
                {menu}
              </a>
            </li>
          )
        })}
      </ul>
      </FrameHeader>
    </>
  )
}

export default Header