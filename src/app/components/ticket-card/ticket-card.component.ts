import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrl: './ticket-card.component.css'
})
export class TicketCardComponent {
  yourInputValue = 'www.tazkty.com/473847';
  constructor(private toastr: ToastrService) {}
  
  
  copyTextToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    
  }
  
  showSuccess() {
    this.toastr.success('Ticked Copied!');
  }
}
