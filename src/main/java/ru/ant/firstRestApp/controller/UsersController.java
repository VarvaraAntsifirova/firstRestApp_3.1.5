package ru.ant.firstRestApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.ant.firstRestApp.model.User;
import ru.ant.firstRestApp.service.UserService;

import java.security.Principal;

@Controller
public class UsersController {

    public final UserService userService;

    @Autowired
    public UsersController(UserService userService) {
        this.userService = userService;
    }
    
    @GetMapping("/user")
    public String showUser(Principal principal, Model model) {
        User user = userService.findByUsername(principal.getName());
        model.addAttribute("user", userService.showUser(user.getId()));
        model.addAttribute("role", user.convertSetOfRoleToString(userService.showUser(user.getId()).getRoles()));
        return "/user";
    }
}
