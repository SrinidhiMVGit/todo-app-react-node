package com.lists.todo.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lists.todo.exception.ResourceNotFoundException;
import com.lists.todo.model.Todolist;
import com.lists.todo.respository.TodoRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/lists")
public class TodoController {
	
	private final Logger LOGGER = LoggerFactory.getLogger(getClass());

	@Autowired
	private final TodoRepository todoRepository;
	
	public TodoController(TodoRepository todoRepository) {
		this.todoRepository = todoRepository;
	}
	
	//getting all the users
	@GetMapping("/getAll")
	public List<Todolist> getAllUsers(){
		LOGGER.info("Getting all the lists");
		return todoRepository.findAll();
	}
	
	//adding a new list
	@PostMapping("/create")
	public Todolist addNewUsers(@RequestBody Todolist todo) {
		LOGGER.info("Saving a list.");
		return todoRepository.save(todo);
	}
	
	 @PutMapping("/update/{id}")
	    public ResponseEntity < Todolist > updateEmployee(@PathVariable(value = "id") Long todoId,
	        @RequestBody Todolist todoDetails) throws ResourceNotFoundException  {
		 Todolist todo = null;
		try {
			todo = todoRepository.findById(todoId).orElseThrow(() -> new Exception("List not found for this id :: " + todoId));
		} catch (Exception e) {
			e.printStackTrace();
		}

			 todo.setStatus(todoDetails.getStatus());
			 todo.setDescription(todoDetails.getDescription());
			 todo.setName(todoDetails.getName());
	        final Todolist updatedTodo = todoRepository.save(todo);
	        return ResponseEntity.ok(updatedTodo);
	    }
	
		
	//Removing a user by id
		@DeleteMapping("/remove/{listId}")
		public boolean removeUserById(@PathVariable Long todoId) throws ResourceNotFoundException  {
			Todolist todo = null;
			try {
				todo = todoRepository.findById(todoId).orElseThrow(() -> new Exception("List not found for this id :: " + todoId));
			} catch (Exception e) {
				e.printStackTrace();
			}

			todoRepository.delete(todo);
	        return  Boolean.TRUE;
		}
}
