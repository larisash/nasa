import { Component, OnInit,ViewChild} from '@angular/core';
import { MeteorsService } from '../../services/meteors.service';
import getISOWeek from 'date-fns/getISOWeek';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { SelectMassComponent } from 'src/app/select-mass/select-mass.component';

@Component({
  selector: 'app-meteors-view',
  templateUrl: './meteors-view.component.html',
  styleUrls: ['./meteors-view.component.scss'],
})
export class MeteorsViewComponent implements OnInit{
  allMeteors: any;
  meteorsByYear: any;
  meteorsByMass: any;
  date:any = null;
  dateRange = [];
  isEnglish = false;
  meteorsData: any;
  meteorsPicked:any;
  searchChange$ = new BehaviorSubject('');
  optionList: string[] = [];
  selectedUser?: string;
  isLoading = false;
  massFlag: boolean = false;
  pickedYear: any;
  hasMeteors: boolean;
  @ViewChild(SelectMassComponent) massCmp : SelectMassComponent;




  constructor(private meteorsService : MeteorsService, private i18n: NzI18nService) {
   }
  ngOnInit(): void {
  this.optionList = this.meteorsService.meteorsByMassArray;
  }
  onSearch(value: string): void {

    this.isLoading = true;
    this.searchChange$.next(value);
  }
  onChange(result: Date): void {
    this.pickedYear = this.meteorsService.getYearFromDate(result);
    this.meteorsPicked = this.meteorsService.gettingDataFromDictionary(this.meteorsService.meteorsByYear, this.pickedYear);
    this.massFlag = true;
    this.massCmp.resetMassSelect();
  }
  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }
  onMassSelect(massSelected): void{
   this.meteorsPicked = this.meteorsPicked.filter(meteor => meteor.mass == massSelected);
   if (!this.meteorsPicked[0]){
      this.meteorsPicked = [this.meteorsService.gettingDataFromDictionary(this.meteorsService.meteorsByMass,massSelected)[0]];
      this.pickedYear = this.meteorsService.getYearFromDate(this.meteorsPicked[0].year);
      this.date = new Date(Date.parse(this.pickedYear));

    }





    }

  }


