import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const serverErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error:HttpErrorResponse)=>{
      let errorMessage = '';
      if(error.error instanceof ErrorEvent){
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Error estado: ${error.status}\nMessage del servidor: ${error.error.message}`;
      }
      return throwError(()=>errorMessage);
    })
  );
};
