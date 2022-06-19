import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Item from '../../src/component/Item';
import Head from 'next/head'
import { Loader } from "semantic-ui-react";

// 랜더링
function Post({ item, name }) {

    // Fallback 상태일 경우 빈화면 보여주기 전에 로딩 화면 처리
    const router = useRouter();

    if(router.isFallback){
        return(
            <div style={{ padding: "100px 0" }}>
                <Loader active inline="centered">
                Loading
                </Loader>
            </div>
        )
    }

    return (
        <>
            {item &&
                <>
                    <Head>
                        <title>{item.name}</title>
                        <meta name="description" content={item.description} />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    {name} 환경 입니다.
                    <Item item={item} />
                </>
            } 
        </>
    )
}

export default Post;

export async function getStaticPaths() {
    const apiUrl = process.env.apiUrl;
    const res = await Axios.get(apiUrl);
    const data = res.data;

    return {
        // 9개까지 미리 렌더링 처리 이후부터는 스크롤 시 생성
         paths: data.slice(0, 9).map(item => ({
            params : {
                id: item.id.toString(),
            }
         })),
      fallback: true,
    };
  }

export async function getStaticProps(context) {
    const id =  context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await Axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            item: data,
            name: process.env.name
        }
    }
}