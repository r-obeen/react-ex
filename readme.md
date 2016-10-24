The goal of this exercise is to create a minimal mentions feed, similar to the one we currently use in Mention.  
You will be evaluated on your abilities to use a REST API, promises, json and react.

### Objectives:
 * Send an API call 
 * Display the results using React components

### In-depth:

##### 1) API CALL: 
Write an API Call (using the technology of your choice):  
`https://web.mention.net/api/accounts/{account_id}/alerts/{alert_id}/mentions`

Parameters: 
 * `account_id = 661072_53ca2jsh01c88c4wwkc0wockckk0w4440o4o0w8wkkgco4o888`  
 * `alert_id = 1214654`  
 
Query string:
 * `access_token = ZDdmNDVmYzU1NWZkMDkwMDc4YjBjMzYyZDk2MDI3NGVlNmFmNTJkZDU5MzBhYWRiZGZmNzAxOGM1NDkzNDYxYQ`
 
Warning: access_token must be in the query string.  
More information here:
 * [Doc Authentification](https://dev.mention.com/current/src/index.html#in-the-query-string) 
 * [Doc Endpoint](https://dev.mention.com/current/src/account/alert/mention/GetMentions.html)


> Nb: You will have to activate Same Domain Origin Policy on your browser:  
> Firefox: https://addons.mozilla.org/fr/firefox/addon/cors-everywhere/  
> Chrome: http://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome

##### 2) FEED REACT: 

Display some mentions from the API using at least two components:  

 * `Feed` will be the parent component and will include a list of `FeedItem`.  
 * `FeedItem` will be the child component and will display a mention.

Nb: `React`, `ReactDOM` and `Babel` are included in this archive.  
Feel free to use some CSS for styling purpose.  
You will not be evaluated on different browsers for this test. Optimize your code for one browser and let us know which one to use for our review.

### Ultimate Goal:
![objectif](http://i.imgur.com/GVPappy.jpg)


### Before running
This project uses **Gulp** for Sass compiling & CSS minifying.  
Please install **npm**.  
Then run `npm install`.  
You are good to go !