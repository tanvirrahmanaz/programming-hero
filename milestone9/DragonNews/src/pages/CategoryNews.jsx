import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [categorynews, setcategorynews] = React.useState([]);

    useEffect(() => {
        const filterNews = data.filter((news) => news.category_id == id);
        console.log(filterNews); 

        setcategorynews(filterNews);
    },[data, id]);
    return (
        <div>
            Total {categorynews.length}
        </div>
    );
};

export default CategoryNews;