import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Item from '../../src/component/Item';
import Head from 'next/head'

// 랜더링
function Post({ item, name }) {
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
    return {
      paths: [
        { params: { id: "740" } },
        { params: { id: "730" } },
        { params: { id: "729" } },
      ],
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