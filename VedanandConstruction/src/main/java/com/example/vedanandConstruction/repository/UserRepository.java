package com.example.vedanandConstruction.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.vedanandConstruction.entity.User;

public interface UserRepository extends JpaRepository<User,Integer>{

	User findByEmail(String email);
}
