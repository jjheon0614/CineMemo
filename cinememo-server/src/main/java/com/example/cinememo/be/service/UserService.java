package com.example.cinememo.be.service;

import com.example.cinememo.be.entity.User;
import com.example.cinememo.be.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User registerUser(String email, String password, String username) {
        if (userRepository.existsByEmail(email)) { // check user is already existed by email
            throw new RuntimeException("Email already exists");
        }
        if (userRepository.existsByUsername(username)) { // check user is already existed by username
            throw new RuntimeException("Username already exists");
        }

        User newUser = new User();
        newUser.setEmail(email);
        newUser.setUsername(username);
        newUser.setPassword(password); // 실제로는 암호화 필요

        return userRepository.save(newUser);
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
