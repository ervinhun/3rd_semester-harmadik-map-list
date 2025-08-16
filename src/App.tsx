import './App.css'
import {person} from './data.ts'
import {renderPerson} from "./RenderPerson.tsx";
import {useState} from "react";
import {famousPeople} from "./dataNotScientist.ts";

function App() {

    const [view, setView] = useState<'name' | 'age' | 'profession'>("name")
    const [sortView, setSortView] = useState<'all' | 'scientist' | 'famous'>("all")


    let sortedPeople;
    switch (sortView) {
        case "scientist":
            sortedPeople = [...person];
            break;
        case "famous":
            sortedPeople = [...famousPeople];
            break;
        default:
            sortedPeople = [...person, ...famousPeople];
    }

    let displayedList;
    let title;
    switch (view) {
        case "age":
            displayedList = [...sortedPeople].sort((a, b) =>
                a.age - b.age)
                .map(renderPerson);
            title = "List of people by age";
            break;
        case "profession":
            displayedList = [...sortedPeople].sort((a, b) =>
                a.profession.localeCompare(b.profession))
                .map(renderPerson);
            title = "List of people by profession";
            break;
        default:
            displayedList = [...sortedPeople].sort((a, b) =>
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
            </div>
            <div style={{marginBottom: "1rem"}}>
                <button onClick={() => setSortView("all")}>All</button>
                <button onClick={() => setSortView("scientist")}>Scientist</button>
                <button onClick={() => setSortView("famous")}>Famous</button>
            </div>
        </>
    )
}

export default App
