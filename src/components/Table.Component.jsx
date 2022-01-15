import { useState } from "react";
import { UserForm } from "./UserDetailsForm.Component";
import { TableList } from "./TableList.Component";
import { Div } from "../style-components/Table.Style";
import { Filter } from "./Filter.Component";

export const Table = () => {
  const [userData, setUserData] = useState([]);

  const getFormData = (data) => {
    setUserData([...userData, data]);
    console.log("From Parrent: ", data);
  };

  const deleteData = (id) => {
    setUserData(userData.filter((el) => el.id !== id));
  };

  const filterData = (data) => {
    let temp;
    if (data?.department) {
      temp = userData.filter((el) => el.department === data.department);
    }
    if (data?.salary) {
      if (data.salary === "High-Low") {
        temp.sort(function (a, b) {
          if (a.salary > b.salary) return 1;
          if (a.salary < b.salary) return -1;
          return 0;
        });
      } else {
        temp.sort(function (a, b) {
          if (a.salary < b.salary) return 1;
          if (a.salary > b.salary) return -1;
          return 0;
        });
      }
    }
    setUserData(temp);
  };

  return (
    <Div>
      <UserForm getFormData={getFormData} />
      <Filter filterData={filterData} />
      <TableList data={userData} filterData={deleteData} />
    </Div>
  );
};
