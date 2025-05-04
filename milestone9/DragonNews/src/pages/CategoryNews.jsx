import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../componenets/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [categorynews, setcategorynews] = React.useState([]);

    useEffect(() => {
        if(id == "0"){
            setcategorynews(data);
            return;
        }
        else if(id == "1"){
            const filterNews =  data.filter((news) => news.others.is_today_pick == true);
            console.log(filterNews);
            setcategorynews(filterNews);}
        
        else{
            const filterNews = data.filter((news) => news.category_id == id);
            console.log(filterNews); 

            setcategorynews(filterNews);
        }



        
    },[data, id]);
    return (
        <div>
            <h2 className='font-bold mb-5'>
                Total <span className='text-secondary'>{categorynews.length}</span> News
            </h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categorynews.map(news  => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;