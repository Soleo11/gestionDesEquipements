import axios from "axios";

const API_URL = "http://localhost:8080";

class EquipementService {

saveEquipement(equipement) {
return axios.post(API_URL+"/equipements",equipement);
}
getAllEquipement() {
    return axios.get(API_URL + "/equipements");
}

getEquipementtById(id) {
    return axios.get(API_URL + "/equipements/" + id);
}

deleteEquipement(id) {
    return axios.delete(API_URL + "/deleteEquipement/" + id);
}

editEquipement(equipement,id) {
    return axios.put(API_URL + "/editEquipement/" + id,equipement);
}



}
export default new EquipementService();