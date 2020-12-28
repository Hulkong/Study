package com.example.restful;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ExamplePostController {
    // HTML <Form>
    // ajax 검색

    // http post body -> data를 집어넣어서 받겠다.
    // json ,xmL, multipart - form / text-plain

    @PostMapping(value = "/postMethod")
    public SearchParam postMethod(@RequestBody SearchParam searchParam) {
        // RequestBody로 지정해줘야 함.
        return searchParam;
    }
}
