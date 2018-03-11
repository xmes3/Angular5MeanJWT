import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminGuard } from '../services/admin-guard';

const adminRoutes: Routes = [
    {
        path: 'admin-panel',
        component: MainComponent,
        canActivate: [AdminGuard],
        children: [
            {path: '', redirectTo: 'list', pathMatch: 'full' },
            {path: 'list', component: ListComponent },
            {path: 'add', component: AddComponent },
            {path: 'edit', component: EditComponent },
        ]
    },
    {path: 'list-panel', component: ListComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule {}
