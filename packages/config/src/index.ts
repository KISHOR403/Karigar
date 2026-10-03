export const APP_CONFIG = {
  name: 'Karigar',
  tagline: 'Where Craft Lives and Artisans Flourish',
  description: 'An editorial marketplace connecting independent Indian master artisans with people who cherish authentic handmade craft.',
  currency: 'INR',
  currencySymbol: '₹',
  defaultPaginationLimit: 20,
  maxPaginationLimit: 100,
  defaultLocale: 'en-IN',
} as const;

export const ASSAMESE_BRAND_WORD = 'কাৰিগৰ';

export const CRAFT_INTENTS = [
  {
    id: 'gifting',
    title: 'For Gifting',
    subtitle: 'Heirloom gifts with genuine maker lineage',
    href: '/collections/curated-gifting',
    badge: 'Curated Heritage',
  },
  {
    id: 'home',
    title: 'For Your Home',
    subtitle: 'Tactile brassware, hand-knotted weaves, and studio ceramics',
    href: '/collections/living-spaces',
    badge: 'Living & Interior',
  },
  {
    id: 'celebrations',
    title: 'For Celebrations',
    subtitle: 'Festive silks, ceremonial brass lamps, and artisanal keepsakes',
    href: '/collections/celebration-crafts',
    badge: 'Festive Rituals',
  },
  {
    id: 'everyday',
    title: 'Everyday Objects',
    subtitle: 'Terracotta dinnerware, wooden spoons, and organic cotton stoles',
    href: '/collections/daily-ritual',
    badge: 'Daily Craft',
  },
] as const;

export const REGIONS_OF_CRAFT = [
  {
    region: 'Kashmir',
    state: 'Jammu & Kashmir',
    craftFocus: 'Pashmina Weaving, Sozni Needlework, Walnut Wood Carving',
    description: 'High Himalayan craft refined over seven centuries under royal Persian influence.',
    slug: 'kashmir',
  },
  {
    region: 'Kutch',
    state: 'Gujarat',
    craftFocus: 'Ajrakh Natural Dye Block Print, Rogan Art, Lippan Murals',
    description: 'Arid desert communities harmonizing indigo, alizarin, and mineral resist printing.',
    slug: 'kutch',
  },
  {
    region: 'Bastar',
    state: 'Chhattisgarh',
    craftFocus: 'Lost-Wax Dhokra Brass, Bell Metal, Wrought Iron Forge',
    description: 'Tribal metallurgy tracing continuous heritage to the Mohenjo-daro dancing girl.',
    slug: 'bastar',
  },
  {
    region: 'Jaipur',
    state: 'Rajasthan',
    craftFocus: 'Turquoise Blue Pottery, Sanganeri Hand Block, Meenakari Enamel',
    description: 'Royal atelier craftsmanship utilizing quartz powder and multani mitti clays.',
    slug: 'rajasthan',
  },
  {
    region: 'Channapatna',
    state: 'Karnataka',
    craftFocus: 'Vegetable-Dyed Lacquerware, Turned Wood Craft',
    description: 'Ivory-wood precision turnery pioneered with historical Persian master carvers.',
    slug: 'karnataka',
  },
  {
    region: 'Aranmula & Chendamangalam',
    state: 'Kerala',
    craftFocus: 'Aranmula Metal Mirror, Kasavu Weaves, Bell Metal Urulis',
    description: 'Sacred metallurgy casting front-surface metallurgical mirrors found nowhere else on earth.',
    slug: 'kerala',
  },
] as const;
