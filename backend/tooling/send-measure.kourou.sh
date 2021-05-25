curl -X POST -H  "Content-Type: application/json" "http://localhost:7512/_/payload/temperature" --data '{
  "deviceEUI": "000042",
  "degree": 21.2
}'

kourou payload:temperature --body '{
  deviceEUI: "000042",
  degree: 21.2
}'