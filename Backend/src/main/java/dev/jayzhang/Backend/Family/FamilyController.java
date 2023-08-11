package dev.jayzhang.Backend.Family;

import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path="/family")
public class FamilyController {

    @Autowired
    private FamilyRepository familyRepository;

    @GetMapping(path = "/{familyID}")
    public Optional<Family> getFamilyByID(@PathVariable Integer familyID) {
        return familyRepository.findById(familyID);
    }

    @PutMapping(path = "/{familyID}")
    public String updateFamily(@PathVariable Integer familyID, String name) {
        Optional<Family> checker = familyRepository.findById(familyID);
        if (checker.isPresent()) {
            Family family = checker.get();
            family.setName(name);
            familyRepository.save(family);
            return "the family is now updated";
        }
        return "the family does not exist";
    }

    @PostMapping
    public String addFamily(String name) {
        Family newFamily = new Family(name);
        familyRepository.save(newFamily);
        return "new family added";
    }

    public void addFamily(Family family) {
        familyRepository.save(family);
    }

    public void deleteFamily(Family family) {
        familyRepository.delete(family);
    }

    @DeleteMapping(path = "/{familyID}")
    public String deleteFamily(@PathVariable Integer familyID) {
        familyRepository.deleteById(familyID);
        return "the family is deleted";
    }
}
