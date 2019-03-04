import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { EventListComponent } from './components/event-list/event-list.component';


const appRoutes: Routes = [
    {path: '', component: EventListComponent},
    {path: 'home', component: EventListComponent},
    {path: 'calendar', component: EventListComponent},
    {path: 'detail/:id', component: EventDetailComponent},
    {path: '**', component: EventListComponent}
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
