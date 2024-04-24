import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LIST_VIEW_ICON, MENU_ICON, OTHER_MENU_ICON, REFRESH_ICON, SEARCH_ICON, SETTING_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-fundoo-header',
  templateUrl: './fundoo-header.component.html',
  styleUrls: ['./fundoo-header.component.scss']
})
export class FundooHeaderComponent implements OnInit {

  isDrawerOpen = false;

  constructor(private domSanitizer:DomSanitizer,private matIconRegistry:MatIconRegistry) { 
    matIconRegistry.addSvgIconLiteral("menu-icon", domSanitizer.bypassSecurityTrustHtml(MENU_ICON)),
    matIconRegistry.addSvgIconLiteral("search-icon", domSanitizer.bypassSecurityTrustHtml(SEARCH_ICON)),
    matIconRegistry.addSvgIconLiteral("refresh-icon", domSanitizer.bypassSecurityTrustHtml(REFRESH_ICON)),
    matIconRegistry.addSvgIconLiteral("setting-icon", domSanitizer.bypassSecurityTrustHtml(SETTING_ICON)),
    matIconRegistry.addSvgIconLiteral("list-view-icon", domSanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON))
    matIconRegistry.addSvgIconLiteral("other-menu-icon", domSanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON))
   }

  ngOnInit(): void {
  }

  toggleDrawer() {
    console.log("toggle drawer");
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
