package com.example.vedanandConstruction.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class SiteDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String siteName;
	private String siteLocation;
	@Temporal(TemporalType.DATE)
	private Date date;
	@ManyToOne
	@JoinColumn(name = "pId")
	private Project projectId;

	public SiteDetails() {
		// TODO Auto-generated constructor stub
	}

	public SiteDetails(Integer id, String siteName, String siteLocation, Date date, Project projectId) {
		super();
		this.id = id;
		this.siteName = siteName;
		this.siteLocation = siteLocation;
		this.date = date;
		this.projectId = projectId;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSiteName() {
		return siteName;
	}

	public void setSiteName(String siteName) {
		this.siteName = siteName;
	}

	public String getSiteLocation() {
		return siteLocation;
	}

	public void setSiteLocation(String siteLocation) {
		this.siteLocation = siteLocation;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Project getProjectId() {
		return projectId;
	}

	public void setProjectId(Project projectId) {
		this.projectId = projectId;
	}

	@Override
	public String toString() {
		return "SiteDetails [id=" + id + ", siteName=" + siteName + ", siteLocation=" + siteLocation + ", date=" + date
				+ ", projectId=" + projectId + "]";
	}


}