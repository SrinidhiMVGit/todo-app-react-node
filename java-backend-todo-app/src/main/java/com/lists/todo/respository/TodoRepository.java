package com.lists.todo.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lists.todo.model.Todolist;


@Repository
public interface TodoRepository extends JpaRepository<Todolist, Long>{

}