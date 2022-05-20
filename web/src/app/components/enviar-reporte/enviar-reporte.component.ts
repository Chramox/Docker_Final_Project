import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Report } from 'src/app/models/report.model';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-enviar-reporte',
  templateUrl: './enviar-reporte.component.html',
  styleUrls: ['./enviar-reporte.component.scss']
})
export class EnviarReporteComponent implements OnInit {

  reportForm: FormGroup;
  constructor(private fbuilder: FormBuilder, private reportService: ReportService) {
    this.reportForm = this.fbuilder.group({
      Name: [''],
      Carnet: [''],
      Project: [''],
      Body: [''],
    });
  }

  ngOnInit(): void {
  }
  sendReport() {
    const newReport: Report = {
      carnet: this.reportForm.get("Carnet")?.value,
      nombre: this.reportForm.get("Name")?.value,
      proyecto: this.reportForm.get("Project")?.value,
      cuerpo: this.reportForm.get("Body")?.value,
    };
    this.reportService.new(newReport).subscribe(
      (res) => {
        alert("Reporte enviado");
        this.reportForm.get("Carnet")?.setValue('');
        this.reportForm.get("Name")?.setValue('');
        this.reportForm.get("Project")?.setValue('');
        this.reportForm.get("Body")?.setValue('');
      },
      (err) => alert("No se pudo enviar el reporte")
    )
  }

}
