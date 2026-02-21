import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { isNotAuthenticatedGuard } from "../guards/is-not-authenticated-guard";

export default [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [isNotAuthenticatedGuard]
  }
] as Routes;
