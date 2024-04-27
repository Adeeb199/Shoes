// ShoesData.js

const Data = [
  // Men category
  {
    id: 1,
    category: "Men",
    title: "Running Shoes",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$99.99",
    oldPrice: "$119.99",
    description: "Comfortable and lightweight running shoes for men's daily workout.",
    rating: 4.5 // Rating out of 5
  },
  {
    id: 2,
    category: "Men",
    title: "Casual Shoes",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$79.99",
    oldPrice: "$89.99",
    description: "Stylish and versatile casual shoes suitable for men's daily wear.",
    rating: 4.2 // Rating out of 5
  },
  {
    id: 3,
    category: "Men",
    title: "Sports Shoes",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$89.99",
    oldPrice: "$99.99",
    description: "High-quality sports shoes designed for men's active lifestyle.",
    rating: 4.7 // Rating out of 5
  },
  {
    id: 4,
    category: "Men",
    title: "Formal Shoes",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$129.99",
    oldPrice: "$149.99",
    description: "Elegant and sophisticated formal shoes for men's professional attire.",
    rating: 4.8 // Rating out of 5
  },
  {
    id: 5,
    category: "Men",
    title: "Boots",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$149.99",
    oldPrice: "$169.99",
    description: "Sturdy and stylish boots for men's outdoor adventures.",
    rating: 4.6 // Rating out of 5
  },
  {
    id: 6,
    category: "Men",
    title: "Sandals",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$59.99",
    oldPrice: "$69.99",
    description: "Comfortable and lightweight sandals for men's summer comfort.",
    rating: 4.4 // Rating out of 5
  },
  {
    id: 7,
    category: "Men",
    title: "Sneakers",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$79.99",
    oldPrice: "$89.99",
    description: "Trendy and fashionable sneakers for men's casual wear.",
    rating: 4.3 // Rating out of 5
  },
  {
    id: 8,
    category: "Men",
    title: "Slippers",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$19.99",
    oldPrice: "$29.99",
    description: "Cozy and warm slippers for men's indoor relaxation.",
    rating: 4.7 // Rating out of 5
  },
  {
    id: 9,
    category: "Men",
    title: "Loafers",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$109.99",
    oldPrice: "$129.99",
    description: "Classic and comfortable loafers for men's everyday style.",
    rating: 4.5 // Rating out of 5
  },
  {
    id: 10,
    category: "Men",
    title: "Flip Flops",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$24.99",
    oldPrice: "$29.99",
    description: "Casual and lightweight flip flops for men's summer outings.",
    rating: 4.2 // Rating out of 5
  },
  // Women category
  {
    id: 11,
    category: "Women",
    title: "Running Shoes",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$89.99",
    oldPrice: "$99.99",
    description: "Comfortable and stylish running shoes for women's daily workout.",
    rating: 4.6 // Rating out of 5
  },
  {
    id: 12,
    category: "Women",
    title: "Casual Shoes",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$79.99",
    oldPrice: "$89.99",
    description: "Stylish and comfortable casual shoes for women's daily wear.",
    rating: 4.3 // Rating out of 5
  },
  {
    id: 13,
    category: "Women",
    title: "Sports Shoes",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$99.99",
    oldPrice: "$109.99",
    description: "High-performance sports shoes for women's active lifestyle.",
    rating: 4.8 // Rating out of 5
  },
  {
    id: 14,
    category: "Women",
    title: "Formal Shoes",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$129.99",
    oldPrice: "$149.99",
    description: "Elegant and sophisticated formal shoes for women's professional attire.",
    rating: 4.7 // Rating out of 5
  },
  {
    id: 15,
    category: "Women",
    title: "Boots",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$149.99",
    oldPrice: "$169.99",
    description: "Stylish and comfortable boots for women's outdoor adventures.",
    rating: 4.9 // Rating out of 5
  },
  {
    id: 16,
    category: "Women",
    title: "Sandals",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$59.99",
    oldPrice: "$69.99",
    description: "Lightweight and airy sandals for women's summer comfort.",
    rating: 4.4 // Rating out of 5
  },
  {
    id: 17,
    category: "Women",
    title: "Sneakers",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$69.99",
    oldPrice: "$79.99",
    description: "Trendy and comfortable sneakers for women's casual wear.",
    rating: 4.5 // Rating out of 5
  },
  {
    id: 18,
    category: "Women",
    title: "Flats",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$49.99",
    oldPrice: "$59.99",
    description: "Versatile and stylish flats for women's everyday activities.",
    rating: 4.6 // Rating out of 5
  },
  {
    id: 19,
    category: "Women",
    title: "Heels",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$79.99",
    oldPrice: "$89.99",
    description: "Elegant and stylish heels for women's formal occasions.",
    rating: 4.7 // Rating out of 5
  },
  {
    id: 20,
    category: "Women",
    title: "Wedges",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$69.99",
    oldPrice: "$79.99",
    description: "Comfortable and stylish wedges for women's summer fashion.",
    rating: 4.8 // Rating out of 5
  },
  // Kids category
  {
    id: 21,
    category: "Kids",
    title: "Running Shoes",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$49.99",
    oldPrice: "$59.99",
    description: "Durable and fun running shoes for kids' active playtime.",
    rating: 4.2 // Rating out of 5
  },
  {
    id: 22,
    category: "Kids",
    title: "Sneakers",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$39.99",
    oldPrice: "$49.99",
    description: "Colorful and playful sneakers for kids' everyday adventures.",
    rating: 4.1 // Rating out of 5
  },
  {
    id: 23,
    category: "Kids",
    title: "Sandals",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$29.99",
    oldPrice: "$39.99",
    description: "Comfortable and sturdy sandals for kids' outdoor fun.",
    rating: 4.3 // Rating out of 5
  },
  {
    id: 24,
    category: "Kids",
    title: "Boots",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$59.99",
    oldPrice: "$69.99",
    description: "Warm and waterproof boots for kids' winter adventures.",
    rating: 4.5 // Rating out of 5
  },
  {
    id: 25,
    category: "Kids",
    title: "Flip Flops",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$19.99",
    oldPrice: "$24.99",
    description: "Casual and colorful flip flops for kids' summer outings.",
    rating: 4.4 // Rating out of 5
  },
  {
    id: 26,
    category: "Kids",
    title: "Casual Shoes",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$39.99",
    oldPrice: "$49.99",
    description: "Comfortable and stylish casual shoes for kids' daily wear.",
    rating: 4.3 // Rating out of 5
  },
  {
    id: 27,
    category: "Kids",
    title: "School Shoes",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$44.99",
    oldPrice: "$54.99",
    description: "Durable and comfortable school shoes for kids' everyday use.",
    rating: 4.6 // Rating out of 5
  },
  {
    id: 28,
    category: "Kids",
    title: "Dress Shoes",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$54.99",
    oldPrice: "$64.99",
    description: "Stylish and formal dress shoes for kids' special occasions.",
    rating: 4.7 // Rating out of 5
  },
  {
    id: 29,
    category: "Kids",
    title: "Slippers",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$14.99",
    oldPrice: "$19.99",
    description: "Soft and cozy slippers for kids' indoor comfort.",
    rating: 4.8 // Rating out of 5
  },
  {
    id: 30,
    category: "Kids",
    title: "Canvas Shoes",
    image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
    price: "$34.99",
    oldPrice: "$44.99",
    description: "Lightweight and breathable canvas shoes for kids' casual outings.",
    rating: 4.5 // Rating out of 5
  },
  // Summer category
  // {
  //   id: 31,
  //   category: "Summer",
  //   title: "Summer Sandals",
  //   image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
  //   price: "$49.99",
  //   oldPrice: "$59.99",
  //   description: "Lightweight and comfortable sandals for summer outings.",
  //   rating: 4.3 // Rating out of 5
  // },
  // {
  //   id: 32,
  //   category: "Summer",
  //   title: "Beach Flip Flops",
  //   image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
  //   price: "$29.99",
  //   oldPrice: "$39.99",
  //   description: "Stylish and durable flip flops for beach days.",
  //   rating: 4.6 // Rating out of 5
  // },
  // {
  //   id: 33,
  //   category: "Summer",
  //   title: "Summer Slides",
  //   image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
  //   price: "$39.99",
  //   oldPrice: "$49.99",
  //   description: "Easy-to-wear slides for casual summer outings.",
  //   rating: 4.2 // Rating out of 5
  // },
  // {
  //   id: 34,
  //   category: "Summer",
  //   title: "Poolside Sandals",
  //   image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
  //   price: "$34.99",
  //   oldPrice: "$44.99",
  //   description: "Water-resistant sandals for poolside relaxation.",
  //   rating: 4.8 // Rating out of 5
  // },
  // {
  //   id: 35,
  //   category: "Summer",
  //   title: "Summer Wedges",
  //   image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
  //   price: "$59.99",
  //   oldPrice: "$69.99",
  //   description: "Elegant and stylish wedges for summer evenings.",
  //   rating: 4.6 // Rating out of 5
  // },
  // {
  //   id: 36,
  //   category: "Summer",
  //   title: "Beach Sandals",
  //   image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
  //   price: "$44.99",
  //   oldPrice: "$54.99",
  //   description: "Comfortable and trendy sandals for beach walks.",
  //   rating: 4.3 // Rating out of 5
  // },
  // {
  //   id: 37,
  //   category: "Summer",
  //   title: "Summer Espadrilles",
  //   image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
  //   price: "$49.99",
  //   oldPrice: "$59.99",
  //   description: "Classic and chic espadrilles for summer fashion.",
  //   rating: 4.8 // Rating out of 5
  // },
  // {
  //   id: 38,
  //   category: "Summer",
  //   title: "Pool Slides",
  //   image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
  //   price: "$29.99",
  //   oldPrice: "$39.99",
  //   description: "Casual and comfortable slides for poolside lounging.",
  //   rating: 4.3 // Rating out of 5
  // },
  // {
  //   id: 39,
  //   category: "Summer",
  //   title: "Summer Flats",
  //   image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
  //   price: "$39.99",
  //   oldPrice: "$49.99",
  //   description: "Versatile and stylish flats for summer activities.",
  //   rating: 4.8 // Rating out of 5
  // },
  // {
  //   id: 40,
  //   category: "Summer",
  //   title: "Beach Sandals",
  //   image: "https://img.freepik.com/premium-photo/pair-yellow-sport-shoes-isolated-white-background_977935-549.jpg?size=626&ext=jpg&ga=GA1.1.1626827148.1697472247&semt=ais",
  //   price: "$39.99",
  //   oldPrice: "$49.99",
  //   description: "Durable and comfortable sandals for beach adventures.",
  //   rating: 4.3 // Rating out of 5
  // }
];



// Remove the dollar sign from price and oldPrice
const shoesData = Data.map(shoe => ({
  ...shoe,
  price: parseFloat(shoe.price.replace('$', '')),
  oldPrice: parseFloat(shoe.oldPrice.replace('$', ''))
}));

export default shoesData;

