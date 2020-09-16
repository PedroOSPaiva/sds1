package com.devsuperior.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dspesquisa.enteties.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
