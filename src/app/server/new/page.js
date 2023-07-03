import "@/style/newServer.scss"

export default async function NewServer(){
    return(
        <div className="main">
            <h2>서버를 만들어 볼까요?</h2>
            <form>
                <h4>서버의 이름은 무엇인가요?</h4>
                <input className="server-input"/>
            </form>
        </div>
    )
}