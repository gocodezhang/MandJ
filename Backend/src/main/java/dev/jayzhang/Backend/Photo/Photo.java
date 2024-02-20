package dev.jayzhang.Backend.Photo;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import dev.jayzhang.Backend.Family.Family;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
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
    @JsonIgnore
    private Family familyPhoto;

    public Photo(String url, Timestamp timestamp, Family family) {
        this.url = url;
        this.timestamp = timestamp;
        this.familyPhoto = family;
    }
}
