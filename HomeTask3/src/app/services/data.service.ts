import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'David Servia',
      subject: 'Trabajador de diseñador de esta pagina y CEO de la empresa',
      date: '12/07/1996',
      id: 0,
      
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
