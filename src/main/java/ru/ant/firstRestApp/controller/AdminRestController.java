package ru.ant.firstRestApp.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.ant.firstRestApp.model.Role;
import ru.ant.firstRestApp.model.User;
import ru.ant.firstRestApp.repository.UserRepository;
import ru.ant.firstRestApp.service.RoleService;
import ru.ant.firstRestApp.service.UserService;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest/admin")
public class AdminRestController {

    private final UserService userService;
    private final UserRepository userRepository;

    private final RoleService roleService;

    public AdminRestController(UserService userService, UserRepository userRepository, RoleService roleService) {
        this.userService = userService;
        this.userRepository = userRepository;
        this.roleService = roleService;
    }

    @GetMapping("/personalPage")
    public ResponseEntity<?> showAdminPersonalPage(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        return new ResponseEntity<>(user, HttpStatus.OK);
    }


    @GetMapping("/generalPage")
    public ResponseEntity<?> showAdminGeneralPage() {
        List<User> listOfUsers =  userService.getAllUsers();
        return new ResponseEntity<>(listOfUsers, HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> showUser(@PathVariable("id") Integer id) {
        User user = userService.showUser(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/new")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        userService.createUser(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/{id}/roles")
    public ResponseEntity<?> getAllRoles(@PathVariable("id") Integer id) {
        User user = userService.showUser(id);
        System.out.println("---------------------");
        System.out.println(user.getRoles());
        System.out.println("---------------------------");
        return new ResponseEntity<>(user.getRoles(), HttpStatus.OK);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<?> editUser(@RequestBody User user, @PathVariable("id") Integer id) {
        userService.updateUser(id, user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Integer id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
