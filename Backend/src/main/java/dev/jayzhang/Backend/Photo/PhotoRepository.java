package dev.jayzhang.Backend.Photo;

import dev.jayzhang.Backend.Family.Family;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PhotoRepository extends CrudRepository<Photo, Integer> {
    @Query("select p from Photo p where p.familyPhoto = ?1")
    List<Photo> findPhotosByFamily(Family family);
}
