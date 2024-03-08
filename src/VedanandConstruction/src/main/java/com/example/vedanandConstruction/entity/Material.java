package com.example.vedanandConstruction.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "material")
public class Material {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "m_id")
	private Integer mId;
	@Column(name = "m_name")
	private String mName;
	@Column(name = "m_price")
	private double mPrice;

	public Material() {
		// TODO Auto-generated constructor stub
	}

	public Material(Integer mId, String mName, double mPrice) {
		super();
		this.mId = mId;
		this.mName = mName;
		this.mPrice = mPrice;
	}

	public Integer getmId() {
		return mId;
	}

	public void setmId(Integer mId) {
		this.mId = mId;
	}

	public String getmName() {
		return mName;
	}

	public void setmName(String mName) {
		this.mName = mName;
	}

	public double getmPrice() {
		return mPrice;
	}

	public void setmPrice(double mPrice) {
		this.mPrice = mPrice;
	}

	@Override
	public String toString() {
		return "Material [mId=" + mId + ", mName=" + mName + ", mPrice=" + mPrice + "]";
	}

}
