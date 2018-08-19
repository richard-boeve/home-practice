const request = require('request');
const cheerio = require('cheerio');

request('http://kiwiandcheese.com/last-days-in-chile-border-problems-and-creating-a-bond-with-bolivian-customs/', function(error, response, html){
    if(error){
        console.log('error')
    } else if 
        (response.statusCode == 200) {
        // const $ = cheerio.load(html);    
        // const title = $('.page_item page-item-100');

        // console.log(title.text());

        $('.page_item page-item-100 a').each(function(i, el){
            //const item = $(el).text();
            const link = $(el).attr('href')

            console.log(link);
        })    
    }
})