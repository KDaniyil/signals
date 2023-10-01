import { Component, computed, signal, effect } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-signals',
    templateUrl: './signals.component.html',
    styleUrls: ['./signals.component.css'],
    standalone: true,
    imports: [NgFor],
})
export class SignalsComponent {
    actions = signal<string[]>([]);
    counter = signal(0);
    doubleCounter = computed(() => this.counter() * 2);

    constructor() {
        effect(() => console.log(this.counter()));
    }

    increment() {
        this.counter.update((oldCounter) => oldCounter + 1);
        this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
    }

    decrement() {
        this.counter.update((oldCount) => oldCount - 1);
        this.actions.mutate((oldActions) => oldActions.push('DECREMENT'));
        //this.actions.update((oldVal) => [...oldVal, 'DECREMENT']);
        //this.actions.push('DECREMENT');
    }
}
