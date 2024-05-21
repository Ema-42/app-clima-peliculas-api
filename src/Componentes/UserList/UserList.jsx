import { useFetchData } from "../hooks/useFetchData";

const UserList = ({ endPoint }) => {
  const { data, isLoading } = useFetchData(endPoint);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {endPoint === "users" ? (
              <>
                <th>Username</th>
                <th>Email</th>
                <th>City</th>
                <th>Phone</th>
              </>
            ) : (
              <th>Cuerpo</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              {/* cuando se usa && no se necesita else */}
              {endPoint === "users" && (
                <>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.address?.city}</td>
                  <td>{item.phone}</td>
                </>
              )}
              {endPoint !== "users" && <td>{item.body}</td>}
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Como lista: </h3>
      <ul>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          data.map((item) => (
            <li key={item.id}>
              Nombre: {item.name}{" "}
              {endPoint === "users" ? "Ubicacion:" : "Cuerpo:"}{" "}
              {endPoint === "users" ? item.address?.city : item.body}
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default UserList;
