import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class EmployeeListComponent implements OnInit {

    constructor(private  modalService:NgbModal) {
    }

    ngOnInit() {
    }

    modalOpen(content) {
        let ngbModalOptions: NgbModalOptions = {
            backdrop : 'static',
            keyboard : false,
            size:'lg'
        };
        this.modalService.open(content,ngbModalOptions).result.then((result) => {

        }, (reason) => {

        });
    }

}