import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-mass',
  templateUrl: './select-mass.component.html',
  styleUrls: ['./select-mass.component.scss']
})
export class SelectMassComponent implements OnInit {
  @Input() meteorsMassOptions:any[] = [];
  @Output() massSelected = new EventEmitter<any>();
  selectedValue: string;
  constructor() { }


  log(value): void {
    this.massSelected.emit(value);


  }
  resetMassSelect(): void{

    this.selectedValue = '';
  }

  ngOnInit(): void {
    this.resetMassSelect();
  }

}
