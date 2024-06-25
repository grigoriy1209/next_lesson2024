import React, {FC} from 'react';

const UsersComponent: FC = async () => {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());

    console.log(users);

    return (
        <div>
            <ul>

                {
                    users.map((user: IUser) => (
                        <li key={user.id}>
                           {user.id}{user.name}
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default UsersComponent;