package com.example.vedanandConstruction.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "careers")
public class Jobs {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_id")
	private Integer jobId;
	@Column(name = "title", nullable = false)
	private String title;
	@Column(name = "location", nullable = false)
	private String location;
	@Column(name = "experience", nullable = false)
	private int experience;
	@Column(name = "role", nullable = false)
	private String role;
	@Column(name = "position", nullable = false)
	private int position;

	public Jobs() {
		// TODO Auto-generated constructor stub
	}

	public Jobs(Integer jobId, String title, String location, int experience, String role, int position) {
		super();
		this.jobId = jobId;
		this.title = title;
		this.location = location;
		this.experience = experience;
		this.role = role;
		this.position = position;
	}

	public Integer getJobId() {
		return jobId;
	}

	public void setJobId(Integer jobId) {
		this.jobId = jobId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public int getPosition() {
		return position;
	}

	public void setPosition(int position) {
		this.position = position;
	}

	@Override
	public String toString() {
		return "Jobs [jobId=" + jobId + ", title=" + title + ", location=" + location + ", experience=" + experience
				+ ", role=" + role + ", position=" + position + "]";
	}

}
