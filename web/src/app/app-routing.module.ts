import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaReportesComponent } from './components/lista-reportes/lista-reportes.component';
import { EnviarReporteComponent } from './components/enviar-reporte/enviar-reporte.component';
import { RedisListComponent } from './components/redis-list/redis-list.component';

const routes: Routes = [
  {
    path: 'report-list',
    component: ListaReportesComponent,
  },
  {
    path: 'report-list-redis',
    component: RedisListComponent,
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
