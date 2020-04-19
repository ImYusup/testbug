import { Component, OnInit} from '@angular/core';
// import { ApiService } from '../../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor() { }

  
  ngOnInit() {

  }
  myFunc(){
    console.log("function called bos!!!");
  }

  // products = [];
  // constructor(private apiService: ApiService) { }
  
  // ngOnInit() {
  //   this.apiService.get().subscribe((data: any[])=>{  
  //     console.log(data);  
  //     this.products = data;  
  //   })  
  // }

}
