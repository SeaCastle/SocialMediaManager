import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sites: string[] = ['Twitter', 'Facebook', 'Tumblr', 'Pinterest'];

  constructor() { }

  ngOnInit() {
  }

}
