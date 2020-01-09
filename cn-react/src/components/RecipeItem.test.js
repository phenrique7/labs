import React from 'react';
import { mount } from 'enzyme';
import RecipeItem from './RecipeItem';

describe('RecipeItem', () => {
  const propStringToHighlight = 'Cheese';
  const propTitle = 'Potato and Cheese Frittata';
  const propIngredients = 'cheddar cheese, eggs, olive oil';
  const propThumbnail = 'http://img.recipepuppy.com/2.jpg';
  const propHref =
    'http://allrecipes.com/Recipe/Potato-and-Cheese-Frittata/Detail.aspx';
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <RecipeItem
        stringToHighlight={propStringToHighlight}
        title={propTitle}
        ingredients={propIngredients}
        thumbnail={propThumbnail}
        href={propHref}
      />,
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('Should be RecipeItem', () => {
    expect(wrapper.is('RecipeItem')).toBeTruthy();
  });

  test('Should be receive props', () => {
    expect(wrapper.props().stringToHighlight).toEqual(
      propStringToHighlight,
    );
    expect(wrapper.props().title).toEqual(propTitle);
    expect(wrapper.props().ingredients).toEqual(propIngredients);
    expect(wrapper.props().thumbnail).toEqual(propThumbnail);
    expect(wrapper.props().href).toEqual(propHref);
  });

  test("Recipe's title and ingredients should to have <mark> tag", () => {
    const regexpMarkup = /<mark\s?[\w=\-"\s]*>[Cc]heese<\/mark>/;

    expect(wrapper.find('h5').html()).toMatch(regexpMarkup);
    expect(wrapper.find('p').html()).toMatch(regexpMarkup);
  });
});
