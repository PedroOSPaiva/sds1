package com.devsuperior.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dspesquisa.enteties.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}