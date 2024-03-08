package com.example.vedanandConstruction.service;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.vedanandConstruction.entity.Images;
import com.example.vedanandConstruction.repository.ImageRepository;

@Service
public class ImageService {
	@Autowired
	private ImageRepository imageRepository;

	public Images addImage(Images image) {
		
		return imageRepository.save(image);
	}

	public List<Images> getAllImg() {
		return imageRepository.findAll();
	}

	public Images getImgByName(String name) {
		Images imag = imageRepository.findBycategory(name);
		return imag;
	}
}
