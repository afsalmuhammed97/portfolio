$('#form').validate({
    rules:{
        name:"required",
        Email:"required",
        Message:"required",
        name:"required"
    }


    
})

$("#form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbx6tv07y9ZpNVovQ89KzxSf040Fw8IjJt5n4Zy8b_JcgnsqFpDoBVbhXg9MyAOe7hNi/exec",
        data:$("#form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
