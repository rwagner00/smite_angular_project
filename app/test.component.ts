/**
 * Created by ryan on 2/2/16.
 */
import {Component} from 'angular2/core';
import {SubComponent} from './subcomponent.ts'
import {TestString} from './subcomponent.ts'
import {derpstring} from "./subcomponent";

@Component({
    selector: 'test-app',
    template: `<h1>this is a test {{foostring}}</h1>
        <sub-component [todos]="todos">foobar?</sub-component>
    `,
    directives: [SubComponent]
})

export class TestComponent {
    foostring = TestString;
    derpstring2 = derpstring;
    todos: Todo[] = [
        {text:'learn angular', done:true},
        {text:'build an angular app', done:false}
    ];
}
