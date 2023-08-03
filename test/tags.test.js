import Mustache from 'mustache';

test('Tags', () => {
  const data = Mustache.render(`Hello, {{name}}, my hobby is {{{hobby}}}`, {
    name: 'Dzikri',
    hobby: '<b>Programming</b>',
  });

  expect(data).toBe('Hello, Dzikri, my hobby is <b>Programming</b>');
});