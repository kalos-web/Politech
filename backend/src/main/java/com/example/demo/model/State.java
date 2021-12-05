package com.example.demo.model;

import javax.persistence.*;

import java.awt.*;
import java.util.List;

@Entity
@Table(name="States")
public class State {
    private String id;
    private String name;
    private Districting enacted;
    private Districting current;
    private Districting redistricted;
    private String outline;
    private List<Districting> districtings;
    private List<BoxAndWhisker> plots;

//    private Population population;
//    private VotingAgePopulation vap;
//    private Election election;

    @Id
    @Column(name="id")
    public String getId() { return this.id; }
    public void setId(String id) {
        this.id = id;
    }

    @Column(name="name")
    public String getName() { return this.name; }
    public void setName(String name) {
        this.name = name;
    }

//    @OneToOne(cascade=CascadeType.ALL)
//    @JoinColumn(name="enactedId")
    @Transient
    public Districting getEnacted() { return this.enacted; }
    public void setEnacted(Districting e) {
        this.enacted = e;
    }

    @Transient
    public Districting getCurrent() { return this.current; }
    public void setCurrent(Districting c) {
        this.current = c;
    }

    @Transient
    public Districting getRedistricted() { return this.redistricted; }
    public void setRedistricted(Districting r) {
        this.redistricted = r;
    }

    @Column(name="outline", columnDefinition="LONGTEXT")
    public String getOutline() { return this.outline; }
    public void setOutline(String p) {
        this.outline = p;
    }

    @OneToMany(mappedBy="state", cascade=CascadeType.ALL)
    public List<Districting> getDistrictings() { return this.districtings; }
    public void setDistrictings(List<Districting> seawulfDistrictings) {
        this.districtings = seawulfDistrictings;
    }

    @OneToMany(mappedBy="state", cascade=CascadeType.ALL)
    public List<BoxAndWhisker> getPlots() { return plots; }
    public void setPlots(List<BoxAndWhisker> p) { plots = p; }


//    @OneToMany
//    @JoinTable(
//            name="StatePopulations",
//            joinColumns = @JoinColumn(name="stateId"),
//            inverseJoinColumns = @JoinColumn(name="populationId")
//    )
//    public List<Population> getPopulations() { return this.populations; }
//    public void setPopulations(List<Population> p) { populations = p; }

//    @OneToOne
//    @JoinColumn(name="populationId")
//    public Population getPopulation() { return this.population; }
//    public void setPopulation(Population p) { population = p; }
//
//    @OneToOne
//    @JoinColumn(name="vapId")
//    public VotingAgePopulation getVap() { return vap; }
//    public void setVap(VotingAgePopulation vap) { this.vap = vap; }

//    @OneToMany
//    @JoinTable(
//            name="StateElections",
//            joinColumns = @JoinColumn(name="stateId"),
//            inverseJoinColumns = @JoinColumn(name="electionId")
//    )
//    public List<Election> getElections() { return this.elections; }
//    public void setElections(List<Election> e) { elections = e; }

//    @OneToOne
//    @JoinColumn(name="electionId")
//    public Election getElection() { return election; }
//    public void setElection(Election e) { election = e; }


}
