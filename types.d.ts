type getUserType = {
    "id": number,
    "firstName": string,
    "lastName": string,
    "email": string,
    "userName": string,
    "password": string,
    "userId": string
}
type addUserType = {
    "firstName": string,
    "lastName": string,
    "email": string,
    "userName": string,
    "password": string,
    "userId": string
}
type getPPGameType = {
    "player1UserID" : string,
    "player2UserID" : string,
    "officiatorUserID" : string,
    "gameScore" : number[][],
    "winner" : string
}