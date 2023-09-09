export default function Team({person}) {
    console.log(person);
    return (
        <div>
            <h1>Id:{person.id}</h1>
            <h3>Name:{person.name}</h3>
            <h2>Age:{person.age}</h2>
            <hr />
        </div>
    )
}