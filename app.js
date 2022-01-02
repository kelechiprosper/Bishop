// var car = {
//     make: "lexus",
//     speed: 160,
//     engine: {
//         size: 2.0,
//         make: "toyota",
//         fuel: "patrol",
//         pistons: [ {maker: "toyota"}, {maker: "toyota2"} ]

//     },
//     drive: function(){ return "drive"; }
// };

// var array = [
//     "string",
//     200,
//     [ "embed", 200],
//     { car: "range rover"},
//     function(){ return "drive"; },
// ];
// console.log(car.make);

// function name(fullname)
// {

//     return fullname();
// }

    // var obj = function(){};

    // console.log (name( function(){return "embed"; } )
    // );



    // console.log(
    //     name({firstname:"HIGH", lastname:"CHIEF"})
    // );
    // var fullname = "HIGH CHIEF";

    // function concat( name )
    // {
    //     return"MR." + name;
    // }

    // return concat (fullname);

// console.log( myName, printName() );

// var myName = "Lawrence";

// function printName()
// {
//     console.log( a, embed() );

//     var a = 100;

//     function embed(){return "hello"; }

//     return "nathan dude";
// }

   // var engine ={
   // maker: "lexus",
    //headGasket:{
       // maker:"basketball",
        //pots:[
           // "piston1",
            //"piston2"
       // ]
    //}
//};

//function runExpression()

   // {

   // var a = 10;

    //function add()
        //{

       // test = "New string";
        //test2 = "new string";
        //test3 = "new string";
    //}
    //add();
//}

//console.log( this );

var object = {
    prop: this,
    embed:
    {
        embed:true,
    method: function(){ return this; }
    }
};

var array = [
    this,
    function(){ return this; }
];

function global(){
    //return this;
    console.log('from global', this );
    
    function sub(){console.log('from sub', this)}

    sub();
}

global.call ( object );

new global();
