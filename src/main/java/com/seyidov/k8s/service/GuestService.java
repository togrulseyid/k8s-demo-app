package com.seyidov.k8s.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seyidov.k8s.entity.Guest;
import com.seyidov.k8s.mapper.GuestsMapper;
import com.seyidov.k8s.model.GuestTransport;
import com.seyidov.k8s.repository.GuestRepository;

import lombok.RequiredArgsConstructor;

//@RequiredArgsConstructor
@Service
public class GuestService {

    private final GuestRepository guestRepository;
    private final GuestsMapper mapper;

    @Autowired
    public GuestService(GuestRepository guestRepository, GuestsMapper mapper) {
        this.guestRepository = guestRepository;
        this.mapper = mapper;
    }

    public List<GuestTransport> getAll() {
        return mapper.mapEntitiesToTransports(guestRepository.findAll());
    }

    public List<GuestTransport> getGuestsByName(String name) {
        return mapper.mapEntitiesToTransports(guestRepository.findByName(name));
    }

    public GuestTransport findById(Long id) {
        return mapper.mapEntityToTransport(guestRepository.findById(id).orElse(null));
    }

    public GuestTransport save(GuestTransport guestTransport) {
        return mapper.mapEntityToTransport(
                this.guestRepository.save(
                        mapper.mapTransportToEntity(guestTransport)));
    }
}
