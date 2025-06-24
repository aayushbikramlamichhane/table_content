import { Component } from '@angular/core';
import {
  DataSet,
  SortEvent,
  ActionEvent,
  ConfigSet,
} from './shared/models/table';
import { ViewConfigSet, ViewDataSet } from './shared/models/card';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cardWrapperComponent = CardWrapperComponent;
  tableWrapperComponent = TableWrapperComponent;

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
            usePipe: 'upperCase',
            dataStyle: {
              type: 'string',
              styleClass: 'name-field',
            },
          },
          {
            header: 'Email',
            name: 'email',
            width: '22rem',
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
            dataStyle: {
              type: 'badge',
              styleClass: 'age-field',
            },
          },
          {
            header: 'Address',
            name: 'address',
            width: '15rem',
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
            usePipe: 'datePipe',
            dataStyle: {
              type: 'string',
              styleClass: 'date-field',
            },
          },
          {
            header: 'Actions',
            name: 'action',
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

  viewConfig: ViewConfigSet = {
    defaultColumn: 2,
    customLayer: [
      {
        key: 'id',
        label: 'Id',
        styleClass: 'special-name-field',
        dataType: 'string',
      },
      {
        key: 'name',
        label: 'Full Name',
        styleClass: 'special-name-field',
        dataType: 'string',
        usePipe: 'upperCase',
      },
      {
        key: 'email',
        label: 'Email',
        styleClass: 'special-email-field',
        dataType: 'string',
        occupySpace: 1,
      },
      {
        key: 'age',
        label: 'Age',
        styleClass: 'special-age-field',
        dataType: 'number',
      },
      {
        key: 'address',
        label: 'Address',
        styleClass: 'special-address-field',
        dataType: 'string',
      },
      {
        key: 'date',
        label: 'Created Date',
        styleClass: 'special-date-field',
        dataType: 'string',
        usePipe: 'datePipe',
      },
      {
        key: 'status',
        label: 'Status',
        styleClass: 'status-name-field',
        dataType: 'object',
        occupySpace: 1,
        getValueFrom: ['name', 'label'],
      },
      {
        key: 'xyz',
        label: 'Xyz',
        styleClass: 'status-name-field',
        dataType: 'object',
        occupySpace: 1,
        getValueFrom: ['name'],
      },
      {
        key: 'pqr',
        label: 'Pqr',
        styleClass: 'status-name-field',
        dataType: 'object',
        occupySpace: 1,
        getValueFrom: ['value'],
      },
    ],
  };

  viewContent: ViewDataSet = {
    id: 11,
    name: 'Dipendra Bahadur Deuba',
    email: 'dipendra.bahadur@deuba.com',
    age: 26,
    address: 'Dhangadi, Nepal',
    date: '2024-06-20',
    status: {
      name: 'Created',
      label: 'Created Label',
    },
    xyz: {
      abc: {
        name: 'aaaaa',
      },
    },
    pqr: {
      abc: {
        value: '123456',
      }
    },
  };

  onSort(event: SortEvent) {
    console.log({ name: event?.name, sortOrder: event?.sortOrder });
  }

  onActionReceive(event: ActionEvent) {
    console.log({ type: event?.type, id: event?.id });
  }
}
