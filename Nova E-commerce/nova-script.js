/* ═══════════════════════════════════════════════════════
   NOVA COMMERCE — nova-script.js
   Currency: Nigerian Naira (₦) | $1 = ₦1,367
   All USD prices converted & reduced ~30%
═══════════════════════════════════════════════════════ */

/* ─── RATE & FORMATTER ─────────────────────────────── */
const RATE = 1367;
function toNaira(usd) { return Math.round(usd * RATE); }
function fmt(n) {
  return '₦' + n.toLocaleString('en-NG');
}

/* ─── 20 CATEGORIES ────────────────────────────────── */
const CATEGORIES = [
  { id:'watches',    label:'Watches',          img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=80', large:true },
  { id:'sneakers',   label:'Sneakers',         img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80' },
  { id:'bags',       label:'Bags & Luggage',   img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=80' },
  { id:'sunglasses', label:'Sunglasses',       img:'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=700&q=80' },
  { id:'headphones', label:'Headphones',       img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=80' },
  { id:'cameras',    label:'Cameras',          img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&q=80' },
  { id:'perfume',    label:'Fragrances',       img:'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=80' },
  { id:'skincare',   label:'Skincare',         img:'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=700&q=80' },
  { id:'jackets',    label:'Jackets & Coats',  img:'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&q=80' },
  { id:'shirts',     label:'Shirts & Tops',    img:'https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=700&q=80' },
  { id:'laptops',    label:'Laptops',          img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&q=80' },
  { id:'phones',     label:'Smartphones',      img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700&q=80' },
  { id:'furniture',  label:'Furniture',        img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80' },
  { id:'lighting',   label:'Lighting',         img:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700&q=80' },
  { id:'jewelry',    label:'Jewelry',          img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&q=80' },
  { id:'shoes',      label:'Dress Shoes',      img:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&q=80' },
  { id:'sports',     label:'Sports & Fitness', img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=80' },
  { id:'books',      label:'Books & Art',      img:'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&q=80' },
  { id:'kitchen',    label:'Kitchen & Dining', img:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80' },
  { id:'wellness',   label:'Wellness',         img:'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=700&q=80' },
];

/* ─── PRODUCTS (400) ── prices in USD, displayed as ₦ ── */
// USD prices are already reduced ~30% before conversion
const RAW = [
  // WATCHES
  {n:'Submariner Automatic',b:'Rolex',p:5800,cat:'watches',img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',badge:'ltd',r:5,rv:412},
  {n:'Seamaster 300',b:'Omega',p:2900,cat:'watches',img:'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500&q=80',badge:null,r:5,rv:287},
  {n:'Pilot Chronograph',b:'IWC',p:3400,cat:'watches',img:'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500&q=80',badge:null,r:4,rv:198},
  {n:'Royal Oak 41mm',b:'Audemars Piguet',p:19000,cat:'watches',img:'https://images.unsplash.com/photo-1619134778706-7015533a6150?w=500&q=80',badge:'ltd',r:5,rv:521},
  {n:'Navitimer B01',b:'Breitling',p:4200,cat:'watches',img:'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&q=80',badge:null,r:4,rv:143},
  {n:'Monaco Chronograph',b:'TAG Heuer',p:3100,cat:'watches',img:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80',badge:'new',r:5,rv:88},
  {n:'Santos de Cartier',b:'Cartier',p:4400,cat:'watches',img:'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=500&q=80',badge:null,r:5,rv:364},
  {n:'Black Bay 58',b:'Tudor',p:1800,cat:'watches',img:'https://images.unsplash.com/photo-1542496658-e33a6d0d2b17?w=500&q=80',badge:'hot',r:5,rv:489},
  {n:'Reverso Classic',b:'Jaeger-LeCoultre',p:5200,cat:'watches',img:'https://images.unsplash.com/photo-1516048015710-7a3b4c86be43?w=500&q=80',badge:null,r:4,rv:132},
  {n:'Datejust 36',b:'Rolex',p:4900,cat:'watches',img:'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80',badge:null,r:5,rv:678},
  {n:'GMT-Master II',b:'Rolex',p:6800,cat:'watches',img:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80',badge:'ltd',r:5,rv:344},
  {n:'Casio G-Shock DW-6900',b:'Casio',p:89,cat:'watches',img:'https://images.unsplash.com/photo-1540456531293-5b71d5c2a93b?w=500&q=80',badge:'hot',r:5,rv:3421},
  {n:'Garmin Fenix 8',b:'Garmin',p:449,cat:'watches',img:'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&q=80',badge:'new',r:5,rv:876},
  {n:'Apple Watch Series 10',b:'Apple',p:329,cat:'watches',img:'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80',badge:'hot',r:5,rv:2100},
  // SNEAKERS
  {n:'Air Jordan 1 Retro High',b:'Nike',p:129,cat:'sneakers',img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',badge:'hot',r:5,rv:2341},
  {n:'Ultraboost 23',b:'Adidas',p:119,cat:'sneakers',img:'https://images.unsplash.com/photo-1608231387042-66d1773d3028?w=500&q=80',badge:null,r:5,rv:1872},
  {n:'New Balance 550',b:'New Balance',p:79,cat:'sneakers',img:'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80',badge:'new',r:4,rv:543},
  {n:'Chuck 70 High Top',b:'Converse',p:59,cat:'sneakers',img:'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&q=80',badge:null,r:4,rv:987},
  {n:'Old Skool Leather',b:'Vans',p:54,cat:'sneakers',img:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80',badge:null,r:4,rv:765},
  {n:'Gel-Kayano 30',b:'ASICS',p:99,cat:'sneakers',img:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80',badge:null,r:5,rv:432},
  {n:'Air Max 90',b:'Nike',p:89,cat:'sneakers',img:'https://images.unsplash.com/photo-1556048219-bb6978360b84?w=500&q=80',badge:null,r:5,rv:1654},
  {n:'Samba Classic',b:'Adidas',p:69,cat:'sneakers',img:'https://images.unsplash.com/photo-1620138546344-7b2c38516edf?w=500&q=80',badge:'hot',r:5,rv:2100},
  {n:'Runner 4',b:'On Running',p:109,cat:'sneakers',img:'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500&q=80',badge:'new',r:5,rv:445},
  {n:'Clifton 9',b:'Hoka',p:99,cat:'sneakers',img:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80',badge:'hot',r:5,rv:789},
  {n:'Forum Low',b:'Adidas',p:65,cat:'sneakers',img:'https://images.unsplash.com/photo-1584735175315-9d5df23be4be?w=500&q=80',badge:'sale',op:90,r:4,rv:321},
  {n:'992 Made in USA',b:'New Balance',p:139,cat:'sneakers',img:'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80',badge:'ltd',r:5,rv:876},
  // BAGS
  {n:'Neverfull MM',b:'Louis Vuitton',p:1050,cat:'bags',img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80',badge:'ltd',r:5,rv:1432},
  {n:'Classic Flap Medium',b:'Chanel',p:4200,cat:'bags',img:'https://images.unsplash.com/photo-1584917865442-de89be144680?w=500&q=80',badge:'ltd',r:5,rv:987},
  {n:'GG Marmont Shoulder',b:'Gucci',p:799,cat:'bags',img:'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&q=80',badge:null,r:5,rv:876},
  {n:'Nano Luggage',b:'Celine',p:1050,cat:'bags',img:'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500&q=80',badge:'new',r:4,rv:345},
  {n:'Carry-On Suitcase',b:'Away',p:189,cat:'bags',img:'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500&q=80',badge:'new',r:5,rv:1234},
  {n:'Coach Tabby Shoulder',b:'Coach',p:249,cat:'bags',img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',badge:null,r:4,rv:543},
  {n:'Marc Jacobs Tote',b:'Marc Jacobs',p:219,cat:'bags',img:'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&q=80',badge:'hot',r:4,rv:765},
  {n:'Tumi Alpha Backpack',b:'Tumi',p:339,cat:'bags',img:'https://images.unsplash.com/photo-1614179818511-8b3f0d1be63a?w=500&q=80',badge:null,r:5,rv:432},
  {n:'City Bag',b:'Balenciaga',p:989,cat:'bags',img:'https://images.unsplash.com/photo-1594938298603-c8148c4b4057?w=500&q=80',badge:'sale',op:1299,r:4,rv:567},
  {n:'Polène Numéro Un',b:'Polène',p:189,cat:'bags',img:'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=500&q=80',badge:'new',r:5,rv:678},
  {n:'Rogue 25',b:'Tory Burch',p:299,cat:'bags',img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',badge:null,r:4,rv:432},
  // SUNGLASSES
  {n:'Wayfarer Classic',b:'Ray-Ban',p:119,cat:'sunglasses',img:'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500&q=80',badge:null,r:5,rv:4321},
  {n:'Aviator Gold',b:'Ray-Ban',p:109,cat:'sunglasses',img:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80',badge:'hot',r:5,rv:3210},
  {n:'Ace & Tate Reede',b:'Ace & Tate',p:89,cat:'sunglasses',img:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80',badge:'new',r:4,rv:567},
  {n:'SL 28',b:'Saint Laurent',p:219,cat:'sunglasses',img:'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=500&q=80',badge:null,r:5,rv:432},
  {n:'Persol 714',b:'Persol',p:169,cat:'sunglasses',img:'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&q=80',badge:null,r:5,rv:287},
  {n:'District II',b:'Oliver Peoples',p:219,cat:'sunglasses',img:'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80',badge:'ltd',r:5,rv:198},
  {n:'Nano Speed',b:'Oakley',p:139,cat:'sunglasses',img:'https://images.unsplash.com/photo-1602727083415-a359f0f5c0e0?w=500&q=80',badge:null,r:4,rv:876},
  {n:'Cat Eye',b:'Celine',p:239,cat:'sunglasses',img:'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500&q=80',badge:'new',r:4,rv:234},
  // HEADPHONES
  {n:'QuietComfort 45',b:'Bose',p:199,cat:'headphones',img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',badge:null,r:5,rv:2876},
  {n:'WH-1000XM5',b:'Sony',p:249,cat:'headphones',img:'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80',badge:'hot',r:5,rv:3421},
  {n:'AirPods Max',b:'Apple',p:329,cat:'headphones',img:'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&q=80',badge:null,r:4,rv:1987},
  {n:'Momentum 4',b:'Sennheiser',p:209,cat:'headphones',img:'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80',badge:'new',r:5,rv:876},
  {n:'3XL Wireless',b:'Marshall',p:259,cat:'headphones',img:'https://images.unsplash.com/photo-1567450297911-c0fb2d9d72c7?w=500&q=80',badge:'sale',op:349,r:5,rv:654},
  {n:'Dyson Zone',b:'Dyson',p:549,cat:'headphones',img:'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80',badge:'ltd',r:4,rv:189},
  {n:'HD 660 S2',b:'Sennheiser',p:299,cat:'headphones',img:'https://images.unsplash.com/photo-1563296291-6a69c68bc9e2?w=500&q=80',badge:null,r:5,rv:345},
  {n:'AirPods Pro 2',b:'Apple',p:179,cat:'headphones',img:'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&q=80',badge:'hot',r:5,rv:4210},
  // CAMERAS
  {n:'Sony A7 IV',b:'Sony',p:1749,cat:'cameras',img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80',badge:'hot',r:5,rv:1234},
  {n:'Canon EOS R5',b:'Canon',p:2499,cat:'cameras',img:'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80',badge:null,r:5,rv:876},
  {n:'Fujifilm X-T5',b:'Fujifilm',p:1099,cat:'cameras',img:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80',badge:'new',r:5,rv:654},
  {n:'Leica Q3',b:'Leica',p:3499,cat:'cameras',img:'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=500&q=80',badge:'ltd',r:5,rv:189},
  {n:'Nikon Z6 III',b:'Nikon',p:1699,cat:'cameras',img:'https://images.unsplash.com/photo-1625225233840-695456021cde?w=500&q=80',badge:'new',r:5,rv:432},
  {n:'Instax Mini Evo',b:'Fujifilm',p:119,cat:'cameras',img:'https://images.unsplash.com/photo-1585936369609-6dcb00d68e11?w=500&q=80',badge:null,r:4,rv:2100},
  {n:'GoPro Hero 13',b:'GoPro',p:249,cat:'cameras',img:'https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?w=500&q=80',badge:'hot',r:5,rv:1543},
  {n:'Ricoh GR IIIx',b:'Ricoh',p:599,cat:'cameras',img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80',badge:'hot',r:5,rv:543},
  // PERFUME
  {n:'Bleu de Chanel EDP',b:'Chanel',p:89,cat:'perfume',img:'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&q=80',badge:'hot',r:5,rv:4321},
  {n:'Sauvage EDP',b:'Dior',p:85,cat:'perfume',img:'https://images.unsplash.com/photo-1590736969596-5e76ee8e2a2f?w=500&q=80',badge:'hot',r:5,rv:5432},
  {n:'Oud Wood',b:'Tom Ford',p:189,cat:'perfume',img:'https://images.unsplash.com/photo-1541643600914-78b084683702?w=500&q=80',badge:null,r:5,rv:1234},
  {n:'Flowerbomb',b:'Viktor & Rolf',p:79,cat:'perfume',img:'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80',badge:null,r:5,rv:2100},
  {n:'Black Opium',b:'YSL',p:75,cat:'perfume',img:'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&q=80',badge:'new',r:4,rv:876},
  {n:'Jo Malone Peony',b:'Jo Malone',p:99,cat:'perfume',img:'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&q=80',badge:null,r:5,rv:654},
  {n:'Tobacco Vanille',b:'Tom Ford',p:199,cat:'perfume',img:'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=500&q=80',badge:'ltd',r:5,rv:543},
  {n:'Baccarat Rouge 540',b:'Maison Francis',p:269,cat:'perfume',img:'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&q=80',badge:'ltd',r:5,rv:789},
  {n:'Acqua di Giò',b:'Armani',p:69,cat:'perfume',img:'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&q=80',badge:null,r:4,rv:3200},
  {n:'Creed Aventus',b:'Creed',p:229,cat:'perfume',img:'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&q=80',badge:'ltd',r:5,rv:432},
  // SKINCARE
  {n:'Advanced Génifique Serum',b:'Lancôme',p:49,cat:'skincare',img:'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80',badge:'hot',r:5,rv:3210},
  {n:'Crème de la Mer',b:'La Mer',p:169,cat:'skincare',img:'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&q=80',badge:null,r:5,rv:876},
  {n:'C-Firma Vitamin C',b:'Drunk Elephant',p:49,cat:'skincare',img:'https://images.unsplash.com/photo-1570194065650-d99fb4d1e7f5?w=500&q=80',badge:'new',r:5,rv:1543},
  {n:'Ultrafacial Cream',b:"Kiehl's",p:29,cat:'skincare',img:'https://images.unsplash.com/photo-1556228841-a3c527ebebe5?w=500&q=80',badge:null,r:4,rv:2341},
  {n:'SK-II Facial Treatment',b:'SK-II',p:89,cat:'skincare',img:'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80',badge:null,r:5,rv:1234},
  {n:'Tatcha The Water Cream',b:'Tatcha',p:39,cat:'skincare',img:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80',badge:'sale',op:55,r:5,rv:987},
  {n:'EltaMD UV Clear SPF 46',b:'EltaMD',p:24,cat:'skincare',img:'https://images.unsplash.com/photo-1556229174-5e42a09e45af?w=500&q=80',badge:'hot',r:5,rv:4321},
  {n:'The Ordinary Retinol',b:'The Ordinary',p:8,cat:'skincare',img:'https://images.unsplash.com/photo-1612817288484-6f916006741b?w=500&q=80',badge:null,r:4,rv:5430},
  {n:"Paula's Choice BHA",b:"Paula's Choice",p:19,cat:'skincare',img:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80',badge:'hot',r:5,rv:3100},
  // JACKETS
  {n:'The North Face Denali',b:'The North Face',p:139,cat:'jackets',img:'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80',badge:null,r:5,rv:1432},
  {n:'Moncler Maya Jacket',b:'Moncler',p:699,cat:'jackets',img:'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&q=80',badge:'ltd',r:5,rv:345},
  {n:'Canada Goose Expedition',b:'Canada Goose',p:549,cat:'jackets',img:'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=500&q=80',badge:null,r:5,rv:876},
  {n:'Patagonia Nano Puff',b:'Patagonia',p:149,cat:'jackets',img:'https://images.unsplash.com/photo-1545594861-3bef43ff2fc8?w=500&q=80',badge:'new',r:5,rv:987},
  {n:"Arc'teryx Beta AR",b:"Arc'teryx",p:449,cat:'jackets',img:'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&q=80',badge:null,r:5,rv:432},
  {n:'Stone Island Overshirt',b:'Stone Island',p:249,cat:'jackets',img:'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=500&q=80',badge:'new',r:4,rv:234},
  {n:'Alpha Industries MA-1',b:'Alpha Industries',p:99,cat:'jackets',img:'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=500&q=80',badge:'hot',r:4,rv:1200},
  {n:'Barbour Bedale Wax',b:'Barbour',p:219,cat:'jackets',img:'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=500&q=80',badge:null,r:4,rv:654},
  // SHIRTS
  {n:'Oxford Button-Down',b:'Ralph Lauren',p:69,cat:'shirts',img:'https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=500&q=80',badge:null,r:4,rv:1234},
  {n:'Linen Henley',b:'J.Crew',p:44,cat:'shirts',img:'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80',badge:'new',r:4,rv:567},
  {n:'Slim Fit Poplin',b:'Hugo Boss',p:79,cat:'shirts',img:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80',badge:null,r:4,rv:765},
  {n:'Crew Neck Merino',b:'Sunspel',p:99,cat:'shirts',img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',badge:null,r:5,rv:432},
  {n:'Classic Polo',b:'Lacoste',p:59,cat:'shirts',img:'https://images.unsplash.com/photo-1598961942613-ba897716405b?w=500&q=80',badge:'sale',op:80,r:4,rv:876},
  {n:'Graphic Tee Oversized',b:'Balenciaga',p:219,cat:'shirts',img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80',badge:'new',r:4,rv:345},
  {n:'Chambray Workshirt',b:'Filson',p:89,cat:'shirts',img:'https://images.unsplash.com/photo-1603251578711-3290ca1a0187?w=500&q=80',badge:null,r:4,rv:234},
  // LAPTOPS
  {n:'MacBook Pro 16" M4',b:'Apple',p:1999,cat:'laptops',img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',badge:'new',r:5,rv:2341},
  {n:'XPS 15',b:'Dell',p:1199,cat:'laptops',img:'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80',badge:null,r:5,rv:1234},
  {n:'ThinkPad X1 Carbon',b:'Lenovo',p:1099,cat:'laptops',img:'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=500&q=80',badge:null,r:5,rv:987},
  {n:'Surface Pro 11',b:'Microsoft',p:999,cat:'laptops',img:'https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=500&q=80',badge:'new',r:4,rv:654},
  {n:'MacBook Air 15" M4',b:'Apple',p:999,cat:'laptops',img:'https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=500&q=80',badge:'new',r:5,rv:3210},
  {n:'Razer Blade 15',b:'Razer',p:1499,cat:'laptops',img:'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',badge:'hot',r:5,rv:876},
  {n:'HP Spectre x360',b:'HP',p:999,cat:'laptops',img:'https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=500&q=80',badge:null,r:4,rv:543},
  // PHONES
  {n:'iPhone 17 Pro Max',b:'Apple',p:849,cat:'phones',img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80',badge:'new',r:5,rv:4321},
  {n:'Galaxy S26 Ultra',b:'Samsung',p:749,cat:'phones',img:'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80',badge:'new',r:5,rv:2345},
  {n:'Pixel 10 Pro',b:'Google',p:599,cat:'phones',img:'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&q=80',badge:'new',r:4,rv:876},
  {n:'OnePlus 13',b:'OnePlus',p:449,cat:'phones',img:'https://images.unsplash.com/photo-1508439020773-0f8b98ba31ed?w=500&q=80',badge:'hot',r:4,rv:654},
  {n:'Nothing Phone 3',b:'Nothing',p:399,cat:'phones',img:'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&q=80',badge:'new',r:4,rv:543},
  {n:'13T Pro',b:'Xiaomi',p:349,cat:'phones',img:'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80',badge:'sale',op:499,r:4,rv:765},
  // FURNITURE
  {n:'Eames Lounge Chair',b:'Herman Miller',p:3499,cat:'furniture',img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80',badge:'ltd',r:5,rv:543},
  {n:'Barcelona Chair',b:'Knoll',p:2999,cat:'furniture',img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80',badge:null,r:5,rv:345},
  {n:'Tolix Marais Chair',b:'Tolix',p:179,cat:'furniture',img:'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&q=80',badge:null,r:4,rv:543},
  {n:'Hay About A Chair',b:'Hay',p:149,cat:'furniture',img:'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=500&q=80',badge:'new',r:4,rv:321},
  {n:'Carl Hansen CH24',b:'Carl Hansen',p:899,cat:'furniture',img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80',badge:'ltd',r:5,rv:289},
  {n:'Fritz Hansen Series 7',b:'Fritz Hansen',p:699,cat:'furniture',img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80',badge:null,r:5,rv:432},
  // LIGHTING
  {n:'Anglepoise Type 75',b:'Anglepoise',p:159,cat:'lighting',img:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',badge:'hot',r:5,rv:876},
  {n:'Flos Arco Floor Lamp',b:'Flos',p:1199,cat:'lighting',img:'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&q=80',badge:null,r:5,rv:345},
  {n:'Louis Poulsen PH5',b:'Louis Poulsen',p:449,cat:'lighting',img:'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&q=80',badge:null,r:5,rv:234},
  {n:'Tala Sphere Bulb',b:'Tala',p:29,cat:'lighting',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',badge:null,r:5,rv:1234},
  {n:'Artemide Tolomeo',b:'Artemide',p:349,cat:'lighting',img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80',badge:'hot',r:5,rv:543},
  {n:'Tom Dixon Melt',b:'Tom Dixon',p:499,cat:'lighting',img:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',badge:'ltd',r:4,rv:189},
  // JEWELRY
  {n:'Tennis Bracelet',b:'Tiffany & Co.',p:1399,cat:'jewelry',img:'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',badge:'ltd',r:5,rv:654},
  {n:'Return to Tiffany Necklace',b:'Tiffany & Co.',p:319,cat:'jewelry',img:'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=500&q=80',badge:null,r:5,rv:987},
  {n:'Love Bracelet',b:'Cartier',p:3399,cat:'jewelry',img:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80',badge:'ltd',r:5,rv:432},
  {n:'Diamond Stud Earrings',b:'Mejuri',p:429,cat:'jewelry',img:'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=500&q=80',badge:'new',r:5,rv:543},
  {n:'Gold Signet Ring',b:'Missoma',p:139,cat:'jewelry',img:'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&q=80',badge:null,r:4,rv:765},
  {n:'Pearl Drop Earrings',b:'Mikimoto',p:599,cat:'jewelry',img:'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&q=80',badge:null,r:5,rv:345},
  {n:'Charm Bracelet',b:'Pandora',p:69,cat:'jewelry',img:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80',badge:'sale',op:99,r:4,rv:2341},
  // SHOES
  {n:'Oxford Cap Toe',b:'Crockett & Jones',p:339,cat:'shoes',img:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80',badge:null,r:5,rv:345},
  {n:'Chelsea Boot',b:'Blundstone',p:129,cat:'shoes',img:'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&q=80',badge:'hot',r:5,rv:2100},
  {n:'Loafer in Suede',b:"Tod's",p:299,cat:'shoes',img:'https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=500&q=80',badge:null,r:4,rv:432},
  {n:'Red Wing Heritage 875',b:'Red Wing',p:169,cat:'shoes',img:'https://images.unsplash.com/photo-1614252234498-b89ad0338f40?w=500&q=80',badge:'hot',r:5,rv:1100},
  {n:'Penny Loafer',b:'G.H. Bass',p:99,cat:'shoes',img:'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&q=80',badge:'sale',op:139,r:4,rv:654},
  {n:'Brogue Wingtip',b:"Church's",p:309,cat:'shoes',img:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80',badge:'new',r:5,rv:189},
  // SPORTS
  {n:'Yoga Mat Pro',b:'Manduka',p:79,cat:'sports',img:'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=500&q=80',badge:'hot',r:5,rv:3210},
  {n:'Competition Kettlebell',b:'Rogue',p:79,cat:'sports',img:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80',badge:null,r:5,rv:876},
  {n:'Running Shorts 5"',b:'Lululemon',p:39,cat:'sports',img:'https://images.unsplash.com/photo-1483721310020-03333e577078?w=500&q=80',badge:'new',r:4,rv:1543},
  {n:'Speed Rope',b:'WOD Nation',p:19,cat:'sports',img:'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=500&q=80',badge:'sale',op:29,r:4,rv:543},
  {n:'Foam Roller',b:'TriggerPoint',p:29,cat:'sports',img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80',badge:null,r:5,rv:2100},
  {n:'Garmin Forerunner 965',b:'Garmin',p:349,cat:'sports',img:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80',badge:'new',r:5,rv:543},
  {n:'Theragun Elite',b:'Therabody',p:219,cat:'sports',img:'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80',badge:'hot',r:5,rv:1234},
  {n:'Oura Ring Gen 3',b:'Oura',p:169,cat:'sports',img:'https://images.unsplash.com/photo-1576613109753-27804de2ceba?w=500&q=80',badge:'hot',r:5,rv:2100},
  // BOOKS
  {n:'The Art of Design Vol.2',b:'TASCHEN',p:49,cat:'books',img:'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=80',badge:null,r:5,rv:345},
  {n:'The Impossible Collection',b:'Assouline',p:389,cat:'books',img:'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80',badge:'ltd',r:5,rv:123},
  {n:'Helmut Newton Sumo',b:'TASCHEN',p:699,cat:'books',img:'https://images.unsplash.com/photo-1533327325824-76851d61c5f8?w=500&q=80',badge:'ltd',r:5,rv:87},
  {n:'Phaidon Atlas of World Art',b:'Phaidon',p:59,cat:'books',img:'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&q=80',badge:null,r:4,rv:234},
  {n:'Muji Notebook Set',b:'Muji',p:12,cat:'books',img:'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80',badge:null,r:4,rv:1543},
  {n:'Kinfolk Journal',b:'Kinfolk',p:15,cat:'books',img:'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80',badge:'hot',r:5,rv:987},
  // KITCHEN
  {n:'KitchenAid Stand Mixer',b:'KitchenAid',p:349,cat:'kitchen',img:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',badge:'hot',r:5,rv:4321},
  {n:'Nespresso Vertuo Next',b:'Nespresso',p:119,cat:'kitchen',img:'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&q=80',badge:'new',r:5,rv:2341},
  {n:'Le Creuset Dutch Oven',b:'Le Creuset',p:219,cat:'kitchen',img:'https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&q=80',badge:null,r:5,rv:3210},
  {n:'Vitamix A3500',b:'Vitamix',p:349,cat:'kitchen',img:'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&q=80',badge:null,r:5,rv:1234},
  {n:'Global Chef Knife',b:'Global',p:79,cat:'kitchen',img:'https://images.unsplash.com/photo-1566454419290-57a64afe30ac?w=500&q=80',badge:null,r:5,rv:876},
  {n:'Fellow Stagg Kettle',b:'Fellow',p:89,cat:'kitchen',img:'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&q=80',badge:'new',r:5,rv:987},
  {n:'Smeg 2-Slice Toaster',b:'Smeg',p:99,cat:'kitchen',img:'https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=500&q=80',badge:null,r:4,rv:654},
  {n:'Breville Barista Express',b:'Breville',p:449,cat:'kitchen',img:'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&q=80',badge:'hot',r:5,rv:2100},
  // WELLNESS
  {n:'Dyson Supersonic Hair',b:'Dyson',p:249,cat:'wellness',img:'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&q=80',badge:'hot',r:5,rv:2340},
  {n:'Casper Wave Mattress',b:'Casper',p:1499,cat:'wellness',img:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80',badge:null,r:5,rv:543},
  {n:'Oura Ring Gen 3',b:'Oura',p:169,cat:'wellness',img:'https://images.unsplash.com/photo-1576613109753-27804de2ceba?w=500&q=80',badge:'hot',r:5,rv:2100},
  {n:'Quip Electric Toothbrush',b:'Quip',p:39,cat:'wellness',img:'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&q=80',badge:'new',r:4,rv:1200},
  {n:'Foreo Luna 3',b:'Foreo',p:109,cat:'wellness',img:'https://images.unsplash.com/photo-1556228841-a3c527ebebe5?w=500&q=80',badge:'hot',r:5,rv:876},
  {n:'Withings ScanWatch 2',b:'Withings',p:189,cat:'wellness',img:'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80',badge:'new',r:4,rv:543},
  {n:'Philips Wake-Up Light',b:'Philips',p:79,cat:'wellness',img:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',badge:null,r:4,rv:876},
];

/* Build full PRODUCTS array with IDs and converted prices */
const PRODUCTS = RAW.map((p, i) => ({
  id: i + 1,
  name: p.n,
  brand: p.b,
  price: toNaira(p.p),
  oldPrice: p.op ? toNaira(p.op) : null,
  cat: p.cat,
  img: p.img,
  badge: p.badge || null,
  rating: p.r,
  reviews: p.rv,
}));

/* Pad to 400 */
const FALLBACK_IMGS = {
  watches:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80',
  sneakers:'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80',
  bags:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
  sunglasses:'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=500&q=80',
  headphones:'https://images.unsplash.com/photo-1563296291-6a69c68bc9e2?w=500&q=80',
  cameras:'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80',
  perfume:'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&q=80',
  skincare:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80',
  jackets:'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&q=80',
  shirts:'https://images.unsplash.com/photo-1603251578711-3290ca1a0187?w=500&q=80',
  laptops:'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=500&q=80',
  phones:'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&q=80',
  furniture:'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=500&q=80',
  lighting:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
  jewelry:'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&q=80',
  shoes:'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&q=80',
  sports:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80',
  books:'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80',
  kitchen:'https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&q=80',
  wellness:'https://images.unsplash.com/photo-1576613109753-27804de2ceba?w=500&q=80',
};
const CAT_KEYS = Object.keys(FALLBACK_IMGS);
const USD_BASE = [19,29,39,49,59,79,99,129,149,189,249,349];
let pid = PRODUCTS.length + 1;
while (PRODUCTS.length < 400) {
  const cat = CAT_KEYS[PRODUCTS.length % CAT_KEYS.length];
  const usd = USD_BASE[PRODUCTS.length % USD_BASE.length];
  PRODUCTS.push({
    id: pid++,
    name: `Nova ${cat.charAt(0).toUpperCase()+cat.slice(1)} Edition`,
    brand: 'Nova Select',
    price: toNaira(usd),
    oldPrice: PRODUCTS.length % 7 === 0 ? toNaira(Math.round(usd * 1.3)) : null,
    cat,
    img: FALLBACK_IMGS[cat],
    badge: PRODUCTS.length % 9 === 0 ? 'new' : PRODUCTS.length % 13 === 0 ? 'sale' : null,
    rating: PRODUCTS.length % 4 === 0 ? 4 : 5,
    reviews: Math.floor(Math.random() * 500) + 20,
  });
}

/* ─── CART ──────────────────────────────────────────── */
let cart = JSON.parse(localStorage.getItem('nova_cart_ng') || '[]');

function saveCart() { localStorage.setItem('nova_cart_ng', JSON.stringify(cart)); }

function addToCart(product) {
  const ex = cart.find(i => i.id === product.id);
  if (ex) ex.qty++;
  else cart.push({ ...product, qty: 1 });
  saveCart(); updateCartUI();
  showToast(product.name + ' added to cart');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartUI(); }
}

function getTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function getCount() { return cart.reduce((s, i) => s + i.qty, 0); }

function updateCartUI() {
  const count = getCount();
  const badge = document.getElementById('cart-badge');
  badge.textContent = count;
  badge.classList.toggle('show', count > 0);

  const total = getTotal();
  document.getElementById('cart-subtotal').textContent = fmt(total);
  document.getElementById('cart-total').textContent    = fmt(total);

  const el = document.getElementById('cart-items');
  if (!cart.length) {
    el.innerHTML = `<div class="cart-empty"><div class="empty-icon">◯</div><p>Your cart is empty</p></div>`;
    return;
  }
  el.innerHTML = cart.map(it => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${it.img}" alt="${it.name}" loading="lazy"/></div>
      <div>
        <div class="cart-item-name">${it.name}</div>
        <div class="cart-item-price">${fmt(it.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${it.id},-1)">−</button>
          <span class="qty-val">${it.qty}</span>
          <button class="qty-btn" onclick="changeQty(${it.id},1)">+</button>
        </div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${it.id})">✕</button>
    </div>`).join('');
}

function openCart()  { document.getElementById('cart-overlay').classList.add('open'); document.getElementById('cart-drawer').classList.add('open'); }
function closeCart() { document.getElementById('cart-overlay').classList.remove('open'); document.getElementById('cart-drawer').classList.remove('open'); }
function handleCheckout() {
  if (!cart.length) { showToast('Your cart is empty'); return; }
  showToast('Redirecting to secure checkout…');
  setTimeout(closeCart, 1400);
}

/* ─── TOAST ─────────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  clearTimeout(toastTimer);
  document.getElementById('toast-msg').textContent = msg;
  document.getElementById('toast').classList.add('show');
  toastTimer = setTimeout(() => document.getElementById('toast').classList.remove('show'), 2800);
}

/* ─── PRODUCTS RENDER ───────────────────────────────── */
const PER_PAGE = 24;
let currentFilter = 'all';
let currentPage   = 1;

function filtered() {
  return currentFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === currentFilter);
}

function renderProducts() {
  const list  = filtered();
  const total = list.length;
  const pages = Math.ceil(total / PER_PAGE);
  const start = (currentPage - 1) * PER_PAGE;
  const slice = list.slice(start, start + PER_PAGE);

  document.getElementById('product-count').textContent =
    `Showing ${start + 1}–${Math.min(start + PER_PAGE, total)} of ${total} products`;

  document.getElementById('products-grid').innerHTML = slice.map(p => `
    <div class="product-card">
      <div class="product-img-wrap">
        <img class="prod-img" src="${p.img}" alt="${p.name}" loading="lazy"/>
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge}</span>` : ''}
        <div class="product-overlay">
          <button class="overlay-btn"
            onclick='addToCart(${JSON.stringify({id:p.id,name:p.name,brand:p.brand,price:p.price,img:p.img,cat:p.cat})})'>
            Add to Cart
          </button>
          <button class="overlay-icon" onclick="showToast('Saved to wishlist ♥')">♡</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-footer">
          <div class="product-price">
            ${p.oldPrice ? `<span class="old-price">${fmt(p.oldPrice)}</span>` : ''}
            ${fmt(p.price)}
          </div>
          <div class="product-rating">
            ${[1,2,3,4,5].map(s => `<span class="star${s <= p.rating ? '' : ' empty'}">★</span>`).join('')}
            <span class="rating-count">(${p.reviews})</span>
          </div>
        </div>
      </div>
    </div>`).join('');

  renderPagination(pages);
  observeReveals();
}

function renderPagination(pages) {
  const pg = document.getElementById('pagination');
  if (pages <= 1) { pg.innerHTML = ''; return; }
  let h = `<button class="page-btn prev" onclick="goPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled style="opacity:.35"' : ''}>← Prev</button>`;
  const s = Math.max(1, currentPage - 2), e = Math.min(pages, currentPage + 2);
  if (s > 1) h += `<button class="page-btn" onclick="goPage(1)">1</button>${s > 2 ? '<span class="page-dots">…</span>' : ''}`;
  for (let i = s; i <= e; i++) h += `<button class="page-btn${i === currentPage ? ' active' : ''}" onclick="goPage(${i})">${i}</button>`;
  if (e < pages) h += `${e < pages - 1 ? '<span class="page-dots">…</span>' : ''}<button class="page-btn" onclick="goPage(${pages})">${pages}</button>`;
  h += `<button class="page-btn next" onclick="goPage(${currentPage + 1})" ${currentPage === pages ? 'disabled style="opacity:.35"' : ''}>Next →</button>`;
  pg.innerHTML = h;
}

function goPage(n) {
  const pages = Math.ceil(filtered().length / PER_PAGE);
  if (n < 1 || n > pages) return;
  currentPage = n;
  renderProducts();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function setFilter(cat, btn) {
  currentFilter = cat;
  currentPage   = 1;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts();
}

function renderFilterBar() {
  const bar  = document.getElementById('filter-bar');
  const all  = [{ id: 'all', label: `All (${PRODUCTS.length})` }];
  const cats = CATEGORIES.map(c => ({
    id: c.id,
    label: `${c.label} (${PRODUCTS.filter(p => p.cat === c.id).length})`
  }));
  bar.innerHTML = [...all, ...cats].map(c =>
    `<button class="filter-btn${c.id === 'all' ? ' active' : ''}" onclick="setFilter('${c.id}',this)">${c.label}</button>`
  ).join('');
}

/* ─── CATEGORIES RENDER ─────────────────────────────── */
function renderCategories() {
  document.getElementById('categories-grid').innerHTML = CATEGORIES.map(c => `
    <div class="category-card${c.large ? ' large' : ''}" onclick="jumpToCategory('${c.id}')">
      <div class="cat-bg">
        <img class="cat-img" src="${c.img}" alt="${c.label}" loading="lazy"/>
      </div>
      <div class="cat-overlay"></div>
      <div class="cat-info">
        <div class="cat-name">${c.label}</div>
        <div class="cat-count">${PRODUCTS.filter(p => p.cat === c.id).length} products</div>
      </div>
      <div class="cat-arrow">→</div>
    </div>`).join('');
}

function jumpToCategory(cat) {
  currentFilter = cat;
  currentPage   = 1;
  renderProducts();
  document.querySelectorAll('.filter-btn').forEach(b => {
    const label = cat === 'all' ? 'All' : (CATEGORIES.find(c => c.id === cat)?.label || '');
    b.classList.toggle('active', b.textContent.startsWith(label));
  });
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

/* ─── TICKER ────────────────────────────────────────── */
function renderTicker() {
  const items = [
    'Free Delivery Within Lagos', '400+ Premium Products',
    '20 Exclusive Collections', 'Pay with Naira · No Hidden Fees',
    'New Arrivals Every Week', 'Returns Within 30 Days',
    'Authentic Guaranteed', 'Shop in ₦ — No Forex Hassle',
  ];
  const doubled = [...items, ...items];
  document.getElementById('ticker-track').innerHTML = doubled.map(t =>
    `<span class="ticker-item"><span class="ticker-dot">●</span>${t}</span>`
  ).join('');
}

/* ─── SCROLL REVEAL ─────────────────────────────────── */
function observeReveals() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

/* ─── NAV SCROLL ────────────────────────────────────── */
window.addEventListener('scroll', () =>
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 40)
);

/* ─── CUSTOM CURSOR ─────────────────────────────────── */
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px'; dot.style.top = my + 'px';
});
(function animCursor() {
  rx += (mx - rx) * .12; ry += (my - ry) * .12;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animCursor);
})();
document.addEventListener('mouseover', e => {
  const over = e.target.closest('a,button,.product-card,.category-card');
  document.body.classList.toggle('cursor-hover', !!over);
});

/* ─── NEWSLETTER ────────────────────────────────────── */
function handleNewsletter() {
  const v = document.getElementById('newsletter-email').value.trim();
  if (!v || !v.includes('@')) { showToast('Please enter a valid email'); return; }
  showToast('Welcome to the inner circle ✦');
  document.getElementById('newsletter-email').value = '';
}

/* ─── INIT ──────────────────────────────────────────── */
renderTicker();
renderFilterBar();
renderProducts();
renderCategories();
updateCartUI();
observeReveals();
