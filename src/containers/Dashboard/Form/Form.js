import React from "react";

const Form = props => {
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <select id="inputState" className="form-control">
              <option selected>{props.asset_index[0][1]}</option>
              {props.asset_index.map(index => (
                <option>{index[1]}</option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-6">
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
