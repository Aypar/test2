import {NgModule} from '@angular/core';
import {EmployeeComponent} from './employee.component';
import {RouterModule, Routes} from "@angular/router";
import {HumanResourceComponent} from "../human-resource.component";

const routes: Routes = [
    {
        "path": "",
        "component":EmployeeComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ], exports: [
        RouterModule
    ],
    declarations: [EmployeeComponent]
})
export class EmployeeModule {
    constructor() {
    }
}
