import { Routes } from '@angular/router';
import { Studentdata } from './studentdata/studentdata';
import { Viewcustomer } from './customerlist/viewcustomer/viewcustomer';
import { Addupdatecustomer } from './customerlist/viewcustomer/addupdatecustomer/addupdatecustomer';
import { Products } from './product/products/products';
import { Sortings } from './sortings/sortings';
import { Filtercomponent } from './filtercomponent/filtercomponent';

export const routes: Routes = [
    {
        path:'studentdata',
        component:Studentdata
    },
      {
        path:'viewcustomer/:id',
        component:Viewcustomer
    },
    
      {
        path:'addupdatecustomer/:id',
        component:Addupdatecustomer
    },
     {
        path:'productlist',
        component:Products
    },
      {
        path:'sorting',
        component:Sortings
    },
      {
        path:'filtercomponent',
        component:Filtercomponent
    },

];
