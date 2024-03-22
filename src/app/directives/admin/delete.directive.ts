import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';


declare var $: any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    private element:ElementRef,
    private _renderer:Renderer2,
    private httpClientService:HttpClientService,
    private alertifyService:AlertifyService) {
      const img=_renderer.createElement('img');
      img.setAttribute("src","../../../../../assets/delete.png");
      img.setAttribute("style","cursor:pointer; margin:auto; display:flex;");

      img.width=25;
      img.height=25;
      this._renderer.appendChild(this.element.nativeElement,img);
     }
     @Input() id:string;
     @Input() controller:string;
     @HostListener("click")
    async onClick(){
      const td:HTMLTableCellElement=this.element.nativeElement;
      console.log(this.id)
     await this.httpClientService.delete({controller:this.controller},this.id).subscribe();

      console.log(this.element)
      $(td.parentElement).fadeOut(2000);
      this.alertifyService.message("başarılı bir şekilde silindi",{
      dismissOthers:true,
      messageType:MessageType.Success,
      position:Position.TopLeft})

     }

}
