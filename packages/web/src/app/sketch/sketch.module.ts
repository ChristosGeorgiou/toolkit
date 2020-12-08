import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SharedModule } from '@shared/shared.module';
import { SketchComponent } from './sketch.component';



@NgModule({
  declarations: [SketchComponent],
  imports: [
    SharedModule,
    LeafletModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: SketchComponent
    }])
  ]
})
export class SketchModule { }
