package com.nakulattrey2003.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
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
    private String image;
    private String gender;

    @Column(name = "phone_number")
    private String number;

    
    private boolean enabled = false;
    private boolean emailVerified = false;
    private boolean numberVerified = false;

    private String provider;   // google, facebook, normal
    private String providerId;
}
