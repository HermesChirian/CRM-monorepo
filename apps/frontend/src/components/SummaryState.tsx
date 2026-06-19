import  Card  from "./Card.tsx";

export default function SummaryState(){

    return(

        <div>            
            {/*Div Izquierda DATOS*/}
            <div>
                <h1>Estado</h1>
                <Card title="Costo real x m util historico" value={305}>
                    promedio sobre todas las planchas
                </Card>
                <Card title="Costo real x m util historico" value={305}>
                    promedio sobre todas las planchas
                </Card>
                <Card title="Costo real x m util historico" value={305}>
                    promedio sobre todas las planchas
                </Card>
                    
            </div>
            

            {/*Div Derecha GRAFICOS*/}
            <div>
                <h1>Grafico</h1>
                    
            </div>

        </div>
    )

}