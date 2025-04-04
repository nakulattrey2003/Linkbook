package com.nakulattrey2003.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class PageController 
{
    @GetMapping("/signup")
    public String signup() {
        return "This is a signup page";
    }
    
    @GetMapping("/login")
    public String login() {
        return "This is a login page";
    }
    
}
