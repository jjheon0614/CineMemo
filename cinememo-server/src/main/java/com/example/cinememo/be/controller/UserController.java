package com.example.cinememo.be.controller;

import com.example.cinememo.be.entity.User;
import com.example.cinememo.be.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth") // default api path
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<User> registerUser(
            @RequestParam String email,
            @RequestParam String username,
            @RequestParam String password) {

        User newUser = userService.registerUser(email, username, password);
        return ResponseEntity.ok(newUser);
    }
}
