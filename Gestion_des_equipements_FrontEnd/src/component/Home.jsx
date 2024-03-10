import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import equipementService from "../service/equipement.service";

const Home = () => {
    const [equipementList, setEquipementList] = useState([]);
    const [msg, setMsg] = useState("");
    useEffect(() => {
      init();
    }, []);
  
    const init = () => {
      equipementService
        .getAllEquipement()
        .then((res) => {
          setEquipementList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    const deleteEquipement = (id) => {
      equipementService
        .deleteEquipement(id)
        .then((res) => {
          setMsg("Delete Sucessfully");
          init();
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header fs-3 text-center">
                  All Equipement List
                  {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                </div>
  
                <div className="card-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Sl No</th>
                        <th scope="col">Equipement Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {equipementList.map((e, num) => (
                        <tr>
                          <td>{num + 1}</td>
                          <td>{e.equipementName}</td>
                          <td>{e.description}</td>
                          <td>{e.price}</td>
                          <td>{e.quantity}</td>
                          <td>{e.status}</td>
                          <td>
                            <Link to={'editEquipement/'+e.id} className="btn btn-sm btn-primary">
                              Edit
                            </Link>
                            <button
                              onClick={() => deleteEquipement(e.id)}
                              className="btn btn-sm btn-danger ms-1"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
    export default Home;