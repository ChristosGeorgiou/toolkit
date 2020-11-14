import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SharedModule } from '@shared/shared.module';
import { PcinfoComponent } from './pcinfo.component';

@NgModule({
  declarations: [PcinfoComponent],
  imports: [
    SharedModule,
    LeafletModule,
    RouterModule.forChild([{
      path: '',
      component: PcinfoComponent
    }])
  ]
})
export class PcinfoModule { }
