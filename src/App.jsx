
import Counter from "./components/Counter";
import ShoppingCart from "./components/ShoppingCart";
import PasswordForm from "./components/PasswordForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <main className="container">
      <h1>React useState Homework</h1>

      <Counter />
      <ShoppingCart />
      <PasswordForm />
      <TodoList />
    </main>
  );
}

export default App;
