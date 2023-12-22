import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { Submain1Component } from './components/main/submain1/submain1.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Submain2Component } from './components/main/submain2/submain2.component';
import { TableComponent } from './components/main/rickmorty/table/table.component';
import { DetailComponent } from './components/main/rickmorty/table/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimosPipe } from './pipes/primos.pipe';
import { PipeComponent } from './components/main/pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    Submain1Component,
    Submain2Component,
    TableComponent,
    DetailComponent,
    PrimosPipe,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
