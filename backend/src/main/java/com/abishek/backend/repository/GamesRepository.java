package com.abishek.backend.repository;

import com.abishek.backend.model.Games;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GamesRepository extends JpaRepository<Games,Long> {
}
