import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TimePipe } from './pipes/time.pipe';
import { ForecastComponent } from './components/forecast/forecast.component';
import { WeekPipe } from './pipes/week.pipe';
import { CurrentComponent } from './components/current/current.component';
import { IconWatherPipe } from './pipes/icon-wather.pipe';
import { DetailComponent } from './components/detail/detail.component';
import { BackgroundPipe } from './pipes/background.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    TimePipe,
    ForecastComponent,
    WeekPipe,
    CurrentComponent,
    IconWatherPipe,
    DetailComponent,
    BackgroundPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
