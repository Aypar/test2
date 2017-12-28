import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  template: `
    <div class="m-content">
      employee works!
    </div>
  `,
  styles: []
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
