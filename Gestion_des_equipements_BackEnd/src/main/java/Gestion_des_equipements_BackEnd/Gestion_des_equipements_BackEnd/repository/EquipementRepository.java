package Gestion_des_equipements_BackEnd.Gestion_des_equipements_BackEnd.repository;

import Gestion_des_equipements_BackEnd.Gestion_des_equipements_BackEnd.model.Equipement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquipementRepository extends JpaRepository<Equipement, Long> {
}
