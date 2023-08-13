package dev.jayzhang.Backend.Family;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import dev.jayzhang.Backend.Photo.Photo;
import dev.jayzhang.Backend.User.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Family {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @OneToMany(mappedBy = "familyUser", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<User> users = new ArrayList<>();

    @OneToMany(mappedBy = "familyPhoto", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Photo> photos = new ArrayList<>();

    public Family(String name) {
        this.name = name;
    }

    public void addUser(User user) {
        users.add(user);
    }
    public void removeUser(User user) { users.remove(user); }
    public void addPhoto(Photo photo) { photos.add(photo); }
    public void removePhoto(Photo photo) { photos.remove(photo); }
}
