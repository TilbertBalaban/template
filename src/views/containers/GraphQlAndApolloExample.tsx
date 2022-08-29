import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../graphql/query';
import { CREATE_USER } from '../../graphql/mutation';

interface IUser {
  id: number;
  username: string;
  age: number;
}

export const GraphQlAndApolloExample = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_USERS);
  const [newUser] = useMutation(CREATE_USER);
  const [users, setUsers] = useState<IUser[]>([]);
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  const addUser = () => {
    newUser({
      variables: {
        input: {
          username,
          age,
        },
      },
    }).then(() => {
      setUsername('');
      setAge(0);
    });
  };
  const getAll = () => {
    refetch();
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <form>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <input
          value={age}
          onChange={(e) => setAge(+e.target.value)}
          type="number"
        />
        <div className="btns">
          <button type="button" onClick={addUser}>
            Create
          </button>
          <button type="button" onClick={getAll}>
            Get
          </button>
        </div>
      </form>
      <div>
        {users.map((user) => (
          <div className="user">
            {user.id}. {user.username} {user.age}
          </div>
        ))}
      </div>
    </div>
  );
};
