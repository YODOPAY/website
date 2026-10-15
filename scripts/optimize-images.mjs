// Generates the compressed WebP copies the home page uses from the original
// artwork in /public. Re-run after replacing any original:
//   node scripts/optimize-images.mjs
import { statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public");

// [source, max width in px (about 2x the largest size it is shown at), quality, output name?]
// Resized images are cached for a month by file name, so when a photo is swapped for a
// different one, give it a new output name instead of reusing the old one.
const IMAGES = [
  ["images/hero_bg.png", 1920, 76, "images/hero_friends.webp"],
  ["images/your_tag.png", 1920, 76],
  ["images/footer_bg.png", 720, 72],
  ["images/ama.png", 917, 82],
  ["images/bring_together.png", 376, 88],
  ["images/find_spot.png", 974, 82],
  ["images/instant_transfer.png", 974, 82],
  ["images/plans1.png", 604, 80],
  ["images/plans2.png", 579, 80],
  ["images/plans3.png", 594, 80],
  ["images/plans4.png", 694, 80],
  ["images/comment1.png", 86, 86],
  ["images/comment2.png", 86, 86],
  ["images/comment3.png", 86, 86],
  ["images/comment4.png", 86, 86],
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

for (const [source, width, quality, outputName] of IMAGES) {
  const input = path.join(publicDir, source);
  const output = outputName
    ? path.join(publicDir, outputName)
    : input.replace(/\.(png|svg)$/, ".webp");
  await sharp(input, source.endsWith(".svg") ? { density: 172 } : {})
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(output);
  before += kb(input);
  after += kb(output);
  console.log(`${source}: ${kb(input)} KB -> ${kb(output)} KB`);
}

console.log(`total: ${before} KB -> ${after} KB`);
