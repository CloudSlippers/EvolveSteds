const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs/promises');

const BASE_URL = 'https://evolvebiolabs.co.uk';

async function scrapeProducts() {
  const { data } = await axios.get(`${BASE_URL}/shop/`);
  const $ = cheerio.load(data);

  const products = [];

  $('li.product').each((_, el) => {
    const link = $(el).find('a.woocommerce-LoopProduct-link').attr('href');
    const title = $(el).find('h2.woocommerce-loop-product__title').text().trim();
    const image = $(el).find('img').attr('srcset')?.split(',').pop()?.trim().split(' ')[0];
    const priceText = $(el).find('.price').text().trim().replace(/\s+/g, ' ');
    const isOnSale = $(el).find('.onsale').length > 0;

    const originalPrice = $(el).find('del .amount').text().trim() || null;
    const salePrice = $(el).find('ins .amount').text().trim() || $(el).find('.price .amount').text().trim();

    products.push({
      title,
      image,
      price: salePrice,
      originalPrice,
      link,
      isOnSale,
    });
  });

  await fs.writeFile('data/products.json', JSON.stringify(products, null, 2));
  console.log(`✅ Scraped ${products.length} products.`);
}

scrapeProducts().catch(console.error);