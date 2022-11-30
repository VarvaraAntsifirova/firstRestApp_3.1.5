package ru.ant.firstRestApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.ant.firstRestApp.model.User;
import ru.ant.firstRestApp.service.RoleService;
import ru.ant.firstRestApp.service.UserService;

import java.security.Principal;

@Controller
@RequestMapping("/admin")
public class AdminController {

    private final UserService userService;

    private final RoleService roleService;

    @Autowired
    public AdminController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping()
    public String showAdminGeneralPage(Principal principal, Model model) {
        User user = userService.findByUsername(principal.getName());
        model.addAttribute("admin", userService.showUser(user.getId()));
        model.addAttribute("listOfUsers", userService.getAllUsers());
        model.addAttribute("personalRole", user.convertSetOfRoleToString(userService.showUser(user.getId()).getRoles()));
        model.addAttribute("roles", roleService.getAllRoles());
        return "/viewsForAdmin/adminGeneralPage";
    }

    @GetMapping("/personalPage")
    public String showAdminPersonalPage(Principal principal, Model model) {
        User user = userService.findByUsername(principal.getName());
        model.addAttribute("admin", userService.showUser(user.getId()));
        model.addAttribute("role", user.convertSetOfRoleToString(userService.showUser(user.getId()).getRoles()));
        return "/viewsForAdmin/adminPersonalPage";
    }

}
