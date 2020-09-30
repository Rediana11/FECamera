
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SimpleComponent } from './simple/simple.component';
import { FullComponent } from './full/full.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [FullComponent, SimpleComponent],
    declarations: [FooterComponent, NavbarComponent, SidebarComponent, FullComponent, SimpleComponent],
    providers: [],
})
export class LayoutModule { }
