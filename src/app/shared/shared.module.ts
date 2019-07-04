import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { MyDatePipe } from './pipes/my-date.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { StorageService } from './services/storage.service';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [HighlightDirective, MyDatePipe, LoaderComponent, ErrorComponent],
  exports: [HighlightDirective, MyDatePipe, LoaderComponent, ErrorComponent ],
  imports: [
    CommonModule
  ], 
  providers: [StorageService]
})
export class SharedModule { }
