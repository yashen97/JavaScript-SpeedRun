var collection={
    "123":{
        "album":"Slippery when wet",
        "artist":"Bon Jovi",
        "tracks":[
            "Let it Rock",
            "You give love a bad name"
        ]
    },
    "456":{
        "album":"1999",
        "artist":"Prince",
        "tracks":[
            "1999",
            "little red corvette"
        ]
    },
    "789":{
        "artist":"Robert Plamer",
        "tracks":[]
    },
    "101":{
        "album":"ABBA Gold"
    }
}

//keep a copy of the collection for tests
//var collectionCopy=JSON.parse(JSON.stringify(collection));

//Only change code below this line





function updateRecoeds(id,prop,value) {
    if (value === "") {
        delete collection.id.prop;
    } else if(prop==="tracks") {
        collection[id][prop]=collection[id][prop] ||[];
        collection[id][prop].push(value);
    }else{
        collection[id][prop]=value;
    }

    return collection;
    
} 

console.log(updateRecoeds("789","artist","test"));


