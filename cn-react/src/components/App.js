/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import shortid from 'shortid';
import Navbar from './Navbar';
import RecipeItem from './RecipeItem';
import recipes from '../sample_data/recipes.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: '',
    };

    this.searchRecipes = this.searchRecipes.bind(this);
  }

  searchRecipes(searchString) {
    if (searchString.length === 0) {
      this.recipes = recipes.results;
    } else {
      this.recipes = recipes.results.filter(recipe => {
        const { title, ingredients } = recipe;
        const regexp = new RegExp(searchString, 'i');

        return regexp.test(title) || regexp.test(ingredients);
      }, []);
    }

    this.setState({ searchString });
  }

  render() {
    const { searchString } = this.state;

    return (
      <div className="App">
        <Navbar
          searchString={searchString}
          searchRecipes={this.searchRecipes}
        />
        <div className="container mt-10">
          <div className="row">
            {this.recipes.length === 0 ? (
              <h1 className="text-center container-fluid">
                No results to show
              </h1>
            ) : (
              this.recipes.map(recipe => (
                <RecipeItem
                  key={shortid.generate()}
                  stringToHighlight={searchString}
                  {...recipe}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
