import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestesPipeComponent } from './testes-pipe/testes-pipe.component'; 
import { CamelCasePipe } from './camel-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TestesPipeComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
    provide: LOCALE_ID,
    useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent, TestesPipeComponent]
})
export class AppModule { }
