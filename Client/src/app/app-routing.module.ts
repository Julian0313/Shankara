import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrrorComponent } from './core/server-errror/server-errror.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {breadcrumb: 'Home'} },
  { path: 'test-error', component: TestErrorComponent, data: {breadcrumb: 'Test Errors'}},
  { path: 'server-error', component: ServerErrrorComponent, data: {breadcrumb: 'Server Errors'}},
  { path: 'not-found', component: NotFoundComponent, data: {breadcrumb: 'Not Found'} },
  { path: 'shop', loadChildren:()=>import('./shop/shop.module').then(mod => mod.ShopModule),
  data: {breadcrumb: 'Shop'} },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
