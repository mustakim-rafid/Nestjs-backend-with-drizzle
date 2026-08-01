import { integer, pgTable, varchar, boolean, timestamp } from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 500 }),
  completed: boolean().notNull().default(false),
  createdAt: timestamp().defaultNow().notNull(),
});