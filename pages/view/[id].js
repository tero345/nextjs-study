import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Item from '../../src/component/Item';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    const API_URL =
        `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

    const [item, setItem] = useState([]);

    function getData() {
        Axios.get(API_URL)
        .then(res => {
            setItem(res.data);
        })
        .catch(error => {
            console.log(error)
        });
    }

    useEffect(() => {
        if(id && id > 0)
        getData();
    }, [id]);

    return <Item item={item} />
}

export default Post