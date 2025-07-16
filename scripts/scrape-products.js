const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs/promises');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const BASE_URL = 'https://evolvebiolabs.co.uk';

// Inline inferCategory function
function inferCategory(title) {
  const lower = title.toLowerCase();
  if (lower.includes('ampoule') || lower.includes('ampoules')) return 'injectables-ampoules';
  if (lower.includes('tab') || lower.includes('tablet')) return 'oral-tablets';
  if ((lower.includes('ml') || lower.includes('injection')) && lower.includes('i.m')) return 'vials';
  return 'others';
}

async function downloadImage(url, filename) {
  const res = await fetch(url);
  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const folderPath = path.join(__dirname, '../public/products');
  await fs.mkdir(folderPath, { recursive: true });

  const filePath = path.join(folderPath, filename);
  await fs.writeFile(filePath, buffer);

  return `/products/${filename}`; // relative URL for frontend
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

    if (!rawImage) continue; // skip if no image

    const isOnSale = $(el).find('.onsale').length > 0;
    const originalPrice = $(el).find('del .amount').text().trim() || null;
    const salePrice = $(el).find('ins .amount').text().trim() || $(el).find('.price .amount').text().trim();

    // Get safe file extension
    let fileExt;
    try {
      fileExt = path.extname(new URL(rawImage).pathname) || '.webp';
    } catch {
      fileExt = '.webp';
    }

    const imageFilename = `product-${i}${fileExt}`;
    const localImagePath = await downloadImage(rawImage, imageFilename);

    // Infer category from title inline here
    const category = inferCategory(title);

    products.push({
      id: i,
      title,
      image: localImagePath,
      price: salePrice,
      originalPrice,
      link,
      isOnSale,
      category,   // add inferred category here
    });
  }

  await fs.mkdir('data', { recursive: true });
  await fs.writeFile('data/products.json', JSON.stringify(products, null, 2));

  console.log(`✅ Scraped & saved ${products.length} products with categories.`);
}

scrapeProducts().catch(console.error);
