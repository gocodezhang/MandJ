package dev.jayzhang.Backend.Event;

import dev.jayzhang.Backend.Family.Family;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EventRepository extends CrudRepository<Event, Integer> {
    @Query("SELECT e FROM Event e WHERE e.familyEvent = ?1")
    List<Event> findEventsByFamily(Family family);

}
