import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report.model';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-redis-list',
  templateUrl: './redis-list.component.html',
  styleUrls: ['./redis-list.component.scss']
})
export class RedisListComponent implements OnInit {
  reports: Report[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.reportService.getAllRedis().subscribe(response=>this.reports = response)
  }

}
