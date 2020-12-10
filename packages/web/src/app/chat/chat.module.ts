import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ChatComponent } from './chat.component';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: ChatComponent
    }])
  ]
})
export class ChatModule { }
