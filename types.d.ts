type getUserType = {
    "id": number,
    "firstName": string,
    "lastName": string,
    "email": string,
    "userName": string,
    "password": string,
}
type addUserType = {
    "firstName": string,
    "lastName": string,
    "email": string,
    "userName": string,
    "password": string,
}


type getPPGameType = {
    "id": number,
    "player1UserID" : string,
    "player2UserID" : string,
    "officiatorUserID" : string,
    "gameScore" : number[][],
    "winner" : string
}
type addPPGameType = {
    "player1UserID" : string,
    "player2UserID" : string,
    "officiatorUserID" : string,
    "gameScore" : number[][],
    "winner" : string
}