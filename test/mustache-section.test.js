import Mustache from 'mustache';
import fs from 'fs/promises';

test('Coba Mustache Sections Show', async () => {
  const template = await fs.readFile('./templates/person.mustache').then(data => data.toString());
  const data = Mustache.render(template, {
    person: {
      name: 'Khalid Shalahuddin Akbar',
    }
  });

  console.info(data);
  expect(data).toContain('Khalid Shalahuddin Akbar');
});

test('Coba Mustache Sections Not Show', async () => {
  const template = await fs.readFile('./templates/person.mustache').then(data => data.toString());
  const data = Mustache.render(template, {});

  console.info(data);
  expect(data).not.toContain('Khalid Shalahuddin Akbar');
});

test('Menampilkan data list', async () => {
  const template = await fs.readFile('./templates/hobbies.mustache').then(data => data.toString());
  const data = Mustache.render(template, {
    hobbies: ['Programming', 'Listening Music', 'Swimming'],
  });

  console.info(data);
  expect(data).toContain('Programming');
});

test('Menampilkan data list object', async () => {
  const template = await fs.readFile('./templates/students.mustache').then(data => data.toString());
  const data = Mustache.render(template, {
    students: [
      {nama: 'Dzikri Nur Akbar', jurusan: 'Teknik Informatika'},
      {nama: 'Khalid Shalahuddin Akbar', jurusan: 'Hadits'},
      {nama: 'Bilal Shalahuddin Akbar', jurusan: 'Fiqh'},
    ],
  });

  console.info(data);
  expect(data).toContain('Dzikri');
  expect(data).toContain('Khalid');
  expect(data).toContain('Bilal');
  expect(data).toContain('Informatika');
  expect(data).toContain('Hadits');
  expect(data).toContain('Fiqh');
});

test('Mustache Functions', () => {
  const params = {
    nama: 'Dzikri Nur Akbar',
    upper: () => {
      return (text, render) => {
        return render(text).toUpperCase();
      }
    },
  }

  const data = Mustache.render('Hello, {{#upper}}{{nama}}{{/upper}}', params);
  console.info(data);
});

test('Komentar pada mustache file', async () => {
  const template = await fs.readFile('./templates/hello.mustache').then(data => data.toString());
  const data = Mustache.render(template, {
    title: 'Judul',
    name: 'Dzikri Nur Akbar',
  });
  console.info(data);

  expect(data).toContain('Dzikri Nur Akbar');
  expect(data).not.toContain('Komentar');
});