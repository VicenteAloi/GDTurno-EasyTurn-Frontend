import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any){
    const resultPosts = [];
    for(const post of value){
      if(post.name.toLowerCase().indexOf(args.toLowerCase()) > -1){
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }

}
