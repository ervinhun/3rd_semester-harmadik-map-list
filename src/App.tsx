import './App.css'
import {person} from './data.ts'
import {renderPerson} from "./RenderPerson.tsx";
import {useState} from "react";

function App() {

    const [view, setView] = useState<'name' | 'age' | 'profession' | 'chemists'>("name")

    //Precompute the list of people by age and name, and chemists
    const listItemsAge = person
        .sort((a, b) =>
            a.age - b.age)
        .map((person) =>
            renderPerson(person));

    const listItemsName = person
        .sort((a, b) =>
            a.name.localeCompare(b.name))
        .map((person) =>
            renderPerson(person));

    const listProfession = person
        .sort((a, b) =>
            a.profession.localeCompare(b.profession))
        .map((person) =>
            renderPerson(person));

    const listOfChemists = person
        .filter((p) => p.profession === "chemist")
        .map((p) =>
            renderPerson(p));


    let displayedList;
    let title;
    switch (view) {
        case "chemists":
            displayedList = listOfChemists;
            title = "List of Chemists";
            break;
        case "age":
            displayedList = listItemsAge;
            title = "List of people by age";
            break;
        case "profession":
            displayedList = listProfession;
            title = "List of people by profession";
            break;
        default:
            displayedList = listItemsName;
            title = "List of people by name";
    }

    return (
        <>
            <h1>{title}</h1>
            <ul>{displayedList}</ul>
            <div style={{marginBottom: "1rem"}}>
                <button onClick={() => setView("name")}>Name</button>
                <button onClick={() => setView("age")}>Age</button>
                <button onClick={() => setView("profession")}>Profession</button>
                <button onClick={() => setView("chemists")}>Chemists</button>
            </div>
        </>
    )
}

export default App
