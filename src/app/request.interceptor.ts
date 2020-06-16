import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";

export class RequestInterceptor implements HttpInterceptor {
   
    intercept(req: HttpRequest<any>, handler: HttpHandler) {
        //code to be executed before every request
        console.log('intercept method is called');
        let userData = JSON.parse(localStorage.getItem('userData')); 
        if(userData){
            let token = userData.token;
            var modifiedRequest = req.clone({
                headers: req.headers.append('Authorization','Bearer ' + token)
            });
            return handler.handle(modifiedRequest);
        } else {
            return handler.handle(req);
        }        
    } 
}