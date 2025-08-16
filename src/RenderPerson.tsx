import {getImageUrl} from './Photo.ts'
export function renderPerson(person: {
    id?: number;
    name?: string;
    age?: number;
    profession?: string;
    accomplishment?: string;
    imageId: string;
}) {
    return (
        <li key={person.id} className={"people-list"}>
    <img src={getImageUrl(person)} alt={person.name} className="photo"/>&nbsp;
    <div className="card-text">
        <b>{person.name}</b> ({person.age}): {person.profession}<br/>
        <span>known for: {person.accomplishment}</span>
    </div>
    </li>
)
}