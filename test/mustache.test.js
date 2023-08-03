import Mustache from 'mustache';

test('Coba menggunakan mustache', () => {
  const data = Mustache.render(`Hello, {{name}}`, {name: 'Dzikri'});
  expect(data).toBe('Hello, Dzikri');
});

test('Coba menggunakan mustache Cache', () => {
  Mustache.parse("Hello, {{name}}");
  
  const data = Mustache.render(`Hello, {{name}}`, {name: 'Dzikri'});
  expect(data).toBe('Hello, Dzikri');
});