import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportService } from '../../services/report.service';
import { Report } from '../../models/report.model';

@Component({
  selector: 'app-lista-reportes',
  templateUrl: './lista-reportes.component.html',
  styleUrls: ['./lista-reportes.component.scss']
})
export class ListaReportesComponent implements OnInit {

  newForm: FormGroup;
  reports: Report[] = [];
  carnet: string = "";
  selectedReport: Report = {
    carnet: 0,
    nombre: "",
    proyecto: "",
    servidor: "",
    fecha: "",
    cuerpo: "",
  };

  constructor(private fbuilder: FormBuilder, private reportService: ReportService) {
    this.newForm = this.fbuilder.group({
      Search: [''],
    });
  }

  ngOnInit(): void {

  }
  search() {
    this.reportService.getAll().subscribe(
      (response) => {
        const number_carnet = Number(this.newForm.get('Search')?.value);
        if (number_carnet) {
          this.reports = response.filter(item => item.carnet == number_carnet );
        } else {
          this.reports = response;
        }
        console.log(this.reports)
      }
    )
  }
}
