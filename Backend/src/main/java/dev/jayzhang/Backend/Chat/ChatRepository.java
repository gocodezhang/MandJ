package dev.jayzhang.Backend.Chat;

import dev.jayzhang.Backend.Family.Family;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ChatRepository extends CrudRepository<Chat, Integer> {
    @Query("SELECT c FROM Chat c WHERE c.familyChat = 1?")
    List<Chat> findChatsByFamily(Family family);

}
