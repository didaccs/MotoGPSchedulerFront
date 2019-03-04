import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { EventListComponent } from './components/event-list/event-list.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';


const appRoutes: Routes = [
    {path: '', component: EventListComponent},
    {path: 'home', component: UnderConstructionComponent},
    {path: 'calendar', component: EventListComponent},
    {path: 'detail/:id', component: EventDetailComponent},
    {path: 'results', component: UnderConstructionComponent},
    {path: '**', component: EventListComponent}
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
