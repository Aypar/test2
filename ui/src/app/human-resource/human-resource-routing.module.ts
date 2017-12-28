import {HumanResourceComponent} from './human-resource.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "../auth/_guards/auth.guard";
import {NgModule} from "@angular/core";

const routes: Routes = [{
    "path":"hr",
    "component":HumanResourceComponent,
    //"canActivate":[AuthGuard],
    "children":[{
        "path":"employees",
        "loadChildren":".\/employee\/employee.module#EmployeeModule"
    }]

}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HumanResourceRoutingModule {}