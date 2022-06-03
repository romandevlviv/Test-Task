import { useEffect } from 'react';

export function updateQuality(products) {
  for (let i = 0; i < products.length; i++) {
    switch (products[i].type) {
      case "TICKETS": {
        const {quality, sellIn} = checkTicketItemsBySellIn(products[i]);
        products[i].sellIn = sellIn;
        products[i].quality = quality;
        break;
      }
      case 'NORMAL': {
        if (products[i].sellIn <= 0 && products[i].quality > 0) {
          products[i].quality -= 2;
          products[i].sellIn -= 1;
        }
        if (products[i].sellIn > 0) {
          const {quality, sellIn} = checkNormalItemsByQuality(products[i]);
          products[i].sellIn = sellIn;
          products[i].quality = quality;
        }
        break;
      }
    }

    if (products[i].sellIn <= 0) {
      products[i].sellIn = 0;
    }

    if (products[i].quality <= 0) {
      products[i].quality = 0;
    }
  }

  return products;
}

const checkTicketItemsBySellIn = (product) => {
  if (product.sellIn >= 10) {
    return { quality: product.quality + 1, sellIn: product.sellIn - 1}
  }
  if (product.sellIn < 10 && product.sellIn > 1) {
    product.quality += 2;
    product.sellIn -= 1;
  } else {
    product.quality = 0;
    product.sellIn = 0;
  }
  return { quality: product.quality, sellIn: product.sellIn}
}

const checkNormalItemsByQuality = (product) => {
  if (product.quality === 0) {
    product.quality = 0;
    product.sellIn -= 1;
  }
  if (product.quality > 0) {
    product.quality -= 1;
    product.sellIn -= 1;
    if (product.isSecondHand) {
      product.quality -= 1;
    }
  }
  return { quality: product.quality, sellIn: product.sellIn}
}

export function Task2() {
    useEffect(() => {
        const products = [
            {
                name: 'concert a',
                type: 'TICKETS',
                quality: 30,
                sellIn: 12,
            },
            {
                name: 'concert b',
                type: 'TICKETS',
                quality: 30,
                sellIn: 8,
            },
            {
                name: 'concert c',
                type: 'TICKETS',
                quality: 30,
                sellIn: 1,
            },
            {
                name: 'macbook',
                type: 'NORMAL',
                quality: 30,
                sellIn: 0,
                isSecondHand: false,
            },
            {
                name: 'monitor',
                type: 'NORMAL',
                quality: 30,
                sellIn: 2,
                isSecondHand: false,
            },
            {
                name: 'keyboard',
                type: 'NORMAL',
                quality: 0,
                sellIn: 2,
                isSecondHand: false,
            },
            {
                name: 'mouse',
                type: 'NORMAL',
                quality: 20,
                sellIn: 5,
                isSecondHand: true,
            },
        ];

        const updated = updateQuality(products);
        console.log(updated);
    }, []);
    return null;
}
