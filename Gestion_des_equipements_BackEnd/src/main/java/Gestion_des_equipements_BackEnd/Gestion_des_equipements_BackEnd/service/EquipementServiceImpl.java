package Gestion_des_equipements_BackEnd.Gestion_des_equipements_BackEnd.service;

import Gestion_des_equipements_BackEnd.Gestion_des_equipements_BackEnd.model.Equipement;
import Gestion_des_equipements_BackEnd.Gestion_des_equipements_BackEnd.repository.EquipementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EquipementServiceImpl {

    @Autowired
    EquipementRepository equipementRepository;
    public List<Equipement> getAllEquipement() {
        return equipementRepository.findAll();
    }

    public Equipement editEquipement(Equipement equipement) {
        return equipementRepository.save(equipement);
    }

    public Equipement saveEquipement(Equipement equipement) {
        return equipementRepository.save(equipement);
    }

    public Equipement getEquipementById(Long id) {
        return equipementRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid equipement Id:" + id));
    }

    public void deleteEquipement(Long id) {
        equipementRepository.deleteById(id);
    }
}
