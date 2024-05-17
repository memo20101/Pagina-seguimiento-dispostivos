import { Pipe, PipeTransform } from '@angular/core';
import { dispositivo } from 'src/app/model/dispositivo';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(dispositivos: dispositivo [], search: string =''): dispositivo [] {
    const filtered=dispositivos.filter(dispositivo =>dispositivo.id_pos.includes( search ))
    return filtered;
  }

}
