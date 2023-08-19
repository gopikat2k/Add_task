import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import your custom CSS

function App() {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('description', description);
    formData.append('date', date);
    formData.append('time', time);
    formData.append('image', image);

    try {
      console.log(heading, description, date, time,image)
      alert('Task added successfully');
    } catch (error) {
      console.error(error);
      alert('An error occurred while adding the task');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card custom-card">
        <div className="card-header">
          <h1 className="mb-0 custom-heading">Add a Task</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="heading" className="form-label custom-label">Heading</label>
              <input
                type="text"
                id="heading"
                className="form-control"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label custom-label">Description</label>
              <textarea
                id="description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="date" className="form-label custom-label">Date</label>
                <input
                  type="date"
                  id="date"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="time" className="form-label custom-label">Time</label>
                <input
                  type="time"
                  id="time"
                  className="form-control"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label custom-label">Image</label>
              <input
                type="file"
                accept="image/*"
                id="image"
                className="form-control"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <button type="submit" className="btn btn-primary custom-button">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

