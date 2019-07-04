import { Directive, ElementRef, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';
import { UsersService } from '../../users/services/users.service';

@Directive({
  selector: '[appOnlyForAuthUserDirective]'
})
export class OnlyForAuthUserDirectiveDirective{
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UsersService
  ) {
    this.clearNode();
   }

  private clearNode(){
    var currentUser = this.userService.getCurrentUser()
    if(currentUser) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
