package dev.jayzhang.Backend.Photo;

import dev.jayzhang.Backend.Family.Family;
import dev.jayzhang.Backend.Family.FamilyController;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;

@RestController
@RequestMapping(path = "/photo")
public class PhotoController {
    @Autowired
    private PhotoRepository photoRepository;
    @Autowired
    private FamilyController familyController;
    @PostMapping(path = "/{familyID}")
    public String addPhoto(@PathVariable Integer familyID, String url) {
        Family family = familyController.getFamilyByID(familyID).get();
        Photo photo = new Photo(url, new Timestamp(System.currentTimeMillis()), family);
        photoRepository.save(photo);
        return "the photo is saved";
    }

    @GetMapping(path = "/{familyID}")
    public Iterable getPhotos(@PathVariable Integer familyID) {

    }
}
