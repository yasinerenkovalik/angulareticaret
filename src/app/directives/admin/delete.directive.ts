import { HttpErrorResponse } from '@angular/common/http';
import { Directive, ElementRef, HostListener, Input, Output, Renderer2,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/base/base.component';
import { DeleteDialogsComponent, DeleteState } from 'src/app/dialogs/delete-dialogs/delete-dialogs.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ProductService } from 'src/app/services/common/models/product.service';



declare var $: any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    private element:ElementRef,
    private _renderer:Renderer2,
    private productService:ProductService,
    private spinner:NgxSpinnerService,
    private alertifyService:AlertifyService,
    private httpClientService:HttpClientService,
    public dialog: MatDialog) {
      const img=_renderer.createElement('img');
      img.setAttribute("src","../../../../../assets/delete.png");
      img.setAttribute("style","cursor:pointer; margin:auto; display:flex;");

      img.width=25;
      img.height=25;
      this._renderer.appendChild(this.element.nativeElement,img);
     }
     @Input() id:string;
     @Input() controller:string;
     @Output() callback:EventEmitter<any>=new EventEmitter();
     @HostListener("click")
    async onClick(){
      this.openDialog( async ()=>{
     this.spinner.show(SpinnerType.BallAtom);
     const td:HTMLTableCellElement=this.element.nativeElement;

     await this.productService.delete(this.id);
   
    
     $(td.parentElement).animate({
      opacity:0,
      left:"+=50",
      height:"toogle",

     },700,()=>{this.callback.emit();})
    
     
     
    });
     }   
     
     openDialog(afterClosed:any): void {
      const dialogRef = this.dialog.open(DeleteDialogsComponent, {
        width:'250px',
        data: DeleteState.Yes,
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result == DeleteState.Yes) {
          afterClosed();
          
        }
      });
    }

}
