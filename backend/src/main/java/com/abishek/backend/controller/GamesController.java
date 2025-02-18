package com.abishek.backend.controller;

import com.abishek.backend.model.Games;
import com.abishek.backend.service.GamesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class GamesController {
    @Autowired
    GamesService service;

    @GetMapping("/games")
    public ResponseEntity<List<Games>> getAllGames(){
        return new ResponseEntity<>(service.getAllGames(), HttpStatus.OK);
    }

    @GetMapping("/games/{id}")
    public ResponseEntity<Games> getGameById(@PathVariable Long id){
        return new ResponseEntity<>(service.getGameById(id),HttpStatus.OK);
    }

}
