package com.seyidov.k8s.web;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.seyidov.k8s.entity.Guest;
import com.seyidov.k8s.model.GuestTransport;
import com.seyidov.k8s.service.GuestService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/")
@AllArgsConstructor
public class GuestController {

    private GuestService guestService;

    @GetMapping("/guests/list")
    public List<GuestTransport> getAllGuests() {
        return guestService.getAll();
    }

    @GetMapping("/guests/id/{id}")
    public GuestTransport findById(@PathVariable("id") Long id) {
        return guestService.findById(id);
    }

    @GetMapping("/guests/name/{name}")
    public List<GuestTransport> getGuestsByName(@PathVariable("name") String name) {
        return guestService.getGuestsByName(name);
    }

    @PostMapping("/guests/add")
    public GuestTransport addGuests(@RequestBody GuestTransport guest) {
        return guestService.save(guest);
    }
}


