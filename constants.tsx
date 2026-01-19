
import React from 'react';
import { Service, Testimonial, Product } from './types';

export const PHONE_NUMBER = "07988 530467";
export const EMAIL = "enquiries@littlecakecompany.co.uk";
export const LOCATION = "Wensley Road, Birmingham B26 1LT";
export const LOGO_URL = "https://lh3.googleusercontent.com/d/1lW_E0Jme-E92WxHmUnJa-ljOl5-u2Hib";

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Birmingham Blue Velvet',
    price: '£45.00',
    category: 'Celebration',
    tag: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606983340126-a9402ffbccca?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Our signature blue velvet sponge, layered with Madagascan vanilla bean cream cheese frosting and topped with delicate white chocolate curls. A Birmingham favorite for any special occasion.',
    ingredients: ['Madagascan Vanilla', 'Organic Flour', 'Free-range Eggs', 'Premium Blue Cocoa'],
    deliveryDetail: 'Free delivery to B26, B25, and B33. Flat rate £5 for greater Birmingham.'
  },
  {
    id: 'p2',
    name: 'Salted Caramel Drip',
    price: '£38.00',
    category: 'Birthday',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'A decadent four-layer chocolate sponge drenched in our homemade salted caramel sauce. Finished with a luxury gold drip and gourmet caramel popcorn.',
    ingredients: ['Sea Salt Caramel', '70% Dark Chocolate', 'British Butter', 'Fresh Cream'],
    deliveryDetail: 'Same-day local delivery available for orders placed before 10 AM.'
  },
  {
    id: 'p3',
    name: 'Amalfi Lemon Zest',
    price: '£35.00',
    category: 'Loaf Cakes',
    tag: 'Zesty',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582760902832-61f4354f0288?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Light, zesty, and incredibly moist. Made with the juice and zest of authentic Amalfi lemons and finished with a sharp citrus glaze. Perfect for afternoon tea.',
    ingredients: ['Amalfi Lemons', 'Organic Cane Sugar', 'Cold-pressed Oil', 'Citrus Glaze'],
    deliveryDetail: 'Hand-delivered in our signature chilled eco-vans across the West Midlands.'
  },
  {
    id: 'p4',
    name: 'Signature Artisan Celebration Cake',
    price: '£55.00',
    category: 'Celebration',
    tag: 'New Design',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'A masterpiece of contemporary baking. This multi-layered artisan cake features a light-as-air sponge, premium buttercream finish, and handcrafted edible decorations. Perfect for birthdays, weddings, or any special Birmingham celebration.',
    ingredients: ['Madagascan Vanilla Bean', 'Organic British Butter', 'Locally Sourced Eggs', 'Swiss Meringue Buttercream'],
    deliveryDetail: 'White-glove local delivery available across all West Midlands B-postcodes.'
  },
  {
    id: 'p5',
    name: 'Biscoff Dream Cupcakes',
    price: '£18.00',
    category: 'Treats',
    tag: 'Box of 6',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'Indulgent Biscoff-filled cupcakes topped with spiced buttercream and a crunchy Lotus biscuit. The ultimate treat for biscuit lovers.',
    ingredients: ['Lotus Biscoff Spread', 'Cinnamon Spice', 'Whipped Buttercream', 'Caramelized Biscuit'],
    deliveryDetail: 'Letterbox-friendly packaging not available. Local hand-delivery only to maintain freshness.'
  },
  {
    id: 'p6',
    name: 'Rustic Berry Victoria',
    price: '£32.00',
    category: 'Classic',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516731415730-0c6419096c7c?q=80&w=800&auto=format&fit=crop'
    ],
    description: 'A modern take on the British classic. Light vanilla sponge with lashings of homemade strawberry preserve and fresh seasonal berries from local Birmingham markets.',
    ingredients: ['Fresh Strawberries', 'Homemade Jam', 'Double Cream', 'Organic Vanilla'],
    deliveryDetail: 'Local delivery across Birmingham B-postcodes within 48 hours.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'wedding',
    title: 'Luxury Wedding Cakes',
    description: 'Bespoke multi-tiered wedding cakes handcrafted with premium ingredients. Available for delivery across Birmingham and the West Midlands.',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'celebration',
    title: 'Bespoke Celebration Cakes',
    description: 'Custom designs for anniversaries, engagements, and special milestones. Each cake is a unique masterpiece tailored to your theme.',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cupcakes',
    title: 'Artisan Cupcakes & Treats',
    description: 'Perfect for gifts or corporate events. Our cupcakes feature delicate frosting and seasonal flavours from our Birmingham studio.',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'birthday',
    title: 'Birthday Cakes',
    description: 'Vibrant and delicious birthday cakes for all ages. From classic victoria sponge to contemporary chocolate drip designs.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'unicorn',
    title: 'Unicorn Cakes',
    description: 'Magical unicorn-themed cakes featuring handcrafted gold horns, rainbow manes, and shimmering edible glitter.',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'princess',
    title: 'Princess Cakes',
    description: 'Elegant fairytale cakes for your little royalty. Featuring intricate crown details, royal icing, and soft pastel finishes.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb8c2?q=80&w=800&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rebecca L.',
    location: 'Birmingham',
    text: 'The most beautiful and delicious cake I have ever seen. Little Cake Company made our anniversary truly special with a bespoke floral design.',
    rating: 5
  },
  {
    id: '2',
    name: 'David G.',
    location: 'Solihull',
    text: 'Incredible attention to detail. The team in Birmingham really know their craft. The sponge was so moist and the icing was perfect.',
    rating: 5
  },
  {
    id: '3',
    name: 'Sophie H.',
    location: 'Sutton Coldfield',
    text: 'Highly recommend for wedding cakes! They took my mood board and turned it into the cake of my dreams. Five stars!',
    rating: 5
  },
  {
    id: '4',
    name: 'Sarah W.',
    location: 'Birmingham City Centre',
    text: 'Absolutely stunning cake for my daughter\'s first birthday. It was the talk of the party and tasted even better than it looked!',
    rating: 5
  },
  {
    id: '5',
    name: 'James M.',
    location: 'Halesowen',
    text: 'Ordered a box of cupcakes for my wife. The presentation was top-tier and the flavors were exquisite. Will definitely order again.',
    rating: 5
  },
  {
    id: '6',
    name: 'Amina B.',
    location: 'Moseley',
    text: 'Professional service from start to finish. The team helped me design a corporate cake that perfectly matched our branding.',
    rating: 5
  },
  {
    id: '7',
    name: 'Michael T.',
    location: 'Harborne',
    text: 'We ordered an eggless chocolate cake and it was honestly the best we have ever had. No one could tell it was eggless!',
    rating: 5
  },
  {
    id: '8',
    name: 'Chloe R.',
    location: 'Edgbaston',
    text: 'The Red Velvet cake was incredibly moist and the cream cheese frosting was to die for. Little Cake Company is our new go-to.',
    rating: 5
  },
  {
    id: '9',
    name: 'Gareth P.',
    location: 'Birmingham',
    text: 'Fantastic service. They delivered the cake directly to the venue and set it up perfectly. Took all the stress out of the day.',
    rating: 5
  }
];
