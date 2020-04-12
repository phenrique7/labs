document
  .querySelector('.SearchBar-Input')
  .addEventListener('focus', function () {
    this.select();
    document
      .querySelector('.SearchBar-InputScaled')
      .classList
      .add('SearchBar-InputAnimation');
  })

document
  .querySelector('.SearchBar-Input')
  .addEventListener('blur', () => {
    document
      .querySelector('.SearchBar-InputScaled')
      .classList
      .remove('SearchBar-InputAnimation');
  })
