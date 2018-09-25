import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProcessDataService {

  logData(data: any) {
    console.log(data);
  }

  constructor() { }
}
