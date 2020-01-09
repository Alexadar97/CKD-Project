import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebserviceService } from '../../services/webservice.service';
import { DatatransferService } from '../../services/datatransfer.service';
import { AuthGuard } from '../../services/canactivate.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
ngOnInit(){

}
}
