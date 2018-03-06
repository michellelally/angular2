import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  counter: number =0;
  labelHide = false;

  students: any = [];

  count(){ 
    this.counter++;
}


ngOnInit(){
  this.GetStudentData().subscribe(data => {
    this.students = data.students;
  })
}

constructor (private http:Http){

}

show(){
  if(this.labelHide == true){
    this.labelHide = false
  } 
  else {
    this.labelHide = true; 
  }
}

GetStudentData():Observable<any>{
 return this.http.get("https://jsonblob.com/")
 .map(obs => obs.json());
}


}