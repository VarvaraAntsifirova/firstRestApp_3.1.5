package ru.ant.firstRestApp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GeneralController {

    @GetMapping("/login")
    public String getLoginPage() {
        return "/login";
    }
}
