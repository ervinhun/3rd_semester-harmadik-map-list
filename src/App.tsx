
function App() {
    const person = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist']
    const listItems = person.map((person, index) => <li key={index}>{person}</li>)
    return (
        <>
            <h1>List of people</h1>
            <ul>{listItems}</ul>
        </>
    )
}

export default App
