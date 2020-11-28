import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { DateFnsModule } from 'ngx-date-fns';
import { NgxMaskModule } from 'ngx-mask';
import { AlarmComponent } from './alarm/alarm.component';
import { ClockComponent } from './clock/clock.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';


@NgModule({
  declarations: [ClockComponent, AlarmComponent, StopwatchComponent],
  imports: [
    SharedModule,
    NgxMaskModule.forChild(),

    DateFnsModule,
    RouterModule.forChild([{
      path: '',
      component: ClockComponent
    }])
  ]
})
export class ClockModule { }
