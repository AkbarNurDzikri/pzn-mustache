import Mustache from 'mustache';

test('Coba menggunakan mustache', () => {
  const data = Mustache.render(`Hello, {{name}}`, {name: 'Dzikri'});
  expect(data).toBe('Hello, Dzikri');
});