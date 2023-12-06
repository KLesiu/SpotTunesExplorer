package com.klesiu.api;



import com.klesiu.api.Auth.AuthorizationRequest;
import org.springframework.web.bind.annotation.*;
import se.michaelthelin.spotify.model_objects.specification.Artist;
import se.michaelthelin.spotify.model_objects.specification.Paging;
import se.michaelthelin.spotify.requests.authorization.authorization_code.AuthorizationCodeRequest;
import se.michaelthelin.spotify.requests.data.personalization.simplified.GetUsersTopArtistsRequest;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import static com.klesiu.api.Auth.UserAuthorization.*;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class UserController{
    @PostMapping("/login")
    public Map<String, String> login (@RequestBody AuthorizationRequest request){
        System.out.println("CALL");
        String code = request.getCode();
        AuthorizationCodeRequest authorizationCodeRequest = spotifyApi.authorizationCode(code)
                .build();
        authorizationCode_Sync(authorizationCodeRequest);
        System.out.println(spotifyApi.getAccessToken());
        System.out.println(spotifyApi.getRefreshToken());

        Map<String,String> data = new HashMap<>();
        data.put("accessToken",spotifyApi.getAccessToken());
        data.put("refreshToken",spotifyApi.getRefreshToken());
        return data;
    }

}