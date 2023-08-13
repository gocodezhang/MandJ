package dev.jayzhang.Backend.Chat;

import dev.jayzhang.Backend.Family.Family;
import dev.jayzhang.Backend.Family.FamilyController;
import dev.jayzhang.Backend.User.User;
import dev.jayzhang.Backend.User.UserController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping(path = "/{userID}")
    public String addMessage(@PathVariable Integer userID, String text) {
        User user = userController.getUserById(userID).get();
        Family family = user.getFamilyUser();
        Chat chat = new Chat(text, new Timestamp(System.currentTimeMillis()), user, family);
        chatRepository.save(chat);
        return "the message is saved";
    }
    @GetMapping
    public Iterable getMessages(Integer familyID) {
        Family family = familyController.getFamilyByID(familyID).get();
        return chatRepository.findChatsByFamily(family);
    }
}
