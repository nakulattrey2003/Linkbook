package com.nakulattrey2003.backend.impl;

import java.util.List;
import java.util.Optional;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.stereotype.Service;

import com.nakulattrey2003.backend.model.UserModel;
import com.nakulattrey2003.backend.repository.UserRepo;
import com.nakulattrey2003.backend.service.UserService;

import org.slf4j.Logger;

@Service
public class UserServiceImpl implements UserService
{
    @Autowired
    private UserRepo userRepo;
    
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    
    @Override
    public UserModel saveUser(UserModel user) {
        return userRepo.save(user);
    }

    @Override
    public Optional<UserModel> getUserById(String id) {
        return userRepo.findById(Long.parseLong(id));
    }

    @Override
    public Optional<UserModel> updateUser(UserModel user) {
        Optional<UserModel> existingUser = userRepo.findById(user.getId());
        if (existingUser.isPresent()) {
            UserModel updatedUser = existingUser.get();
            updatedUser.setName(user.getName());
            updatedUser.setEmail(user.getEmail());
            updatedUser.setPassword(user.getPassword());
            updatedUser.setNumber(user.getNumber());
            updatedUser.setGender(user.getGender());
            updatedUser.setImage(user.getImage());
            updatedUser.setAbout(user.getAbout());
            updatedUser.setEnabled(user.isEnabled());
            updatedUser.setEmailVerified(user.isEmailVerified());
            updatedUser.setNumberVerified(user.isNumberVerified());
            updatedUser.setProvider(user.getProvider());
            updatedUser.setProviderId(user.getProviderId());
            updatedUser.setContacts(user.getContacts());    

            UserModel savedUser = userRepo.save(updatedUser);
            logger.info("User updated successfully: " + updatedUser.getName());

            return Optional.of(userRepo.save(updatedUser));
        }
        return Optional.empty();
    }

    @Override
    public void deleteUser(String id) {
        userRepo.deleteById(Long.parseLong(id));
    }

    @Override
    public boolean isUserExist(String userId) {
        return userRepo.existsById(Long.parseLong(userId));
    }

    @Override
    public boolean isUserExistByEmail(String email) {
        return userRepo.findByEmail(email).isPresent();
    }

    @Override
    public List<UserModel> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public UserModel getUserByEmail(String email) {
        return userRepo.findByEmail(email).orElse(null);
    }


    

}
