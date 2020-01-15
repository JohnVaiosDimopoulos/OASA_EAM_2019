import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AuthService} from '../../auth/auth.service';
import UserCredential = firebase.auth.UserCredential;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, public auth: AuthService) { }

  User: UserCredential = null;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  CloseModal() {
    this.modalRef.hide();
  }

  printUser(){
    console.log(this.auth.CurrentUser);
  }



  ngOnInit() {
    this.auth.CurU.subscribe( (res: UserCredential) => {
      this.User = res;
    });
  }

  ngOnDestroy(): void {
    this.auth.CurU.unsubscribe();
  }

}
