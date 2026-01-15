
import React from 'react';
import { Service, Testimonial } from './types';

export const PHONE_NUMBER = "07988 530467";
export const EMAIL = "enquiries@littlecakecompany.co.uk";
export const LOCATION = "Wensley Road, Birmingham B26 1LT";
export const LOGO_URL = "https://lh3.googleusercontent.com/d/1665g0pCdgHBqosrJmq3T1xaDMyGkahEE=s1000";

export const SERVICES: Service[] = [
  {
    id: 'wedding',
    title: 'Luxury Wedding Cakes',
    description: 'Bespoke multi-tiered wedding cakes handcrafted with premium ingredients. Available for delivery across Birmingham and the West Midlands.',
    image: 'https://www.khalidskakes.co.uk/wp-content/uploads/img_7929-edit-scaled.jpg'
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
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop'
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
    image: 'https://lh3.googleusercontent.com/d/1aHB-eEFndxE5ZTaJmhqlXbhHSogixuL4'
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
