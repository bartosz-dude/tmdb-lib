# tmdb-lib-js

---

Unofficial Javascript wrapper / library for [The Movie Database](https://www.themoviedb.org/) API.

<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" alt="The Movie Database Logo" width="400"/>

---

## Result types are based on [Official Api Reference](https://developer.themoviedb.org/reference/intro/getting-started) Responses definitions, but some of them are missing or incorrect in official definitions. It's more likely to happen in responses with multiple types of data. If you encounter one, please [rise an issue here](https://github.com/bartosz-dude/tmdb-lib-js/issues)

## Info

Currently library implements `v3` and `v4` of The Movie Database API. This wrapper considers `v3` to be the default so for example `TMDB.account.<some method>` calls the `v3` api. If you want to call `v4` you need to call `TMDB.v4.account.<some method>`.

This library is currently being written. You can check implemented endpoints in [this list](API_IMPLENTATION.md).

After implementing all endpoints I plan on making React version of this library.

## Installation

```terminal
npm instal tmdb-lib-js
```

## Usage

### API Endpoints

`tmdb-lib-js` follows [TMDB official documentation](https://developer.themoviedb.org/reference/intro/getting-started) organization of API endpoints. You access them like this:

```typescript
const details = await TMDB.networks.details(
 { network_id: 123 },
 "readAccessToken",
)
```

Fully supports types for each endpoint `request` and `response`.

`tmdb-lib-js` has built-in fetcher for each endpint. The fetcher injects the TMDB API Read Access Token into the request. To use it, you set Access Token in the method. You can also use custom fetcher by passing it instead of Access Token.

If you are implementing this library client side (eg. in firebase app) I reccomend using custom fetcher that is that injects Access Token server side (eg. cloud functions in firebase) to not expose said token to the client.

### Custom Fetcher

To work correctly custom fetcher must satisfy its type in endpint methods.

According to this type, custom fetcher must implement `GET`, `POST` and `DELETE` html requests like this:

```typescript
    {
     method: 'GET',
     headers: {
      accept: 'application/json',
      Authorization: `Bearer ${readAccessToken}`
     }
    }

    {
     method: 'POST',
     headers: {
      accept: 'application/json',
      "content-type": 'application/json',
      Authorization: `Bearer ${readAccessToken}`
     },
     body: request.rawBody ? JSON.stringify(request.rawBody) : ""
    }

    {
     method: 'DELETE',
     headers: {
      accept: 'application/json',
      "content-type": 'application/json',
      Authorization: `Bearer ${readAccessToken}`
     },
     body: request.rawBody ? JSON.stringify(request.rawBody) : ""
    }

```

I recommend looking into [built-in fetcher](./src/fetcher.ts) as a reference for making custom fetcher.

### Images

not implemented yet.
