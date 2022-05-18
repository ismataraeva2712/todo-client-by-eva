import React from 'react';
import { toast } from 'react-toastify';

const Fulllist = ({ list, refetch }) => {
    const { _id, name, description } = list


    const handleComplete = id => {
        fetch(`http://localhost:5000/list/${id}`, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                refetch()
                toast.success('completed successfully')
            });
    }

    const handleDelete = id => {
        fetch(`http://localhost:5000/list/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                refetch()
                toast.error(' TO-do list Item is deleted')
            });
    }

    return (
        <div className='col-12 col-md-2 col-lg-4 border rounded p-2  '>
            {list?.taskComplete ?
                <div className='text-decoration-line-through'>
                    <h4>{name}</h4>
                    <h4>{description}</h4>
                </div>
                :
                <div className=' '>
                    <h4>{name}</h4>
                    <h4>{description}</h4>
                </div>
            }
            <button onClick={() => handleComplete(_id)} className='mx-3 btn btn-success'>Complete</button>

            <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
        </div>
    );
};

export default Fulllist;