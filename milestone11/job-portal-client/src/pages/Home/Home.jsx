import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import { Suspense } from 'react';

const Home = () => {

    const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json())
    

    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<div>Loading...</div>}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;