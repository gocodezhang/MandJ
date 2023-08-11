package dev.jayzhang.Backend.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.Optional;

@Entity
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

    public User(String firstName, String lastName, String profilePhoto, Integer age, String gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profilePhoto = profilePhoto;
        this.age = age;
        this.gender = gender;
    }

}
