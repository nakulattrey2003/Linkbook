package com.nakulattrey2003.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TempController {
    @GetMapping("/temp")
    public String getMethodName() {
        System.out.println("Hi this is temp controller11111111111111111111111111111111111111111111111111111111111111"); 
        return "Hi this is temp controller";
    }
}
