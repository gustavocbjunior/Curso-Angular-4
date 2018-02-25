import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from 'app/order/order.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { MEAT_API } from '../app.api';
import { HeaderComponent } from 'app/header/header.component';
import {LoginService} from '../security/login/login.service';

@Injectable()
export class OrderService {
    constructor(private carService: ShoppingCartService,
                private http: HttpClient) {}

    itemsValue(): number {
        return this.carService.total();
    }

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

    clear() {
        this.carService.clear();
    }

    checkOrder(order: Order): Observable<string> {
        return this.http.post<Order>(`${MEAT_API}/orders`, order)
                        .map(orderMap => orderMap.id);
    }
}
