import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { BaseComponent } from './layouts/base/base.component';

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
    CommonModule,
    BaseComponent,
    NgbModule,

    HeaderComponent,
  ]
})
export class SharedModule { }
