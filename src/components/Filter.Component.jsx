import { useState, useRef } from "react";
import { Div } from "../style-components/Filter.Style";

export const Filter = ({ filterData }) => {
  const [rawData, setRawData] = useState({});
  let HL = useRef();
  let LH = useRef();
  let DP = useRef();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setRawData({
      ...rawData,
      [name]: value,
    });
  };

  const handleClear = () => {
    HL.current.checked = false;
    LH.current.checked = false;
    DP.current.selected = true;
    console.log(DP);
    setRawData({});
  };

  if (Object.keys(rawData).length > 0) filterData(rawData);

  console.log(Object.keys(rawData).length);
  return (
    <>
      <Div>
        <p>Apply filter</p>
        <div>
          <label htmlFor="">Department</label>
          <select onChange={changeHandler} name="department">
            <option value="" ref={DP}>
              -- select --
            </option>
            <option value="HR">HR</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="">Development</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Salary</label>
          <div>
            <label htmlFor="">High-Low</label>
            <input
              onChange={changeHandler}
              name="salary"
              value="High-Low"
              ref={HL}
              onClick={(e) => {
                LH.current.checked = false;
              }}
              type="checkbox"
            />
            <label htmlFor="">Low-High</label>
            <input
              onChange={changeHandler}
              name="salary"
              value="Low-High"
              ref={LH}
              onClick={(e) => {
                HL.current.checked = false;
              }}
              type="checkbox"
            />
          </div>
        </div>
        <div>
          <button onClick={handleClear}>Clear All</button>
        </div>
      </Div>
    </>
  );
};
