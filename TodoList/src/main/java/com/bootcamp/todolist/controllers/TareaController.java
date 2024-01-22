package com.bootcamp.todolist.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.todolist.models.TareaModel;
import com.bootcamp.todolist.services.TareaService;

@RestController
@RequestMapping("/tareas") // localhost:8080/tareas
public class TareaController {
	
	@Autowired
	TareaService tareaService;
	
	@GetMapping("/test")
	public ResponseEntity<String> testing() {
		return new ResponseEntity<>("Hola Mundo",HttpStatus.OK);
		//return ResponseEntity.ok("Hola mundo");
	}
	
	@GetMapping() // localhost:8080/tareas/
	public ResponseEntity<List<TareaModel>> getTareas() {
		return new ResponseEntity<>(tareaService.obtenerTareas(),HttpStatus.OK);
	}
	
	@GetMapping("/{id}") // localhost:8080/tareas/id
	public ResponseEntity<Optional<TareaModel>> getTareaById(@PathVariable Integer id) {
		return new ResponseEntity<>(tareaService.obtenerTareasPorId(id),HttpStatus.OK);
	}
	
	@PostMapping()
	public ResponseEntity<String> createTarea(@RequestBody TareaModel tarea) {
		return new ResponseEntity<>(tareaService.crearTarea(tarea),HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<TareaModel> updateTarea(@PathVariable Integer id, @RequestBody TareaModel tarea) {
		return new ResponseEntity<>(tareaService.modificarTarea(id, tarea),HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}") // localhost:8080/tareas/id
	public ResponseEntity<Optional<TareaModel>> deleteTarea(@PathVariable Integer id) {
		return new ResponseEntity<>(tareaService.eliminarTarea(id),HttpStatus.OK);
	}
	
	
}
