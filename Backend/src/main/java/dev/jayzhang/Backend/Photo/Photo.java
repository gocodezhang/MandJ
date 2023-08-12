package dev.jayzhang.Backend.Photo;

import dev.jayzhang.Backend.Family.Family;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Photo {
    private Integer id;
    private String url;
    private Timestamp timestamp;
    @ManyToOne
    @JoinColumn(name = "family_id",
            foreignKey = @ForeignKey(name = "FAMILY_ID_FK")
    )
    private Family familyPhoto;

    public Photo(String url, Timestamp timestamp, Family family) {
        this.url = url;
        this.timestamp = timestamp;
        this.familyPhoto = family;
    }
}
