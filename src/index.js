import './styles.css';

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';
import { Todo, TodoList } from './classes';	// No se especifica el index.js ya que por defecto js busca este archivo
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript!!');
// todoList.nuevoTodo(tarea);
// crearTodoHtml( tarea );
// console.log(todoList);

// localStorage.setItem('mi-key', 'ABC1234');
// sessionStorage.setItem('mi-key', 'ABC1234');

/*setTimeout(() => {
	localStorage.removeItem('mi-key');
}, 1500);*/

todoList.todos.forEach(todo => { crearTodoHtml(todo) }); // = todoList.todos.forEach(crearTodoHtml); --> De esta forma tambien funciona, pero solo si se reciebe un solo argumento, que es el mismo que se envia como argumento en la funcion interna

const newTodo = new Todo('Aprender JS');
// todoList.nuevoTodo(newTodo);
todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();

console.log('todos', todoList.todos);