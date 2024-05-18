package com.seyidov.k8s.mapper;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import com.seyidov.k8s.entity.Guest;
import com.seyidov.k8s.model.GuestTransport;

@Component
public class GuestsMapper {

    public GuestTransport mapEntityToTransport(Guest guest) {
        if (guest == null) {
            return null;
        }
        return new GuestTransport(guest.getId(), guest.getName(), guest.getName());
    }

    public Guest mapTransportToEntity(GuestTransport guestTransport) {
        if (guestTransport == null) {
            return null;
        }
        return new Guest(guestTransport.getId(), guestTransport.getName(), guestTransport.getName());
    }

    public List<GuestTransport> mapEntitiesToTransports(List<Guest> guests) {
        if (guests == null) {
            return null;
        }
        var list = new ArrayList<GuestTransport>(guests.size());
        guests.forEach(item -> list.add(mapEntityToTransport(item)));
        return list;
    }
}
