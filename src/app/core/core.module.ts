import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, SearchPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent, SearchPanelComponent]
})
export class CoreModule { }
