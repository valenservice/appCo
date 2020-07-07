import { NgModule } from "@angular/core";
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
    declarations: [
        NopagefoundComponent,        
        HeaderComponent,        
        SidebarComponent,
        BreadcrumsComponent
    ],
    exports: [
        NopagefoundComponent,        
        HeaderComponent,        
        SidebarComponent,
        BreadcrumsComponent
    ]    
})
export class SharedModule { }
