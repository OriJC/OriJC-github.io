$(()=>{
    var posConv = { };
    for(let m=0; m<16; m++)
    {   
        $("#mainwindow").append("<div class='puzzle' id='Puz"+m+"'>"+(m+1)+"</div>");
        $("#Puz"+m).addClass("block");
        var row=parseInt(m / 4);
        var col = m%4;
        posConv[m] = { row:row, col:col };
    }
    $("#Puz15").empty();


    $(".puzzle").click(function(){
        var cells = $("#mainwindow div");
        var i = cells.index(this);
        var empty = getPostion(i);
        while (empty.length > 0) {
            var j = empty.pop();
            if (cells.eq(j).attr("id") == "Puz15") 
            {
                if (i > j) { var k = j; j = i; i = k; }
                var ahead = cells.eq(i);
                var behind = cells.eq(j);
                var behindPrev = behind.prev();
                if (Math.abs(i - j) == 1)
                    behind.after(ahead);
                else 
                {
                    ahead.after(behind);
                    behindPrev.after(ahead);
                }
                break;
            }       
        } 
    })

    $('#btn').on('click',()=>{
        for(let m=0;m<500;m++){
            var block = $("#mainwindow div");
            blocks.eq(toMove[ 
                parseInt(rand(1,9999) * toMove.length) 
            ]).click();
        }
    })

    
    var getPostion=(i)=>{
        var pool = []
        var row = posConv[i].row, col = posConv[i].col;
        if (row > 0)
            pool.push((row - 1) *  4 + col);
        if (row < 4)
            pool.push((row + 1) * 4 + col);
        if (col  >  0)
            pool.push( i - 1);
        if (col < 4)
            pool.push( i + 1);
        return pool;
    }

    var rand = (start, end) => {
        var r
        n = end - start + 1 
        r = Math.random() * n 
        r = Math.floor(r) 
        r += start 
    }
})