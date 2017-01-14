# Huge-Hackathon-2017

## Instructions

Create a .env file and the set enviroment variables:

BASE_URL='...'
CLARIFAI_ID='...'
CLARIFAI_SECRET='...'
CLARIFAI_MODEL_ID='...'
MAILGUN_API_KEY='...'
MAILGUN_DOMAIN='...'
MAILGUN_PUBLIC_KEY='...'
MAILGUN_SMTP_LOGIN='...'
MAILGUN_SMTP_PASSWORD='...'
MAILGUN_SMTP_PORT='...'
MAILGUN_SMTP_SERVER='...'
GOOGLE_ANALYTICS_TRACKING_ID='...'

## API

### Path: /api/v1/currency
#### Request:
```json
  {
    "id": "123",
    "base64": "image_long_something"
  }
```

#### Response:
Data:
```json
{
  "bill": "1000",
  "unit": "COP"
}
```
Status: 200

### /api/v1/email
#### Request:
```json
  {
    "id": "456",
    "geo": {
      "lat": "123123123.123",
      "lon": "123123123.123",
      "name": "Cr 11 N 11 111, Medellin"
    },
    "emails": [                     (optional)
      "email@test.com",
      "email@test.com",
      ...
    ],
    "name": "Aurelio Cheveroni"     (optional)
  }
```

#### Response:
Status: 200

### /api/v1/analitycs
#### Request:
```json
{
  "category": "",
  "action": ""
}
```

#### Response:
Status: 200
