import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent   {

  titleCity: string='';
  @Output() submited: EventEmitter<string> = new EventEmitter<string>() ;
  
  onSubmitClick():void{
    if(this.titleCity!=undefined && this.titleCity)
    {
      this.submited.emit(this.titleCity);
    }
  }

 

}
