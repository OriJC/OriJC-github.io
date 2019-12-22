$(()=>{
    var postable = { };
    for(let m=0; m<16; m++)
    {   
        $("#mainwindow").append("<div class='puzzle' id='Puz"+m+"'>"+(m+1)+"</div>");
        $("#Puz"+m).addClass("block");
        var row=parseInt(m / 4);
        var col = m%4;
        postable[m] = { row:row, col:col };
    }
    $("#Puz15").empty();

    var count=0;
    $(".puzzle").click(function(){
        var cells = $("#mainwindow div");
        var i = cells.index(this);
        var empty = getPostion(i);
       // console.log(array);
        while (empty.length > 0) {
            var j = empty.pop();
            if (cells.eq(j).attr("id") == "Puz15") 
            {
                count++;
                $("#countno").html("移動次數:"+count);
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
      
        //console.log(postable);
    })

    $('#btn').on('click',()=>{
        for(let m=0;m<1000;m++){
            var block = $("#mainwindow div");
            var move = getPostion(block.index($("#Puz15")[0]));
            block.eq(move[ 
                parseInt(Math.random() * move.length) 
            ]).click();
        }
        count=0;
        $("#countno").html("移動次數:"+count);
        
      

    })

    
    var getPostion=(i)=>{
        var pool = [];
        var row = postable[i].row, col = postable[i].col;
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
    
    
})