import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useRouter } from 'next/router'

export default function Gnb() {
    let activeItem;
    const router = useRouter();

    if(router === "/"){
        activeItem = "home";
    }else if(router === "/about"){
        activeItem = "about";
    }else if(router === "/admin"){
        activeItem = "admin";
    }

    function goLink(e, data) {
        if(data.name === 'home'){
            router.push('/');
        }else if(data.name === 'about'){
            router.push('/about');
        }else if(data.name === 'admin'){
            router.push('/admin');
        }
    }

    return (
        <Menu inverted>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={goLink}
            />
            <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={goLink}
            />
            <Menu.Item
                name='admin'
                active={activeItem === 'admin'}
                onClick={goLink}
            />
        </Menu>
    );
}
