import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class MeteorsService {
  apiUrl = 'https://data.nasa.gov/resource/y77d-th95.json';
  meteorsData: any;
  meteorsByYear: any = {};
  meteorsByMass: any = {};
  meteorsByMassArray: any[] = [];
  selectedMass: any;
  constructor(private httpClient: HttpClient ) {
  this.gettingMeteorData();


  }
//  the general function that handles the Api + creating 2 dictionaries-  by year and by mass
  async gettingMeteorData(){
    const data = await this.fetchData();
    return  this.createDictionary(data);


  }
//getting only the year from the string
  getYearFromDate(date): any {
    return new Date(date).getFullYear();
  }
//fatching the data from nasa API
  async fetchData(): Promise<any> {
    try {
      this.meteorsData = await this.httpClient
        .get<any>(this.apiUrl)
        .toPromise();
      return this.meteorsData;
    } catch (error) {
     // await this.handleError(error);
    }
  }
// creating a Dictenorey of meteors sorted by year key and a Dictenorey sorted by mass Key
 private createDictionary(meteorsData) : void{
   meteorsData.forEach((item)=> {
     this.createMeteorsDataObjects(item, this.meteorsByYear, this.getYearFromDate(item.year));
     this.createMeteorsDataObjects(item, this.meteorsByMass, item.mass);
   });
   this.meteorsByMassArray = Object.keys(this.meteorsByMass);
 }

  private createMeteorsDataObjects(item: any,dataObject:any,key:string) {
    if (dataObject[key]) {
      dataObject[key].push(item);
    }
    else {
      dataObject[key] = [item];
    }
  }

 gettingDataFromDictionary(dictionary,key){
    let filteredMeteors = dictionary[key];

    return (filteredMeteors ? filteredMeteors : null);


 }

meteorsMassYearCheck(mass , year){
  let meteorsWithMass = null;
  let meteorsWithMassYear = null;
  meteorsWithMass = this.gettingDataFromDictionary(this.meteorsByMass,mass);
  if(meteorsWithMass === null){
  meteorsWithMassYear = this.gettingDataFromDictionary(meteorsWithMass,year);
  }
  return meteorsWithMassYear;

}



}
