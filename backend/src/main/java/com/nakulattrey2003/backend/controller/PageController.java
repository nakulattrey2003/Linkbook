package com.nakulattrey2003.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nakulattrey2003.backend.response.SignupResponse;

@RestController
@CrossOrigin
public class PageController 
{
    @PostMapping("/signup")
    public SignupResponse signup(@RequestParam("name") String name,
                     @RequestParam("email") String email,
                     @RequestParam("password") String password,
                     @RequestParam("number") String number,
                     @RequestParam("gender") String gender,
                     @RequestParam(value = "image", required = false) String image) 
    {
        System.out.println("Signup request received");
        System.out.println("Name: " + name);
        System.out.println("Email: " + email);
        System.out.println("Password: " + password);
        System.out.println("Number: " + number);
        System.out.println("Gender: " + gender);
        // System.out.println("Image (Base64 String): " + image);

        return new SignupResponse(name, email, password, number, gender, image);
    }
    
    @GetMapping("/login")
    public String login() {
        return "This is a login page";
    }
    
}
