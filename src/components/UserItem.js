const UserItem = (props)=>(
    <div>
        <li key={props.key}>
            <p>{props.username} is {props.age} years old !</p>
            
        </li>
    </div>

)

export default UserItem;