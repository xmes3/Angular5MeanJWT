import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const fadeIn: AnimationEntryMetadata =
    trigger('fadeIn', [
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(-25%'
            }),
            animate('500ms linear',
            style({
                opacity: 1,
                transform: 'translateY(0)'
            }))
        ])
    ]);
