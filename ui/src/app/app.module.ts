import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ThemeComponent} from './theme/theme.component';
import {LayoutModule} from './theme/layouts/layout.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ScriptLoaderService} from "./_services/script-loader.service";
import {ThemeRoutingModule} from "./theme/theme-routing.module";
import {AuthModule} from "./auth/auth.module";
import {EmployeeService} from "./_services/employee.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DepartmentService} from "./_services/department.service";
import {BranchService} from "./_services/branch.service";
import {PositionService} from "./_services/position.service";


@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent,

    ],
    imports: [
        LayoutModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ThemeRoutingModule,
        AuthModule,
    ],
    providers: [
        ScriptLoaderService,
        EmployeeService,
        DepartmentService,
        BranchService,
        PositionService,
        HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule {
}