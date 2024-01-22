package com.bootcamp.todolist.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.todolist.models.TareaModel;
import com.bootcamp.todolist.repositories.TareaRepository;

@Service
public class TareaService {
	
	// Inyeccion de dependencia
	@Autowired
	TareaRepository tareaRepository;
	
	// obtener tareas
	public List<TareaModel> obtenerTareas(){
		return tareaRepository.findAll();
	}
	
	// obtener tarea segun id
	public Optional<TareaModel> obtenerTareasPorId(Integer id) {
		return tareaRepository.findById(id);
	}
	
	// insertar tarea
	public String crearTarea(TareaModel tarea) {
		tareaRepository.save(tarea);
		return "Tarea insertada correctamente";
	}
	
	// modificar tarea
	public TareaModel modificarTarea(Integer id,TareaModel tarea) {
		TareaModel t = this.tareaRepository.findById(id).get(); 
		if (t != null) {
			t.setNombre(tarea.getNombre());
			t.setDescripcion(tarea.getDescripcion());
			t.setEstado(tarea.getEstado());
			tareaRepository.save(t);
			return t;
		}
		return null;
		
	}
	
	// eliminar tarea
	public Optional<TareaModel> eliminarTarea(Integer id) {
		TareaModel t = this.tareaRepository.findById(id).get();
		if(t != null){
			tareaRepository.deleteById(id);
		}
		return null;
//		try {
//			return tareaRepository.findById(id);
//		} catch (Exception e) {
//			return e;
//		}
	}
	

}
