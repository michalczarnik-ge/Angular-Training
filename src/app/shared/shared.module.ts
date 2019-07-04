import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { MyDatePipe } from './pipes/my-date.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { StorageService } from './services/storage.service';
import { ErrorComponent } from './components/error/error.component';
import { OnlyForAuthUserDirectiveDirective } from './directives/only-for-auth-user-directive.directive';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [HighlightDirective, MyDatePipe, LoaderComponent, ErrorComponent, OnlyForAuthUserDirectiveDirective, PopupComponent],
  exports: [HighlightDirective, MyDatePipe, LoaderComponent, ErrorComponent, OnlyForAuthUserDirectiveDirective, PopupComponent ],
  imports: [
    CommonModule,
  ], 
  providers: [StorageService]
})
export class SharedModule { }
