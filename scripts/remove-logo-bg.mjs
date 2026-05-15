import sharp from "sharp";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input  = resolve(__dirname, "../public/logo.png");
const output = resolve(__dirname, "../public/logo.png"); // üzerine yaz

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const buf = Buffer.from(data);
const threshold = 235; // 235+ = "beyaz sayılır"

for (let i = 0; i < buf.length; i += 4) {
  const r = buf[i], g = buf[i + 1], b = buf[i + 2];
  if (r >= threshold && g >= threshold && b >= threshold) {
    buf[i + 3] = 0; // şeffaf yap
  }
}

await sharp(buf, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(output);

console.log(`✓ logo.png arka planı kaldırıldı (${info.width}×${info.height})`);
