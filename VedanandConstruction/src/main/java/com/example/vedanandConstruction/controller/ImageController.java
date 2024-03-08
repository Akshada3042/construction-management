package com.example.vedanandConstruction.controller;

import java.awt.Image;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.vedanandConstruction.entity.Images;
import com.example.vedanandConstruction.service.ImageService;

@RestController
@CrossOrigin("*")
@RequestMapping("")
public class ImageController {
	@Autowired
	private ImageService imageService;

	public static String uploadDirectory = "E:\\construction_project\\construction\\public";

	@PostMapping("/addImage")
	public Images addImage(@ModelAttribute Images image, @RequestParam("img") MultipartFile file) throws IOException {
		String originalFilename = file.getOriginalFilename();
		
		Path fileNameAndPath = Paths.get(uploadDirectory, originalFilename);
		Files.write(fileNameAndPath, file.getBytes());
		image.setImageName(originalFilename);
		
		return imageService.addImage(image);
	}

	@GetMapping("/getAllImgs")
	public List<Images> getAllImgs() {
		return imageService.getAllImg();
	}

	@GetMapping("/getImageByCat/{name}")
	public ResponseEntity<Resource> getProfileImage(@PathVariable String name) throws IOException {
		
		System.out.println(name);
		Images img = imageService.getImgByName(name);

		Path imgPath = Paths.get(uploadDirectory, img.getImageName());

		Resource resource = new FileSystemResource(imgPath.toFile());

		String contentType = Files.probeContentType(imgPath);

		return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType)).body(resource);
	}
}
