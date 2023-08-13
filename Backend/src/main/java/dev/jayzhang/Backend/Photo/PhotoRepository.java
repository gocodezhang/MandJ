package dev.jayzhang.Backend.Photo;

import dev.jayzhang.Backend.Family.Family;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PhotoRepository extends JpaRepository<Photo, Integer> {
    @Query("SELECT p FROM Photo p WHERE p.familyPhoto = ?1")
    List<Photo> findPhotosByFamily(Family family);
}
