import React from 'react';
import ReactDOM from 'react-dom';
import SearchFunSun from './FunSunSearch';


const HomePageFunSun = () => {

    return (
            <div className="main-fun-sun">
                <div className="container_main-fun-sun">
                    <div className="sub_cont-fun-sun">
                        <div className="home_Fun">
                            <SearchFunSun />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HomePageFunSun;