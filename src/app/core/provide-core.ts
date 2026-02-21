import { DEFAULT_CURRENCY_CODE, importProvidersFrom, LOCALE_ID, makeEnvironmentProviders } from "@angular/core";
import { provideAuth } from "./auth/provide-auth";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { setAuthTokenInterceptor } from "./auth/interceptors/set-auth-token-interceptor";
import { registerLocaleData } from "@angular/common";
import ptBr from '@angular/common/locales/pt';
import { NgxEchartsModule } from 'ngx-echarts';

registerLocaleData(ptBr);

export function provideCore() {
  return makeEnvironmentProviders([
    provideAuth(),
    provideHttpClient(withInterceptors([setAuthTokenInterceptor])),
    importProvidersFrom(
      NgxEchartsModule.forRoot({
        echarts: () => import('echarts'),
      })
    ),
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: LOCALE_ID, useValue: 'pt' }
  ]);
}
