import Mustache from 'mustache';
import fs from 'fs/promises';

test('Templating partials', async () => {
  const headerTemplate = await fs.readFile('./templates/header.mustache').then(data => data.toString());
  const footerTemplate = await fs.readFile('./templates/footer.mustache').then(data => data.toString());
  const content = await fs.readFile('./templates/content.mustache').then(data => data.toString());

  const data = Mustache.render(content, {
    title: 'Mengenal Partials untuk templating',
    content: 'Konsep templating sangat penting dalam membangun sebuah aplikasi, khususnya berbasis website. Dengan dibuatnya template, tampilan yang sama pada beberapa halaman cukup dibuat satu kali untuk digunakan berkali-kali dihalaman lain yang membutuhkan.'
  },
  {
    header: headerTemplate,
    footer: footerTemplate
  });

  console.info(data);
  expect(data).toContain('Partials untuk templating');
  expect(data).toContain('Konsep templating sangat penting');
  expect(data).toContain('Programmer Zaman Now');
});