import React, { useEffect, useState } from "react";
import axios from "axios"; //for making api requests

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const userData: User[] = response.data;
        setUsers(userData);
        // console.log(userData, "====>");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong>{" "}
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
