import swal from 'sweetalert';
import ContactForm from './ContactForm'

function Contact() {

    String.prototype.isEmpty = function () {
        return (this.length === 0 || !this.trim());
    };

    function showMessage(name, lastName, phoneNumber, message) {
        if (name.isEmpty() || lastName.isEmpty() || phoneNumber.isEmpty() || message.isEmpty()) {
            swal({
                title: "Sva polja moraju biti popunjena!",
                icon: "warning",
                button: "OK!",
            });
            return;
        }
        swal({
            title: "Name: " + name + "Lastname: " + "Phone number: " + phoneNumber + "Message: " + message,
            icon: "info",
            button: "OK!",
        });
    }

    return (
        <div className="contact-div">
            <ContactForm showMessage={showMessage} />
        </div>
    );
}

export default Contact