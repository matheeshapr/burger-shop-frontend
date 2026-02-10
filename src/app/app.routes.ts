import { Routes } from '@angular/router';
import { Dashboard } from './component/dashboard/dashboard';
import { Menu } from './pages/menu/menu';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
  { path: 'home', component: Dashboard },
  { path: 'menu', component: Menu },
  { path: 'cart', component: Cart },
  { path: '', redirectTo: 'home', pathMatch: 'full' } // මුලින්ම ආවම home එකට යන්න
];