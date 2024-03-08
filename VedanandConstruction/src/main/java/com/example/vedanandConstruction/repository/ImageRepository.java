package com.example.vedanandConstruction.repository;

import java.awt.Image;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.vedanandConstruction.entity.Images;

public interface ImageRepository extends JpaRepository<Images,Integer> {

	Images findBycategory(String catName);
}
