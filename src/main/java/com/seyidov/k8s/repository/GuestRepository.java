package com.seyidov.k8s.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.seyidov.k8s.entity.Guest;


@Repository
public interface GuestRepository extends JpaRepository<Guest, Long> {
    List<Guest> findByName(String name);
}
