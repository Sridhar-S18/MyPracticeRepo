package com.example.jwt_auth_service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers("/authenticate").permitAll()  // Public access for authentication
                .anyRequest().authenticated()                  // Secure all other endpoints
                .and()
                .httpBasic(); // Enables HTTP Basic authentication

        return http.build();
    }

    @Bean
    public InMemoryUserDetailsManager userDetailsService() {
        UserDetails user = User.withDefaultPasswordEncoder()  // Only for demo, avoid in production
                .username("user")
                .password("pwd")
                .roles("USER")
                .build();
        return new InMemoryUserDetailsManager(user);
    }
}
