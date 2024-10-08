import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import axios from "axios";

const TaskForm = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "low",  
    dueDate: "",
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/tasks/${id}`)
        .then((response) => {
          setFormData(response.data); 
        })
        .catch((error) => {
          console.error("Error fetching task data:", error);
        });
    }
  }, [id]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (id) {
     
      axios.put(`http://localhost:3000/tasks/${id}`, formData)
        .then((response) => {
          console.log("Task updated:", response.data);
          navigate('/tasks');
        })
        .catch((error) => {
          console.error("Error updating task:", error);
        });
    } else {
   
      axios.post("http://localhost:3000/tasks", formData)
        .then((response) => {
          console.log("Task created:", response.data);
          navigate('/tasks'); 
        })
        .catch((error) => {
          console.error("Error creating task:", error);
        });
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-lg mx-auto p-8 bg-stone-100 mt-2 border-5 border-slate-300 shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-3 text-center text-gray-800">
        {id ? "Edit Task" : "Create New Task"}
      </h2>

      <div className="mb-3">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In-Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block text-gray-700 text-sm font-bold mb-2">Priority</label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="dueDate" className="block text-gray-700 text-sm font-bold mb-2">Due Date</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {id ? "Update Task" : "Create Task"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
