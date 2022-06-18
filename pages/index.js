import Axios from 'axios';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Divider, Header } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css'

export default function Home() {

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const [list, setList] = useState([]);

  function getData() {
    Axios.get(API_URL)
      .then(res => {
        setList(res.data);
      })
      .catch(error => {
        console.log(error)
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </div>
  )
}

// axios 설치