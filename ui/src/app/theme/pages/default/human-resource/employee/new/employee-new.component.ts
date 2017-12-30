import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Employee} from '../../../../../../_models/employee';
import {EmployeeService} from "../../../../../../_services/employee.service";
import {ActivatedRoute} from "@angular/router";
import {PositionService} from "../../../../../../_services/position.service";
import {DepartmentService} from "../../../../../../_services/department.service";
import {BranchService} from "../../../../../../_services/branch.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Branch} from "../../../../../../_models/branch";
import {Department} from "../../../../../../_models/department";

@Component({
    selector: 'app-employee-new',
    templateUrl: './employee-new.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class EmployeeNewComponent implements OnInit {

    employee: Employee;
    branch: Branch;
    branches: Array<Branch>;
    departments: Array<Department>;
    employees:Array<Employee>;
    department: Department;
    edit_mode: Boolean = false;

    constructor(public employeeService: EmployeeService,
                public positionService: PositionService,
                public departmentService: DepartmentService,
                public branchService: BranchService,
                private modalService: NgbModal,
                private route: ActivatedRoute) {
        this.route.params.subscribe((params) => {
            this.branch = new Branch();
            this.department = new Department();
            this.employee = new Employee();
            this.getBranches();
            this.getDepartments();
            this.getEmployees();

            if (params.id) {
                employeeService.getById(params.id).then((employee: Employee) => {
                    if (!employee) {
                        employee = new Employee();
                    } else {
                        this.edit_mode = true;
                    }
                    this.employee = employee;
                })
            }
        });
    }

    ngOnInit() {
    }
    ngAfterViewInit()
    {
        this.initDatePickers();
    }
    addBranch(branch: Branch) {
        this.branchService.save(branch).then(() => {
            this.branch = new Branch();
            this.getBranches();
        })
    }

    addDepartment(department: Department) {
        this.departmentService.save(department).then(() => {
            this.department = new Department();
            this.getDepartments();
        })
    }

    getDepartments() {
        this.departmentService.list().then((departments: Array<Department>) => {
            this.departments = departments;
        })
    }

    getBranches() {
        this.branchService.list().then((branches: Array<Branch>) => {
            this.branches = branches;
        });
    }
    getEmployees()
    {
        this.employeeService.list().then((employees:Array<Employee>)=>{
            this.employees = employees;
        })
    }

    initDatePickers()
    {
        (<any>$('.basic_date_picker')).datepicker({
            todayHighlight: true,
            orientation: "bottom center",
            templates: {
                leftArrow: '<i class="la la-angle-left"></i>',
                rightArrow: '<i class="la la-angle-right"></i>'
            }
        });
    }
    modalOpen(content) {
        this.modalService.open(content).result.then((result) => {

        }, (reason) => {

        });
    }
}