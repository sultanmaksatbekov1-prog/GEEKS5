import React, { useState, useMemo, useCallback } from "react";

const FilteredList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Alex" },
  ]);

  const [search, setSearch] = useState("");

  console.log("FilteredList render");

  const filteredUsers = useMemo(() => {
    console.log("Фильтрация пользователей");

    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  const addUser = useCallback(() => {
    console.log("Добавление пользователя");

    setUsers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "User " + prev.length,
      },
    ]);
  }, []);

  return (
    <div>
      <h2>Список пользователей</h2>

      <input
        type="text"
        placeholder="Поиск"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={addUser}>Добавить пользователя</button>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
