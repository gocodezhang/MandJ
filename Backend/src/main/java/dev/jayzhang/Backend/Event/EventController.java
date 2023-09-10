package dev.jayzhang.Backend.Event;

import dev.jayzhang.Backend.Family.Family;
import dev.jayzhang.Backend.Family.FamilyController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.swing.event.InternalFrameEvent;
import java.sql.Timestamp;
import java.util.Optional;

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

    @PutMapping(path = "/{eventID}")
    public String updateEvent(@PathVariable Integer eventID, String name, String[] participants, Timestamp startTime, Timestamp endTime, String location) {
        Event event = eventRepository.findById(eventID).get();
        Optional<String> lnName = Optional.ofNullable(name);
        Optional<String[]> lnParticipants = Optional.ofNullable(participants);
        Optional<Timestamp> lnStartTime = Optional.ofNullable(startTime);
        Optional<Timestamp> lnEndTime = Optional.ofNullable(endTime);
        Optional<String> lnLocation = Optional.ofNullable(location);

        if (lnName.isPresent()) {
            event.setName(lnName.get());
        }
        if (lnParticipants.isPresent()) {
            event.setParticipants(lnParticipants.get());
        }
        if (lnStartTime.isPresent()) {
            event.setStartTime(lnStartTime.get());
        }
        if (lnEndTime.isPresent()) {
            event.setEndTime(lnEndTime.get());
        }
        if (lnLocation.isPresent()) {
            event.setLocation(lnLocation.get());
        }
        eventRepository.save(event);
        return "the event is updated";
    }
    @DeleteMapping(path = "/{eventID}")
    public String deleteEvent(@PathVariable Integer eventID) {
        Event event = eventRepository.findById(eventID).get();
        Family family = event.getFamilyEvent();
        eventRepository.deleteById(eventID);
        family.removeEvent(event);
        return "the event is deleted";
    }

}
