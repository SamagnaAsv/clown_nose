noseX = 0;
noseY = 0;

function preload()
{
 clown_nose = loadImage("https://i.postimg.cc/fW0n32GV/pngtree-clown-red-nose-animation-illustration-image-1243961-removebg-preview.png")
}

function setup()
    {
        canvas = createCanvas(350, 350);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(350,350)
        video.hide();

        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
    }

    function modelLoaded()
    {
        console.log('PoseNet Is Initialized');
    }

    function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("nose x = " + noseX);
            console.log("nose y = " + noseY);
        }
    }

    function draw()
    {
        image(video, 0, 0, 350, 350);
        image(clown_nose, noseX-15, noseY-15, 35, 35);
    }

    function take_snapshot()
    {
        save("ClownNoseFilter.png");
    }
    