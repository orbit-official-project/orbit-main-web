import '@/style/serverList.scss'

export default function ServerList() {
    return(
        <div className="server-list main">
            <h2>지금 오르빗엔 이런 서버가 있어요!</h2>
            <div className='server-container'>
                <Server title='레드데드리뎀션 서버' desc='디테일 변태들이 모인 게임, 맛 좀 보실래요?'/>
                <Server title='콜오브듀티 서버' desc='콜오브듀티가 진짜 총 게임의 정수임'/>
                <Server title='로블록스 서버' desc='로블록스 해보셨어요?'/>
                <Server title='마인크래프트 서버' desc='마인크래프트 같이 하실 분?'/>
                <Server title='GTA5 서버' desc='GTA에 관한 대화들을 나누어 보세요!'/>
            </div>
        </div>
    )
}

function Server(props) {
    return(
        <div className='server'>
            <img className='server-banner' src='https://media.discordapp.net/attachments/1117414094417444884/1117414128898801795/server-default-banner_00000.png?width=1193&height=671'/>
            <img className='server-icon' src='https://media.discordapp.net/attachments/1117414094417444884/1117414150298153040/server-default-icon_00000.png'/>
            <div className='server-text'>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <div className='server-counter'>
                    <p className='member-online'>온라인 - 10000명</p>
                    <p className='member'>맴버 - 100000명</p>
                </div>
            </div>
        </div>   
    )
}