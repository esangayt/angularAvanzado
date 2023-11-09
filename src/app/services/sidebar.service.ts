import { Injectable } from '@angular/core';

export interface items{
  title: string;
  icon: string;
  subItems: sub_items[];
}

export interface sub_items{
  subTitle: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
   public items: items[] = [
     {
       title: 'Dashboard',
       icon: 'mdi mdi-gauge',
       subItems : [
         { subTitle: 'Main', url: '/' },
         { subTitle: 'ProgressBar', url: 'progress' },
         { subTitle: 'Gráficas', url: 'grafica1' },
      ]
     }
     ]

  constructor() { }
}
