// Generates the compressed WebP copies the home page uses from the original
// artwork in /public. Re-run after replacing any original:
//   node scripts/optimize-images.mjs
import { statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public");

// [source, max width in px (about 2x the largest size it is shown at), quality]
const IMAGES = [
  ["images/hero_bg.png", 1440, 78],
  ["wallet-logo.svg", 1222, 86],
  ["logo.png", 800, 86],
  ["side_image.png", 1196, 80],
  ["image1.png", 469, 82],
  ["image2.png", 452, 82],
  ["image3.png", 456, 82],
  ["lol.png", 200, 86],
  ["yeah.png", 209, 86],
  ["images/tag1.png", 990, 80],
  ["images/tag3.png", 990, 80],
  ["yodo_tag1.png", 764, 84],
  ["yodo_tag2.png", 801, 84],
  ["images/spotlight.png", 375, 88],
  ["images/spotlight1.png", 1000, 80],
  ["images/spotlight2.png", 1100, 80],
  ["images/spotlight3.png", 1200, 80],
];

const kb = (file) => Math.round(statSync(file).size / 1024);
let before = 0;
let after = 0;

for (const [source, width, quality] of IMAGES) {
  const input = path.join(publicDir, source);
  const output = input.replace(/\.(png|svg)$/, ".webp");
  await sharp(input, source.endsWith(".svg") ? { density: 172 } : {})
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(output);
  before += kb(input);
  after += kb(output);
  console.log(`${source}: ${kb(input)} KB -> ${kb(output)} KB`);
}

console.log(`total: ${before} KB -> ${after} KB`);
