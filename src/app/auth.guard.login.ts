import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn :'root'
})
export class AuthGuardLogin implements CanActivate{

    canActivate(route: ActivatedRouteSnapshot): boolean {
       
        let userData = JSON.parse(localStorage.getItem('userData'));
       
        if(userData){
             return false;
        }else{
            return true;
        }

            
        }
    }
    
