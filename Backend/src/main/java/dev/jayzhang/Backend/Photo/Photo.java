package dev.jayzhang.Backend.Photo;

import com.fasterxml.jackson.annotation.JsonBackReference;
import dev.jayzhang.Backend.Family.Family;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String url;
    private Timestamp timestamp;
    @ManyToOne
    @JoinColumn(name = "family_id",
            foreignKey = @ForeignKey(name = "FAMILY_PHOTO_ID_FK")
    )
    @JsonBackReference
    private Family familyPhoto;

    public Photo(String url, Timestamp timestamp, Family family) {
        this.url = url;
        this.timestamp = timestamp;
        this.familyPhoto = family;
    }
}
