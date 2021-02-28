import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [tasks, setUser] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const result = await axios.get("http://localhost:3003/tasks");
    //const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/tasks`);
    setUser(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/tasks/${id}`);
    loadTasks();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-white display-5">All Tasks</h1>
        <table className="table  border shadow table-hover">
          <thead className="thead-dark text-center">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task Title</th>
              <th scope="col">completed State</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td className="text-left">{task.title}</td>
                <td >{task.completed}</td>
                <td>
                  <Link className="border-0 btn-transition btn btn-outline-info" to={`/tasks/${task.id}`}>
                  <i className="fa fa-eye"></i>
                  </Link>
                  <Link
                    className="border-0 btn-transition btn btn-outline-success"
                    to={`/tasks/edit/${task.id}`}
                  >
                    <i className="fa fa-edit"></i>
                  </Link>
                  <Link
                    className="border-0 btn-transition btn btn-outline-danger"
                    onClick={() => deleteUser(task.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
