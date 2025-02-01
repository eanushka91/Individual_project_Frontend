import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const token: any = JSON.parse(localStorage.getItem('token') || '');
  console.log(token);
  
  const ALLOWED_PUBLIC_ENDPOINTS = ['/login', '/signup'];
  const isPublicEndpoint = ALLOWED_PUBLIC_ENDPOINTS.some(endpoint => request.url.includes(endpoint));

  if (isPublicEndpoint) {
    return next(request);
  }

  const authRequest = token
    ? request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      })
    : request;

  // Handle the response
  return next(authRequest).pipe(
    catchError(error => {
      if (error.status === 401) {
        console.warn('Unauthorized access - token may have expired. Redirecting to login...');
        window.location.href = '/auth/login';
      }
      return throwError(() => error);
    })
  );
};