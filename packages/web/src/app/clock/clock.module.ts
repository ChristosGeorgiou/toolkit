import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { DateFnsModule } from 'ngx-date-fns';
import { NgxMaskModule } from 'ngx-mask';
import { AlarmComponent } from './alarm/alarm.component';
import { ClockComponent } from './clock.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { TimeComponent } from './time/time.component';


@NgModule({
  declarations: [
    ClockComponent,
    AlarmComponent,
    StopwatchComponent,
    TimeComponent
  ],
  imports: [
    SharedModule,
    NgxMaskModule.forChild(),

    DateFnsModule,
    RouterModule.forChild([{
      path: '',
      component: ClockComponent,
      children: [{
        path: 'time',
        component: TimeComponent
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'time'
      }]
    }])
  ]
})
export class ClockModule { }
