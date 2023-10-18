import React from 'react';
import "../css/FoodInfo.css";
import Adana from "../assets/adana.png";
import Beyti from "../assets/beyti.png";
import Border from "../assets/border.png";
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';
function FoodInfo() {

    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [string, setString] = useState("")
    useEffect(() => {
        axios.get(`http://qrandmenu.xyz/api/Product/product-list?categoryId=${categoryId}`)
            .then((response) => {
                setProducts(response.data.data);

            })

            .catch((error) => {
                console.error('API veri çekme hatası:', error);
            });
    }, []);

    const productsWithImages = products.filter((product) => product.productPhotograph);
    const productsWithoutImages = products.filter((product) => !product.productPhotograph);

    // Her iki grup ürünü alfabetik olarak sıralayın
    productsWithImages.sort((a, b) => a.productName.localeCompare(b.productName));
    productsWithoutImages.sort((a, b) => a.productName.localeCompare(b.productName));

    // Sıralanmış ürünleri birleştirin
    const sortedProducts = [...productsWithImages, ...productsWithoutImages];
    console.log(sortedProducts);
    return (

        <div className='foodmain'>


            <div className="foodrectangle" >
                {products.slice(-1).map((product) => (
                    <div className="foodtext-wrapper">{product.categoryName}</div>
                ))}

            </div>

            <div className="foodcontainer">
                {sortedProducts.map((product) => (
                    <div className={` ${product.productPhotograph ? 'foodgrid' : 'newfoodgrid'}`}>
                        <div className='img-container'>
                            {product.productPhotograph && (<>

                                <img
                                    src={`http://portal.qrandmenu.com${product.productPhotograph}`}
                                    className="foodimg"

                                /></>)}
                        </div>


                        <h2 className="food-title">{product.productName}</h2>
                        <h5 className="food-descrip">{product.productDescription}</h5>
                        <div className="price">{product.productPrice}₺</div>



                    </div>
                ))}
            </div>




        </div>
    );
}

export default FoodInfo;