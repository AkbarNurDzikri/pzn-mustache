import Mustache from 'mustache';

test('Try nested object', () => {
  const data = Mustache.render(`Hi, {{person.name}}`, {
    person: {
      name: 'Dzikri',
    },
  });

  expect(data).toBe('Hi, Dzikri');
});