import React from 'react';
import "../css/Main.css";
import Logo from "../assets/Logo.png";
import Yemek from "../assets/yemek.png";
import Menu from "../pages/Menu";
import { Link } from 'react-router-dom';


function Main(props) {
    return (

        <div className="iphone-pro-max">


            <img className="harbiyerestaurant" src={Logo} />
            <div className='rectangles'>
                <div className='recandleft'>

                    <div className='leftdiv'>
                        <img className='rectangle3'

                            alt="Rectangle"
                            src="https://generation-sessions.s3.amazonaws.com/03be5549cf8420652a9a3d4c5efdf36f/img/rectangle-39.svg"
                        />
                        <div className='rectangle4' />
                        <div className='rectangle5' />

                        <div className="flexcontainer">
                            <p className="textp">
                                <span className="text-wrapper1">
                                    KENDİNE
                                </span>
                                <span className="text-wrapper2">HAS</span>
                            </p>
                            <p className="textp">
                                <span className="text-wrapper3">KONSEPT</span>
                                <span className="span">
                                    {" "}
                                    <br />
                                </span>
                            </p>
                            <p className="textp">
                                <span className="span1">
                                    ENVAİ

                                </span>
                                <span className="span2">ÇEŞİT</span>
                            </p>
                            <p className="textp">
                                <span className="span3">LEZZET</span>
                            </p>
                        </div>

                    </div>


                    <div className='rightdiv'>

                        <img className='rectangle6'

                            alt="Rectangle"
                            src="https://generation-sessions.s3.amazonaws.com/03be5549cf8420652a9a3d4c5efdf36f/img/rectangle-39.svg"
                        />
                        <img className='yemek'


                            src={Yemek}
                        />

                    </div>


                </div>
                <div className='menu'>



                    {/* <div className='menutext'>MENU</div> */}
                    <div className="divmenu" />
                    <Link to='kategoriler'>
                        <button class="buton"><span>MENU</span>

                        </button>
                    </Link>
                </div>
            </div>



        </div>







    );
}

export default Main;