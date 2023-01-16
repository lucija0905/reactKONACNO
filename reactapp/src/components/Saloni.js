import { useEffect, useState } from 'react'
import axios from 'axios'

function Saloni(props) {

    const [sviSaloni, setSviSaloni] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/salon').then(odgovor => {
            setSviSaloni(odgovor.data.data);
            alert(props.uspeh)
        }).catch(error => {
            alert(props.neuspeh + error);
        });
    }, []);

    return (
        <div>
            <table className="table table-bordered table-hover" id="tbl-sln">
                <thead >
                    <tr className="table-primary">
                        <th >Naziv</th>
                        <th>Vlasnik</th>
                        <th>Adresa</th>
                        <th>Grad</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody className="table-active">
                    {sviSaloni.map(salon => {
                        return (
                            <tr key={salon.ID}>
                                <td>{salon.Naziv}</td>
                                <td>{salon.Vlasnik}</td>
                                <td>{salon.Adresa}</td>
                                <td>{salon.Grad}</td>
                                <td>{salon.Website}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default Saloni