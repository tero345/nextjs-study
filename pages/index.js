import Axios from 'axios';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css'

/**
 * 모든 페이지 사전 렌더링
 * 더 좋은 퍼포먼스
 * 검색엔진 최적화 SSO
 * 1. 정적 생성
 * 2. SSR(서버사이드랜더링)
 * 3. 페이지에 따라 Static Generation / Server-side Redering 으로 만들수 잇다.
 * 
 * [정적생성]
 * 프로젝트가 빌드하는 시점에 html 파일들이 생성
 * 모든 요청에 재사용
 * 퍼포먼스 이유로, Next.js 는 정정 생성을 권고
 * 정적 생성된 페이지들은 CDN에 캐시
 * getStaticProps, getStaticPaths
 * 
 * [SSR]은 매 요청 시 마다 HTML을 생성
 * 항상 최신 상태유지
 * getServerSiderProps
 */

/**
 * [Static Generation] 정적생성 (미리 만들어 두는 경우)
 *  마케팅페이지 / 블로그 게시물 / 제품목록 / 도움말,문서
 * 
 * [Server-side Redering] 항상 최신상태 유지 
 * 관리자 페이지 / 분석 차트
 * 
 * 
 */

export default function Home({list}) {
  // 환경변수 적용
  //const API_URL = process.env.NEXT_PUBLIC_API_URL;

  //const [list, setList] = useState([]);
  //const [isLoading, setisLoading] = useState(true);

  // function getData() {
  //   Axios.get(API_URL)
  //     .then(res => {
  //       setList(res.data);
  //       setisLoading(false);
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       setisLoading(true);
  //   });
  // }

  // vue computed, mounted 와 비슷
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Next.js Study용 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {isLoading && (
        <div style={{ padding: "300px 0"}}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )} */}

      {/* {!isLoading && ( */}
        <>
          <Header 
            as="h3" 
            style={{ paddingTop: 40 }}
          >
            Best
          </Header>
          <Divider />
          {/* slict() 인자 (시작, 종료) 함수를 사용해서 분리한다. */}
          <ItemList list={ list.slice(0, 9) }/>
          <Divider />
          <Header 
            as="h3" 
            style={{ paddingTop: 40 }}
          >
            New
          </Header>
          {/* slict() 인자 (시작) 두번째 인자가 없으면 시작부터 마지막까지 전체. */}
          <ItemList list={ list.slice(10) }/>
        </>
      {/* )} */}
    </div>
  )
}

// 정적 페이지로 변경 목록조회 페이지
export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
      props: {
          list: data,
          name: process.env.name
      }
  }
}