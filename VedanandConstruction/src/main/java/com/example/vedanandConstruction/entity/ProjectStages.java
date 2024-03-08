package com.example.vedanandConstruction.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "project_stages")
public class ProjectStages {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ps_id")
	private Integer pStageId;
	@Column(name = "ps_name")
	private String pStageName;
	@Column(name = "ps_status")
	private String status;
	@Column(name = "ps_percentage")
	private int percentage;

	public ProjectStages() {
		// TODO Auto-generated constructor stub
	}

	public ProjectStages(Integer pStageId, String pStageName, String status, int percentage) {
		super();
		this.pStageId = pStageId;
		this.pStageName = pStageName;
		this.status = status;
		this.percentage = percentage;
	}

	public Integer getpStageId() {
		return pStageId;
	}

	public void setpStageId(Integer pStageId) {
		this.pStageId = pStageId;
	}

	public String getpStageName() {
		return pStageName;
	}

	public void setpStageName(String pStageName) {
		this.pStageName = pStageName;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getPercentage() {
		return percentage;
	}

	public void setPercentage(int percentage) {
		this.percentage = percentage;
	}

	@Override
	public String toString() {
		return "ProjectStages [pStageId=" + pStageId + ", pStageName=" + pStageName + ", status=" + status
				+ ", percentage=" + percentage + "]";
	}

}