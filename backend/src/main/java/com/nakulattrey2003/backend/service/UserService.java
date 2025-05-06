package com.nakulattrey2003.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nakulattrey2003.backend.model.UserModel;

@Service
public interface UserService
{
    UserModel saveUser(UserModel user);

    Optional<UserModel> getUserById(String id);

    Optional<UserModel> updateUser(UserModel user);

    void deleteUser(String id);

    boolean isUserExist(String userId);

    boolean isUserExistByEmail(String email);

    List<UserModel> getAllUsers();

    UserModel getUserByEmail(String email);
}
