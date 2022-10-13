import { Injectable } from '@angular/core';

export interface Person {
  name: string;
  apodo: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public persons: Person[] = [
    {
      name: 'David Servia',
      apodo: 'ErPepe',
      date: 'https://i.postimg.cc/NKt1ZGFp/brad-pitt.jpg',
      id: 0,
      read: true
    },
    {
      name: 'Lauren Ruthford',
      apodo: 'Long time no chat',
      date: 'https://i.postimg.cc/wtTDTWhN/emma.jpg',
      id: 1,
      read: true
    },
    {
      name: 'Jordan Firth',
      apodo: 'Report Results',
      date: 'https://i.postimg.cc/phm8KpcX/will.jpg',
      id: 2,
      read: true
    },
    {
      name: 'Bill Thomas',
      apodo: 'The situation',
      date: 'https://i.postimg.cc/2qchq4wK/tyson.jpg',
      id: 3,
      read: true
    },
    {
      name: 'Joanne Pollan',
      apodo: 'Updated invitation: Swim lessons',
      date: 'https://i.postimg.cc/9DBG23qV/lola.jpg',
      id: 4,
      read: true
    },
   
  ];

  constructor() { }

  public getPersons(): Person[] {
    return this.persons;
  }

  public getPersonById(id: number): Person {
    return this.persons[id];
  }
}
