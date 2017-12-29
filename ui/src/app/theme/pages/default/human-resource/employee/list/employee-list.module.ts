import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import {EmployeeListComponent} from "./employee-list.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DefaultComponent} from "../../../default.component";
import {LayoutModule} from "../../../../../layouts/layout.module";


const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': EmployeeListComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes),
        LayoutModule,
        NgbModule.forRoot(),
    ], exports: [
        RouterModule,
    ], declarations: [
        EmployeeListComponent,
    ],
})
export class EmployeeListModule {
}