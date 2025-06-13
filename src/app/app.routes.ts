import { Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AuthlayoutComponent } from './layouts/auth/authlayout/authlayout.component';
import { BlanklayoutComponent } from './layouts/blanklayout/blanklayout.component';

export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', loadComponent: () => import('./layouts/welcomelayout/welcome/welcome.component').then(m => m.WelcomeComponent) },
    { path: 'analysis', loadComponent: () => import('./layouts/welcomelayout/analysis/analysis.component').then(m => m.AnalysisComponent) },
    { path: 'quick', loadComponent: () => import('./layouts/welcomelayout/quick/quick.component').then(m => m.QuickComponent) },
    { path: 'secure', loadComponent: () => import('./layouts/welcomelayout/secure/secure.component').then(m => m.SecureComponent) },
    { path: 'landing', loadComponent: () => import('./pages/landing/landing.component').then(m => m.LandingComponent) },
    { path: 'check', loadComponent: () => import('./pages/check/check.component').then(m => m.CheckComponent) },
    { 
        path: '', 
        component: AuthlayoutComponent, 
        children: [
            { path: 'login', loadComponent: () => import('./layouts/auth/login/login.component').then(m => m.LoginComponent) },
            { path: 'register', loadComponent: () => import('./layouts/auth/register/register.component').then(m => m.RegisterComponent) }
        ]
    },
    {
        path: '', 
        component: BlanklayoutComponent,
        children: [
            { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
            { path: 'prescriptions', loadComponent: () => import('./pages/prescriptions/prescriptions.component').then(m => m.PrescriptionsComponent) },
            { path: 'settings', loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) },
        ]},
    { path: '**', component: NotfoundComponent }
];


    