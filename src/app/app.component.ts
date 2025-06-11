import { Component } from '@angular/core';
import {
  DataSet,
  SortEvent,
  ActionEvent,
  ConfigSet,
} from './shared/models/table';
import {  ViewDataSet } from './shared/models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: DataSet[] = [
    {
      id: 1,
      name: 'Aayush Bikram Lamichhane',
      email: 'aayush@example.com',
      age: 23,
      address: 'Kaski, Nepal',
      date: '2025-02-14',
    },
    {
      id: 4,
      name: 'John Cena',
      email: 'john@example.com',
      age: 29,
      address: 'Kathmandu, Nepal',
      date: '2022-04-15',
    },
    {
      id: 3,
      name: 'Mary Jane',
      email: 'jane@example.com',
      age: 21,
      address: 'Chitwan, Nepal',
      date: '2022-04-10',
    },
    {
      id: 5,
      name: 'Micheal Jackson',
      email: 'mj@example.com',
      age: 20,
      address: 'Chitwan, Nepal',
      date: '2020-05-01',
    },
    {
      id: 6,
      name: 'Ayur Adhikari',
      email: 'ayur@example.com',
      age: 24,
      address: 'Nepalgunj, Nepal',
      date: '2020-03-18',
    },
    {
      id: 10,
      name: 'Sagar Khanal',
      email: 'sagar@example.com',
      age: 25,
      address: 'Kawasoti, Nepal',
      date: '2024-06-14',
    },
  ];

  tableConfig: ConfigSet[] = [
    {
      config: {
        customLayer: [
          {
            header: 'S.N.',
            name: 'id',
            sortEnable: true,
            width: '5%',
            usePipe: '',
            dataStyle: {
              type: 'badge',
              styleClass: 'id-field',
            },
          },
          {
            header: 'Name',
            name: 'name',
            sortEnable: true,
            width: '20rem',
            usePipe: 'uppercase',
            dataStyle: {
              type: 'string',
              styleClass: 'name-field',
            },
          },
          {
            header: 'Email',
            name: 'email',
            width: '22rem',
            usePipe: '',
            dataStyle: {
              type: 'string',
              styleClass: 'email-field',
            },
          },
          {
            header: 'Age',
            name: 'age',
            sortEnable: true,
            width: '5%',
            usePipe: '',
            dataStyle: {
              type: 'badge',
              styleClass: 'age-field',
            },
          },
          {
            header: 'Address',
            name: 'address',
            width: '15rem',
            usePipe: '',
            dataStyle: {
              type: 'string',
              styleClass: 'address-field',
            },
          },
          {
            header: 'Date',
            name: 'date',
            sortEnable: true,
            width: '15rem',
            usePipe: '',
            dataStyle: {
              type: 'string',
              styleClass: 'date-field',
            },
          },
          {
            header: 'Actions',
            name: 'action',
            width: '10%',
            usePipe: '',
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
                    icon: '/assets/img/edit.svg',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ];

  viewConfig = {
    customLayer: [
      {
        header: 'Id',
        name: 'id',
        styleClass: 'id-field',
        dataType: 'badge',
        usePipe: '',
      },
      {
        header: 'Name',
        name: 'name',
        styleClass: 'name-field',
        dataType: 'string',
        usePipe: 'uppercase',
      },
      {
        header: 'Email',
        name: 'email',
        styleClass: 'email-field',
        dataType: 'string',
        usePipe: '',
      },
      {
        header: 'Age',
        name: 'age',
        styleClass: 'age-field',
        dataType: 'badge',
        usePipe: '',
      },
      {
        header: 'Address',
        name: 'address',
        styleClass: 'address-field',
        dataType: 'string',
        usePipe: '',
      },
      {
        header: 'Date',
        name: 'date',
        styleClass: 'date-field',
        dataType: 'string',
        usePipe: 'datePipe',
      },
    ],
  };

  viewContent: ViewDataSet = {
    id: 11,
    name: 'Deuba Dai',
    email: 'deuba@example.com',
    age: 27,
    address: 'Dhangadi, Nepal',
    date: '2024-06-20',
  };

  onSort(event: SortEvent) {
    console.log({ name: event?.name, sortOrder: event?.sortOrder });
  }

  onActionReceive(event: ActionEvent) {
    console.log({ type: event?.type, id: event?.id });
  }
}
