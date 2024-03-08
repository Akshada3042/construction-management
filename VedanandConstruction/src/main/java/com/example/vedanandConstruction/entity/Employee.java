package com.example.vedanandConstruction.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "emp_id")
	private Integer empId;
	@Column(name = "ename", nullable = false)
	private String eName;
	@Column(name = "eposition", nullable = false)
	private String ePosition;
	@Column(name = "eaddress", nullable = false)
	private String eAddress;
	@Column(name = "econtact", nullable = false)
	private long eContact;
	

	public Employee() {
		// TODO Auto-generated constructor stub
	}

	public Employee(Integer empId, String eName, String ePosition, String eAddress, long eContact) {
		super();
		this.empId = empId;
		this.eName = eName;
		this.ePosition = ePosition;
		this.eAddress = eAddress;
		this.eContact = eContact;
	}

	public Integer getEmpId() {
		return empId;
	}

	public void setEmpId(Integer empId) {
		this.empId = empId;
	}

	public String geteName() {
		return eName;
	}

	public void seteName(String eName) {
		this.eName = eName;
	}

	public String getePosition() {
		return ePosition;
	}

	public void setePosition(String ePosition) {
		this.ePosition = ePosition;
	}

	public String geteAddress() {
		return eAddress;
	}

	public void seteAddress(String eAddress) {
		this.eAddress = eAddress;
	}

	public long geteContact() {
		return eContact;
	}

	public void seteContact(long eContact) {
		this.eContact = eContact;
	}

	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", eName=" + eName + ", ePosition=" + ePosition + ", eAddress=" + eAddress
				+ ", eContact=" + eContact + "]";
	}

}