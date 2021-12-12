var car = {
    make: "lexus",
    speed: 160,
    engine: {
        size: 2.0,
        make: "toyota",
        fuel: "patrol",
        pistons: [ {make: "toyota"}, {make: "toyota2"} ]

    },
    drive: function(){ return "drive"; }
};

var array = [
    "string",
    200,
    [ "embed", 200],
    { car: "range rover"},
    function(){ return "drive"; }
];