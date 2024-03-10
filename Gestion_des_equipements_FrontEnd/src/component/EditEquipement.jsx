import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import equipementService from "../service/equipement.service";

const EditEquipement = () => {
  const [equipement, setEquipement] = useState({
    id: "",
    equipementName: "",
    description: "",
    price:"",
    quantity: "",
    status: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [msg, setMsg] = useState("");

  

  const handleChange = (e) => {
    const value = e.target.value;
    setEquipement({ ...equipement, [e.target.name]: value });
  };

  const EquipementUpdate = (e) => {
    e.preventDefault();

    equipementService
      .editEquipement(equipement,id)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Edit Equipement</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => EquipementUpdate(e)}>
                  <div className="mb-3">
                    <label>Enter Equipement Name</label>
                    <input
                      type="text"
                      name="equipementName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={equipement.equipementName}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={equipement.description}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={equipement.price}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={equipement.quantity}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Status</label>
                    <input
                      type="text"
                      name="status"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={equipement.status}
                    />
                  </div>
                  <button className="btn btn-primary col-md-12">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditEquipement;