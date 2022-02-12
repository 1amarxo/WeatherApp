import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconWather'
})
export class IconWatherPipe implements PipeTransform {

  transform(condition: string,isDay:number): string {

    if(isDay==1){
      if(condition=="Cloudy"){

        return "/assets/cloud/35.png";    
 
     }
     if(condition=="Partly cloudy"){
         
       return "/assets/sun/27.png";
    }
    if(condition=="Sunny"||condition=="Clear"){
         
     return "/assets/sun/26.png";
    }
    if(condition=="Shower snow"|| condition=="Moderate or heavy snow showers" || condition=="Heavy shower snow" ||condition=="Snow"||condition=="Heavy snow" ||condition=="Sleet"){
         
     return "assets/cloud/23.png";
    }
    if(condition=="Light shower snow"||condition=="Moderate snow"||condition=="Light snow"  ||condition=="Light snow showers"||condition=="	Light shower sleet"){
         
     return "assets/cloud/18.png";
    }
    if(condition=="Mist"||condition=="Freezing fog" ||condition=="Overcast" ||condition=="Smoke" ||condition=="Haze"||condition=="Fog"){
         
     return "assets/cloud/5.png";
    }
    if(condition=="Сlear sky"){
     return "/assets/sun/26.png";
    }
 
    if(condition=="Light rain"||condition=="Moderate rain"||condition=="Patchy rain possible"){
         
     return "/assets/cloud/7.png";
    }
    if(condition=="Light intensity shower rain"||condition=="Freezing rain" ||condition=="Light freezing rain"||condition=="Heavy intensity rain"||condition=="Very heavy rain"||condition=="Heavy rain"||condition=="Extreme rain"||condition=="Shower rain"){
         
     return "/assets/cloud/5.png";
    }
    }
    else{
      if(condition=="Cloudy"){

        return "/assets/cloud/35.png";    
 
     }
     if(condition=="Partly cloudy"){
         
       return "/assets/moon/27.png";
    }
    if(condition=="Sunny"||condition=="Сlear"){
         
     return "/assets/moon/26.png";
    }
    if(condition=="Shower snow"|| condition=="Moderate or heavy snow showers" || condition=="Heavy shower snow" ||condition=="Snow"||condition=="Heavy snow" ||condition=="Sleet"){
         
     return "assets/cloud/23.png";
    }
    if(condition=="Light shower snow" ||condition=="Light snow" ||condition=="	Light shower sleet"){
         
     return "assets/cloud/18.png";
    }
    if(condition=="Mist"||condition=="Overcast" ||condition=="Smoke" ||condition=="Haze"||condition=="Fog"){
         
     return "assets/cloud/5.png";
    }
    if(condition=="Сlear sky"){
     return "/assets/moon/26.png";
    }
 
    if(condition=="Light rain"||condition=="Moderate rain"||condition=="Patchy rain possible"){
         
     return "/assets/cloud/7.png";
    }
    if(condition=="Light intensity shower rain"||condition=="Freezing rain"||condition=="Heavy intensity rain"||condition=="Very heavy rain"||condition=="Heavy rain"||condition=="Extreme rain"||condition=="Shower rain"){
         
     return "/assets/cloud/5.png";
    }
    }
   
    return '';
  }

}
