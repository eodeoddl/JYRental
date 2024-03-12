#!/bin/bash

# Check if the correct number of arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <Name_to_replace> <token_code>"
    exit 1
fi

NAME_TO_REPLACE=$1
TOKEN_CODE=$2
MFA_ARN="arn:aws:iam::276078155502:mfa/$NAME_TO_REPLACE"
DURATION_SECONDS=86400 # 24 hours

# Get the session token
SESSION_JSON=$(aws sts get-session-token --serial-number $MFA_ARN --token-code $TOKEN_CODE --duration-seconds $DURATION_SECONDS)

# Check if the command was successful
if [ $? -ne 0 ]; then
    echo "Failed to get session token"
    exit 2
fi

# Extract credentials from the JSON output
AWS_ACCESS_KEY_ID=$(echo $SESSION_JSON | jq -r '.Credentials.AccessKeyId')
AWS_SECRET_ACCESS_KEY=$(echo $SESSION_JSON | jq -r '.Credentials.SecretAccessKey')
AWS_SESSION_TOKEN=$(echo $SESSION_JSON | jq -r '.Credentials.SessionToken')

# Check if jq successfully extracted the values
if [ -z "$AWS_ACCESS_KEY_ID" ] || [ -z "$AWS_SECRET_ACCESS_KEY" ] || [ -z "$AWS_SESSION_TOKEN" ]; then
    echo "Failed to extract credentials"
    exit 3
fi

# Define the credentials file path
CREDENTIALS_FILE="$HOME/.aws/credentials"

# Check if credentials file exists
if [ ! -f "$CREDENTIALS_FILE" ]; then
    echo "AWS credentials file not found. Please ensure AWS CLI is configured."
    exit 4
fi

# Backup the credentials file
cp "$CREDENTIALS_FILE" "$CREDENTIALS_FILE.bak"

# Update or add the mfa profile in ~/.aws/credentials
awk -v id="$AWS_ACCESS_KEY_ID" -v secret="$AWS_SECRET_ACCESS_KEY" -v token="$AWS_SESSION_TOKEN" '
BEGIN {
    printProfile = 1
    updated = 0
}
/^\[mfa\]/ {
    print
    print "aws_access_key_id = " id
    print "aws_secret_access_key = " secret
    print "aws_session_token = " token
    printProfile = 0
    updated = 1
    next
}
printProfile == 0 && (/^aws_access_key_id/ || /^aws_secret_access_key/ || /^aws_session_token/) {
    next
}
{ print }
END {
    if (!updated) {
        print "\n[mfa]\naws_access_key_id = " id "\naws_secret_access_key = " secret "\naws_session_token = " token
    }
}
' "$CREDENTIALS_FILE.bak" > "$CREDENTIALS_FILE"

echo "The mfa profile has been updated in ~/.aws/credentials. you can use it by adding '--profile mfa' to your aws cli commands"