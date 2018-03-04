import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { TiendaComponent } from './tienda/tienda.component';
import { AnimalsComponent } from './animals/animals.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { KeepersComponent } from './keepers/keepers.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'animals', component: AnimalsComponent},
    {path: 'keepers', component: KeepersComponent},
    {path: 'shop', component: TiendaComponent},
    // {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
