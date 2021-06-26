import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = useState([
        { id: 101, name: "Poltu", department: "Software Engineering", batch: "25th" },
        { id: 102, name: "Boltu", department: "Software Engineering", batch: "24th" },
        { id: 103, name: "Moti", department: "Software Engineering", batch: "23th" },
    ]);

    return (
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
}

