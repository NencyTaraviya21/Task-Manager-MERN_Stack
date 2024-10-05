import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Tasks = () => {

    const navigate = useNavigate();

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

    // const ColorChangeCard = () => {
    //     // State to manage card color
    //     const [cardColor, setCardColor] = useState('bg-stone-50');
      
    //     // Function to handle button click and change the card color
    //     const changeColor = () => {
    //       setCardColor(cardColor === 'bg-stone-50' ? 'bg-stone-200' : 'bg-stone-50');
    //     };
        
    //   };
      
    useEffect(() => {
        fetchData();
    },[]);

    let finalData = data.map((obj) => {

        return (
            <>
                <div className='col-4 mb-4 '>
                    <div className="card bg-stone-50" style={{ width: "18rem;" }}>
                        <div class="card-body">
                            <h5 class="card-title font-sans text-blue-600 font-bold w-96 text-xl text-left">{obj.title}</h5>
                            <p class="card-text text-left font-sans mt-2">{obj.description}</p>
                            <p class="card-text text-left font-sans mt-2">{obj.status}</p>
                            <p class="card-text text-left font-sans mt-2">{obj.priority}</p>
                            <p class="card-text text-left font-sans mt-2">{obj.dueDate}</p>

                            <div className='d-flex justify-end mt-4'>
                            <Link to="" class="btn btn-outline-success h-9 mt-1 me-3 rounded-lg w-24 ">Finished</Link>
                            
                            <Link to="" class="btn btn-outline-danger h-9 mt-1 me-3 rounded-lg ">Edit</Link>
                            <Link>
                                <button onClick={async()=>{
                                    console.log(obj._id);
                                    const result = await axios.delete(`http://localhost:3000/tasks/${obj._id}`);
                                    console.log(result);

                                    // navigate('/home');

                                    window.location.reload();
                                }}>
                                    <img src="/images/delete.png" alt="Image not found!!"  style={{height:"5vh"}} className='mt-1'/>
                                </button>
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
                    <div className='col mt-20 ms-44' onClick={()=>{
                        
                    }}><img src="images/add.png" alt="" className='w-14 ms-2'/>Add More</div>
                </div>
            </div>
            
        </>
    )
}

export default Tasks; 