// weather api key
const API_KEY = 'da8a276cba0e42a9a4382917232910';

// bottom
import CARGO from '../assets/bottom/cargos.png';
import CARGO_SHORT from '../assets/bottom/cargo-short.png';
import DENIM_SHORT from '../assets/bottom/denim-shorts.png';
import FLARE_PANTS from '../assets/bottom/flare-pants.png';
import JEANS from '../assets/bottom/jeans.png';
import SHORTS_WB from '../assets/bottom/shorts-w-belt.png';
import SHORTS_WOB from '../assets/bottom/shorts-wo-belt.png';
import SWEAT_PANTS from '../assets/bottom/sweatpants.png';
import TROUSER_PANTS from '../assets/bottom/cargos.png';
import SKIRT from '../assets/bottom/skirt.png';

// footwear
import BOOTS from '../assets/footwear/boots.png';
import BOOTS_FEMALE from '../assets/footwear/boots-female.png';
import DRESS_SHOES from '../assets/footwear/dress-shoes.png';
import FLAT_SHOES from '../assets/footwear/flat-shoes.png';
import HIGH_HEELS from '../assets/footwear/high-heels.png';
import LOAFERS from '../assets/footwear/loafers.png';
import SANDALS_FEMALE from '../assets/footwear/sandals-female.png';
import SANDALS_MALE from '../assets/footwear/sandals-male.png';
import SHOES from '../assets/footwear/shoes.png';
import SLINGBACK from '../assets/footwear/slingback.png';
import SLIPPER from '../assets/footwear/slipper.png';
import SLIPPERS from '../assets/footwear/slippers.png';
import SNEAKERS from '../assets/footwear/sneakers.png';
import WEDGE_HEELS from '../assets/footwear/wedge-heel.png';

// top
import DRESS from '../assets/top/dress.png';
import POLO from '../assets/top/polo.png';
import POLO_SHIRT_FEMALE from '../assets/top/polo-shirt-female.png';
import POLO_SHIRT_MALE from '../assets/top/polo-shirt-male.png';
import SANDO_FEMALE from '../assets/top/sando-female.png';
import SANDO_MALE from '../assets/top/sando-male.png';
import SWEATER from '../assets/top/sweater.png';
import TANK_TOP from '../assets/top/tank-top.png';
import TSHIRT from '../assets/top/tshirt.png';
import TURTLENECK from '../assets/top/turtleneck.png';
import LONG_SLEEVE from '../assets/top/long-sleeve.png';
import HOODIE from '../assets/top/hoodie.png';

// outerwear
import CARDIGAN from '../assets/outerwear/cardigan.png';
import VEST from '../assets/outerwear/vest.png';
import BLAZER_FEMALE from '../assets/outerwear/blazer-female.png';
import BLAZER_MALE from '../assets/outerwear/blazer-male.png';
import COAT_FEMALE from '../assets/outerwear/coat-female.png';
import COAT_MALE from '../assets/outerwear/coat-male.png';
import DENIM_JACKET from '../assets/outerwear/denim-jacket.png';
import PUFFER_JACKET from '../assets/outerwear/puffer-jacket.png';
import SUIT from '../assets/outerwear/suit.png';
import VARSITY from '../assets/outerwear/varsity-jacket.png';
import WINDBREAKER from '../assets/outerwear/windbreaker.png';

//level(min/max) 1 = hot
//level(min/max) 2 = war
//level(min/max) 3 = normal
//level(min/max) 4 = chilly
//level(min/max) 5 = cold
//gender 1 = male
//gender 2 = female
//gender 3 = unisex
const IMAGES = {
  bottom: [
    {
      id: 1,
      name: 'Cargo Pants',
      link: CARGO,
      gender: 3,
      min: 2,
      max: 5,
    },
    {
      id: 2,
      name: 'Denim Shorts',
      link: DENIM_SHORT,
      gender: 2,
      min: 1,
      max: 3,
    },
    {
      id: 3,
      name: 'Flare Pants',
      link: FLARE_PANTS,
      gender: 2,
      min: 2,
      max: 4,
    },
    {
      id: 4,
      name: 'Jeans',
      link: JEANS,
      gender: 3,
      min: 2,
      max: 5,
    },
    {
      id: 5,
      name: 'Shorts (w/ belt)',
      link: SHORTS_WB,
      gender: 3,
      min: 1,
      max: 3,
    },
    {
      id: 6,
      name: 'Shorts (w/o belt)',
      link: SHORTS_WOB,
      gender: 3,
      min: 1,
      max: 3,
    },
    {
      id: 7,
      name: 'Sweat Pants',
      link: SWEAT_PANTS,
      gender: 3,
      min: 2,
      max: 5,
    },
    {
      id: 8,
      name: 'Trouser Pants',
      link: TROUSER_PANTS,
      gender: 3,
      min: 2,
      max: 5,
    },
    {
      id: 9,
      name: 'Cargo Short',
      link: CARGO_SHORT,
      gender: 3,
      min: 1,
      max: 3,
    },
    {
      id: 10,
      name: 'Skirts',
      link: SKIRT,
      gender: 2,
      min: 1,
      max: 3,
    },
  ],
  footwear: [
    {
      id: 1,
      name: 'Boots',
      link: BOOTS,
      gender: 3,
      min: 3,
      max: 5,
    },
    {
      id: 2,
      name: 'Boots (Female)',
      link: BOOTS_FEMALE,
      gender: 2,
      min: 3,
      max: 5,
    },
    {
      id: 3,
      name: 'Dress Shoes',
      link: DRESS_SHOES,
      gender: 3,
      min: 3,
      max: 5,
    },
    {
      id: 4,
      name: 'Flat Shoes',
      link: FLAT_SHOES,
      gender: 2,
      min: 2,
      max: 4,
    },
    {
      id: 5,
      name: 'High Heels',
      link: HIGH_HEELS,
      gender: 2,
      min: 1,
      max: 4,
    },
    {
      id: 6,
      name: 'Loafers',
      link: LOAFERS,
      gender: 3,
      min: 1,
      max: 4,
    },
    {
      id: 7,
      name: 'Sandals (Female)',
      link: SANDALS_FEMALE,
      gender: 2,
      min: 2,
      max: 3,
    },
    {
      id: 8,
      name: 'Sandals (Male)',
      link: SANDALS_MALE,
      gender: 1,
      min: 1,
      max: 3,
    },
    {
      id: 9,
      name: 'Canvas Shoes',
      link: SHOES,
      gender: 3,
      min: 1,
      max: 5,
    },
    {
      id: 10,
      name: 'Sneakers',
      link: SNEAKERS,
      gender: 3,
      min: 1,
      max: 5,
    },
    {
      id: 11,
      name: 'Slingback',
      link: SLINGBACK,
      gender: 2,
      min: 1,
      max: 4,
    },
    {
      id: 12,
      name: 'Slippers (Flip-Flop)',
      link: SLIPPER,
      gender: 3,
      min: 1,
      max: 3,
    },
    {
      id: 13,
      name: 'Slippers (Slide)',
      link: SLIPPERS,
      gender: 3,
      min: 1,
      max: 3,
    },
    {
      id: 14,
      name: 'Wedge Heels',
      link: WEDGE_HEELS,
      gender: 2,
      min: 1,
      max: 4,
    },
  ],
  top: [
    {
      id: 1,
      name: 'Dress',
      link: DRESS,
      gender: 2,
      min: 1,
      max: 3,
    },
    {
      id: 2,
      name: 'Polo',
      link: POLO,
      gender: 3,
      min: 1,
      max: 3,
    },
    {
      id: 3,
      name: 'Polo Shirts (Female)',
      link: POLO_SHIRT_FEMALE,
      gender: 2,
      min: 1,
      max: 3,
    },
    {
      id: 4,
      name: 'Polo Shirts (Male)',
      link: POLO_SHIRT_MALE,
      gender: 1,
      min: 1,
      max: 3,
    },
    {
      id: 5,
      name: 'Sandos (Female)',
      link: SANDO_FEMALE,
      gender: 2,
      min: 1,
      max: 2,
    },
    {
      id: 6,
      name: 'Sandos (Male)',
      link: SANDO_MALE,
      gender: 1,
      min: 1,
      max: 2,
    },
    {
      id: 7,
      name: 'Sweaters',
      link: SWEATER,
      gender: 3,
      min: 3,
      max: 5,
    },
    {
      id: 8,
      name: 'Tank Tops',
      link: TANK_TOP,
      gender: 2,
      min: 1,
      max: 3,
    },
    {
      id: 9,
      name: 'T-shirts',
      link: TSHIRT,
      gender: 3,
      min: 1,
      max: 3,
    },
    {
      id: 10,
      name: 'Turtlenecks',
      link: TURTLENECK,
      gender: 3,
      min: 4,
      max: 5,
    },
    {
      id: 11,
      name: 'Long Sleeves',
      link: LONG_SLEEVE,
      gender: 3,
      min: 3,
      max: 5,
    },
    {
      id: 12,
      name: 'Hoodies',
      link: HOODIE,
      gender: 3,
      min: 3,
      max: 5,
    },
  ],
  outerwear: [
    {
      id: 1,
      name: 'Cardigans',
      link: CARDIGAN,
      gender: 3,
      min: 3,
      max: 5,
    },
    {
      id: 2,
      name: 'Vests',
      link: VEST,
      gender: 3,
      min: 2,
      max: 4,
    },
    {
      id: 3,
      name: 'Blazer (Female)',
      link: BLAZER_FEMALE,
      gender: 2,
      min: 3,
      max: 5,
    },
    {
      id: 4,
      name: 'Blazers (Male)',
      link: BLAZER_MALE,
      gender: 1,
      min: 3,
      max: 5,
    },
    {
      id: 5,
      name: 'Coats (Female)',
      link: COAT_FEMALE,
      gender: 2,
      min: 5,
      max: 5,
    },
    {
      id: 6,
      name: 'Coats (Male)',
      link: COAT_MALE,
      gender: 1,
      min: 5,
      max: 5,
    },
    {
      id: 7,
      name: 'Denim Jackets',
      link: DENIM_JACKET,
      gender: 3,
      min: 3,
      max: 5,
    },
    {
      id: 8,
      name: 'Puffer Jackets',
      link: PUFFER_JACKET,
      gender: 3,
      min: 4,
      max: 5,
    },
    {
      id: 9,
      name: 'Suit Jackets',
      link: SUIT,
      gender: 1,
      min: 4,
      max: 5,
    },
    {
      id: 10,
      name: 'Varsity Jackets',
      link: VARSITY,
      gender: 3,
      min: 3,
      max: 5,
    },
    {
      id: 11,
      name: 'Windbreakers',
      link: WINDBREAKER,
      gender: 3,
      min: 3,
      max: 5,
    },
  ],
};

export { API_KEY, IMAGES };
