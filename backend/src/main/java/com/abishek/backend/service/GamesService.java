package com.abishek.backend.service;

import com.abishek.backend.exception.GameNotFoundException;
import com.abishek.backend.model.Games;
import com.abishek.backend.repository.GamesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

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

    public Optional<Games> getGameByIdOptional(Long id) {
        return repo.findById(id);
    }

    public Games addGames(Games games, MultipartFile imageFile) throws IOException {
        games.setImageName(imageFile.getOriginalFilename());
        games.setImageType(imageFile.getContentType());
        games.setImageData(imageFile.getBytes());
        return repo.save(games);
    }

    public void deleteGameById(long gameid){
        if(!repo.existsById(gameid)){
            throw new GameNotFoundException(gameid);
        }else{
            repo.deleteById(gameid);
        }
    }
}
