import React from 'react';


const ToDoApp = ({ refetch }) => {

    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const description = event.target.description.value
        console.log(name, description)
        fetch('http://localhost:5000/list', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                description: description
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
        event.target.reset()
    }
    return (
        <div className='text-center'>

            <form onSubmit={handleSubmit}>
                <input className='mx-3 px-2' type="text" name="name" placeholder='name' id="" />
                <input className='mx-3 px-2' type="text" name="description" placeholder='description' id="" />
                <input className='btn btn-primary mx-3' type="submit" value="Add task" />

            </form>
        </div>
    );
};

export default ToDoApp;