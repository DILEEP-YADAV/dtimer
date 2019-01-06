import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private data = [
    {
      category: 'Watches',
      expanded: true,
      products: [
        // tslint:disable-next-line:max-line-length
        { id: 0, name: 'fastrack fastrack', price: '250.00', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/cj-fastrack.jpeg' },
        // tslint:disable-next-line:max-line-length
        { id: 1, name: 'casio', price: '300.40', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/casio-original.jpeg' },
        // tslint:disable-next-line:max-line-length
        { id: 2, name: 'fastrack', price: '900.55', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/c-fastrack.jpeg' },
        // tslint:disable-next-line:max-line-length
        { id: 3, name: 'casio', price: '250.00', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/cj-fastrack.jpeg' },
        // tslint:disable-next-line:max-line-length
        { id: 4, name: 'Classic', price: '300.40', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/casio-original.jpeg' },
        // tslint:disable-next-line:max-line-length
        { id: 5, name: 'fastrack', price: '900.55', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/c-fastrack.jpeg' },
        // tslint:disable-next-line:max-line-length
        { id: 6, name: 'fastrack', price: '73.00', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/cj-fastrack.jpeg' }
      ]
    },
    {
      category: 'Smart TV / 4K',
      expanded: true,
      products: [
        { id: 7, name: 'Sony', price: '25000.00', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/an-original.jpeg' },
        { id: 8, name: 'MI', price: '30000.40', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/flipkart-40h.jpeg' },
        { id: 9, name: 'Samsung', price: '90000.55', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/flipkart-40h.jpeg' },
        { id: 10, name: 'Sony', price: '250.00', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/an-original.jpeg' },
        { id: 11, name: 'LG', price: '30722.40', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/flipkart-40h.jpeg' },
        { id: 12, name: 'Sony', price: '9000.55', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/flipkart-40h.jpeg' },
        { id: 13, name: 'Sony', price: '730000.00', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/an-original.jpeg' }
      ]
    },
    {
      category: 'Salad',
      expanded: true,
      products: [
        { id: 14, name: 'Ham & Egg', price: '8', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/iphone-7s.jpeg' },
        { id: 15, name: 'Basic', price: '5', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/iphone-7s.jpeg' },
        { id: 17, name: 'Ceaser', price: '9', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/iphone-7s.jpeg' }
      ]
    }
    ,
    {
      category: 'Salad',
      products: [
        { id: 17, name: 'Ham & Egg', price: '8', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/iphone-7s.jpeg' },
        { id: 18, name: 'Basic', price: '5', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/iphone-7s.jpeg' },
        { id: 19, name: 'Ceaser', price: '9', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/iphone-7s.jpeg' }
      ]
    }
    ,
    {
      category: 'Salad',
      products: [
        { id: 20, name: 'Ham & Egg', price: '8', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/iphone-7s.jpeg' },
        { id: 21, name: 'Basic', price: '5', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/iphone-7s.jpeg' },
        { id: 22, name: 'Ceaser', price: '9', rating: '4.5', timeend: 'Jan 7, 2019 14:50:25', img: '../../assets/items/iphone-7s.jpeg' }
      ]
    }
  ];
  private cart = [];
  constructor() { }
  getProducts() {
    return this.data;
  }
  getCart() {
    return this.cart;
  }
  addProduct(product) {
    this.cart.push(product);
  }
}
