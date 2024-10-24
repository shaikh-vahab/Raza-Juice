import React, { useState } from 'react';
import '../../Css/MakeReservation.css';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

function MakeReservation() {
    const [order, setOrder] = useState(false);
    const [items, setItems] = useState([{ itemName: '' }]);

    const submits = (event) => {
        event.preventDefault(); // Prevent default form submission

        // Prepare the form data for EmailJS
        const formData = new FormData(event.target);
        
        // Collect the items in an array
        const itemNames = items.map(item => item.itemName).filter(item => item); // Filter out empty item names

        // Append items to formData as a JSON string
        formData.append('items', JSON.stringify(itemNames));

        // Send the form using EmailJS
        emailjs.sendForm('service_iwagd7b', 'template_cigpu4r', formData, 'wLjjZ-RUosAAG0_a7')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: "Order Successfully!",
                    text: "For any queries or discussion, you can call +91 9175237382!",
                    icon: "success"
                });
                event.target.reset();
                setItems([{ itemName: '' }]); // Reset items to initial state
                setOrder(true);
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    title: "Order Failed!",
                    text: "Please try again.",
                    icon: "error"
                });
                setOrder(false);
            });
    };

    const addItem = () => {
        setItems([...items, { itemName: '' }]);
    };

    const removeItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const handleItemChange = (index, event) => {
        const updatedItems = [...items];
        updatedItems[index][event.target.name] = event.target.value;
        setItems(updatedItems);
    };

    return (
        <section className="reservation" id="reservation">
            <div className="container">
                <div className="banner">
                    <img className="Img-glass" src="/glass.png" alt="" height={'600px'} />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE AN ORDER</h1>
                        <p>Big Order? Send us on WhatsApp <b>(+91) 9175237382</b></p>

                        <form onSubmit={submits}>
                            <div>
                                <input type="text" name="firstName" placeholder="First Name" required />
                                <input type="text" name="lastName" placeholder="Last Name" />
                            </div>
                            <div>
                                <input type="date" name="date" placeholder="Date" required />
                                <input type="time" name="time" placeholder="Time" required />
                            </div>
                            <div>
                                <input type="email" name="email" placeholder="Email" className="email_tag" required />
                                <input type="tel" name="phoneNumber" placeholder="+91 Phone Number" required />
                            </div>

                            {/* Dynamically render multiple item input fields */}
                            {items.map((item, index) => (
                                <div key={index} className="item-input" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                    <input
                                        type="text"
                                        name="itemName"
                                        placeholder={`Item Name ${index + 1}`}
                                        value={item.itemName}
                                        onChange={(e) => handleItemChange(index, e)}
                                        required
                                        style={{ flexGrow: 1, marginRight: '10px' }}
                                    />
                                    {items.length > 1 && (
                                        <button type="button" onClick={() => removeItem(index)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 13H5v-2h14v2z" fill="#ff0000" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            ))}

                            <div className='plus-button'>
                                <button className='plus-button' type="button" onClick={addItem}>
                                    Add Items
                                    <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2v20M2 12h20" stroke="#008000" strokeWidth="2" />
                                    </svg>
                                </button>
                            </div>

                            <button type="submit" className="submit">Get Order NOW <span></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MakeReservation;
