package Gestion_des_equipements_BackEnd.Gestion_des_equipements_BackEnd.controller;

import Gestion_des_equipements_BackEnd.Gestion_des_equipements_BackEnd.model.Equipement;
import Gestion_des_equipements_BackEnd.Gestion_des_equipements_BackEnd.service.EquipementServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class EquipementController {

    @Autowired
    private EquipementServiceImpl equipementService;

    @GetMapping("/equipements")
    public ResponseEntity<List<Equipement>> getAllEquipement() {
        return new ResponseEntity<>(equipementService.getAllEquipement(), HttpStatus.OK);
    }

    @PostMapping("/equipements")
    public ResponseEntity<?> saveEquipement(@RequestBody Equipement equipement) {
        return new ResponseEntity<>(equipementService.saveEquipement(equipement), HttpStatus.CREATED);
    }


    @GetMapping("/equipements/{id}")
    public ResponseEntity<?> getEquipementById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(equipementService.getEquipementById(id), HttpStatus.OK);
    }

    @DeleteMapping("/deleteEquipement/{id}")
    public void deleteEquipement(@PathVariable("id") Long id) {
        equipementService.deleteEquipement(id);
    }

    @PutMapping("/editEquipement/{id}")
    public ResponseEntity<?> editEquipement(@PathVariable Long id, @RequestBody Equipement equipement) {
        equipement.setId(id);
        return new ResponseEntity<>(equipementService.editEquipement(equipement), HttpStatus.CREATED);
    }

}
