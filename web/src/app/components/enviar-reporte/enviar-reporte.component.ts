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
      Email: [''],
      Password: ['']
    });
  }

  ngOnInit(): void {
  }
  sendReport() {
    const newReport: Report = {
      name: this.reportForm.get("Name")?.value,
      email: this.reportForm.get("Email")?.value,
      password: this.reportForm.get("Password")?.value
    };
    this.reportService.new(newReport).subscribe(
      (res) => {
        alert("Reporte enviado");
        this.reportForm.get("Name")?.setValue('');
        this.reportForm.get("Email")?.setValue('');
        this.reportForm.get("Password")?.setValue('');
      },
      (err) => alert("No se pudo enviar el reporte")
    )
  }

  sendReportRedis() {
    const newReport: Report = {
      name: this.reportForm.get("Name")?.value,
      email: this.reportForm.get("Email")?.value,
      password: this.reportForm.get("Password")?.value
    };
    this.reportService.newRedis(newReport).subscribe(
      (res) => {
        alert("Reporte enviado");
        this.reportForm.get("Name")?.setValue('');
        this.reportForm.get("Email")?.setValue('');
        this.reportForm.get("Password")?.setValue('');
      },
      (err) => alert("No se pudo enviar el reporte")
    )
  }
}
