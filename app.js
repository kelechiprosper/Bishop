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

//function Apple(x, y, colour, score)
//{
   // this.x=x;
    //this.y=y;
    //this.colour=colour;
   // this.score=score;
//}

//var Apple1  = new Apple(20, 10, "red", 400);
//var Apple2  = new Apple(14, 12, "blue", 100);
//var Apple3 = new Apple(30, 60, "white", 250);

var carsLeft = 1,
carsRight = 0,
greenMan = "no";

if( greenMan === "yes" )
 {
    console.log('cross the road');
 }
 else if( greenMan === "yes" && (carsLeft === 0 || carsRight === 0)
   )
 {
    console.log(' All clear! cross the road' );
 }
 else
 {
    console.log( "stay where you are!" );
 }