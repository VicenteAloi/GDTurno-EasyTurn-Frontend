import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ResponseError } from '../interfaces/responseError';
export const serverErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error:HttpErrorResponse)=>{
      let errorMessage = '';
      let errorStatus;
      if(error.error instanceof ErrorEvent){
        errorMessage = `${error.error.message}`;
      } else {
        errorMessage = `${error.error.message}`;
        errorStatus = error.status;
      }
      const responseError:ResponseError = {
        message: errorMessage,
        status: errorStatus
      };
      return throwError(()=>responseError);
    })
  );
};
