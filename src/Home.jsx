import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const tasks = [
    { number: "Task 1", link: "/task1" },
    { number: "Task 2", link: "/task2" },
    { number: "Task 3", link: "/task3" },
    { number: "Task 4", link: "/task4" },
    { number: "Task 5", link: "/task5" },
  ];

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    padding: "10px",
  };

  const subheadingStyle = {
    fontSize: "24px",
    padding: "10px",
  };

  return (
    <div className="center-container">
      <h1 style={headingStyle}>Arvind Royam</h1>
      <h2 style={subheadingStyle}>21BCI0027</h2>
      <h1 className="title">Task List</h1>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task Number</th>
            <th>Task Link</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.number}</td>
              <td>
                <Link to={task.link} className="task-link">
                  Go to Task {index + 1}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
