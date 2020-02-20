$(()=>{
    //function refresh()
    
    //refresh()

    $('#submit').click(()=>{
        $.post(
            '/msg',{
                description : $('#newmsg').val()
            }
        )
    })    
})