import { Component, OnInit, Injectable, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { WebserviceService } from '../services/webservice.service';
import { DatatransferService } from '../services/datatransfer.service'

declare var $;

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.css']
})
export class QualityComponent implements OnInit {
  qualityForm:FormGroup
  constructor(private Formbuilder: FormBuilder, private router: Router, private makeapi: WebserviceService,
     private getbaseurl: DatatransferService) {
      
      this.qualityForm = Formbuilder.group({
        'rpnumber': [null, Validators.compose([Validators.required])],
        'rpclassificaiton': [null, Validators.compose([Validators.required])],
        'actiontoken': [null, Validators.compose([Validators.required])],
        'pmclassification': [null, Validators.compose([Validators.required])],
        'priority': [null, Validators.compose([Validators.required])],
        'claimcode': [null, Validators.compose([Validators.required])],
        'partno': [null, Validators.compose([Validators.required])],
        'subpartno': [null, Validators.compose([Validators.required])],
        'partname': [null, Validators.compose([Validators.required])],
        'date': [null, Validators.compose([Validators.required])],
        'quality': [null, Validators.compose([Validators.required])],
        'cmaction': [null, Validators.compose([Validators.required])],
        'where': [null, Validators.compose([Validators.required])],
        'whichstage': [null, Validators.compose([Validators.required])],
        'problem': [null, Validators.compose([Validators.required])],
        'pscase': [null, Validators.compose([Validators.required])],
        'judgement': [null, Validators.compose([Validators.required])],
        'note': [null, Validators.compose([Validators.required])],
        'reftype': [null, Validators.compose([Validators.required])],
        'refno': [null, Validators.compose([Validators.required])],
        'description': [null, Validators.compose([Validators.required])],
        'remarks': [null, Validators.compose([Validators.required])],
        'subpartdetailsForm': this.Formbuilder.array([this.subpartdetailsformvalue()]),
      });

   }
  ngOnInit() {
    // this.addRow()
    this.firstnext = true
    this.sectnext=false
    this.lasttnext=false
    $('#col1').css({
      "box-sizing": "border-box","border-bottom":"3px solid #242536"
    })
  }
  firstnext=false
  sectnext=false
  lasttnext=false
  next1(){
    this.firstnext = false
    this.sectnext=true
    this.lasttnext=false
    $('#col2').css({
      "box-sizing": "border-box","border-bottom":"3px solid #242536"
    })
  }
  next2(){
    this.firstnext = false
    this.sectnext=false
    this.lasttnext=true
    $('#col3').css({
      "box-sizing": "border-box","border-bottom":"3px solid #242536"
    })  }
  back1(){
    this.firstnext = true
    this.sectnext=false
    this.lasttnext=false
    $('#col2').css({
      "box-sizing": "border-box","border-bottom":"1px solid #979797"
    })
  }
  back2(){
    this.firstnext = false
    this.sectnext=true
    this.lasttnext=false
    $('#col3').css({
      "box-sizing": "border-box","border-bottom":"1px solid #979797"
    })
  }
  get subpartdetailsdetails() {
     return <FormArray>this.qualityForm.get('subpartdetailsForm') 
}
  subpartdetailsForm:FormArray
  addRow(): void {
    this.subpartdetailsForm = this.qualityForm.get('subpartdetailsForm') as FormArray;
    this.subpartdetailsForm.push(this.subpartdetailsformvalue());
  }
  subpartdetailsformvalue(): FormGroup {
    return this.Formbuilder.group({
      "subpartno": [null, Validators.compose([Validators.required])],
      "subpartname": [null, Validators.compose([Validators.required])],
      "quality":[null, Validators.compose([Validators.required])],
      "description": [null, Validators.compose([Validators.required])],
    });
  }

  deleteRow(rowNumber) {
    this.subpartdetailsForm = this.qualityForm.get('subpartdetailsForm') as FormArray;
    this.subpartdetailsForm.removeAt(rowNumber);
  }

  // file upload

  filename = '';
  finallfile: any;
  uploadfile(event) {

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {

      var file: File = fileList[0];
      var finalfilename = (file.name).split(".");
      // this.filename = finalfilename[0];
      this.finallfile = file;
      this.filename = this.finallfile.name

    }
  }
  @ViewChild('uploadFile') uploadFile: any;

  cancleUpload() {
    this.uploadFile.nativeElement.value = "";
    this.filename = ""
  }
}
