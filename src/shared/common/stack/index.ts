export class Stack<T> {
    private stack: T[];
  
    constructor() {
      this.stack = [];
    }
  
    // Метод для добавления элемента в стек
    push(item: T): void {
      this.stack.push(item);
    }
  
    // Метод для извлечения элемента из вершины стека
    pop(): T | undefined {
      return this.stack.pop();
    }
  
    // Метод для получения элемента с вершины стека без его удаления
    peek(): T | undefined {
      return this.stack[this.stack.length - 1];
    }
  
    // Метод для проверки, пуст ли стек
    isEmpty(): boolean {
      return this.stack.length === 0;
    }
  
    // Метод для получения размера стека
    size(): number {
      return this.stack.length;
    }
  
    // Метод для очистки стека
    clear(): void {
      this.stack = [];
    }
  }