import { Injectable } from '@angular/core';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
declare var $: any;

@Injectable()
export class DatatransferService {
  appcode: any;
  userid: any;
  logintype: any;
  user_email: any;

  // Old-QA-Server
  // http://13.127.191.27:8080/DaimPMP/pmp/;



  // QA-Server
  Coreappconstant = 'http://13.234.64.82:8080/DICVDISC/core/';
  appconstantpdp = 'http://13.234.64.82:8080/DaimPDP/pdp/';
  appconstant = 'http://13.234.64.82:8080/DICVDISC/disc/';
  appconstantpmp = "http://13.234.64.82:8080/DaimPMP/pmp/";
  appconstantispr = "http://13.234.64.82:8080/DaimISPR/ispr/";
  appconstantpackaging= 'http://13.234.64.82:8080/DaimPackaging/pack/';
  globalurl = "http://dicv-discportal.s3-website.ap-south-1.amazonaws.com/packaging"


 

  // getsession = JSON.parse(localStorage.getItem("sevinvoicesession"));
  constructor() {

  }
  public session: BehaviorSubject<any> = new BehaviorSubject<boolean>(false);
  getsession(value) {
    this.session.next(value);
  }

  showNotification(from, align, msg, type) {

    $.notify({
      icon: 'notifications',
      message: msg

    }, {
        type: type,
        timer: 2000,
        placement: {
          from: from,
          align: align
        }
      });
  }

  // appcode = 'vignesshgmailcom'
  // userid = 'users1';
  // logintype = 'superuser';
  //  getapi(value) {
  //      this.apidetail.next(value);
  //  }
  partid: any;
  setpartid(partid) {
    this.partid = partid;
    console.log(this.partid)
  }
  pmpProjectid = null;
  pmpProjectname = null;
  pmppartid = null;
  pmpStatusProjectid = null;
  pmpStatusProjectName=null;
  devstatusmailteam = [];
  devstatuspartid = [];

}
