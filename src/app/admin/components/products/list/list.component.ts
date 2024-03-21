import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/contracts/list_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit,AfterViewInit {

  constructor(private productService:ProductService,spinner:NgxSpinnerService,private aletify:AlertifyService) {super(spinner) }
  ngAfterViewInit(): void {
    
   
    
  }
  displayedColumns: string[] = ['name', 'stock', 'price', 'cDateTime', 'updDateTime' ];
  dataSource: MatTableDataSource<List_Product> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

 

 async ngOnInit(){
  this.showSpinner(SpinnerType.BallAtom);
 const allProducts:List_Product[]= await this.productService.read( () => this.hideSpinner(SpinnerType.BallAtom), errorMessage => this.aletify.message(errorMessage, {
    dismissOthers: true,
    messageType: MessageType.Error,
    position: Position.TopRight
  }))
  console.log(allProducts)
  this.dataSource = new MatTableDataSource<List_Product>(allProducts);
  this.dataSource.paginator=this.paginator;
 
   
  }

}
