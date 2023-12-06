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
    @GetMapping("/top/artists")
    public Artist[] getUserTopArtists(){
        GetUsersTopArtistsRequest getUsersTopArtistsRequest = spotifyApi
                .getUsersTopArtists()
                .time_range("long_term")
                .limit(20)
                .offset(0)
                .build();
        try{
            final Paging<Artist> artistPaging = getUsersTopArtistsRequest.execute();
            System.out.println(Arrays.toString(artistPaging.getItems()));
            return artistPaging.getItems();
        }catch(Exception e){
            System.out.println(e.getMessage());
        }
        return new Artist[0];
    };
}