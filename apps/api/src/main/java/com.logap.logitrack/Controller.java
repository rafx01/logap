import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class Controller {

    @GetMapping("path")
    public String getMethodName(@RequestParam String param) {
        return new String();
    }

    @PostMapping("path")
    public String postMethodName(@RequestBody String entity) {
        // TODO: process POST request

        return entity;
    }

}