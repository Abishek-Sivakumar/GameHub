package com.abishek.backend.controller;

import com.abishek.backend.model.Games;
import com.abishek.backend.service.GamesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/games/image/{id}")
    public ResponseEntity<byte[]> getGameImage(@PathVariable Long id) {
        Optional<Games> game = service.getGameByIdOptional(id);

        if (game.isPresent() && game.get().getImageData() != null) {
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + game.get().getImageName() + "\"")
                    .contentType(MediaType.parseMediaType(game.get().getImageType()))
                    .body(game.get().getImageData());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/games")
    public ResponseEntity<?> addGames(@RequestPart Games games, @RequestPart MultipartFile imageFile){
        try {
            Games games1 = service.addGames(games,imageFile);
            return new ResponseEntity<>(games1,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping("/games/{id}")
    public void deleteGameById(@PathVariable Long id){
        service.deleteGameById(id);
    }

}
