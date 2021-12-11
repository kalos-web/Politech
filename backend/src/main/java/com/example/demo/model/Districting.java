package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

import java.util.List;
import java.util.Random;

@Entity
@Table(name="Districtings")
public class Districting {
    private String id;
    private State state;
    private List<District> districts;

    @Id
    @Column(name="id")
    public String getId() { return this.id; }
    public void setId(String id) { this.id = id; }

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="stateId")
    @JsonBackReference
    public State getState() { return this.state; }
    public void setState(State s) { this.state = s; }

    @OneToMany(mappedBy="districting")
    @JsonManagedReference
    public List<District> getDistricts() { return this.districts; }
    public void setDistricts(List<District> districts) { this.districts = districts; }

    // if this function necessary?
    public District getDistrictAtIndex(int ind) {
        return districts.get(ind);
    }

    public District selectRandomDistrict(){
        int size = this.districts.size();
        Random rand = new Random();
        return districts.get(rand.nextInt(size));
    }
}