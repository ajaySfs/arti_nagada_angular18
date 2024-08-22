import { Routes } from '@angular/router';
import { MyProComponent } from './my-pro/my-pro.component';

export const routes: Routes = [

    { path: '', component: MyProComponent, },
    {
        path: 'product',
        loadChildren: () => import('./products/products.routes').then(routes => routes.routes)
    }
];
