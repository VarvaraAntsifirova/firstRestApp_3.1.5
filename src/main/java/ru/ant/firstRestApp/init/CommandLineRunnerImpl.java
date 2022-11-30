package ru.ant.firstRestApp.init;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import ru.ant.firstRestApp.model.Role;
import ru.ant.firstRestApp.model.User;
import ru.ant.firstRestApp.service.RoleService;
import ru.ant.firstRestApp.service.UserService;

@Component
public class CommandLineRunnerImpl implements CommandLineRunner {

    private final UserService userService;

    private final RoleService roleService;

    @Autowired
    public CommandLineRunnerImpl(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @Override
    public void run(String... args) {
        Role roleAdmin = new Role();
        roleAdmin.setRoleName("ROLE_ADMIN");
        roleAdmin.setId(1);
        roleService.addRole(roleAdmin);

        Role roleUser = new Role();
        roleUser.setRoleName("ROLE_USER");
        roleUser.setId(2);
        roleService.addRole(roleUser);

        User admin = new User();
        admin.setUsername("admin@mail.ru");
        admin.setPassword("100");
        admin.setFirstName("Admin");
        admin.setLastName("Admin");
        admin.setAge(18);
        admin.setRoles(new String[]{"ROLE_ADMIN", "ROLE_USER"});
        userService.createUser(admin);

        User user = new User();
        user.setUsername("user@mail.ru");
        user.setPassword("200");
        user.setFirstName("User");
        user.setLastName("User");
        user.setAge(24);
        user.setRoles(new String[]{"ROLE_USER"});
        userService.createUser(user);
    }
}


