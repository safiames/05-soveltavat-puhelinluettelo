import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "123-456-7890" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const isNameAlreadyAdded = persons.some(
      (person) => person.name === newName
    );
    const isNumberAlreadyAdded = persons.some(
      (person) => person.number === newNumber
    );

    if (isNameAlreadyAdded || isNumberAlreadyAdded) {
      alert(`${newName} or ${newNumber} is already added.`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
