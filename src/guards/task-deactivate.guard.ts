import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IformCandeactivate } from 'src/interfaces/iform-candeactivate';

@Injectable({
  providedIn: 'root'
})
export class TaskDeactivateGuard implements CanDeactivate<IformCandeactivate> {
  canDeactivate(
    component: IformCandeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const form = component.form;
      console.log('form.pristine:', form.dirty);
      if (form.dirty) {
        return confirm('Tem certeza que deseja sair sem salvar as alterações?');
      }
    return true;
  }

}
