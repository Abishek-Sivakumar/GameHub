package com.abishek.backend.service;

import com.abishek.backend.exception.GameNotFoundException;
import com.abishek.backend.model.Games;
import com.abishek.backend.repository.GamesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GamesService {
    @Autowired
    GamesRepository repo;


    public List<Games> getAllGames() {
        return repo.findAll();
    }

    public Games getGameById(Long id) {
        return repo.findById(id).orElseThrow(()->new GameNotFoundException(id));
    }
}
