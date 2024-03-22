import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
  
   
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    AdminModule,
    UiModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [{provide:"baseUrl",useValue:"https://localhost:7012/api",multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
