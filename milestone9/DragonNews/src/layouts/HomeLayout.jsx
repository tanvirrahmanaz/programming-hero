import React from 'react';
import { Outlet } from 'react-router';
import Header from '../componenets/Header';
import LatestNews from '../componenets/LatestNews';
import Navbar from '../componenets/Navbar';
import LeftAside from '../componenets/homelayout/LeftAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <aside>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right_nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;