import React from 'react'
import { Header } from 'semantic-ui-react'
import Gnb from '../Gnb'

export default function () {
  return (
    <div>
        <div style={{ display: "flex", paddingTop: 20 }}>
            <div style={{ flex: "100px 0 0" }}>
                <img 
                    src="images/logo.svg" 
                    alt='logo' 
                    style={{
                        display: "block", 
                        width: 80
                    }}
                ></img>
            </div>
            <Header as={"h1"}>Tero</Header>
        </div>
        <Gnb />
    </div>
  )
}
