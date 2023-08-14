package dev.jayzhang.Backend.User;

import dev.jayzhang.Backend.Family.Family;
import dev.jayzhang.Backend.Family.FamilyController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path="/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FamilyController familyController;

    @GetMapping(path = "/all")
    public Iterable getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping(path = "/{userID}")
    public Optional<User> getUserById(@PathVariable Integer userID) {
        return userRepository.findById(userID);
    }

    @PostMapping
    public String addNewUser(String firstName, String lastName, String profilePhoto, Integer age, String gender, String familyName) {
        Family newFamily = new Family(familyName);
        familyController.addFamily(newFamily);
        User newUser = new User(firstName, lastName, profilePhoto, age, gender, newFamily, newFamily.getId());
        newFamily.addUser(newUser);
        userRepository.save(newUser);
        return "new user is saved";
    }

    @PostMapping(path = "/{familyID}")
    public String addNewUserWithFamily(String firstName, String lastName, String profilePhoto, Integer age, String gender,@PathVariable Integer familyID) {
        Optional<Family> checker = familyController.getFamilyByID(familyID);
        if (checker.isPresent()) {
            Family family = checker.get();
            User newUser = new User(firstName, lastName, profilePhoto, age, gender, family, familyID);
            family.addUser(newUser);
            userRepository.save(newUser);
            return "new user is saved";
        }
        return "the family does not exist";
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

    @PutMapping(path = "/{userID}/userinfo")
    public String updateUserInfo(@PathVariable Integer userID, String firstName, String lastName, String profilePhoto, Integer age, String gender) {
        User user = userRepository.findById(userID).get();
        Optional<String> lnFirstName = Optional.ofNullable(firstName);
        Optional<String> lnLastName = Optional.ofNullable(lastName);
        Optional<String> lnProfilePhoto = Optional.ofNullable(profilePhoto);
        Optional<Integer> lnAge = Optional.ofNullable(age);
        Optional<String> lnGender = Optional.ofNullable(gender);

        if (lnFirstName.isPresent()) {
            user.setFirstName(lnFirstName.get());
        }
        if (lnLastName.isPresent()) {
            user.setLastName(lnLastName.get());
        }
        if (lnProfilePhoto.isPresent()) {
            user.setProfilePhoto(lnProfilePhoto.get());
        }
        if (lnAge.isPresent()) {
            user.setAge(lnAge.get());
        }
        if (lnGender.isPresent()) {
            user.setGender(lnGender.get());
        }
        userRepository.save(user);
        return "the user information is updated";
    }

    @DeleteMapping(path = "/{userID}")
    public String deleteUser(@PathVariable Integer userID) {
        Optional<User> checker = userRepository.findById(userID);
        if (checker.isPresent()) {
            User user = checker.get();
            Family family = user.getFamilyUser();
            userRepository.deleteById(userID);
            family.removeUser(user);

            if (family.getUsers().size() == 0) {
                familyController.deleteFamily(family);
            }

            return "the user is deleted";
        }
        return "the user does not exist";
    }
}
