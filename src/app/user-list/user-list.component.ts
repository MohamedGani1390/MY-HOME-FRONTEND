import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  users: User[];
 
  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private userService: UserService) {
  }
 
  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  delete(id) 
  {
    this.userService.delete(id).subscribe(result => this.gotoUserList());
    
  }

  
  gotoUserList() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    //this.router.navigate(['/details']);
  }
}