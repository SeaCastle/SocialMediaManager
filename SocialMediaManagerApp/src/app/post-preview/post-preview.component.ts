import { Component, OnInit, Input } from '@angular/core';
import { FormData } from '../form-data';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {

  @Input() fromData: FormData;

  constructor() { }

  ngOnInit() {
  }

}
