import React from 'react'
import { styled } from 'styled-components';

const FrameFooter = styled.header`
  background: rgb(197, 225, 249);
`;
const Footer = () => {
  return (
    <>
      <FrameFooter>
        이것은 푸터랑께
      </FrameFooter>
    </>
  )
}

export default Footer