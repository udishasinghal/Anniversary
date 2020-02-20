$(()=>{
    $('#show').click(()=>{
        $.get(
            '/msg',(data)=>{
                for(let item of data){
                    $('#msglist').append(
                        $('<li>').append(item.description)
                    )
                }
            }
        )
    })
})