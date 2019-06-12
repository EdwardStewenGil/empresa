import { Component, OnInit, HostBinding } from '@angular/core';

import { ConceptosService } from '../../services/conceptos.service';



@Component({
  selector: 'app-concepto-list',
  templateUrl: './concepto-list.component.html',
  styleUrls: ['./concepto-list.component.css']
})
export class ConceptoListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  Conceptos: any = [];

  constructor(private conceptoservice: ConceptosService) { }


  ngOnInit() {
    this.getconcepto();

  }

  getconcepto() {
    this.conceptoservice.getConceptos()
      .subscribe(
        res => {
          this.Conceptos = res;
          
          console.log(res);

        },
        err => console.error(err)
      );
  }

  deleteconcepto(id: string) {
    this.conceptoservice.deleteConcepto(id)
      .subscribe(
        res => {
          console.log(res);
          this.getconcepto();
        },
        err => console.error(err)
      )
  }

}