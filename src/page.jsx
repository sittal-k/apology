import { useState } from "react";


export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "Ekchoti yes bhandeu na",
      "Feri socha",
      "Sachi?",
      "Thikai cha!",
      "Feri last socha na tara",
      "Don't be rude",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "Ok ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <img src="https://media1.tenor.com/m/EW8DRbGzxDgAAAAC/im-sorry-forgive-me.gif" />
        <div className="text-4xl font-bold my-4">Ok yay!!!</div>
        </>
      ) : (
        <>
         
          <img className="h-[200px]" src="https://media1.tenor.com/m/EW8DRbGzxDgAAAAC/im-sorry-forgive-me.gif" />
          <h1 className="text-1xl my-4 text-center ml-40 mr-40">Hi babe,<br></br>I know this is kinda late tara ma asti dekhi timile bhaneko kura sochya sochai thye ani I don't know socheko kura kasari words ma lekhum tara I'll try my best. I know hamile call ma sabai kura explain garisakem tara I felt like I couldn't express everything I felt in call so I just wrote my feelings out esma. Ani I've written babe everywhere because jati je bhayeni I feel comfortable calling you that aru kei vanda pani. So tyesko lagi chai Sorryyyy. <br></br><br /> Sab vanda first I'm sorry for everything, sorry for not being there for you,for not setting my priorities straight,and mainly I'm sorry for always trying to win over you everything ma aafno nachaine dumb arguements lyayera. I'm sorry for doing and bringing all these stuff and forgetting what truly mattered-us. All the things you said asti have really affected me ekdamai ani I'm willing to change and I'm starting to change to be that same Utsav or even better that you fell for. Babe, maile asti jati argue gare pani I deeply respect your decision of wanting to take some space and I know it will jhan strengthen our bond if it goes well. Babe, I want you to know that hami jun state ma bhaye pani I will always try to support you, help you with every minor kura that I can do ani I'll always try to be there for you jati je bhaye pani. I know babe right now you are really stressed about your career and growth and it's one of the reasons you've taken this space, but I promise you babe from now on as long as I can and to the best I can I'll help us grow together and I promise you I'll do whatever it takes tyo garna lai. <br></br><br></br> When you're ready to come back from this space, I promise you that you will see the me who you've always wanted to see and be with, not just in words but in actions as well. Ani I know I'm ekdamai bad at expressing or showing it but babe I've always loved you since the start of our relationship and will always do as long as we share some kind bond either as a friend or as a partner.<br></br><br></br> I love you❤️<br></br><br></br>Do you?
          </h1>
          <div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}