package com.example.vedanandConstruction.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.vedanandConstruction.entity.Employee;
import com.example.vedanandConstruction.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository emprepo;

	public List<Employee> getEmployee() {
		List<Employee> emp = emprepo.findAll();
		return emp;
	}

	public void addEmployee(Employee employee) {
		emprepo.save(employee);
	}

}