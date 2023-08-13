package dev.jayzhang.Backend.Event;

import dev.jayzhang.Backend.Family.Family;
import dev.jayzhang.Backend.Family.FamilyController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;

@RestController
@RequestMapping(path = "/event")
public class EventController {
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private FamilyController familyController;
    @PostMapping(path = "{familyID}")
    public String addEvent(@PathVariable Integer familyID, String name, String[] participants, Timestamp startTime, Timestamp endTime, String location) {
        Family family = familyController.getFamilyByID(familyID).get();
        Event event = new Event(name, participants, startTime, endTime, location, family);
        family.addEvent(event);
        eventRepository.save(event);
        return "the event is saved";
    }
    @GetMapping(path = "{familyID}")
    public Iterable getEvents(@PathVariable Integer familyID) {
        Family family = familyController.getFamilyByID(familyID).get();
        return eventRepository.findEventsByFamily(family);
    }
    @DeleteMapping(path = "{eventID}")
    public String deleteEvent(@PathVariable Integer eventID) {
        Event event = eventRepository.findById(eventID).get();
        Family family = event.getFamilyEvent();
        eventRepository.deleteById(eventID);
        family.removeEvent(event);
        return "the event is deleted";
    }

}
