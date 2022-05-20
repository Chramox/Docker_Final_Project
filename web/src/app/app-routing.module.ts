import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaReportesComponent } from './components/lista-reportes/lista-reportes.component';
import { EnviarReporteComponent } from './components/enviar-reporte/enviar-reporte.component';

const routes: Routes = [
  {
    path: 'report-list',
    component: ListaReportesComponent,
  },
  {
    path: 'send-report',
    component: EnviarReporteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
