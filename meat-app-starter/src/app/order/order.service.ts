import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Injectable()
export class OrderService {
    constructor(private carService: ShoppingCartService) {}

    cartItems(): CartItem[] {
        return this.carService.items;
    }

    increaseQty(item: CartItem) {
        this.carService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.carService.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.carService.removeItem(item);
    }
}