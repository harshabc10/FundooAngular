import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/dataService/data.service';
import { LIST_VIEW_ICON, MENU_ICON, OTHER_MENU_ICON, REFRESH_ICON, SEARCH_ICON, SETTING_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-fundoo-header',
  templateUrl: './fundoo-header.component.html',
  styleUrls: ['./fundoo-header.component.scss']
})
export class FundooHeaderComponent implements OnInit, OnDestroy {

  isDrawerOpen:boolean = false;
  subscription!:Subscription

  searchString:string=''

  username: string = '' // Replace with actual username
  email: string = ''

  constructor(private domSanitizer:DomSanitizer,private matIconRegistry:MatIconRegistry, private dataService: DataService, private router: Router) { 
    matIconRegistry.addSvgIconLiteral("menu-icon", domSanitizer.bypassSecurityTrustHtml(MENU_ICON)),
    matIconRegistry.addSvgIconLiteral("search-icon", domSanitizer.bypassSecurityTrustHtml(SEARCH_ICON)),
    matIconRegistry.addSvgIconLiteral("refresh-icon", domSanitizer.bypassSecurityTrustHtml(REFRESH_ICON)),
    matIconRegistry.addSvgIconLiteral("setting-icon", domSanitizer.bypassSecurityTrustHtml(SETTING_ICON)),
    matIconRegistry.addSvgIconLiteral("list-view-icon", domSanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON))
    matIconRegistry.addSvgIconLiteral("other-menu-icon", domSanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON))
   }

  ngOnInit(): void {
    this.subscription= this.dataService.currDrawerState.subscribe(result => {
      this.isDrawerOpen = result;
    });
    this.username = localStorage.getItem('userName') || '';
    this.email = localStorage.getItem('email') || '';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }

  HandelToggleDrawer() {
    //console.log("toggle drawer");
    this.dataService.toggleDrawerState(this.isDrawerOpen);
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  handelSerchString(){
    this.dataService.updateSearchString(this.searchString)
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
    
  }
}
