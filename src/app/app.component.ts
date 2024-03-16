import { Component } from '@angular/core';
import { CustomeToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custome-toastr.service';
import { Position } from './services/admin/alertify.service';
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-project2';
  constructor(private toastr:CustomeToastrService){
    toastr.message("merhaba","yasin",{
      messageType:ToastrMessageType.Error,
      position:ToastrPosition.BottomFullWidth
    })
  }
}
