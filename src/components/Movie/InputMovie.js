import React, { useState } from 'react';

const defaultValues = {
  id: 0,
  title: 'TestTitle',
  subtitle: 'TestSubtitle',
  description: 'TestDesc',
  year: 1900,
  imageUrl: 'https://wallpapercave.com/wp/wp3144286.png',
  rating: 0.0,
};

const InputMovie = props => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = e => {
    e.preventDefault();

    let movie = {
      id: Math.floor(Math.random() * 10000),
      title: formValues.title,
      subtitle: formValues.subtitle,
      description: formValues.description,
      year: formValues.year,
      imageUrl: formValues.imageUrl,
      ratings: [],
      rating: 0,
    };

    props.setMovies(movies => [...movies, movie]);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleResetForm = e => {
    e.preventDefault();
    setFormValues({
      id: 0,
      title: '',
      subtitle: '',
      description: '',
      year: 0,
      imageUrl: '',
      ratings: [],
      rating: 0,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <h3>Input movie form</h3>
          </div>

          <div className="row">
            <div className="col-md-4">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                className="form-control"
                value={formValues.title}
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="subtitle">Subtitle</label>
              <input
                id="subtitle"
                name="subtitle"
                type="text"
                className="form-control"
                value={formValues.subtitle}
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="year">Year</label>
              <input
                id="year"
                name="year"
                type="number"
                className="form-control"
                value={formValues.year}
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-12">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                rows="3"
                value={formValues.description}
                required
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <label htmlFor="imageUrl">URL</label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="text"
                className="form-control"
                value={formValues.imageUrl}
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <br></br>

          <div className="row">
            <div className="col-md-1">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="col-md-1">
              <button type="button" className="btn btn-secondary" onClick={handleResetForm}>
                Reset Form
              </button>
            </div>
          </div>
        </div>

        <hr></hr>
      </form>
    </div>
  );
};

export default InputMovie;
