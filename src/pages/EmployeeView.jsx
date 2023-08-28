import { useEffect, useState } from "react";

const EmployeeView = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/employees/${id}`;
    const controller = new AbortController();

    const requestOptions = {
      signal: controller.signal,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    setLoading(true);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setEmployee(json);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h2>Employee View</h2>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <p>
            <label>
              First Name <strong>{employee.first_name}</strong>
            </label>
          </p>
          <p>
            <label>
              Last Name <strong>{employee.last_name}</strong>
            </label>
          </p>
          <p>
            <label>
              Email <strong>{employee.email}</strong>
            </label>
          </p>

          <p>
            <Link to={"/"}>Back to List</Link>
          </p>
        </>
      )}
    </>
  );
};

export default EmployeeView;
