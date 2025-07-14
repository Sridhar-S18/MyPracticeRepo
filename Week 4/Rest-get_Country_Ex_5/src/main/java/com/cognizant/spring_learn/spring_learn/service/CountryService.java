package com.cognizant.spring_learn.spring_learn.service;

import com.cognizant.spring_learn.spring_learn.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private ApplicationContext context;

    public Country getCountry(String code) throws Exception {
        List<Country> countries = (List<Country>) context.getBean("countryList");

        return countries.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new Exception("Country not found"));
    }
}
