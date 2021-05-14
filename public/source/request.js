$(document).ready(function () {
    var dataSet = [
        {
            "#": "<b>1</b>",
            "name": "Make Friends",
            "user": "Jimmy Findlay",
            "time": "20/10/2019 ",
            "progress":"0",
        },
        {
            "#": "<b>2</b>",
            "name": "Headache",
            "user": "Sam Porter",
            "time": "25/11/2019",
            "progress":"2",
        },
        {
            "#": "<b>3</b>",
            "name": "Depression",
            "user": "Daryl Duarte",
            "time": "27/12/2019",
            "progress":"1",
        }
    ];


    var table = $('#myTable').DataTable({
        responsive: true,       //for responsive column display
        deferRender: true,      //if large data, use this option
        data: dataSet,
        columns: [
            { data: "#", title: "#"},
            { data: "name", title: "Topic" },
            { data: "user", title: "Requested User" },
            { data: "time", title: "Time" },
            {
                data: "progress",
                title: "Progress",
                render: function (data, type, row) {
                    let btt = "<p class='text-primary'>In Process</p>";
                    if (data == 0) {
                        btt = "<p class='text-success'>Completed</p>";
                    } else if(data == 2){
                        btt = "<p class='text-danger'>Request Expired</p>";
                    }

                    return btt;
                }
            }
        ]
    });


    $('#myTable tbody').on("click", "#btnDel", function () {
            table
            .row( $(this).parents('tr') )
            .remove()
            .draw();
       
} );

    $("#btnCre").click(function (){
        window.location.replace("./create.html");  
    } );
});