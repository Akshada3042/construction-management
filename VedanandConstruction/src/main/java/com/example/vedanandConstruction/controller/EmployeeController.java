package com.example.vedanandConstruction.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.vedanandConstruction.entity.Employee;
import com.example.vedanandConstruction.service.EmployeeService;

@RestController
@CrossOrigin("*")
@RequestMapping("")
public class EmployeeController {

	@Autowired
	private EmployeeService eservice;

	@GetMapping("/getallEmployee")
	public List<Employee> getAll() {
		return eservice.getEmployee();
	}

	@PostMapping("/addEmployee")
	public String addJob(@RequestBody Employee employee) {
		eservice.addEmployee(employee);
		return "job added";
	}

}