import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { QrcodeComponent } from './qrcode.component';



@NgModule({
  declarations: [QrcodeComponent],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: QrcodeComponent
    }])
  ]
})
export class QrcodeModule { }
