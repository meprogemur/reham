import Spline from '@splinetool/react-spline';
import '../Rehmo.css'
import reh from '../images/reh.png'
import PlaySound from './PlaySound';
import happybirthday from '../music/happyguitar.mp3'
import mavoice from '../music/mavoice.aac'
import guitar from '../music/guitar.mpeg'

export default function Rehmo() {
    return (
        <div className='molang'>
            <Spline class='model' scene="https://draft.spline.design/wTuxCF7JPfknEV0Z/scene.spline" />
            <div className='bitch'>
                <div className='controls'>
                    <PlaySound
                        song={happybirthday}
                        button={true}
                        loop={true}
                    />
                </div>
                <img className='cover2' src='https://problog.ftdi.com/blog/wp-content/uploads/2016/08/ProFlowers-Blog-Post-1_Graphics-4.png' alt='reh' />
                <img className='cover' src={reh} alt='reh' />
                <h1>My sweet baby Rehmmoo 💜,</h1>
                <h1>a very very like I meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu 🎂</h1>
                <h1>One random day I felt like talking to someone new then I remembered, there is a Syrian girl 🙆‍♀️ in our college</h1>
                <h1>and oh well seems like one of the best decision i made</h1>
                <h1>played guitar for you that day hehe 🎸
                    <PlaySound
                        song={guitar}
                        button={false}
                        loop={false}
                        cl={'mscont'}
                    />
                </h1>
                <h1>thanks to all gods out there 🙏 that landed me in ur inbox</h1>
                <h1>i had this instant connection, all ur wittyness and cuteness 😍</h1>
                <h1>goood-freaaakinn-dammniiitt u soo cute 😫</h1>
                <h1>i know i'm not here thats why i made this for u annd
                    baby oh baby i'm writing this while u r sleeping on call 😴
                </h1>
                <h1>i was cool uk, like no cringe jokes no cringe romance
                    but yar when i see u i do cringe things 🤣🤣🤣</h1>
                <h1>it's your day my baby, i want u to have the fun that no one ever got</h1>
                <h1>i'm here to make you feel happy 😊, i'm here to make you feel good</h1>
                <h1>ik u miss me 😏</h1>
                <h1>u r just so fun to talk with uk</h1>
                <h1>have a blast today 💣💥</h1>
                <h1>
                    yarrrrr
                </h1>
                <h1>i wanna kiss u 😚</h1>
                <h1>i wanna hug u 😚</h1>
                <h1>kiss ur lips 😚</h1>
                <h1>kiss ur neck 😚</h1>
                <h1>grab u by the waist and pull u close 😚</h1>
                <h1>grab ur arsa hehe 🍑🖐🏼</h1>
                <h1>when i come i taking all the kisses that i asked for and u never gave</h1>
                <h1>and</h1>
                <h1>what the hell are we waiting for yar be my wife
                    already 👰
                </h1>
                <h1>
                    i'll give free massages think about it 💆‍♀️
                </h1>
                <h1>
                    happy birthday once again sweetheart,
                    know that i'm thinking about u
                </h1>
                <h1>also</h1>
                <h1>
                    (*)(*)
                </h1>
                <h1>
                    boobies
                </h1>
                <PlaySound
                    song={mavoice}
                    button={false}
                    loop={false}
                    cl={'misconbutt'}
                />
            </div>
        </div>
    );
}