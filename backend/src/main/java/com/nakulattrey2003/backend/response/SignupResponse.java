package com.nakulattrey2003.backend.response;

public class SignupResponse 
{
    private String name;
    private String email;
    private String number;
    private String gender;
    private String image;
    private String password;

    public SignupResponse(String name, String email, String password, String number, String gender, String image) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.number = number;
        this.gender = gender;
        this.image = image;
    }

    // Getters and Setters
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getNumber() {
        return number;
    }
    public void setNumber(String number) {
        this.number = number;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
}
