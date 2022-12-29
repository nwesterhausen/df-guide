import { defineConfig } from "vitepress";


export default defineConfig({
  lang: "en-US",
  title: "Fortress Guide",
  titleTemplate: false,
  description:
    "A collection of my own note and paraphrases from the wiki for fortress mode in dwarf fortress.",
  head: [
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
  ],
  lastUpdated: true,
  outDir: "../dist",
  cleanUrls: "with-subfolders",
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Industries", link: "/industry/"},
      { text: "Building Design", link: "/building-designs/" },
    ],
    sidebar: {
      '/industry/': [
        {
          text: 'Industry', items: [
            { text: 'Overview', link: '/industry/' },
          ]
        },
        {
          text: 'Primary Industries',
          collapsed: true,
          collapsible: true, items: [
            { text: 'Animal Husbandry', link: '/industry/animal-husbandry' },
            { text: 'Fishing', link: '/industry/fishing' },
            { text: 'Plant', link: '/industry/plant' },
            { text: 'Stone', link: '/industry/stone' },
            { text: 'Wood', link: '/industry/wood' },
          ]
        },
        {
          text: 'Secondary Industries',
          collapsed: true,
          collapsible: true,
          items: [
            { text: 'Alcohol', link: '/industry/alcohol' },
            { text: 'Armor', link: '/industry/armor' },
            { text: 'Beekeeping', link: '/industry/beekeeping' },
            { text: 'Bookbinding', link: '/industry/bookbinding' },
            { text: 'Butchery', link: '/industry/butchery' },
            { text: 'Ceramic', link: '/industry/ceramic' },
            { text: 'Cheese', link: '/industry/cheese' },
            { text: 'Clothing', link: '/industry/clothing' },
            { text: 'Extract', link: '/industry/extract' },
            { text: 'Finished Goods', link: '/industry/finished-goods' },
            { text: 'Food', link: '/industry/food' },
            { text: 'Fuel', link: '/industry/fuel' },
            { text: 'Furniture', link: '/industry/furniture' },
            { text: 'Glass', link: '/industry/glass' },
            { text: 'Gem', link: '/industry/gem' },
            { text: 'Hunting', link: '/industry/hunting' },
            { text: 'Leatherworking', link: '/industry/leatherworking' },
            { text: 'Metal', link: '/industry/metal' },
            { text: 'Musical Instrument', link: '/industry/musical-instrument' },
            { text: 'Paper', link: '/industry/paper' },
            { text: 'Soap', link: '/industry/soap' },
            { text: 'Textile', link: '/industry/textile' },
            { text: 'Weapon', link: '/industry/weapon' },
          ]
        },
        {
          text: 'Tertiary Industries',
          collapsed: true,
          collapsible: true, items: [
            { text: 'Administration', link: '/industry/administration' },
            { text: 'Guild Hall', link: '/industry/guild-hall' },
            { text: 'Healthcare', link: '/industry/healthcare' },
            { text: 'Justice', link: '/industry/justice' },
            { text: 'Library', link: '/industry/library' },
            { text: 'Military', link: '/industry/military' },
            { text: 'Scholar Work', link: '/industry/scholar' },
            { text: 'Tavern', link: '/industry/tavern' },
            { text: 'Trade', link: '/industry/trade' },
            { text: 'Temple', link: '/industry/temple' },
          ]
        },
      ],
      '/building-designs/': [
        { text: 'Building Layout', items: [
          {text: 'Hospital with 3 floors', link: '/building-designs/hospital-3f'},
          {text: 'Poultry House "Egg"', link: '/building-designs/poultry-housing'},
        ]},
        { text: 'Power Production', items: [
          {text: 'Machine Overview', link: '/building-designs/power-overview'},
          { text: 'Dwarven Reactors', items: [
            {text: 'Water Wheel Reactor', link: '/building-designs/reactor-water-wheel'}
          ]}
        ]}
      ]
    },
  },
});
