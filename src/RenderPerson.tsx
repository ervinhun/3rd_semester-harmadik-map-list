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
    <img src={getImageUrl(person)} alt={person.name}/>&nbsp;
    <div className="card-text">
        <b>{person.name}</b><br/>
        <span>known for: {person.accomplishment}</span>
    </div>
    </li>
)
}