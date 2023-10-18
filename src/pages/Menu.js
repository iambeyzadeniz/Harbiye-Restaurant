import React from 'react';
import "../css/Menu.css";
import ImageOne from "../assets/kirmiziet.png";

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Menu() {

    const [categories, setCategories] = useState([]);
    const kategoriUrl = 'http://qrandmenu.xyz/api/Category/category-list?firmId=1&branchId=1';
    useEffect(() => {
        axios.get(kategoriUrl)
            .then((response) => {
                setCategories(response.data.data);
            })
            .catch((error) => {
                console.error("error", error);
            });

    }, []);
    console.log(categories);

    const sortedCategories = categories.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
    console.log(sortedCategories);
    return (
        <div className='main'>
            <div className="text-wrapper">Menü</div>



            <div className="container">
                {sortedCategories.map((category) => (
                    <Link to={`${category.categoryId}`} className='link' key={category.categoryId}>
                        <div className="card">
                            <p>{category.categoryName}</p>
                            <img className="kirmiziet" src={`http://portal.qrandmenu.com${category.categoryPhotograph}`} />

                        </div>
                    </Link>

                ))}
                <Link style={{ visibility: "hidden" }} to='urunler' className='link' >
                    <div className=" card"></div></Link>

            </div>



        </div >

    );
}
// function Category({ match }) {
//     const { category } = match.params;

//     return (
//         <div className="category">
//             <h2>{category}</h2>

//         </div>
//     );
// }