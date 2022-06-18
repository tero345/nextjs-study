import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Item from '../../src/component/Item';
import Head from 'next/head'

const Post = ({ item }) => {
    // 라우터 가져오기
    // router.push | router.replace
    // push로 이동시키면 history stack에 쌓여서 뒤로가기가 가능하고
    // replace로 이동시키면 history stack에 안쌓여서 뒤로가기 불가능
    //const router = useRouter()
    //const { id } = router.query // 현재 route 값

    //const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

    //const [item, setItem] = useState([]);

    // function getData() {
    //     Axios.get(API_URL)
    //     .then(res => {
    //         setItem(res.data);
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });
    // }

    // useEffect(() => {
    //     if(id && id > 0)
    //     getData();
    // }, [id]);

    return (
        <>
            {item &&
                <>
                    <Head>
                        <title>{item.name}</title>
                        <meta name="description" content={item.description} />
                        <link rel="icon" href="/favicon.ico" />
                    </Head><Item item={item} />
                </>
            } 
        </>
    )
}

export default Post;

// context 응답, params 등
export async function getServerSideProps(context) {
    const id =  context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await Axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            item: data,
        }
    }
}