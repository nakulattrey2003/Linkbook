package com.nakulattrey2003.backend.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "contacts")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContactModel 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String email;
    private String address;
    private String phoneNumber;
    private String picture;
    private String description;
    private boolean favourite = false;
    private String facebookLink;
    private String instagramLink;
    private String twitterLink;
    private String linkedInLink;
    private String githubLink;
    private String websiteLink;
    
    @ManyToOne
    private UserModel user;
    
    @OneToMany(mappedBy = "contacts" , cascade = CascadeType.ALL, fetch = FetchType.LAZY) // cascade is used to update the social links when the user is updated likewise
    private List<SocialLinkModel> socialLinks = new  ArrayList<>(); // List of social links associated with the user
}
