import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

    constructor(private loginService: LoginService) {}

    checkAuthenticantion(path: string): boolean {
        const loggedIn = this.loginService.isLoggedIn();

        if (!loggedIn) {
            this.loginService.handleLogin(`/${path}`);
        }

        return loggedIn;
    }

    canLoad(route: Route): boolean {
        console.log('canLoad');
        return this.checkAuthenticantion(route.path);
    }

    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
        console.log('canActivate');
        return this.checkAuthenticantion(activatedRouteSnapshot.routeConfig.path);
    }
}
