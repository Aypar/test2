import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from "../../../default.component";
import {LayoutModule} from "../../../../../layouts/layout.module";
import {EmployeeNewComponent} from "./employee-new.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from '@angular/forms';


const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': EmployeeNewComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,
        NgbModule.forRoot(),
        FormsModule
    ], exports: [
        RouterModule,
    ], declarations: [
        EmployeeNewComponent,
    ],
})
export class EmployeeNewModule {
}