import { Component } from '@angular/core';
import { SortEvent, TypeEvent } from './shared/models/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users = [
    {
      no: 1,
      name: 'Aayush Bikram Lamichhane',
      email: 'aayush@example.com',
      age: 23,
      address: 'Kaski, Nepal',
      date: '2025-02-14',
    },
    {
      no: 4,
      name: 'John Cena',
      email: 'john@example.com',
      age: 29,
      address: 'Kathmandu, Nepal',
      date: '2022-04-15',
    },
    {
      no: 3,
      name: 'Mary Jane',
      email: 'jane@example.com',
      age: 21,
      address: 'Chitwan, Nepal',
      date: '2022-04-10',
    },
    {
      no: 5,
      name: 'Micheal Jackson',
      email: 'mj@example.com',
      age: 20,
      address: 'Chitwan, Nepal',
      date: '2020-05-01',
    },
    {
      no: 6,
      name: 'Ayur Adhikari',
      email: 'ayur@example.com',
      age: 24,
      address: 'Nepalgunj, Nepal',
      date: '2020-03-18',
    },
    {
      no: 10,
      name: 'Sagar Khanal',
      email: 'sagar@example.com',
      age: 25,
      address: 'Kawasoti, Nepal',
      date: '2024-06-14',
    },
  ];

  tableConfig = [
    {
      header: 'S.N.',
      name: 'no',
      sortEnable: true,
      width: '5%',
    },
    {
      header: 'Name',
      name: 'name',
      sortEnable: true,
      width: '20rem',
    },
    {
      header: 'Email',
      name: 'email',
      width: '22rem',
    },
    {
      header: 'Age',
      name: 'age',
      sortEnable: true,
      width: '5%',
    },
    {
      header: 'Address',
      name: 'address',
      width: '15rem',
    },
    {
      header: 'Date',
      name: 'date',
      sortEnable: true,
      width: '15rem',
    },
    {
      header: 'Actions',
      name: 'action',
      actions: [
        {
          type: 'view',
          icon: '/assets/img/eye.png',
        },
        {
          type: 'menu',
          icon: '/assets/img/menu.svg',
          templateItem: [
            {
              type: 'edit',
              Value: '/assets/img/edit.svg',
            },
          ],
        },
      ],
      width: '10%',
    },
  ];

  onSort(event: SortEvent) {
    console.log({ name: event?.name, sortOrder: event?.sortOrder });
  }

  onActionReceive(event: TypeEvent) {
    console.log({ type: event?.type, id: event?.id });
  }
}
