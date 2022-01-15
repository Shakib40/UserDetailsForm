import { useRef, useState } from "react";
import { Div, Form } from "../style-components/UserDetailsForm.Style";
import { nanoid } from "nanoid";

export const UserForm = ({ getFormData }) => {
  const [rawData, setRawData] = useState({});
  const pic_path = useRef();
  const reset = useRef();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setRawData({
      ...rawData,
      [name]: pic_path.current.files.length
        ? URL.createObjectURL(pic_path.current.files[0])
        : value,
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    if (
      rawData.full_name &&
      rawData.age &&
      rawData.address &&
      rawData.department &&
      rawData.profile_pic &&
      rawData.salary
    ) {
      setRawData((p) => (p.id = nanoid()));
      getFormData(rawData);
      handleReset();
      setRawData({ status: true });
      setTimeout(() => {
        setRawData({});
      }, 5000);
    } else {
      setRawData({ ...rawData, status: false });
    }

    // const formData = new FormData();
    // formData.append("formData", rawData);
    // console.log("Form_Data: ", formData.get(formData));
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  return (
    <Div>
      <Form onSubmit={handleSubmission}>
        <input
          ref={reset}
          onChange={changeHandler}
          type="text"
          name="full_name"
          placeholder="Full Name"
        />
        <input
          onChange={changeHandler}
          type="Number"
          name="age"
          placeholder="Age"
        />
        <input
          onChange={changeHandler}
          type="text"
          name="address"
          placeholder="Address"
        />
        <div>
          <select onChange={changeHandler} name="department">
            <option value="">-- Select Department --</option>
            <option value="HR">HR</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Development">Development</option>
          </select>
          <input
            onChange={changeHandler}
            type="Number"
            name="salary"
            placeholder="Salary"
          />
        </div>
        <div>
          <label htmlFor="">Profile Photo: </label>
          <input
            onChange={changeHandler}
            ref={pic_path}
            type="file"
            name="profile_pic"
          />
        </div>
        {rawData.profile_pic !== undefined && rawData.profile_pic !== null ? (
          <img src={rawData.profile_pic} alt="preview" />
        ) : null}
        {rawData.status === true ? (
          <p style={{ color: "green" }}>Submited</p>
        ) : rawData.status === false ? (
          <p style={{ color: "red" }}>Please check deatils</p>
        ) : null}
        <input id="submit_btn" type="submit" value="Submit" />
      </Form>
    </Div>
  );
};
