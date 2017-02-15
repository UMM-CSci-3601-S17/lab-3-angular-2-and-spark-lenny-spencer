/*import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }         from './app/app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HomeComponent} from './app/home/home.component';
import { KittensComponent }   from './app/kittens/kittens.component';
import { UserListComponent } from './app/users/user-list.component';
import { UserListService } from './app/users/user-list.service';
import { TodoListService } from './app/todos/todo-list.service';
import {TodoListComponent } from './app/todos/todo-list.component';

import { routing } from './app/app.routes';
//import {FormsModule} from '@angular/forms';
import {FilterBy} from './app/users/filter.pipe';
import { FormsModule } from '@angular/forms';

import { PipeModule } from './pipe.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing,
        FormsModule,
        PipeModule
    ],
    declarations: [
        AppComponent,
        KittensComponent,
        HomeComponent,
        NavbarComponent,
        UserListComponent,
        TodoListComponent
    ],
    providers: [ UserListService, TodoListService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {} */

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }         from './app/app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HomeComponent} from './app/home/home.component';
import { KittensComponent }   from './app/kittens/kittens.component';
import { UserListComponent } from './app/users/user-list.component';
import { TodoListComponent } from './app/todos/todo-list.component';
import { routing } from './app/app.routes';
import {FormsModule} from '@angular/forms';
import {FilterBy} from './app/users/filter.pipe';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing,
        FormsModule
    ],
    declarations: [
        AppComponent,
        KittensComponent,
        HomeComponent,
        NavbarComponent,
        UserListComponent,
        TodoListComponent,
        FilterBy
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
