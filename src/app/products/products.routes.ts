import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

export const routes: Routes = [
    {
        path: '', component: ProductsComponent, children: [
            
          {
            path: 'details',
            loadComponent: () => import(`./details/details.component`)
              .then(mod => mod.DetailsComponent)
          },
          {
            path: 'buy-now',
            loadComponent: () => import(`./buy-now/buy-now.component`)
              .then(mod => mod.BuyNowComponent)
          },
         
    
        ]
      },
];
