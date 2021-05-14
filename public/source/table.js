$(document).ready(function () {
    var dataSet = [
        {
            "#": "<b>1</b>",
            "name": "Jimmy Findlay",
            "age": "28 yr",
            "job": "Engineer",
            "symt": "Anorexia nervosa",
            "condis": "None ",
            "prio": "<b class='text-danger'>1</b>",
            "progress":"1",
        },
        {
            "#": "<b>2</b>",
            "name": "Sam Porter",
            "age": "23 yr",
            "job": "Hotel Porter",
            "symt": "Breathing-related sleep disorders",
            "condis": "None",
            "prio": "<b class='text-warning'>2</b>",
            "progress":"1",
        },
        {
            "#": "<b>3</b>",
            "name": "Daryl Duarte",
            "age": "15 yr",
            "job": "Student",
            "symt": "Agoraphobia",
            "condis": "None",
            "prio": "<b class='text-warning'>2</b>",
            "progress":"0",
        }
    ];


    var table = $('#myTable').DataTable({
        responsive: true,       //for responsive column display
        deferRender: true,      //if large data, use this option
        data: dataSet,
        columns: [
            { data: "#", title: "#"},
            { data: "name", title: "Patient's Name" },
            { data: "age", title: "Age" },
            { data: "job", title: "Job" },
            { data: "symt", title: "Symptom" },
            { data: "condis", title: "Congenital Disease" },
            { data: "prio", title: "Priority" },
            { title: "Medical Record", defaultContent: "<button id='btnMed' class='btn btn-info mt-2'>Check</button>", orderable: false },
            {
                data: "progress",
                title: "Progress",
                render: function (data, type, row) {
                    let btt = "<p class='text-primary'>In Process</p>";
                    if (data == 0) {
                        btt = "<p class='text-success'>Completed</p>";
                    }

                    return btt;
                }
            }
        ]
    });

    $("#btnUp").click(function (){
        $("#modalUp").modal("show");
        
    });

    $('#myTable tbody').on("click", "#btnMed", function () {
        $("#modalTel").modal("show");
} );


    $('#myTable tbody').on("click", "#btnDel", function () {
            table
                .row( $(this).parents('tr') )
                .remove()
                .draw();
            con = 0;
    } );

        
    $("#btnSub").click(function(){
        let a = $("#probtxt").val();
        let b = $("#ses").val();
        let c = $("#date").val();
        if(a != "" && b != 0 && c != ""){
        $("#alertsuc").show();
        $("#alerterr").hide();
        }
        else{
            $("#alerterr").show();
            $("#alertsuc").hide();
        }
        });

        $("#btnSub2").click(function(){
            let a = $("#txtprobl").val();
            let b = $("#ses").val();
            let c = $("#date").val();
            if(a != "" && b != 0 && c != ""){
            $("#alertsuc").show();
            $("#alerterr").hide();
            }
            else{
                $("#alerterr").show();
                $("#alertsuc").hide();
            }
            });


    
});

