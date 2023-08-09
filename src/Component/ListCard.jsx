import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const ListCard = ({item}) => {
  useEffect(()=>{
    console.log(process.env.PUBLIC_URL)
    return (
      console.log(process.env.PUBLIC_URL))
  },[])
  return (
    <>
      <div className='imgCon'>
      <p className='discount'>
        {`${item.discount}% 할인`}
      </p>
      <img src={`${process.env.PUBLIC_URL}${item.img}`} alt="" />
      <p className='imgLabel'>장바구니에 담기</p>
      </div>
      <p>{item.title}</p>
      <p>{`${item.price}원`}</p>
    </>
  )
}

export default ListCard