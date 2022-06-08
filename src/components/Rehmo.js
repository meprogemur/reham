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
                <h1>My sweet baby Rehmmoo,</h1>
                <h1>a very very like I meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>One random day I felt like talking to someone new then I remembered, there is a Syrian girl in our college</h1>
                <h1>and oh well seems like one of the best decision i made</h1>
                <h1>played guitar for you that day hehe
                    <PlaySound
                        song={guitar}
                        button={false}
                        loop={false}
                        cl={'mscont'}
                    />
                </h1>
                <h1>thanks to all gods out there that landed me in ur inbox</h1>
                <h1>i had this instant connection, all ur wittyness and cuteness</h1>
                <h1>goood-freaaakinn-dammniiitt u soo cute</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
                <h1>a very very like i meaaann
                    verrrryyyyyy happppppy birthdayyyy to youuu</h1>
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