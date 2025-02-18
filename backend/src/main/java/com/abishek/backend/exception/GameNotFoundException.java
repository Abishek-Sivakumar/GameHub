package com.abishek.backend.exception;

public class GameNotFoundException extends RuntimeException{
    public GameNotFoundException(Long id){
        super("Game with id "+id+" not found");
    }
}
