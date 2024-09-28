import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Tasks = () => {

    const [data, setData] = useState([]);

    async function fetchData() {
        try {
            const result = await axios.get('http://localhost:3000/tasks');
            console.log(result.data);
            setData(result.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    let finalData = data.map((obj) => {

        return (
            <>
                <div className='col-4 mb-4 '>
                    <div className="card bg-stone-50" style={{ width: "18rem;" }}>
                        <div class="card-body">
                            <h5 class="card-title font-sans text-blue-600 font-bold w-96 text-xl text-center">{obj.title}</h5>
                            <p class="card-text text-center font-sans mt-2">{obj.description}</p>
                            <p class="card-text text-center font-sans mt-2">{obj.status}</p>
                            <p class="card-text text-center font-sans mt-2">{obj.priority}</p>
                            <p class="card-text text-center font-sans mt-2">{obj.dueDate}</p>

                            <div className='d-flex justify-end mt-4'>
                            <Link to="#" class="btn btn-outline-danger h-9 mt-1 me-3 rounded-lg">Edit</Link>
                            <Link to="">
                                <img src="/images/delete.png" alt="Image not found!!"  style={{height:"5vh"}} className='mt-1'/>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

    });

    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    {finalData}
                </div>

            </div>
        </>
    )
}

export default Tasks