import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import RecipeItem from './RecipeItem';

describe('App', () => {
  test('Should be App', () => {
    const wrapper = mount(<App />);
    expect(wrapper.is('App')).toBeTruthy();
    wrapper.unmount();
  });

  test('Should to render twenty <RecipeItem /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(RecipeItem)).toHaveLength(20);
  });

  test('Should to show "No results to show"', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().recipes = [];
    wrapper.update();
    wrapper.setState({ searchString: 'mocky' });
    expect(wrapper.instance().recipes).toEqual([]);
    expect(wrapper.find('h1').text()).toEqual('No results to show');
  });
});
