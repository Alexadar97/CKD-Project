import { Component, OnInit, Injectable, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebserviceService } from '../services/webservice.service';
import { DatatransferService } from '../services/datatransfer.service'

declare var $

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ExternalloginForm:FormGroup
  InternalloginForm:FormGroup

  constructor(private Formbuilder: FormBuilder, private router: Router, private makeapi: WebserviceService, private getbaseurl: DatatransferService) {
    this.ExternalloginForm = Formbuilder.group({
      'name': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])],
    });
    this.InternalloginForm = Formbuilder.group({
      'shortid': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.external = true
    $('#Extab1').css({
      "box-sizing": "border-box","border-bottom":"3px solid #1665D8"
    })
  }
  external=false
  internal=false
  interexternal(value){
    if(value == "External"){
        this.external = true
        this.internal = false
        $('#Extab1').css({
          "box-sizing": "border-box","border-bottom":"3px solid #1665D8"
        })
        $('#Intab2').css({
          "border-bottom":"none"
        })
    }else if(value == "Internal"){
      $('#Intab2').css({
        "box-sizing": "border-box","border-bottom":"3px solid #1665D8"
      })
      $('#Extab1').css({
        "border-bottom":"none"
      })
        this.internal = true
        this.external = false
       
    }
  }
  externallogin(type){
    if(type == 'external'){
        if(this.ExternalloginForm.invalid){
          this.markFormGroupTouched(this.ExternalloginForm);
          return false;
        }else{
            this.login(type)
        }
    }else if(type == 'internal'){
    if(this.InternalloginForm.invalid){
          this.markFormGroupTouched(this.InternalloginForm);
          return false;
        }else{
          this.login(type)
        }
    }
  }
  login(type) {
    if(type == 'external'){
      var getdata = this.ExternalloginForm.value;
      var username = getdata.name;
      var password = getdata.password;
     }else if(type == 'internal'){
      var getdata = this.InternalloginForm.value;
      var username = getdata.shortid;
      var password = getdata.password;
     }

  if(username == "admin" &&  password == "admin123"){
    this.router.navigateByUrl('/dashboard/quality');
      console.log(username)
    }
    // else{
    //   this.errormsg = "Invalid Username or Password"
    // }
  }
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
