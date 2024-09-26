import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { ErrorInterceptor } from "./_interceptor/error.interceptor";
import { JwtInterceptor } from "./_interceptors/jwt.interceptor";
import { loadingInterceptor } from "./_interceptors/loading.interceptor";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideToastr } from "ngx-toastr";
import { NgxSpinnerModule } from "ngx-spinner";


/* export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(withInterceptors([ErrorInterceptor, JwtInterceptor, loadingInterceptor])),
        provideAnimations(),
        provideToastr({
            positionClass: 'toast-bottom-right'
        }),
        importProvidersFrom(NgxSpinnerModule)
    ]
} */