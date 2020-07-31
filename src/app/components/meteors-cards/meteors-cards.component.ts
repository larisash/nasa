import { Component, OnInit, Input } from '@angular/core';
import { MeteorsService } from '../../services/meteors.service';
@Component({
  selector: 'app-meteors-cards',
  templateUrl: './meteors-cards.component.html',
  styleUrls: ['./meteors-cards.component.scss']
})
export class MeteorsCardsComponent implements OnInit {
  @Input() meteors:any[] = [];
  constructor(private meteorsService : MeteorsService) { }

  ngOnInit(): void {

  }
  getYear(date){
    return this.meteorsService.getYearFromDate(date);

  }

}
