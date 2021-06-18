import React from 'react'
import {Carousel} from './../../Carousel/Carousel'
import { TopProducts } from './../../TopProducts/TopProducts';
export const Home = () => {
    return(
        <>
        <div style={{maxWidth: 1366, margin: '0 auto',}}>
            <Carousel/>
            <TopProducts/>
        </div>
        </>
    )
}