import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { FetchUsersService } from "../fetch-users.service"



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public userDetails= { id:0, details: [] } 
  public errorMessage

  constructor( private _router: Router, private route: ActivatedRoute, private fetchUsersService: FetchUsersService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'))
      this.userDetails.id = id
    })
    this.fetchUsersService.getUsers().subscribe(
      data => {
        let temp = data.filter(item => Number(item.userId) === Number(this.userDetails.id))
        temp.forEach(item => {
          this.userDetails["details"].push(
            { title: item.title, body: item.body }
          )
        })
      }, 
      error => this.errorMessage = error
    )
  }

  goBack(){
    let selectedId = this.userDetails.id
    this._router.navigate(['/users', {id: selectedId}])    //same as history.push for react and this.$router.push() for vue
  } 
}
