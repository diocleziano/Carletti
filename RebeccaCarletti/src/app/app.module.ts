import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CountdownNascitaComponent } from './countdown-nascita/countdown-nascita.component';
import { DatapresuntaNascitaComponent } from './datapresunta-nascita/datapresunta-nascita.component';
import { DatapresuntaNascitaGenitoriComponent } from './datapresunta-nascita-genitori/datapresunta-nascita-genitori.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CountdownNascitaComponent,
    DatapresuntaNascitaComponent,
    DatapresuntaNascitaGenitoriComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
