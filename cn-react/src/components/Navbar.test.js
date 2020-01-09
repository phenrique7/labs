import React from 'react';
import { mount } from 'enzyme';
import Navbar from './Navbar';

const searchRecipeFn = jest.fn();

describe('Navbar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Navbar searchString="mocky" searchRecipes={searchRecipeFn} />,
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('Should be App', () => {
    expect(wrapper.is('Navbar')).toBeTruthy();
  });

  test('Should to trigger searchRecipes function', () => {
    wrapper
      .find('input')
      .simulate('change', { target: { value: 'another mocky' } });

    expect(searchRecipeFn).toHaveBeenCalled();
  });

  test('Should be receive props', () => {
    expect(wrapper.props().searchString).toEqual('mocky');
    expect(typeof wrapper.props().searchRecipes).toBe('function');
  });
});
