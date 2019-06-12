import { ConceptosService } from './../../services/conceptos.service';
import { Concepto } from './../../models/Concepto';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-concepto-form',
  templateUrl: './concepto-form.component.html',
  styleUrls: ['./concepto-form.component.css']
})
export class ConceptoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  concepto: Concepto = {
    id_concepto: 0,
    concepto_desc: '',
 
};

edit: boolean = false;

  constructor( private conceptoservice : ConceptosService, private router: Router, private  activedRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activedRoute.snapshot.params;
    console.log(params)
    if (params.id){
    
      this.conceptoservice.getConcepto(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.concepto = res;
          this.edit = true;
        },
        err => console.error(err)
      ) 
    }
  }

  saveNewConcepto(){
  
    this.conceptoservice.saveConcepto(this.concepto)
    .subscribe(
      res => {
      console.log(res);
      this.router.navigate(['/concepto']);
      },
      err => console.error(err)
    )
  }
  

  updateConcepto(){
 
    this.conceptoservice.updateConcepto(this.concepto.id_concepto,this.concepto)
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/concepto']);
      },
      err => console.error(err)
    )
    
  }

}