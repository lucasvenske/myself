import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { form, required, email, submit, FormField } from '@angular/forms/signals';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserCredentials } from '../../interfaces/user-credentials';
import { LoginFacadeService } from '../../facades/login-facade.service';
import { firstValueFrom } from 'rxjs';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { heroMoon, heroSun } from '@ng-icons/heroicons/outline';
import { ZardButtonComponent } from '@/shared/zardui/components/button';
import { ZardCardComponent } from '@/shared/zardui/components/card';
import { ZardInputDirective } from '@/shared/zardui/components/input';
import { ZardFormImports } from '@/shared/zardui/components/form';

@Component({
  selector: 'app-login',
  imports: [
    ZardCardComponent,
    ZardButtonComponent,
    NgIcon,
    ZardFormImports,
    ZardInputDirective,
    FormField,
  ],
  templateUrl: './login.component.html',
  providers: [provideIcons({ heroMoon, heroSun })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  private readonly darkmodeService = inject(DarkModeService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly loginFacadeService = inject(LoginFacadeService);

  protected readonly loading = signal(false);
  protected readonly wrongCredentials = signal(false);

  private readonly loginModel = signal<UserCredentials>({
    user: '',
    password: '',
  });

  protected readonly loginForm = form(this.loginModel, (login) => {
    required(login.user, { message: 'Email is required' });
    email(login.user, { message: 'Please enter a valid email address' });
    required(login.password, { message: 'Password is required' });
  });

  toggleTheme(): void {
    this.darkmodeService.toggleTheme();
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.darkmodeService.getCurrentTheme();
  }

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    this.wrongCredentials.set(false);

    await submit(this.loginForm, async () => {
      this.loading.set(true);

      const payload = this.loginModel();

      try {
        await firstValueFrom(this.loginFacadeService.login(payload));
        this.router.navigate(['']);
      } catch (response: unknown) {
        if (response instanceof HttpErrorResponse && response.status === 401) {
          this.wrongCredentials.set(true);
        }
      } finally {
        this.loading.set(false);
      }
    });
  }
}
