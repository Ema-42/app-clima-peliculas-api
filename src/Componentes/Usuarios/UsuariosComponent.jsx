import useFetch from "../hooks/useFetch";

const UsuariosComponent = () => {
  const { data, isLoading, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <>
      <hr />
      <h1>Usuarios Component</h1>
      <h2>Lista de Usuarios</h2>
      {isLoading ? (
        <h4>Cargando...</h4>
      ) : errors ? (
        <p>Ha ocurrido un error: {errors}</p>
      ) : (
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>{user.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UsuariosComponent;
