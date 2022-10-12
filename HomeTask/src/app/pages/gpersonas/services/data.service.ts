import { Injectable } from '@angular/core';

export interface Person {
  name: string;
  apodo: string;
  date: string;
  id: number;
  
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public persons: Person[] = [
    {
      name: 'David Servia',
      apodo: 'ErPepe',
      date: '12/07/1996',
      id: 0,
      
    },
    {
      name: 'Lauren Ruthford',
      apodo: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      
    },
    {
      name: 'Jordan Firth',
      apodo: 'Report Results',
      date: '4:55 AM',
      id: 2,
      
    },
    {
      name: 'Bill Thomas',
      apodo: 'The situation',
      date: 'Yesterday',
      id: 3,
      
    },
    {
      name: 'Joanne Pollan',
      apodo: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      
    },
    {
      name: 'Andrea Cornerston',
      apodo: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      
    },
    {
      name: 'Moe Chamont',
      apodo: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      
    },
    {
      name: 'Kelly Richardson',
      apodo: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      
    }
  ];

  constructor() { }

  public getPersons(): Person[] {
    return this.persons;
  }

  public getPersonById(id: number): Person {
    return this.persons[id];
  }
}
