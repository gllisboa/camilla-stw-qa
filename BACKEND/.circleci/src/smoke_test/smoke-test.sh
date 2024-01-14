check_status_request() {
    URL=$1
    METHOD=$2
    HEADERS=$3
    DATA_PAYLOAD=$4

    # If an access token is provided, include it in the headers
    if [ -n "$ACCESS_TOKEN" ]; then
        HEADERS="-H 'Authorization: Bearer $ACCESS_TOKEN' $HEADERS"
    fi

    # Make the request and capture the response
    RESPONSE=$(curl --write-out '%{http_code}' --silent --output /dev/null --request "$METHOD" --url "$URL" --header "$HEADERS" --data-raw "$DATA_PAYLOAD" --show-error) || { echo "Curl failed for $URL"; exit 1; }
    CODE=$(echo "$RESPONSE" | head -n 1)
    BODY=$(echo "$RESPONSE" | tail -n 1)
    if [ "$CODE" -eq '200' ]; then
        echo "$METHOD $URL - Status Code: $CODE - SUCCESS"
        if [ -n "$BODY" ]; then
            echo "Response Body: $BODY"
        fi
        
        sleep 1
        return 0
    else
        echo "$METHOD $URL - Status Code: $CODE - FAILURE"
        echo "Response Body: $(curl --write-out '\n%{http_code}\n' --silent --request "$METHOD" --url "$URL" --header "$HEADERS" --data-raw "$DATA_PAYLOAD" --show-error)"
        
        sleep 2
        
        exit 1
    fi
    
}

# View DDD-Forum as a non-registered user
check_status_request "http://localhost:3000" "GET" "" ""
check_status_request "http://localhost:3000/api/v1/posts/popular" "GET" "" ""
check_status_request "http://localhost:3000/api/v1/posts/recent" "GET" "" ""
check_status_request "http://localhost:3000/api/v1/posts/allascending" "GET" "" ""
check_status_request "http://localhost:3000/join" "GET" "" ""
check_status_request "http://localhost:3000/api/v1/me" "GET" "" ""

# Creation of an account
check_status_request "http://localhost:5001/api/v1/users" "POST" "Content-Type: application/json" "{\"email\": \"smoke-test@gmail.com\", \"username\": \"smoke-test\", \"password\": \"smoke-test\"}"

# Login as a registered user
ACCESS_TOKEN=$(check_status_request "http://localhost:5001/api/v1/users/login" "POST" "Content-Type: application/json" "{\"username\": \"smoke-test\", \"password\": \"smoke-test\"}")
echo "Access Token: $ACCESS_TOKEN"

# Make requests with the access token as a Registered User
check_status_request "http://localhost:5001/api/v1/posts/popular" "GET" "" ""
check_status_request "http://localhost:5001/api/v1/posts/recent" "GET" "" ""
check_status_request "http://localhost:5001/api/v1/posts/allascending" "GET" "" ""
check_status_request "http://localhost:3000/statistics" "GET" "" ""