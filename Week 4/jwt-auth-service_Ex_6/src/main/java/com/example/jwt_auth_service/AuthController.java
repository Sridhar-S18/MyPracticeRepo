package com.example.jwt_auth_service;



import com.example.jwt_auth_service.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

@RestController
public class AuthController {

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestHeader("Authorization") String authHeader) {
        // Step 1: Decode Base64 credentials from header
        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            return ResponseEntity.badRequest().body("Missing or invalid Authorization header");
        }

        String base64Credentials = authHeader.substring("Basic ".length());
        String credentials = new String(Base64.getDecoder().decode(base64Credentials));
        String[] values = credentials.split(":", 2);

        String username = values[0];
        String password = values[1];

        // Step 2: Validate username and password (hardcoded example)
        if ("user".equals(username) && "pwd".equals(password)) {
            String token = jwtUtil.generateToken(username);
            return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
        } else {
            return ResponseEntity.status(401).body("Invalid Credentials");
        }
    }
}

