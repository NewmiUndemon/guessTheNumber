export function Home({name, setName}) {
    return (
        <div className="stuff">
            <input type="text" placeholder='Ingresa tu nombre' onChange={e => {setName(e.target.value), console.log(e.target.value) }} />
            <button>Iniciar</button>
            <div className="box"><h1 className="theNumber">?</h1></div>
            <input type="number" placeholder="Ingresa un número" min={0} max={100}/>
            <button className="checkButton">Verificar</button>
            <h1 className="info"></h1>
            <h5 className="history"></h5>
        </div>
    )
}