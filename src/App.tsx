import './App.css'
import {person} from './data.ts'
import {renderPerson} from "./RenderPerson.tsx";
import {useState} from "react";

function App() {

    const [view, setView] = useState<'name' | 'age' | 'profession' | 'chemists'>("name")

    let displayedList;
    let title;
    switch (view) {
        case "chemists":
            displayedList = [...person].filter(p =>
                p.profession === "chemist").map(renderPerson);
            title = "List of Chemists";
            break;
        case "age":
            displayedList = [...person].sort((a, b) =>
                a.age - b.age)
                .map(renderPerson);
            title = "List of people by age";
            break;
        case "profession":
            displayedList = [...person].sort((a, b) =>
                a.profession.localeCompare(b.profession))
                .map(renderPerson);
            title = "List of people by profession";
            break;
        default:
            displayedList = [...person].sort((a, b) =>
            a.name.localeCompare(b.name))
                .map(renderPerson);
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
