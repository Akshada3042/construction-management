package com.example.vedanandConstruction.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.vedanandConstruction.entity.User;
import com.example.vedanandConstruction.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;

	public void addUser(User user) {
		userRepo.save(user);
	}

	public User loginUser(User user) {
		Optional<User> opUser = Optional.ofNullable(userRepo.findByEmail(user.getEmail()));
		User dbUser = opUser.get();
		if (opUser.isPresent()) {
			if (dbUser.getPassword() == user.getPassword())
				return dbUser;
		} else {
			return null;
		}
		return null;
	}
}
