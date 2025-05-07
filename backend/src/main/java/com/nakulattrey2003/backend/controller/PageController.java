package com.nakulattrey2003.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nakulattrey2003.backend.model.UserModel;
import com.nakulattrey2003.backend.service.UserService;

@RestController
@CrossOrigin
public class PageController 
{
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@ModelAttribute UserModel user, @RequestParam("image") String image) 
    {
        UserModel userModel = new UserModel();
        userModel.setName(user.getName());
        userModel.setEmail(user.getEmail());
        userModel.setPassword(user.getPassword());
        userModel.setImage(image);
        userModel.setNumber(user.getNumber());
        userModel.setGender(user.getGender());

        // UserModel savedUser = userService.saveUser(userModel);

        System.out.println(userModel);

        try {
            // UserModel savedUser = userService.saveUser(userModel);
            return ResponseEntity.ok(userModel);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("{\"message\":\"Signup failed!\"}");
        }
    }
    
    @GetMapping("/login")
    public String login() {
        return "This is a login page";
    }
    
}
