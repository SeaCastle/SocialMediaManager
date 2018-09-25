import { Component, OnInit } from '@angular/core';
import { ProcessDataService } from '../process-data.service';
import { FormData } from '../form-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  model = new FormData();

  sites: string[] = ['twitter', 'facebook', 'tumblr', 'pinterest'];

  onSubmit() {
    this.processDataService.logData(this.model);
  }

  constructor(private processDataService: ProcessDataService) { }

  ngOnInit() {
  }

}
