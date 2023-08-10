package dev.jayzhang.Backend.Family;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/family")
public class FamilyController {

    private FamilyRepository familyRepository;


}
