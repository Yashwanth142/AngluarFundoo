import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], ...args: any[]){
    if(!args){
      return value;
      }
      return value?.filter((note:any)=>{
        return note?.title.includes(args) || note?.description.includes(args)
      })
    }

}
