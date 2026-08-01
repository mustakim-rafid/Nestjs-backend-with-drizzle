import { Body, Controller, Post, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post("/todo")
  async createTodo(@Body() body: { title: string, description: string }) {
    const todo = await this.todoService.createTodo(body);
    if (!todo) {
        console.log("Todo not found")
        return
    }
    return todo;
  }

  @Get("/todo")
  async getAllTodos() {
    const todos = await this.todoService.getAllTodos();
    return todos;
  }
}
