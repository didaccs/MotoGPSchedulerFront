import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { EventListComponent } from './components/event-list/event-list.component';


const appRoutes: Routes = [
    {path: '', component: EventListComponent},
    {path: 'home', component: EventListComponent},
    {path: 'calendar', component: EventListComponent},
    // {path: 'perfil/:id', component: ProfileComponent , canActivate: [ UserGuard]},
    {path: '**', component: EventListComponent}
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
