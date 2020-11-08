import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { AlarmComponent } from './alarm/alarm.component';
import { ClockComponent } from './clock/clock.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';


@NgModule({
  declarations: [ClockComponent, AlarmComponent, StopwatchComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: ClockComponent
    }])
  ]
})
export class ClockModule { }
