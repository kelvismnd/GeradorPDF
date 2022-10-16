import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-pdf-creator',
  templateUrl: './pdf-creator.component.html',
  styleUrls: ['./pdf-creator.component.css']
})
export class PdfCreatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('content',{static:false}) elemento!:ElementRef;

  printSimplePDF(){
    const pdf = new jsPDF('p','pt','a4');
    pdf.html(this.elemento.nativeElement,{
      callback:(pdf)=>{
        pdf.save("gtaNFE.pdf");
      }
    })
  }

}
