package com.nakulattrey2003.backend.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "user_name", nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(length = 1000)
    private String about;
    
    @Column(length = 1000)
    private String image;

    private String gender;

    @Column(name = "phone_number")
    private String number;


    private boolean enabled = false;
    private boolean emailVerified = false;
    private boolean numberVerified = false;

    private String provider;   // google, facebook, normal
    private String providerId;

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL, fetch = FetchType.LAZY) // cascade is used to update the contacts when the user is updated likewise
    private List<ContactModel> contacts = new ArrayList<>(); // List of contacts associated with the user

    // @OneToMany(mappedBy = "contacts" , cascade = CascadeType.ALL, fetch = FetchType.EAGER) // eager is used to fetch the social links when the user is fetched
    // private List<SocialLinkModel> socialLinks = new ArrayList<>(); // List of social links associated with the user
}
