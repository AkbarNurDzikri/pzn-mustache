import Mustache from 'mustache';
import fs from 'fs/promises';

test('Coba Mustache Sections', async () => {
  const template = await fs.readFile('./templates/person.mustache').then(data => data.toString());
  const data = Mustache.render(template, {
    person: {
      name: 'Khalid Shalahuddin Akbar',
    }
  });

  console.info(data);
  expect(data).toContain('Khalid Shalahuddin Akbar');
});