import { Div } from "../style-components/TableList.Style";

export const TableList = ({ data, deleteData }) => {
  console.log("hi", data);

  const handleDelete = (e) => {
    deleteData(e.target.id);
  };

  return (
    <>
      <Div>
        <div>
          <p>Full Name</p>
          <p>Age</p>
          <p>Address</p>
          <p>Department</p>
          <p>Salary</p>
          <p>Profile Pic</p>
          <p>Action</p>
        </div>
        {data.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.full_name}</p>
              <p>{user.age}</p>
              <p>{user.address}</p>
              <p>{user.department}</p>
              <p>{user.salary}</p>
              <img src={user.profile_pic} alt="" />
              <button id={user.id} onClick={handleDelete}>
                Delete
              </button>
            </div>
          );
        })}
      </Div>
    </>
  );
};
