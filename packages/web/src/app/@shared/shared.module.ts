import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './layouts/base/base.component';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    BaseComponent
  ]
})
export class SharedModule { }
