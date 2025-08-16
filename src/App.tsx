import './App.css'
import {person} from './data.ts'
import {renderPerson} from "./RenderPerson.tsx";

function App() {

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

    const chemists = person.filter((person) => person.profession === 'chemist')
    const listOfChemists =
        chemists.map((person) =>
            renderPerson(person));

    return (
        <>
            <h1>List of people by age</h1>
            <ul>{listItemsAge}</ul>
            <br/>
            <h1>List of people by name</h1>
            <ul>{listItemsName}</ul>
            <br/>
            <h1>List of chemists</h1>
            <ul>{listOfChemists}</ul>
        </>
    )
}

export default App
