package com.bootcamp.todolist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.todolist.models.TareaModel;

// El T y el Id son los tipos de datos que necesita
public interface TareaRepository extends JpaRepository<TareaModel, Integer> {

}

// repositorio.save(objeto) --> Insert
// repositorio.delete()
// findAll()
// findById(id)
// deleteById(id)
// updateById(id)
// getByEstado