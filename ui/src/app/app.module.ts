import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { HumanResourceRoutingModule } from "./human-resource/human-resource-routing.module";
import { AuthModule } from "./auth/auth.module";
import { HumanResourceComponent } from './human-resource/human-resource.component';

@NgModule({
    declarations: [
      //  ThemeComponent,
        AppComponent,
       HumanResourceComponent,
    ],
    imports: [
     //   LayoutModule,
         BrowserModule,
         BrowserAnimationsModule,
         AppRoutingModule,
     //   ThemeRoutingModule,
        HumanResourceRoutingModule,
    //    AuthModule,
    ],
    providers: [ScriptLoaderService],
    bootstrap: [AppComponent]
})
export class AppModule { }