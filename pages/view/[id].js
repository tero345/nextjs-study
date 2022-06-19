import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Item from '../../src/component/Item';
import Head from 'next/head'

// 랜더링
function Post({ item, name }) {
    
// }
// const Post = ({ item }) => {

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
                    </Head>
                    {name} 환경 입니다.
                    <Item item={item} />
                </>
            } 
        </>
    )
}

export default Post;

// context 응답, params 등
// @ getServerSideProps: ssr을 위해 data fetching
// SSR 형태로 페이지를 생성하고 싶은 경우엔 페이지 컴포넌트 파일에 getServerSideProps 라는 함수를 export 하면 된다.
export async function getServerSideProps(context) {
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


// export function getStaticPath() {
//     return {
//         paths: [
//             {params: { id: "740" }},
//             {params: { id: "730" }},
//             {params: { id: "729" }},
//         ],
//         false : getStaticPaths에서 리턴하지 않은 페이지는 모두 404로 연결
//         true : 먼저 사용자에게 fallback 페이지를 보여줌 / 서버에서 static하게 페이지를 생성함
//         fallback: false, // false 일 경우 없는 페이지는 대응이 안함
//     }
// }