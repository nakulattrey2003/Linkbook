package com.nakulattrey2003.backend.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nakulattrey2003.backend.model.UserModel;

@Repository
public interface UserRepo extends JpaRepository<UserModel, Long> {

    Optional<UserModel> findByEmail(String email);

    Optional<UserModel> findByEmailAndPassword(String email, String password);

    // Optional<UserModel> findByEmailToken(String id);

}