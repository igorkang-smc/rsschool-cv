import './List.css';
export default function ({items}) {
    return(
        <ul>
            {items.map((item) => (
                <li key={item.field}>
                    <span>{item.field}: </span>
                    {item.value}
                </li>
            ))}
        </ul>
    )
}