package ru.ant.firstRestApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import ru.ant.firstRestApp.model.User;
import ru.ant.firstRestApp.service.UserService;

import java.security.Principal;

@Controller
public class UserController {

    public final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public String pageUser(Principal principal, Model model) {
        User user = userService.findByUsername(principal.getName());
        model.addAttribute("user", user);
        model.addAttribute("role", user.convertSetOfRoleToString(user.getRoles()));
        return "/user";
    }

}
