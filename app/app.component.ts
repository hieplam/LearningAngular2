import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',//pm stand for Project Management
    template: `
        <div><h1>{{pageTitle}}</h1>
            <pm-product></pm-product>
        </div>
    `
    // templateUrl: 'products/product-list.component'
})
export class AppComponent {
    pageTitle: string = "Demo Angular";
}