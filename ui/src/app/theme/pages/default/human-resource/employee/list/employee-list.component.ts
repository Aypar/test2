import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {ScriptLoaderService} from "../../../../../../_services/script-loader.service";
import {Helpers} from "../../../../../../helpers";
import {EmployeeService} from "../../../../../../_services/employee.service";
import {Employee} from "../../../../../../_models/employee";
import {Router} from "@angular/router";

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class EmployeeListComponent implements OnInit {

    data_table: any;
    employees: Array<Employee>;

    constructor(
                private employeeService: EmployeeService,
                private  elRef: ElementRef,
                private router: Router) {


    }

    async ngOnInit() {

        this.employeeService.list().then((employees: Array<Employee>) => {
            this.employees = employees;
            this.bindDataToTable(employees);
        })


    }

    async ngAfterViewInit() {


    }

    bindDataToTable(data) {

        this.data_table = (<any>$('#employee_data_table')).mDatatable({

            data: {
                type: 'local',
                source: data,

            },
            columns: [
                {
                    title: 'Name',
                    field: 'general_info.name',
                },
                {
                    title: 'Last Name',
                    field: 'general_info.last_name'
                },
                {
                    title: 'Email',
                    field: 'general_info.email'
                },
                {
                    title: 'Work Email',
                    field: 'general_info.work_email'
                },
                {
                    title: 'Phone',
                    field: 'address_info.phone_number'
                },
                {
                    title: 'Actions',
                    field: 'actions',
                    template: (row) => {

                        return `<button data-id="${row._id}" class="btn_edit_employee  btn btn-outline-accent m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill btn-sm"  ng-reflect-href="#">
										<i class="fa fa-edit"></i>
									</button>
									<button data-id="${row._id}" class="btn_remove_employee  btn btn-outline-danger m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill btn-sm"  ng-reflect-href="#">
										<i class="fa fa-trash"></i>
									</button>`
                    }
                }

            ],
            search: {
                input: $('#generalSearch'),
            },
        });

        this.bindEditEvent();
        this.bindRemoveEvent();

    }
    bindEditEvent()
    {
        $(this.elRef.nativeElement).find('.btn_edit_employee').click((click_event)=>{

            let id = $(click_event.currentTarget).data('id');
            console.log(id);
            this.router.navigate(['/human-resource/employee/edit/'+id]);
        });
        this.data_table.on('m-datatable--on-layout-updated', (event) => {

            $(this.elRef.nativeElement).find('.btn_edit_employee').click((click_event)=>{
                let id = $(click_event.currentTarget).data('id');

                this.router.navigate(['/human-resource/employee/edit/'+id]);
            })
        })
    }
    bindRemoveEvent()
    {
        $(this.elRef.nativeElement).find('.btn_remove_employee').click((click_event)=>{

        });
        this.data_table.on('m-datatable--on-layout-updated', (event) => {

            $(this.elRef.nativeElement).find('.btn_remove_employee').click((click_event)=>{


            })
        })
    }

}