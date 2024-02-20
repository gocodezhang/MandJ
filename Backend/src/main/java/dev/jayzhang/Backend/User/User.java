package dev.jayzhang.Backend.User;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import dev.jayzhang.Backend.Family.Family;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.Optional;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String profilePhoto;
    private Integer age;
    private String gender;
    @JdbcTypeCode(SqlTypes.JSON)
    private Location location;
    private Integer familyID;

    @ManyToOne
    @JoinColumn(name = "family_id",
            foreignKey = @ForeignKey(name = "FAMILY_USER_ID_FK")
    )
    @JsonIgnore
    private Family familyUser;

    public User(String firstName, String lastName, String profilePhoto, Integer age, String gender, Family family, Integer familyID) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profilePhoto = profilePhoto;
        this.age = age;
        this.gender = gender;
        this.familyUser = family;
        this.familyID = familyID;
    }

}
