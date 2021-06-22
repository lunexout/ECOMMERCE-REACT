import React, { useEffect } from 'react'
import {Carousel} from './../../Carousel/Carousel'

import STAR from './../../../images/star (1).svg'
import CART from './../../../images/cart.svg'
import POPULAR from './../../../images/popularity.svg'

import { fetchPopular } from '../../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux';
export const Home = () => {
    const products = useSelector(state => state.products)
    // const [products, setProducts] = React.useState([]);
    const filterState = ['Popular', 'Low Price', 'High Price', "A - Z", "Z - A"]
    const dispatch = useDispatch();

    const spanActive = (event) => {
            event.target.parentNode.parentNode
                .querySelectorAll(".filter-box li")
                .forEach((elem) => {
                    elem.classList.remove("active");
                });
            event.target.classList.toggle("active");
    }

    useEffect(() => {
        dispatch(fetchPopular())
    },[])
    return(
        <>
        <div style={{maxWidth: 1366, margin: '0 auto',}}>
            <div style={{marginTop: 60,padding: 15,backgroundColor: 'white', borderRadius: 9}}>
            <Carousel/>
            </div>
            <div style={{marginTop: 30,padding: 15,backgroundColor: 'white', borderRadius: 9, display: 'flex', justifyContent:'space-between', alignItems:'flex-start', gap: 20, flexWrap:'wrap'}}>
                <div style={{backgroundColor: '#F1F3F6', flex: 1, borderRadius: 9,padding: 20}}>

                    <div style={{paddingLeft: 20,}}>
                        <h3>Filter By</h3>
                    </div>
                    <div className="filter__list">
                        <ul
                        className="filter-box" style={{listStyle: 'none', paddingLeft: 20, paddingRight: 20}}>
                        {filterState.map((cat,index) => {
                            return(
                                <>
                                 <li
                                    onClick={(event) => spanActive(event, cat)}
                                    className={index === 0 ? "active " : ""}
                                    >{ cat }</li >
                                </>
                            )
                        })}
                        </ul>
                    </div>
                </div>
                
                <div style={{flex:4,padding: 20,minHeight:300, backgroundColor: '#F1F3F6', borderRadius: 9,display: 'flex', justifyContent:'center', alignItems: 'flex-start', flexWrap: 'wrap', gap: 20    }}>

                    {
                        products.productList.length > 0 ? (
                            products.productList.map(item => {
                                return(
                                    <>
                                    <div key={item} style={{width: 310, height: 150,backgroundColor: 'white' ,borderRadius: 9,paddingTop: 20, display: 'flex'}}>
                                        <div style={{width: 120,padding: 15}} >
                                            <img style={{width: 100,height:100,objectFit:'contain'}} src={item.image} alt=""/>
                                        </div>
                                        <div style={{paddingRight: 10}}>
                                        <div style={{borderRadius: 4, backgroundColor: '#8A96C6', padding: '4px 10px 4px 10px',color: '#fff'}}>
                                            {item.category}
                                        </div>
                                        <div>
                                            <p style={{fontSize: 17}}>{item.title.substring(0,25)} ...</p>
                                        </div>
                                        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', gap: 20, marginTop: -20}}>
                                            <p style={{fontSize: 17, color: '#454b57'}}>$ {item.price}</p>
                                            <div style={{padding: 5,borderRadius: 9, backgroundColor: '#F1F3F6'}}>
                                                <img src={CART} style={{width: 20, height: 20}}/>
                                            </div>
                                            <div style={{padding: 5,borderRadius: 9, backgroundColor: '#F1F3F6'}}>
                                            <img src={STAR} style={{width: 20, height: 20}}/>
                                            </div>
                                        </div></div>

                                    </div>
                                    </>
                                )
                            })
                            
                        ) : (
                            <div>პროდუქტების სექცია ცარიელია</div>
                        )
                    }
                    {products.productList.length > 0 && (
                        <>
                        <div>Pagination</div>
                        </>
                    )}

                </div>
            </div>
        </div>
        </>
    )
}