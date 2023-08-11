package dev.jayzhang.Backend.User;

import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(path="/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/all")
    public Iterable getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping(path = "/{userID}")
    public Optional<User> getUserById(@PathVariable Integer userID) {
        return userRepository.findById(userID);
    }

    @PostMapping
    public String addNewUser(String firstName, String lastName, String profilePhoto, Integer age, String gender) {
        User newUser = new User(firstName, lastName, profilePhoto, age, gender);
        userRepository.save(newUser);
        return "new user is saved";
    }

    @PutMapping(path = "/{userID}")
    public String updateLocation(@PathVariable Integer userID, Float longitude, Float latitude) {
        Optional<User> lookUp = userRepository.findById(userID);
        if (lookUp.isPresent()) {
            User user = lookUp.get();
            user.setLocation(new Location(longitude, latitude));
            userRepository.save(user);
            return "location is updated";
        }
        return "user does not exist";
    }

    @DeleteMapping(path = "/{userID}")
    public String deleteUser(@PathVariable Integer userID) {
        userRepository.deleteById(userID);
        return "the user is deleted";
    }
}
