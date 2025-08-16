import './App.css'
import {person} from './data.ts'
import {renderPerson} from "./RenderPerson.tsx";
import {useState} from "react";
import {famousPeople} from "./dataNotScientist.ts";

function App() {

    const [view, setView] = useState<'name' | 'age' | 'profession'>("name")
    const [sortView, setSortView] = useState<'all' | 'scientist' | 'famous'>("all")

    const allPeople =
        [...person.map(p =>
        ({...p, group: "s" as const})),
            ...famousPeople.map (p => ({...p, group: "f" as const}))];


    let sortedPeople;
    switch (sortView) {
        case "scientist":
            sortedPeople = allPeople.filter(p => p.group === "s");
            break;
        case "famous":
            sortedPeople = allPeople.filter(p => p.group === "f");
            break;
        default:
            sortedPeople = allPeople
    }

    let displayedList;
    switch (view) {
        case "age":
            displayedList = [...sortedPeople].sort((a, b) =>
                a.age - b.age)
                .map(renderPerson);
            break;
        case "profession":
            displayedList = [...sortedPeople].sort((a, b) =>
                a.profession.localeCompare(b.profession))
                .map(renderPerson);
            break;
        default:
            displayedList = [...sortedPeople].sort((a, b) =>
                a.name.localeCompare(b.name))
                .map(renderPerson);
    }

    const title = `List of ${sortView == "scientist" ? "scientist" : (sortView+" people")} by ${view}`;

    return (
        <>
            <h1>{title}</h1>
            <ul>{displayedList}</ul>
            <div style={{marginBottom: "1rem"}}>
                Sort by: &nbsp;
                <button
                    className={view === "name" ? "active-btn" : "button"}
                    onClick={() => setView("name")}>Name</button>
                <button
                    className={view === "age" ? "active-btn" : "button"}
                    onClick={() => setView("age")}>Age</button>
                <button
                    className={view === "profession" ? "active-btn" : "button"}
                    onClick={() => setView("profession")}>Profession</button>
            </div>
            <div style={{marginBottom: "1rem"}}>
                Filter by: &nbsp;
                <button
                    className={sortView === "all" ? "active-btn" : "button"}
                    onClick={() => setSortView("all")}>All</button>
                <button
                    className={sortView === "scientist" ? "active-btn" : "button"}
                    onClick={() => setSortView("scientist")}>Scientist</button>
                <button
                    className={sortView === "famous" ? "active-btn" : "button"}
                    onClick={() => setSortView("famous")}>Famous</button>
            </div>
            <div>
                <input
                    type="text"
                    name="proba"
                    onChange={(e) => console.log(e.target.value)}/>
                <input type="date" name="date" onChange={(e) => console.log("Date: " + e.target.value)} />
            </div>

        </>
    )
}

export default App
