package com.ssafy.vue.config;

//import java.util.HashSet;
//import java.util.Set;
//
//import org.springframework.boot.autoconfigure.web.ServerProperties;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;

//import springfox.documentation.builders.ApiInfoBuilder;
//import springfox.documentation.builders.PathSelectors;
//import springfox.documentation.builders.RequestHandlerSelectors;
//import springfox.documentation.service.ApiInfo;
//import springfox.documentation.service.Contact;
//import springfox.documentation.spi.DocumentationType;
//import springfox.documentation.spring.web.plugins.Docket;

//@Configuration
public class SwaggerConfiguration_Springfox {

//	Swagger-UI 3.x 확인
//	//http://localhost/vue/swagger-ui/index.html
	
//	private final ServerProperties serverProperties;
//
//    public SwaggerConfiguration_Springfox(ServerProperties serverProperties) {
//		super();
//		this.serverProperties = serverProperties;
//	}
//	
//    @Bean
//    public Docket allApi() {
//        return new Docket(DocumentationType.OAS_30)
//        	.consumes(getConsumeContentTypes())
//        	.produces(getProduceContentTypes())
//            .groupName("ALL-API")
//            .apiInfo(allApiInfo())
//            .select()
//            .apis(RequestHandlerSelectors.basePackage("com.ssafy.vue"))
//            .paths(PathSelectors.ant("/**"))
//            .build()
//            .useDefaultResponseMessages(false);
//    }
//    
//    @Bean
//    public Docket userApi() {
//        return new Docket(DocumentationType.OAS_30)
//        	.consumes(getConsumeContentTypes())
//            .produces(getProduceContentTypes())
//            .groupName("USER-API")
//            .apiInfo(userApiInfo())
//            .select()
//            .apis(RequestHandlerSelectors.basePackage("com.ssafy.vue.member.controller"))
//            .paths(PathSelectors.ant("/vue/user/**"))
//            .build()
//            .useDefaultResponseMessages(false);
//    }
//    
//    @Bean
//    public Docket boardApi() {
//        return new Docket(DocumentationType.OAS_30)
//        	.consumes(getConsumeContentTypes())
//            .produces(getProduceContentTypes())
//            .groupName("BOARD-API")
//            .apiInfo(boardApiInfo())
//            .select()
//            .apis(RequestHandlerSelectors.basePackage("com.ssafy.vue.board.controller"))
//            .paths(PathSelectors.ant("/vue/board/**"))
//            .build()
//            .useDefaultResponseMessages(false);
//    }
//    
//    @Bean
//    public Docket mapApi() {
//        return new Docket(DocumentationType.OAS_30)
//        	.consumes(getConsumeContentTypes())
//            .produces(getProduceContentTypes())
//            .groupName("MAP-API")
//            .apiInfo(mapApiInfo())
//            .select()
//            .apis(RequestHandlerSelectors.basePackage("com.ssafy.vue.map.controller"))
//            .paths(PathSelectors.ant("/vue/map/**"))
//            .build()
//            .useDefaultResponseMessages(false);
//    }
//    
//    private ApiInfo allApiInfo() {
//        Integer port = serverProperties.getPort();
//        return new ApiInfoBuilder()
//            .title("SSAFY Swagger Open API Docs")
//            .description(
//                "<h3>SSAFY API Reference for Developers</h3>Vuejs를 위한 API<br><img src=\"/assets/img/ssafy_logo.png\" width=\"150\">")
//            .version("1.0")
//            .license("SSAFY License")
//            .licenseUrl("https://www.ssafy.com/ksp/jsp/swp/etc/swpPrivacy.jsp")
//            .termsOfServiceUrl("http://edu.ssafy.com")
//            .contact(new Contact("SSAFY", "https://www.ssafy.com", "ssafy@ssafy.com"))
//            .build();
//    }
//
//    private ApiInfo userApiInfo() {
//        return new ApiInfoBuilder()
//            .title("사용자")
//            .description("<h2>사용자 API</h2>")
//            .version("1.0")
//            .license("SSAFY License")
//            .licenseUrl("https://www.ssafy.com/ksp/jsp/swp/etc/swpPrivacy.jsp")
//            .termsOfServiceUrl("http://edu.ssafy.com")
//            .contact(new Contact("SSAFY", "https://www.ssafy.com", "ssafy@ssafy.com"))
//            .build();
//    }
//    
//    private ApiInfo boardApiInfo() {
//        return new ApiInfoBuilder()
//            .title("게시판")
//            .description("<h2>게시판 API</h2>")
//            .version("1.0")
//            .license("SSAFY License")
//            .licenseUrl("https://www.ssafy.com/ksp/jsp/swp/etc/swpPrivacy.jsp")
//            .termsOfServiceUrl("http://edu.ssafy.com")
//            .contact(new Contact("SSAFY", "https://www.ssafy.com", "ssafy@ssafy.com"))
//            .build();
//    }
//    
//    private ApiInfo mapApiInfo() {
//        return new ApiInfoBuilder()
//            .title("Map")
//            .description("<h2>Map API</h2>시도 구군코드를 얻을 수 있다.")
//            .version("1.0")
//            .license("SSAFY License")
//            .licenseUrl("https://www.ssafy.com/ksp/jsp/swp/etc/swpPrivacy.jsp")
//            .termsOfServiceUrl("http://edu.ssafy.com")
//            .contact(new Contact("SSAFY", "https://www.ssafy.com", "ssafy@ssafy.com"))
//            .build();
//    }
//
//	private Set<String> getConsumeContentTypes() {
//        Set<String> consumes = new HashSet<>();
//        consumes.add("application/json;charset=UTF-8");
////      consumes.add("application/xml;charset=UTF-8");
//        consumes.add("application/x-www-form-urlencoded");
//        return consumes;
//    }
//
//    private Set<String> getProduceContentTypes() {
//        Set<String> produces = new HashSet<>();
//        produces.add("application/json;charset=UTF-8");
//        return produces;
//    }

}
