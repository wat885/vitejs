import { useState } from "react";

type User = {
  fullname: string;
};
const AppFooter = () => {
  //   let company = "typeScript";
  const [company, setCompany] = useState("company");
//   const [user, setUser] = useState<User>({ fullname: "Lung" });
    const [user, setUser] = useState<User | null>(null);

  const isShow = true;

  const showMsg = () => {
    // alert("Hello TypeScript");
    setCompany("React");
    setUser({ fullname: "John Doe" });
  };
  return (
    <>
      {user && <p>User : {user?.fullname}</p>}
      <button onClick={showMsg}>Chick Me!</button>
      <hr />
      <p>create by {company}</p>
      <p>{new Date().getFullYear()}</p>
      {isShow && <p>show</p>}
      {isShow ? <p>true</p> : <p>false</p>}
    </>
  );
};

export default AppFooter;
