import React, { useState, useEffect } from 'react';
import Fulllist from './Fulllist';
import { useQuery } from 'react-query';
import ToDoApp from './ToDoApp';

const Home = () => {
    const { isLoading, data: lists, refetch } = useQuery('repoData', () =>
        fetch('http://localhost:5000/lists').then(res =>
            res.json()
        ))

    if (isLoading) {
        return <p>loading....</p>
    }
    return (
        <div className='text-center'>
            <h1 className='text-primary my-5'>TO DO APP</h1>
            <ToDoApp refetch={refetch}></ToDoApp>
            <div className='row mt-5  '>
                {
                    lists.map(list => <Fulllist
                        key={list?._id}
                        list={list}
                        refetch={refetch}
                    ></Fulllist>)
                }
            </div>
        </div>
    );
};

export default Home;