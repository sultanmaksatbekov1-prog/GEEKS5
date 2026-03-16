import ChildButton from "./components/ChildButton";
import Counter from "./components/Counter";
import FilteredList from "./components/FilteredList";
import SearchInput from "./components/SearchInput";
import UsersList from "./modules/UsersList";

function App() {
  return (
    <div>
      {/* <h2>React</h2> */}
      {/* <Block /> */}
      {/* <UsersList /> */}
      {/* <SearchInput /> */}
      <ChildButton />
      <Counter />
      <FilteredList />
    </div>
  );
}

export default App;
