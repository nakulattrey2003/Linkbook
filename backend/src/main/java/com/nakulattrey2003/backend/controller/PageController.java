package com.nakulattrey2003.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.multipart.MultipartFile;

import com.nakulattrey2003.backend.model.UserModel;
import com.nakulattrey2003.backend.response.SignupResponse;

@RestController
@CrossOrigin
public class PageController 
{
    @PostMapping("/signup")
    public SignupResponse signup(@ModelAttribute UserModel user, @RequestParam("image") String image) 
    {
        System.out.println("Signup request received");
        System.out.println("Name: " + user.getName());
        System.out.println("Email: " + user.getEmail());
        // System.out.println("Image: " + image);

        return new SignupResponse(user.getName(), user.getEmail(), user.getPassword(), user.getNumber(), user.getGender(), image);
    }
    
    @GetMapping("/login")
    public String login() {
        return "This is a login page";
    }
    
}
