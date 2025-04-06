package com.yourcompany.server.utils;

import org.springframework.dao.DuplicateKeyException;

public class ErrorUtil {

    public static String getErrors(Exception error) {
        // Handle duplicate key error (Mongo duplicate error translates to DuplicateKeyException)
        if (error instanceof DuplicateKeyException) {
            return "User with the provided email already exists.";
        } else if (error.getMessage() != null && error.getMessage().contains("Validation")) {
            // You can enhance this logic to parse specific validation errors if needed.
            return "Validation errors: " + error.getMessage();
        } else {
            System.err.println("An unexpected error occurred during user registration: " + error);
            return "An unexpected error occurred during user registration. Please try again later.";
        }
    }
}
