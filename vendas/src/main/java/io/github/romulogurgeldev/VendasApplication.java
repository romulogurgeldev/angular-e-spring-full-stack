package io.github.romulogurgeldev;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@SpringBootApplication
//@ComponentScan(
//        basePackages = {
//                "io.github.romulogurgeldev.repository",
//                "io.github.romulogurgeldev.service"}

@RestController
public class VendasApplication {

    @Autowired
    @Value("${application.name}")
    private String applicationName;

@GetMapping ("/Hello")
    public String HelloWorld(){
        return applicationName;
}
    public static void main(String[] args) {
        SpringApplication.run(VendasApplication.class, args);
    }
}
