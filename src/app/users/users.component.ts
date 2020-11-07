import { Component, OnInit } from '@angular/core';
import { FetchUsersService } from '../fetch-users.service'
import { Router, ActivatedRoute, ParamMap } from "@angular/router"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users = []
  
  public errorMessage = ""
  public selectedId; 
   

  constructor( private _fetchUserService: FetchUsersService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')) 
      this.selectedId = id
    })
 
    this._fetchUserService.getUsers().subscribe(data => this.users = data,
                                              error => this.errorMessage = error )
  }
  onSelect(userId){
    this.router.navigate(['/user',userId])
  } 

  isSelected(userId){
    return userId === this.selectedId
  }
    

} 
