import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Task = () => {
  const [task, setTask] = useState({
    title: "",
    completed: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadTask();
  }, []);
  const loadTask = async () => {
    const res = await axios.get(`http://localhost:3003/tasks/${id}`);
    setTask(res.data);
  };
  return (
    <div class="d-flex justify-content-center">
    <div className="card col-md-8 col-sm-12 p-5">
      <Link className="btn btn-outline-primary col-md-3 col-sm-6 pull-right mb-4" to="/tasks/add">
        back to Home
      </Link>
      <h1 className="display-5">Task Id: {id}</h1>
        <div class="text-center w-100 p-4">
            <div class="card-body">
                <h5 class="card-title">{task.title}</h5>
                <p class="card-text">Tast description goes here...</p>
                <button class="btn btn-primary">{task.completed}</button>
            </div>
            
        </div>

    </div></div>
    
  );
};

export default Task;
