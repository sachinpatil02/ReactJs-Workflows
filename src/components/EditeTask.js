import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditTask = () => {
  let history = useHistory();
  const { id } = useParams();
  const [task, setTask] = useState({
    title: "",
    completed: ""
  });

  const { title, completed } = task;
  const onInputChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadTask();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/tasks/${id}`, task);
    history.push("/tasks/add");
  };

  const loadTask = async () => {
    const result = await axios.get(`http://localhost:3003/tasks/${id}`);
    setTask(result.data);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="card col-md-8 col-sm-12 p-5">
        <h2 className="text-center mb-4">Update Task</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Task"
              name="title"
              value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">State</label>
                </div>
                <select class="custom-select" name="completed" onChange={e => onInputChange(e)}>
                    <option value={completed}>{completed}</option>
                    <option value="New">New</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
          
          <button className="btn btn-warning btn-block">Update Task</button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
