import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { Todo } from "./todo";
import { TodoListComponent } from "./todo-list.component";
import { TodoListService } from "./todo-list.service";
import { Observable } from "rxjs";
import { PipeModule } from "../../pipe.module";

describe("Todo list", () => {

    let todoList: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;

    let todoListServiceStub: {
        getTodos: () => Observable<Todo[]>
    };

    beforeEach(() => {
        // stub TodoService for test purposes
        todoListServiceStub = {
            getTodos: () => Observable.of([
                {
                    _id: "DisplayTodos_ID",
                    status: "complete",
                    owner: "Nic",
                    category: "Software D",
                    body: "Display returned todos in a useful way"
                },
                {
                    _id: "???_id",
                    status: "incomplete",
                    owner: "Joe",
                    category: "Writing",
                    body: "I don't know what this means????"
                },
                {
                    _id: "profit_id",
                    status: "complete",
                    owner: "KK",
                    category: "Software D",
                    body: "Profit, work at google"
                }
            ])
        };

        TestBed.configureTestingModule({
            imports: [PipeModule],
            declarations: [ TodoListComponent ],
            // providers:    [ TodoListService ]  // NO! Don't provide the real service!
            // Provide a test-double instead
            providers:    [ { provide: TodoListService, useValue: todoListServiceStub } ]
        })
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(TodoListComponent);
            todoList = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));

    it("contains all the todos", () => {
        expect(todoList.todos.length).toBe(3);
    });

    it("contains a todo named 'DisplayTodos_ID'", () => {
        expect(todoList.todos.some((todo: Todo) => todo._id === "DisplayTodos_ID" )).toBe(true);
    });

    it("contain a todo named ???_id", () => {
        expect(todoList.todos.some((todo: Todo) => todo._id === "???_id" )).toBe(true);
    });

    it("doesn't contain a todo named 'Shawn'", () => {
        expect(todoList.todos.some((todo: Todo) => todo._id === "Shawn" )).toBe(false);
    });

    it("has two todos that in the software D catagory", () => {
        expect(todoList.todos.filter((todo: Todo) => todo.category === "Software D").length).toBe(2);
    });

});