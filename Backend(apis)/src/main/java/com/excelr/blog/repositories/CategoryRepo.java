package com.excelr.blog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excelr.blog.entities.Category;

public interface CategoryRepo extends JpaRepository<Category, Integer> {

}
