import express, { Response } from "express";
import path from "path";
import fs from "fs";

const app: express.Application = express();
const PORT: number = 3092;

app.use(express.static(path.resolve("")));

interface HtmlLink {
  name: string;
  url: string;
}

function getHtmlLinks(): Record<string, HtmlLink[]> {
  const modulesPath: string = path.resolve("");
  const modules: string[] = fs
    .readdirSync(modulesPath)
    .filter((dir: string) => dir.startsWith("Modul"))
    .sort((a: string, b: string) => {
      const numA = parseInt(a.replace("Modul", ""), 10);
      const numB = parseInt(b.replace("Modul", ""), 10);
      return numA - numB;
    });

  const links: Record<string, HtmlLink[]> = {};

  modules.forEach((modul: string) => {
    const modulePath: string = path.join(modulesPath, modul);
    const files: string[] = fs
      .readdirSync(modulePath)
      .filter((file: string) => file.endsWith(".html"));

    links[modul] = files.map((file: string) => {
      const filePath: string = path.join(modul, file);
      return { name: file, url: `/${filePath}` };
    });
  });

  return links;
}

app.get("/", (_req: express.Request, res: Response): void => {
  const links: Record<string, HtmlLink[]> = getHtmlLinks();
  let htmlContent: string = `
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
                h1 {
                    color: #333;
                    text-align: center;
                    margin-bottom: 40px;
                }
                h2 {
                    color: #0073e6;
                    text-align: center;
                    margin-top: 40px;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                    max-width: 600px;
                    margin: 20px auto;
                }
                li {
                    margin: 10px 0;
                    padding: 15px;
                    background: #0073e6;
                    text-align: center;
                    border-radius: 8px;
                    transition: background 0.3s ease, transform 0.3s ease;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                li a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: bold;
                    display: block;
                }
                li:hover {
                    background: #005bb5;
                    transform: translateY(-5px);
                }
            </style>
        </head>
        <body>
            <h1>Praktikum Pemrograman Web 1</h1>`;

  Object.keys(links).forEach((modul: string) => {
    htmlContent += `<h2>${modul}</h2><ul>`;
    links[modul].forEach((link: HtmlLink) => {
      htmlContent += `<a href="${link.url}"><li>${link.name}</li></a>`;
    });
    htmlContent += `</ul>`;
  });

  htmlContent += `
        </body>
        </html>`;

  res.send(htmlContent);
});

app.listen(PORT, (): void => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
