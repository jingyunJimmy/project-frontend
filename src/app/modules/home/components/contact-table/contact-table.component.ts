import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '@interfaces/data';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss']
})
export class ContactTableComponent implements OnInit {
  @Input() contactType: 'Customer' | 'Supplier' = 'Customer';
  @Input() tableData: Contact[];

  constructor() { }

  ngOnInit(): void {
  }

}
