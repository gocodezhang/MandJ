package dev.jayzhang.Backend.Chat;

import dev.jayzhang.Backend.Family.Family;
import dev.jayzhang.Backend.Family.FamilyController;
import dev.jayzhang.Backend.User.User;
import dev.jayzhang.Backend.User.UserController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.sql.Timestamp;

@RestController
@RequestMapping(path = "/chat")
public class ChatController {
    @Autowired
    private ChatRepository chatRepository;
    @Autowired
    private UserController userController;
    @Autowired
    private FamilyController familyController;
    @Autowired
    private SimpMessagingTemplate template;

    @PostMapping(path = "/{userID}")
    public void addMessage(@PathVariable Integer userID, String text) {
        User user = userController.getUserById(userID).get();
        Family family = user.getFamilyUser();
        Integer familyID = family.getId();
        Chat chat = new Chat(text, new Timestamp(System.currentTimeMillis()), user, family);
        chatRepository.save(chat);

        template.convertAndSend("/familyChat/" + familyID,chat);
    }
    @GetMapping(path = "/{familyID}")
    public Iterable getMessages(@PathVariable Integer familyID) {
        Family family = familyController.getFamilyByID(familyID).get();
        return chatRepository.findChatsByFamily(family);
    }
}
