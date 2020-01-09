/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';

const RecipeItem = ({
  stringToHighlight,
  title,
  ingredients,
  thumbnail,
  href,
}) => (
  <div className="col-sm-3 mt-4">
    <div className="card">
      <a href={href}>
        <img
          className="card-img-top img-fluid"
          src={thumbnail}
          alt={`${title} Recipe`}
        />
      </a>
      <div className="card-body">
        <h5 className="card-title">
          <Highlighter
            searchWords={[stringToHighlight]}
            textToHighlight={title}
          />
        </h5>
        <p className="card-text">
          <strong>Ingredients: </strong>
          <Highlighter
            searchWords={[stringToHighlight]}
            textToHighlight={ingredients}
          />
        </p>
      </div>
    </div>
  </div>
);

RecipeItem.propTypes = {
  stringToHighlight: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default RecipeItem;
