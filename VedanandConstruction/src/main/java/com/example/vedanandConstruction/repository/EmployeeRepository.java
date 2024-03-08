package com.example.vedanandConstruction.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.vedanandConstruction.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}