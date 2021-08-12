import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation,} from '@angular/core';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  @Input('name') name: string;
  @Output() todoComplete = new EventEmitter();

  constructor(private service: TodoService) {
  }

  ngOnInit() {
    this.service.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  markAsChecked(todo) {
    todo.isCompleted = !todo.isCompleted;
    this.todoComplete.emit(todo);
  }
}
