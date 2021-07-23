import React, { useEffect } from "react";
import { Carousel } from "./../../Carousel/Carousel";

import STAR from "./../../../images/star (1).svg";
import CART from "./../../../images/cart.svg";
import REMOVE from "./../../../images/remove.svg";

import { fetchPopular, filterBy } from "../../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

import './Home.css'
// import OwlCarousel from 'react-owl-carousel2';
// import 'react-owl-carousel2/style.css';
const FilterState = (filterState, spanActive) => {
    return filterState.map((cat, index) => {
      return (
        <>
        {console.log(1)}
        <li
          onClick={(event) => spanActive(event, cat)}
          className={index === 0 ? "active " : ""}
          key={cat + index}
        >
          {cat}
        </li>
        </>
      );
    });
  };
export const Home = () => {
  const products = useSelector((state) => state.products);
  const filterState = ["Low Price", "High Price", "A - Z", "Z - A"];
  const dispatch = useDispatch();

  const spanActive = (event, cat) => {
    event.target.parentNode.parentNode
      .querySelectorAll(".filter-box li")
      .forEach((elem) => {
        elem.classList.remove("active");
      });
    event.target.classList.toggle("active");
    const index = filterState.findIndex((item) => item === cat);
    dispatch(filterBy(index+1));
  };
  const filterByCategory = (item) => {
    dispatch(filterBy(5, item))
  }
  const ProductCategories = () => {
    console.log(products);
    return products.categorieList.length > 0 ? ( products.categorieList.map((item) => {
        return(
            <div class="item" key={item} onClick={() => filterByCategory(item)}>
            <h4>{item}</h4>
            </div>
        );
      })
    ) : (
        <div>loading</div>
    )
  };
  const ProductList = () => {
    return products.productList.length > 0 ? (
      products.productList.map((item, index) => {
        return (
          <div
            className="product__list__item"
            key={item + index}
            style={{
              width: 310,
              height: 150,
              backgroundColor: "white",
              borderRadius: 9,
              paddingTop: 20,
              display: "flex",
            }}
          >
            <div className='prod-img-cont'>
              <img
                className='prod-img'
                style={{ width: 100, height: 100, objectFit: "contain" }}
                src={item.image}
                alt=""
              />
            </div>
            <div style={{ paddingRight: 10 }}>
              <div
                style={{
                  borderRadius: 4,
                  backgroundColor: "#5062AA",
                  padding: "4px 10px 4px 10px",
                  color: "#fff",
                }}
              >
                {item.category}
              </div>
              <div>
                <p style={{ fontSize: 17 }}>
                  {item.title.substring(0, 25)} ...
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 20,
                  marginTop: -20,
                }}
              >
                <p style={{ fontSize: 17, color: "#454b57" }}>$ {item.price}</p>
                {!item.isAdd ? (
                  <>
                    <div
                      onClick={() =>
                        dispatch({ type: "ADD_CART", product: item })
                      }
                      className="product__list__item__cart"
                      style={{
                        padding: 5,
                        borderRadius: 9,
                        backgroundColor: "#F1F3F6",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={CART}
                        style={{ width: 20, height: 20 }}
                        alt=""
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      onClick={() =>
                        dispatch({ type: "REMOVE_CART", product: item })
                      }
                      className="product__list__item__cart"
                      style={{
                        padding: 5,
                        borderRadius: 9,
                        backgroundColor: "#F1F3F6",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={REMOVE}
                        style={{ width: 20, height: 20 }}
                        alt=""
                      />
                    </div>
                  </>
                )}
                <div
                  className="product__list__item__star"
                  style={{
                    padding: 5,
                    borderRadius: 9,
                    backgroundColor: "#F1F3F6",
                    cursor: "pointer",
                  }}
                >
                  <img src={STAR} style={{ width: 20, height: 20 }} alt="" />
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>პროდუქტების სექცია ცარიელია</div>
    );
  };
  useEffect(() => {
    dispatch(fetchPopular());
  }, []);

  return (
    <>
      <div style={{ maxWidth: 1366, margin: "0 auto" }}>
        <div
          style={{
            marginTop: 60,
            padding: 15,
            backgroundColor: "white",
            borderRadius: 9,
          }}
        >
          <Carousel />
        </div>
                              <div style={{maxWidth: 1366, display:'flex', gap: 20, overflowX: 'scroll'}}>
            <ProductCategories />
          </div>
        <div
          style={{
            marginTop: 30,
            padding: 15,
            backgroundColor: "white",
            borderRadius: 9,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 20,
            flexWrap: "wrap",
          }}
        >

          <div
            style={{
              backgroundColor: "#F1F3F6",
              flex: 1,
              borderRadius: 9,
              padding: 20,
            }}
          >
            <div style={{ paddingLeft: 20 }}>
              <h3>Filter By</h3>
            </div>
            <div className="filter__list">
              <ul
                className="filter-box"
                style={{ listStyle: "none", paddingLeft: 20, paddingRight: 20 }}
              >
                {FilterState(filterState, spanActive)}
              </ul>
            </div>
          </div>

          <div
            style={{
              flex: 4,
              padding: 20,
              minHeight: 300,
              backgroundColor: "#F1F3F6",
              borderRadius: 9,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <ProductList />
            {/* {products.productList.length > 0 && (
              <>
                <div>Pagination</div>
              </>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};
