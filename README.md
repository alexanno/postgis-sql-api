# postgis-sql-api
Simple SQL-API for PostGIS. Outputs GeoJSON. 

Host as a Node web app or as a function app or similar

The db_user should have _only_ SELECT permissions. There are no security measures in the function. Use at own risk! If the query gives an error - a 500 without any text is returned as output. As a poor man's measure for some security. 

Usage example
```
https://alenos-tester-sql-api.azurewebsites.net/api/sqlapi?sql=select%20*%20from%20valle_snoskuter%20order%20by%20geom%20%3C-%3E%20%27SRID=4326;POINT(9.33%2058.99)%27%20limit%202

```