import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  encapsulation: ViewEncapsulation.None, 
})
export class TicketListComponent implements OnInit{

  isMobile = false;

  tickets = [
    { number: 'C-101', value: '$40', user: 'أحمد محمود', persons: 1, purchases: 'مرة واحدة', seat: 'سينما مصر', img: '../../../assets/avatars/Image-1.png', ticket: 'تذكرة رقم 45.pdf'},
    { number: 'C-102', value: '$30', user: 'محمد العرب', persons: 1, purchases: 'مرة واحدة', seat: 'سينما مصر', img: '../../../assets/avatars/Image-1.png', ticket: 'تذكرة رقم 46.pdf'},
    { number: 'C-103', value: '$50', user: 'امجد محمود', persons: 1, purchases: 'مرة واحدة', seat: 'مول العرب', img: '../../../assets/avatars/Image-1.png', ticket: 'تذكرة رقم 47.pdf'},
    { number: 'C-104', value: '$95', user: 'محمد سعيد', persons: 1, purchases: 'مرة واحدة', seat: ' وسط البلد', img: '../../../assets/avatars/Image-1.png', ticket: 'تذكرة رقم 48.pdf'},
    { number: 'C-105', value: '$95', user: 'محمد محمود', persons: 1, purchases: 'مرة واحدة', seat: ' وسط البلد', img: '../../../assets/avatars/Image-1.png', ticket: 'تذكرة رقم 49.pdf'},
    { number: 'C-106', value: '$30', user: 'ماجداحمد', persons: 1, purchases: 'مرة واحدة', seat: ' جالاكسي', img: '../../../assets/avatars/Image-1.png', ticket: 'تذكرة رقم 50.pdf'},
    { number: 'C-107', value: '$40', user: 'مريم جمال', persons: 1, purchases: 'مرة واحدة', seat: 'سينما مصر', img: '../../../assets/avatars/Image-1.png', ticket: 'تذكرة رقم 51.pdf'},
  ];

  checked: boolean = false;
  searchQuery = '';
  filteredTickets = [...this.tickets];
  text = `{ "text": "This is text file! }`;
  fileName?: string;
  options: any = {
    autoBom: false,
  };

  constructor(
    private fileSaverService: FileSaverService
  ) {}

  downloadFile() {
    const file = new Blob(['Your file content here'], { type: 'text/plain' });
    this.fileSaverService.save(file, 'file.txt', 'text/plain');
  }

    ngOnInit() {
       if (window.innerWidth <= 768) {
       this.isMobile = true;
      }
    }
    
    onSearchQueryChange() {
       console.log('Search query changed:', this.searchQuery);
       this.filteredTickets = this.tickets.filter(ticket => {
      return (
        ticket.number.includes(this.searchQuery) ||
        ticket.value.includes(this.searchQuery) ||
        ticket.user.includes(this.searchQuery)
      );
    });
  }
}

