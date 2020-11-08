import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PcinfoComponent } from './pcinfo.component';

@NgModule({
  declarations: [PcinfoComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: PcinfoComponent
    }])
  ]
})
export class PcinfoModule { }
