import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeferLoadModule } from '@trademe/ng-defer-load';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';


import { ImageService } from './shared/image.service';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '././material.module';


const appRoutes: Routes = [
    { path: '', component: ImageListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
  ],
  imports: [
    BrowserModule,
    DeferLoadModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})



export class AppModule { }
