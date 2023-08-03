import Mustache from 'mustache';
import fs from 'fs/promises';

test('Membaca file template mustache dengan file system node js', async () => {
  const template = await fs.readFile('./templates/hello.mustache').then(data => data.toString());
  const data = Mustache.render(template, {
    title: 'Judul',
    name: 'Rojali',
  });

  console.info(data);

  expect(data).toContain('Rojali');
});