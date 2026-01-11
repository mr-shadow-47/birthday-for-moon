const app=document.getElementById('app');
const music=document.getElementById('bgMusic');
let btn=document.getElementById('actionBtn');
let step=0;

const messages=`Dear Moon,

This is my first open letter to you.
Please accept the love wrung from the deepest chamber of my heart.

You are a lone star, far away-
Beyond my reach, beyond my right to touch.
The moon is beautiful only in the distant sky;
If one tries to touch it, it would lose its purity.

Yet, dear Moon, do you know-
About 384,400 kilometers away from you,
Another moon has entered my life.
Unlike you, she is not distant;
She is very close to me.
One I can touch if I wish,
One I can tell all the secrets of my heart-
While gazing at the night sky.

You know, the two of us look at you and share stories.
Sometimes it feels as if you blush-
Hiding yourself behind the clouds.
I rather like this sulking of yours.

She, too, sometimes sulks
And hides herself from me.
But just as you return after your sulk
And fill the night with light,
She also returns
And illuminates my life anew.

Sometimes marks appear on your face-
Which, of course, are not your fault.
Who, after all, is more perfect than you?
Yet she is not inferior to you in any way.

Dear Moon,
From that distant sky, pray
For my closest moon.
Pray for our love.
Pray that-
For a long time, together,
Hand in hand, head on shoulder,
We may keep watching you
From this very distance of 384,400 kilometers.

Keep all the stars around you
Far away from my moon.

Amidst thousands of stars,
Stay well.

Yours sincerely,
Your admirer
Shihab`.split('\n');

function next(){
  step++;

  if(step===1){
    btn.innerText="Welcome to the star's";
    app.classList.add('sky');
  }

  if(step===2){
    createStars();
    btn.innerText="Lets play music";
  }

  if(step===3){
    music.play();
    setTimeout(()=>{
      music.pause();
      app.innerHTML='<button id="actionBtn">Welcome to Moon</button>';
      btn=document.getElementById('actionBtn');
      btn.onclick=next;
    },10000);
  }

  if(step===4){
    showMoon();
  }

  if(step===5){
    showMessages();
  }
}

btn.onclick=next;

function createStars(){
  for(let i=0;i<120;i++){
    const s=document.createElement('div');
    s.className='star';
    s.style.top=Math.random()*100+'%';
    s.style.left=Math.random()*100+'%';
    app.appendChild(s);
  }
}

function showMoon(){
  app.innerHTML='';
  const img=document.createElement('img');
  img.src='Moon1.png';
  img.className='moon';
  app.appendChild(img);
  const b=document.createElement('button');
  b.innerText='See messages';
  b.onclick=next;
  app.appendChild(b);
}

function showMessages(){
  const box=document.createElement('div');
  box.id='messageBox';
  app.appendChild(box);
  let i=0;
  const interval=setInterval(()=>{
    if(i>=messages.length){
      clearInterval(interval);
      showFinalMoon();
      return;
    }
    box.innerText=messages[i++];
    box.style.opacity=1;
    setTimeout(()=>box.style.opacity=0,2200);
  },2600);
}

function showFinalMoon(){
  app.innerHTML='';
  const img=document.createElement('img');
  img.src='Moon2.png';
  img.className='fullImage';
  app.appendChild(img);
}
