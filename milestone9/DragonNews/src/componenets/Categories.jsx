import React from 'react';
import { use } from 'react';
import { NavLink } from 'react-router';

const CategoriesPromise = fetch("categories.json").then(res => res.json());

const Categories = () => {
    
    const categories = use(CategoriesPromise);

    return (
        <div>
            <h2 className='font-bold '>All Categories ({categories.length})</h2>

            <div className='grid grid-cols-1 gap-3 mt-5'>
                {
                    categories.map((category) => (
                        <NavLink
                        key={category.id}
                         className={"btn w-3/5 bg-transparent  border-0 shadow-none mr-10 hover:bg-gray-200 font-semibold text-accent"}
                        
                        to={`category/${category.id}`}
                        >
                            {category.name}
                        </NavLink>
                    ))
                }

            </div>
        </div>
    );
};

export default Categories;