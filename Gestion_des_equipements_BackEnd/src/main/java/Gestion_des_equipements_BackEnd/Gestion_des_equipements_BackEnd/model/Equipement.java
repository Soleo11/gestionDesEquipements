package Gestion_des_equipements_BackEnd.Gestion_des_equipements_BackEnd.model;

import jakarta.persistence.*;
import lombok.*;

@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name ="equipement")
public class Equipement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String equipementName;

    private String description;

    private Double price;

    private Double quantity;

    private String status;
}
