import { useEffect, useState } from "react";
const FetchData = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    let fetData = async () => {
      try {
        let response = await fetch("https://api.github.com/users");
        const users = await response.json();
        setValue(users);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetData();
  }, []);
  return (
    <div>
      <section>
        <h3>Github users : </h3>
        <ul className="users">
          {value.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h5>{login}</h5>
                  <a href={html_url}></a>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
export default FetchData;
