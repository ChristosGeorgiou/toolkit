import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BaseComponent } from './layouts/base/base.component';

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    BaseComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
