import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaReportesComponent } from './components/lista-reportes/lista-reportes.component';
import { EnviarReporteComponent } from './components/enviar-reporte/enviar-reporte.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RedisListComponent } from './components/redis-list/redis-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaReportesComponent,
    EnviarReporteComponent,
    NavbarComponent,
    RedisListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
