/**
 * Created by ryan on 2/2/16.
 */

import {Component, Input} from 'angular2/core';

@Component({
    selector: 'sub-component',
    template: `<h2>derp</h2>
    <ul class="unstyled">
      <li *ngFor="#todo of todos">
        <input type="checkbox" [(ngModel)]="todo.done">
        <span class="done-{{todo.done}}">{{todo.text}}</span>
      </li>
    </ul>`
})

export class SubComponent {
    @Input() todos: Todo[];
}

export var TestString: Test = "i'm not actually an array!";
export var derpstring: derptest = "i'm another string";
