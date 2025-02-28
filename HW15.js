//1. Вам необхідно написати додаток Todo list, використовуючи синтаксис класів. У списку нотаток повинні бути методи для додавання нової нотатки, видалення, редагування та отримання повної інформації про нотатку, а так само отримання списку всіх нотаток. Крім цього, у користувача має бути можливість позначити замітку, як виконану, і отримання інформації про те, скільки всього нотаток у списку і скільки залишилося невиконань. Нотатки не повинні бути порожніми.
/*class TodoItem {
  constructor(title, description) {
    if (!title || !description) {
      throw new Error("Title and description cannot be empty.");
    }
    this.title = title;
    this.description = description;
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
  }

  markAsIncomplete() {
    this.completed = false;
  }

  getInfo() {
    return {
      title: this.title,
      description: this.description,
      completed: this.completed,
    };
  }

  edit(newTitle, newDescription) {
    if (newTitle && newDescription) {
      this.title = newTitle;
      this.description = newDescription;
    } else {
      throw new Error("Both title and description are required for editing.");
    }
  }
}

class TodoList {
  constructor() {
    this.items = [];
  }

  addTodoItem(title, description) {
    try {
      const newItem = new TodoItem(title, description);
      this.items.push(newItem);
    } catch (error) {
      console.error(error.message);
    }
  }

  removeTodoItem(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    } else {
      console.error("Invalid index. Item not found.");
    }
  }

  getTodoList() {
    return this.items.map(item => item.getInfo());
  }

  markItemAsCompleted(index) {
    if (index >= 0 && index < this.items.length) {
      this.items[index].markAsCompleted();
    } else {
      console.error("Invalid index. Item not found.");
    }
  }

  markItemAsIncomplete(index) {
    if (index >= 0 && index < this.items.length) {
      this.items[index].markAsIncomplete();
    } else {
      console.error("Invalid index. Item not found.");
    }
  }

  getStats() {
    const total = this.items.length;
    const remaining = this.items.filter(item => !item.completed).length;
    return {
      total,
      remaining,
    };
  }

  editTodoItem(index, newTitle, newDescription) {
    if (index >= 0 && index < this.items.length) {
      this.items[index].edit(newTitle, newDescription);
    } else {
      console.error("Invalid index. Item not found.");
    }
  }
}




const todoList = new TodoList();


todoList.addTodoItem("Buy groceries", "Need to buy milk, bread, and eggs");
todoList.addTodoItem("Finish homework", "Complete JavaScript assignment");
todoList.addTodoItem("Clean the house", "Vacuum and mop the floors");


console.log("Todo List:", todoList.getTodoList());


todoList.markItemAsCompleted(1);


console.log("Updated Todo List:", todoList.getTodoList());

todoList.editTodoItem(0, "Buy groceries and fruits", "Need to buy milk, bread, eggs, and apples");


console.log("Todo List after editing:", todoList.getTodoList());

todoList.removeTodoItem(2);

console.log("Todo List after removal:", todoList.getTodoList());

console.log("Todo List Stats:", todoList.getStats());
*/


//2. Вам необхідно розширити можливості вашого списку і додати методи для пошуку замітки на ім'я, а також методи для сортування нотаток за статусом (спочатку виконані і навпаки).
/*class TodoItem {
  constructor(title, description) {
    if (!title || !description) {
      throw new Error("Title and description cannot be empty.");
    }
    this.title = title;
    this.description = description;
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
  }

  markAsIncomplete() {
    this.completed = false;
  }

  getInfo() {
    return {
      title: this.title,
      description: this.description,
      completed: this.completed,
    };
  }

  edit(newTitle, newDescription) {
    if (newTitle && newDescription) {
      this.title = newTitle;
      this.description = newDescription;
    } else {
      throw new Error("Both title and description are required for editing.");
    }
  }
}

class TodoList {
  constructor() {
    this.items = [];
  }

  addTodoItem(title, description) {
    try {
      const newItem = new TodoItem(title, description);
      this.items.push(newItem);
    } catch (error) {
      console.error(error.message);
    }
  }

  removeTodoItem(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    } else {
      console.error("Invalid index. Item not found.");
    }
  }

  getTodoList() {
    return this.items.map(item => item.getInfo());
  }

  markItemAsCompleted(index) {
    if (index >= 0 && index < this.items.length) {
      this.items[index].markAsCompleted();
    } else {
      console.error("Invalid index. Item not found.");
    }
  }

  markItemAsIncomplete(index) {
    if (index >= 0 && index < this.items.length) {
      this.items[index].markAsIncomplete();
    } else {
      console.error("Invalid index. Item not found.");
    }
  }

  getStats() {
    const total = this.items.length;
    const remaining = this.items.filter(item => !item.completed).length;
    return {
      total,
      remaining,
    };
  }

  editTodoItem(index, newTitle, newDescription) {
    if (index >= 0 && index < this.items.length) {
      this.items[index].edit(newTitle, newDescription);
    } else {
      console.error("Invalid index. Item not found.");
    }
  }

 
  searchByTitle(searchTerm) {
    return this.items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }


  sortByCompleted() {
    this.items.sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return a.completed ? -1 : 1;
    });
  }

  
  sortByIncomplete() {
    this.items.sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return a.completed ? 1 : -1;
    });
  }
}


const todoList = new TodoList();


todoList.addTodoItem("Buy groceries", "Need to buy milk, bread, and eggs");
todoList.addTodoItem("Finish homework", "Complete JavaScript assignment");
todoList.addTodoItem("Clean the house", "Vacuum and mop the floors");


todoList.markItemAsCompleted(1);


todoList.editTodoItem(0, "Buy groceries and fruits", "Need to buy milk, bread, eggs, and apples");


console.log("Search for 'homework':", todoList.searchByTitle("homework"));


todoList.sortByCompleted();
console.log("Sorted by completed:", todoList.getTodoList());


todoList.sortByIncomplete();
console.log("Sorted by incomplete:", todoList.getTodoList());


console.log("Todo List Stats:", todoList.getStats());
*/



//3. Вам необхідно додати кожній нотатці дату її створення і редагування, а також розширити можливості пошуку і сортування, включивши в них можливість роботи з датою.
class TodoItem {
  constructor(title, description) {
    if (!title || !description) {
      throw new Error("Title and description cannot be empty.");
    }
    this.title = title;
    this.description = description;
    this.completed = false;
    this.createdAt = new Date(); 
    this.editedAt = null; 
  }

  markAsCompleted() {
    this.completed = true;
  }

  markAsIncomplete() {
    this.completed = false;
  }

  getInfo() {
    return {
      title: this.title,
      description: this.description,
      completed: this.completed,
      createdAt: this.createdAt,
      editedAt: this.editedAt,
    };
  }

  edit(newTitle, newDescription) {
    if (newTitle && newDescription) {
      this.title = newTitle;
      this.description = newDescription;
      this.editedAt = new Date(); 
    } else {
      throw new Error("Both title and description are required for editing.");
    }
  }
}

class TodoList {
  constructor() {
    this.items = [];
  }

  addTodoItem(title, description) {
    try {
      const newItem = new TodoItem(title, description);
      this.items.push(newItem);
    } catch (error) {
      console.error(error.message);
    }
  }

  removeTodoItem(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    } else {
      console.error("Invalid index. Item not found.");
    }
  }

  getTodoList() {
    return this.items.map(item => item.getInfo());
  }

  markItemAsCompleted(index) {
    if (index >= 0 && index < this.items.length) {
      this.items[index].markAsCompleted();
    } else {
      console.error("Invalid index. Item not found.");
    }
  }

  markItemAsIncomplete(index) {
    if (index >= 0 && index < this.items.length) {
      this.items[index].markAsIncomplete();
    } else {
      console.error("Invalid index. Item not found.");
    }
  }

  getStats() {
    const total = this.items.length;
    const remaining = this.items.filter(item => !item.completed).length;
    return {
      total,
      remaining,
    };
  }

  editTodoItem(index, newTitle, newDescription) {
    if (index >= 0 && index < this.items.length) {
      this.items[index].edit(newTitle, newDescription);
    } else {
      console.error("Invalid index. Item not found.");
    }
  }

 
  searchByTitle(searchTerm) {
    return this.items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

 
  searchByDate(startDate, endDate) {
    return this.items.filter(item => {
      const createdAt = item.createdAt;
      return createdAt >= startDate && createdAt <= endDate;
    });
  }

  
  sortByCompleted() {
    this.items.sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return a.completed ? -1 : 1;
    });
  }

  
  sortByIncomplete() {
    this.items.sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return a.completed ? 1 : -1;
    });
  }

  
  sortByCreationDate() {
    this.items.sort((a, b) => a.createdAt - b.createdAt);
  }


  sortByEditDate() {
    this.items.sort((a, b) => (a.editedAt ? a.editedAt : a.createdAt) - (b.editedAt ? b.editedAt : b.createdAt));
  }
}


const todoList = new TodoList();


todoList.addTodoItem("Buy groceries", "Need to buy milk, bread, and eggs");
todoList.addTodoItem("Finish homework", "Complete JavaScript assignment");
todoList.addTodoItem("Clean the house", "Vacuum and mop the floors");


todoList.markItemAsCompleted(1);


todoList.editTodoItem(0, "Buy groceries and fruits", "Need to buy milk, bread, eggs, and apples");


console.log("Search for 'homework':", todoList.searchByTitle("homework"));


const startDate = new Date("2023-01-01");
const endDate = new Date("2023-12-31");
console.log("Search by date:", todoList.searchByDate(startDate, endDate));


todoList.sortByCompleted();
console.log("Sorted by completed:", todoList.getTodoList());


todoList.sortByCreationDate();
console.log("Sorted by creation date:", todoList.getTodoList());


todoList.sortByEditDate();
console.log("Sorted by edit date:", todoList.getTodoList());


console.log("Todo List Stats:", todoList.getStats());





