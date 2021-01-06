package com.example.restful;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController // Controller라는 것을 암시
@RequestMapping("/api") // /api 가 매칭
public class ExampleGetController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    // 테스트케이스 1
    @RequestMapping(method = RequestMethod.GET, path = "/getMethod") // /api/getMethod
    public String getRequest() {
        return "Hi getMethod";
        // @RequestMaping인데 method를 설정해줌으로 주소 하위 메소드로 들어감
        // 여기서 return 한 것이 웹에 띄워짐
        // 요청이 들어오면 이 안으로 옴
    }

    // 테스트케이스 2
    @GetMapping("/getParameter") // /api/getParameter?id=1234&password=abcd 물음표 뒤부터가 파라미터터
    public String getParameter(@RequestParam String id, @RequestParam String password) {

        // 만약에 여기서 password라는 변수가 쓰인다면 매개변수는 다른 이름으로 password를 받아야함.
        // 그렇게 되면 매핑이 안되므로 @RequestParam(name = "password") pwd이렇게 해주면
        // 들어오는 인자는 password라는 이름으로 매핑될거야 라는 뜻.
        System.out.println("id :" + id);
        System.out.println("password :" + password);

        return id + password; // 여기서 return 한 것들이 web에 띄워짐

    }

    // 테스트케이스 3
    @GetMapping("/getMultiParameter") // /api/getMultiParameter?account=abc&email=study@gmail.com&page=10
    public SearchParam getMultiParameter(SearchParam searchParam) {
        System.out.println(searchParam.getAccount());
        System.out.println(searchParam.getEmail());
        System.out.println(searchParam.getPage());
        // { "account" : "", "email" : "", "page" : 0} 형태로 바꿔주기 위해 객체리턴
        // 기본적으로 gson 내포하므로 객체 리턴한다면 기본적으로 json 리턴
        return searchParam;

    }

    // 테스트케이스 4
    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }
}