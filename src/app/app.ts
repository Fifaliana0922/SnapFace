import { Component, OnInit } from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';
import { concatMap, delay, exhaustMap, filter, interval, map, mergeMap, Observable, of, switchMap, take, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [Header, RouterOutlet, AsyncPipe],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App{
}
