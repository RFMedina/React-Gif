import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="divHrPrincipal animate__animated animate__fadeInUp">
          <div className="search-box ">
            <button className="btn-search">
              <i className="fas fa-search"></i>
            </button>

            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="input-search"
              placeholder="Búsqueda"
            />
          </div>
          <hr />
        </div>
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};