import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'scroll-1',
    loadChildren: () => import('./modules/scroll-1/scroll-1.module').then(m => m.Scroll1Module),
   
},
{
  path: 'scroll-2',
  loadChildren: () => import('./modules/scroll-2/scroll-2.module').then(m => m.Scroll2Module),
 
},
{ path: '',   redirectTo: 'scroll-1/test-scroll-1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
