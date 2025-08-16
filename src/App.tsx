function App() {
    const person = [
        {
            id: 0,
            name: 'Creola Katherine Johnson',
            age: 31,
            profession: 'mathematician'
        },
        {
            id: 1,
            name: 'Mario José Molina-Pasquel Henríquez',
            age: 28,
            profession: 'chemist'
        },
        {
            id: 2,
            name: 'Mohammad Abdus Salam',
            age: 25,
            profession: 'physicist'
        },
        {
            id: 3,
            name: 'Percy Lavon Julian',
            age: 29,
            profession: 'chemist'
        },
        {
            id: 4,
            name: 'Subrahmanyan Chandrasekhar',
            age: 43,
            profession: 'astrophysicist'
        }]
    const listItems = person.map((person) =>
        <li key={person.id}>{person.name} ({person.age}): {person.profession}</li>)

    const chemists = person.filter((person) => person.profession === 'chemist')
    const listOfChemists = chemists.map((person) => <li key={person.id}>{person.name}</li>)
    return (
        <>
            <h1>List of people</h1>
            <ul>{listItems}</ul>
            <br />
            <h1>List of chemists</h1>
            <ul>{listOfChemists}</ul>
        </>
    )
}

export default App
