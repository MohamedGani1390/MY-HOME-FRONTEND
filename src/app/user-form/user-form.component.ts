import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user-service.service';
import { User } from '../model/user';
import { FormControl, FormGroup } from '@angular/forms';
 
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
 
  user: User;

  form = new FormGroup({
    date: new FormControl(new Date()),
    noOfPockets: new FormControl(0)
  });
  
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService) {
    this.user = new User();
  }
 
  onSubmit() {
    this.user = this.form.value;
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }
 
  gotoUserList() {
    this.router.navigate(['/details']);
  }
}