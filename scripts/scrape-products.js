const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs/promises');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const BASE_URL = 'https://evolvebiolabs.co.uk';

async function downloadImage(url, filename) {
  const res = await fetch(url);
  const arrayBuffer = await res.arrayBuffer(); // Avoid deprecated .buffer()
  const buffer = Buffer.from(arrayBuffer);

  const folderPath = path.join(__dirname, '../public/products');
  await fs.mkdir(folderPath, { recursive: true });

  const filePath = path.join(folderPath, filename);
  await fs.writeFile(filePath, buffer);

  return `/products/${filename}`; // Return relative URL
}

async function scrapeProducts() {
  const { data } = await axios.get(`${BASE_URL}/shop/`);
  const $ = cheerio.load(data);
  const products = [];

  const items = $('li.product');

  for (let i = 0; i < items.length; i++) {
    const el = items[i];
    const link = $(el).find('a.woocommerce-LoopProduct-link').attr('href');
    const title = $(el).find('h2.woocommerce-loop-product__title').text().trim();
    const rawImage = $(el).find('img').attr('srcset')?.split(',').pop()?.trim().split(' ')[0];

    if (!rawImage) continue; // Skip if no image

    const isOnSale = $(el).find('.onsale').length > 0;
    const originalPrice = $(el).find('del .amount').text().trim() || null;
    const salePrice = $(el).find('ins .amount').text().trim() || $(el).find('.price .amount').text().trim();

    // Get file extension safely
    let fileExt;
    try {
      fileExt = path.extname(new URL(rawImage).pathname) || '.webp';
    } catch {
      fileExt = '.webp';
    }

    const imageFilename = `product-${i}${fileExt}`;
    const localImagePath = await downloadImage(rawImage, imageFilename);

    products.push({
      id: i,
      title,
      image: localImagePath,
      price: salePrice,
      originalPrice,
      link,
      isOnSale,
    });
  }

  await fs.mkdir('data', { recursive: true });
  await fs.writeFile('data/products.json', JSON.stringify(products, null, 2));
  console.log(`✅ Scraped & saved ${products.length} products.`);
}

scrapeProducts().catch(console.error);
