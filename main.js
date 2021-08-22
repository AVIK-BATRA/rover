canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

rover_height=90
rover_width=100
nasa_bg_images=["1.jpg","2.jpg","3.jpg","4.jpg"]
random_number=Math.floor(Math.random()*4)
background_image=nasa_bg_images[random_number]
rover_image="rover.png"
rover_x=10
rover_y=10

function add(){
    background_tag=new Image()
    background_tag.onload=uploadBackground
    background_tag.src=background_image

    rover_tag=new Image()
    rover_tag.onload=uploadrover
    rover_tag.src=rover_image
}
function uploadBackground(){
    ctx.drawImage(background_tag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_tag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    key_pressed=e.keyCode
    console.log(key_pressed)
    if(key_pressed =="37")
    {
        left()
        console.log("left")
    }
    if(key_pressed =="38")
    {
        up()
        console.log("up")
    }
    if(key_pressed =="39")
    {
        right()
        console.log("right")
    }
    if(key_pressed =="40")
    {
        down()
        console.log("down")
    }
}
function left(){
    if(rover_x>=0) 
    {rover_x=rover_x-10
    uploadBackground()
    uploadrover()
    }
    
}
function right(){
    if(rover_x<=700)
    {rover_x=rover_x+10
        uploadBackground()
        uploadrover()
    }
}

function down(){
    if(rover_y<=500)
    {rover_y=rover_y+10
        uploadBackground()
        uploadrover()}
    
}
function up(){
    if(rover_y>=0)
    {rover_y=rover_y-10
    uploadBackground()
    uploadrover()
    }
}


