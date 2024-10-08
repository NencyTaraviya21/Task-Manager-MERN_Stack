import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Tasks.css";

const Tasks = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const result = await axios.get("http://localhost:3000/tasks");
      setData(result.data);
    } catch (error) {
      setError("Error fetching data.");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleFinishTask = async (id) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    try {
      await axios.patch(`http://localhost:3000/tasks/${id}`, { status: "Completed" });
      fetchData();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        {data.map((obj) => {
          const cardClass = checkedItems[obj._id] ? "bg-blue-100" : "";
          return (
            <div className="col-4 mb-4" key={obj._id}>
              <div className={`card bg-stone-50 ${cardClass} task-card`} style={{ width: "30rem" }}>
                <div className="card-body">
                  <h5 className="card-title font-sans text-blue-600 font-bold w-96 text-xl text-left">
                    {obj.title}
                  </h5>
                  <p className="card-text text-left font-sans mt-2">{obj.description}</p>
                  <p className="card-text text-left font-sans mt-2">{obj.status}</p>
                  <p className="card-text text-left font-sans mt-2">{obj.priority}</p>
                  <p className="card-text text-left font-sans mt-2">{obj.dueDate}</p>
                  <div className="d-flex justify-end mt-4">
                    <button
                      className="btn btn-outline-success h-9 mt-1 me-3 rounded-lg"
                      onClick={() => handleFinishTask(obj._id)}
                    >
                      Finished
                    </button>
                    <Link to={`/edit/${obj._id}`} className="btn btn-outline-danger h-9 mt-1 me-3 rounded-lg">
                      Edit
                    </Link>
                    <button
                      onClick={async () => {
                        try {
                          await axios.delete(`http://localhost:3000/tasks/${obj._id}`);
                          fetchData();
                        } catch (error) {
                          console.error("Error deleting task:", error);
                        }
                      }}
                    >
                      <img
                        src="/images/delete.png"
                        alt="Delete"
                        style={{ height: "5vh" }}
                        className="mt-1"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col mt-20 ms-44" onClick={() => navigate("/taskform")}>
          <img src="images/add.png" alt="Add" className="w-14 ms-2" />
          Add More
        </div>
      </div>
    </div>
  );
};

export default Tasks;

