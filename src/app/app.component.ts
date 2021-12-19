import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MultiRow } from '@grapecity/wijmo.grid.multirow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public data = this.getData(5);
  public gridForm = this.fb.group({
    multiRow: [''],
  });
  constructor(private fb: FormBuilder) {}

  public layoutDefinition1 = [
    {
      colspan: 1,
      cells: [{ header: 'Number', binding: 'number' }],
    },
    {
      colspan: 1,
      cells: [{ header: 'Number text', binding: 'numberText' }],
    },
    {
      colspan: 1,
      cells: [{ header: 'Text', binding: 'text' }],
    },
    {
      colspan: 2,
      cells: [
        { header: 'Dummy 1', binding: 'dummy1' },
        { header: 'Dummy 2', binding: 'dummy2' },
        { header: 'Dummy 3', binding: 'dummy3' },
      ],
    },
  ];

  public layoutDefinition2 = [
    {
      colspan: 1,
      cells: [{ header: 'Number', binding: 'number' }],
    },
    {
      colspan: 1,
      cells: [{ header: 'Number text', binding: 'numberText', align: 'right' }],
    },
    {
      colspan: 1,
      cells: [{ header: 'Text', binding: 'text' }],
    },
    {
      colspan: 2,
      cells: [
        { header: 'Dummy 1', binding: 'dummy1' },
        { header: 'Dummy 2', binding: 'dummy2' },
        { header: 'Dummy 3', binding: 'dummy3' },
      ],
    },
  ];

  public layoutDefinition3 = [
    {
      colspan: 1,
      cells: [{ header: 'Number', binding: 'number' }],
    },
    {
      colspan: 1,
      cells: [{ header: 'Number text', binding: 'numberText', cssClass: 'text-right'}],
    },
    {
      colspan: 1,
      cells: [{ header: 'Text', binding: 'text' }],
    },
    {
      colspan: 2,
      cells: [
        { header: 'Dummy 1', binding: 'dummy1' },
        { header: 'Dummy 2', binding: 'dummy2' },
        { header: 'Dummy 3', binding: 'dummy3' },
      ],
    },
  ];
  /**
   * Generate the random data
   */
  public getData(count: number) {
    let dummyText =
      'US,UK,India,China,Greece,Geremany,Japan,Italy,Sanghai'.split(',');
    let data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        number: i,
        numberText: i + '',
        text: dummyText[i % dummyText.length],
        dummy1: '...',
        dummy2: '...',
        dummy3: '...'
      });
    }
    return data;
  }
}
