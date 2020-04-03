import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CookieService } from 'ngx-cookie-service';
import { ManageCatagoriesComponent } from './manage-catagories/manage-catagories.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ManagePlaylistsComponent, DeletesModalContent } from './manage-playlists/manage-playlists.component';
import { ManageSongsComponent,NgbdModalContent, DeleteModalContent } from './manage-songs/manage-songs.component';
import { HttpClientModule } from '@angular/common/http';
import {FooterAdminComponent} from './footer-admin/footer-admin.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FileSelectDirective } from 'ng2-file-upload';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


const appRoutes: Routes = [
  {
    path      : '',
    component: AdminLoginComponent
  },
  {
    path      : 'home',
    component: AdminHomeComponent
  },
  {
    path:'managecatagories',
    component: ManageCatagoriesComponent
  },
  {
    path:'manageplaylists',
    component: ManagePlaylistsComponent
  },
  {
    path:'managesongs',
    component: ManageSongsComponent
  },
  {
    path:'adminlogin',
    component: AdminLoginComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    ManageCatagoriesComponent,
    HeaderAdminComponent,
    ManagePlaylistsComponent,
    ManageSongsComponent,
    NgbdModalContent,
    DeleteModalContent,
    DeletesModalContent,
    FooterAdminComponent,
    FileSelectDirective
    ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,  
    FormsModule, 
    Ng2SearchPipeModule,
    NgbModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:"danger"
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalContent,DeleteModalContent,DeletesModalContent,]
})
export class AppModule { }
