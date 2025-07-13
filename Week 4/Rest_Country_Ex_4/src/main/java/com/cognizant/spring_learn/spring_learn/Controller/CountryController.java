package com.cognizant.spring_learn.spring_learn.Controller;




import com.cognizant.spring_learn.spring_learn.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @RequestMapping("/country")
    public Country getCountryIndia() {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
        Country country = (Country) context.getBean("in");
        return country;
    }
}
