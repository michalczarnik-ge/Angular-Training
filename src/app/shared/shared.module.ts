import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { MyDatePipe } from './pipes/my-date.pipe';

@NgModule({
  declarations: [HighlightDirective, MyDatePipe],
  exports: [HighlightDirective, MyDatePipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
