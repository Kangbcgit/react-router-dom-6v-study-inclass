import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ListCard from './ListCard';

/** 선생님은 별도의 jsx파일로 만들어서 impor 시키는 방향으로 List를 가져오심. */
const MainList = ({ data }) => {
  // const dataList = data.filter(item => {
  //   // item.category === 3 ? '' : '';
  // });
  useEffect(() => {
    console.log(data);
    return console.log('unmount')
  }, [])
  return (
    <>
      <div className="headline">
        <h3>인기상품</h3>
        <Link to='/'>상품더보기</Link>
      </div>
      <section className='MainList'>
        <ul>
        {
          data.map(item => {
            return (
              <li>
                <ListCard item={item}>
                </ListCard>
              </li>
            );
          })
        }
        </ul>
      </section>
    </>
  );
}

const Main = ({ data }) => {
  //onClick 내부에 사용하는 navigate는 이벤트 함수로 전달됨으로써 a태그의 구는 갖지못함.
  //Link는 a태그로써 / navigate는 a태그라는 틀 없이 기능만 가져옴.
  const navigate = useNavigate();
  return (
    <>
      <MainList data={data}/>
    </>
  )
}

export default Main