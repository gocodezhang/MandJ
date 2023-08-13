package dev.jayzhang.Backend.Chat;

import dev.jayzhang.Backend.Family.Family;
import dev.jayzhang.Backend.User.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String text;
    private Timestamp createdAt;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id",
        foreignKey = @ForeignKey(name = "USER_CHAT_ID_FK")
    )
    @JoinColumn(name = "user_name", referencedColumnName = "firstName")
    private User user;
    @ManyToOne
    @JoinColumn(
            name = "family_id",
            foreignKey = @ForeignKey(name = "FAMILY_CHAT_ID_FK")
    )
    private Family familyChat;
    public Chat(String text, Timestamp createdAt, User user, Family family) {
        this.text = text;
        this.createdAt = createdAt;
        this.user = user;
        this.familyChat = family;
    }
}
