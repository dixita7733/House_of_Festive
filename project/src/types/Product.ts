export interface Product {
  id: string;
  title: string;
  image: string;
  size: string;
  color: string;
  price: number;
  category: string;
  createdAt: Date;
}

export type Category = 'Diwali' | 'Navratri' | 'Raksha Bandhan' | 'Holi' | 'Ganesh Chaturthi' | 'Karva Chauth' | 'All';