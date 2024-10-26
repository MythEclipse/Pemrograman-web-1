import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 3092;

// Melayani file statis dari semua modul
app.use(express.static(path.resolve('')));

// Fungsi untuk membaca dan mengelompokkan file HTML berdasarkan modul
function getHtmlLinks() {
    const modulesPath = path.resolve('');
    const modules = fs.readdirSync(modulesPath).filter(dir => dir.startsWith('Modul'));

    let links = {};

    modules.forEach(modul => {
        const modulePath = path.join(modulesPath, modul);
        const files = fs.readdirSync(modulePath).filter(file => file.endsWith('.html'));

        links[modul] = files.map(file => {
            const filePath = path.join(modul, file);
            return { name: file, url: `/${filePath}` };
        });
    });

    return links;
}

// Endpoint untuk landing page dinamis
app.get('/', (req, res) => {
    const links = getHtmlLinks();
    let htmlContent = `
        <html>
        <head>
            <title>Landing Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    background-color: #f4f4f9;
                }
                h1, h2 {
                    color: #333;
                    text-align: center;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                    max-width: 600px;
                    margin: 20px auto;
                }
                li {
                    margin: 10px 0;
                    padding: 10px;
                    background: #0073e6;
                    text-align: center;
                    border-radius: 8px;
                    transition: background 0.3s ease;
                }
                li a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: bold;
                }
                li:hover {
                    background: #005bb5;
                }
            </style>
        </head>
        <body>
            <h1>Praktikum Pemrograman Web 1</h1>`;

    Object.keys(links).forEach(modul => {
        htmlContent += `<h2>${modul}</h2><ul>`;
        links[modul].forEach(link => {
            htmlContent += `<a href="${link.url}"><li>${link.name}</li></a>`;
        });
        htmlContent += `</ul>`;
    });

    htmlContent += `
        </body>
        </html>`;

    res.send(htmlContent);
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
