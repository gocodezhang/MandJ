package dev.jayzhang.Backend.Event;

import com.fasterxml.jackson.annotation.JsonBackReference;
import dev.jayzhang.Backend.Family.Family;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String[] participants;
    private Timestamp startTime;
    private Timestamp endTime;
    private String location;

    @ManyToOne
    @JoinColumn(name = "family_id",
            foreignKey = @ForeignKey(name = "FAMILY_EVENT_ID_FK")
    )
    @JsonBackReference
    private Family familyEvent;

    public Event(String name, String[] participants, Timestamp startTime, Timestamp endTime, String location, Family family) {
        this.name = name;
        this.participants = participants;
        this.startTime = startTime;
        this.endTime = endTime;
        this.location = location;
        this.familyEvent = family;
    }


}
