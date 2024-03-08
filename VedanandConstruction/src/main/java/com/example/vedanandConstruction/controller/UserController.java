package com.example.vedanandConstruction.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.vedanandConstruction.entity.User;
import com.example.vedanandConstruction.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("")
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping("/adduser")
	public String addUser(@RequestBody User user) {
		userService.addUser(user);
		return "user added";
	}

	@PostMapping("/getProjectId/{mail}")
	public int getProjectId(@PathVariable String mail) {
		return userService.getProjectId(mail);
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> loginUser(@RequestBody User user) {
		try {
			User dbUser = userService.loginUser(user);
			if (dbUser != null) {
				System.out.println(dbUser);
				return ResponseEntity.status(HttpStatus.OK).body(dbUser.getUserRole());
			} else {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("INVALID USERNAME OR PASSWORD");
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + e.getMessage());
		}
	}
}
