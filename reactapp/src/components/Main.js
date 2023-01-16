import Saloni from './Saloni'

function Main() {

    const uspesno = 'Podaci o salonima uspešno učitani iz baze!'
    const neuspesno = 'Došlo je do greške pri učitavanju salona iz baze podataka!'

    return (
        <div className="main-div">
            <Saloni uspeh={uspesno} neuspeh={neuspesno} />
        </div>
    );
}

export default Main