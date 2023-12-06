package com.klesiu.api;



import com.klesiu.api.Auth.AuthorizationRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.michaelthelin.spotify.requests.authorization.authorization_code.AuthorizationCodeRequest;

import static com.klesiu.api.Auth.UserAuthorization.*;


@RestController
@RequestMapping("/api")
public class UserController{
    @PostMapping("/login")
    public String login (@RequestBody AuthorizationRequest request){
        String code = request.getCode();
        AuthorizationCodeRequest authorizationCodeRequest = spotifyApi.authorizationCode(code)
                .build();
        authorizationCode_Sync(authorizationCodeRequest);
        System.out.println(spotifyApi.getAccessToken());
        System.out.println(spotifyApi.getRefreshToken());

        return spotifyApi.getAccessToken();
    }
}