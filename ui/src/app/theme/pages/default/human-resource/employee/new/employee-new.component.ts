import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Employee} from '../../../../../../_models/employee';
import {EmployeeService} from "../../../../../../_services/employee.service";
@Component({
    selector: 'app-employee-new',
    templateUrl: './employee-new.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class EmployeeNewComponent implements OnInit {

    employee: Employee;

    constructor(public employeeService:EmployeeService) {
        this.employee = new Employee()

    }

    ngOnInit() {
    }
    save()
    {
        console.log(this.employee);
    }


}