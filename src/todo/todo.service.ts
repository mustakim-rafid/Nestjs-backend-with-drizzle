import { Injectable } from '@nestjs/common';
import { db } from 'src/db';
import { todosTable } from 'src/db/schema';

@Injectable()
export class TodoService {
  async createTodo(data: { title: string, description: string }) {
    const todo = await db.insert(todosTable).values({
        title: data.title,
        description: data.description
    }).returning()

    return todo[0];
  }

  async getAllTodos() {
    const todos = await db.select().from(todosTable)

    return todos;
  }
}
